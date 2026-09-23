import { cache } from "react";
import {
  fiveStarReviews,
  googleReviewsMeta,
  isFiveStarReview,
  type GoogleReview,
  type GoogleReviewsMeta,
} from "./reviews";

const REVIEWS_REVALIDATE_SECONDS = 60 * 60 * 24;
const PLACES_FIELD_MASK = "id,rating,userRatingCount,googleMapsUri,reviews";

export type GoogleReviewsPayload = {
  reviews: GoogleReview[];
  meta: GoogleReviewsMeta;
};

type PlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string };
};

type PlacesDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
  error?: { message?: string; status?: string };
};

type LegacyPlaceReview = {
  rating?: number;
  text?: string;
  author_name?: string;
  relative_time_description?: string;
};

type LegacyPlaceDetailsResponse = {
  status?: string;
  error_message?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: LegacyPlaceReview[];
  };
};

function reviewKey(review: GoogleReview): string {
  return `${review.name.trim().toLowerCase()}|${review.quote.trim().toLowerCase()}`;
}

function mergeFiveStarReviews(
  ...lists: GoogleReview[][]
): GoogleReview[] {
  const seen = new Set<string>();
  const merged: GoogleReview[] = [];

  for (const list of lists) {
    for (const review of list) {
      if (!isFiveStarReview(review)) continue;
      const key = reviewKey(review);
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(review);
    }
  }

  return merged;
}

function fallbackPayload(): GoogleReviewsPayload {
  return {
    reviews: fiveStarReviews,
    meta: { ...googleReviewsMeta, fiveStarCount: fiveStarReviews.length },
  };
}

function mapPlaceReview(review: PlacesReview): GoogleReview | null {
  const quote = (review.text?.text ?? review.originalText?.text ?? "").trim();
  const name = review.authorAttribution?.displayName?.trim() ?? "";
  const rating = review.rating ?? 0;

  // Exact 5 only. Drop 4, 4.5, empty text, and nameless authors here.
  if (rating !== 5 || !quote || !name) return null;

  return {
    quote,
    name,
    rating: 5,
    relativeTime: review.relativePublishTimeDescription,
  };
}

function mapLegacyReview(review: LegacyPlaceReview): GoogleReview | null {
  const quote = review.text?.trim() ?? "";
  const name = review.author_name?.trim() ?? "";
  const rating = review.rating ?? 0;

  if (rating !== 5 || !quote || !name) return null;

  return {
    quote,
    name,
    rating: 5,
    relativeTime: review.relative_time_description,
  };
}

function getApiKey(): string | undefined {
  return (
    process.env.GOOGLE_PLACES_API_KEY?.trim() ||
    process.env.GOOGLE_API_KEY?.trim()
  );
}

async function fetchPlacesNew(
  apiKey: string,
  placeId: string,
): Promise<GoogleReviewsPayload | null> {
  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": PLACES_FIELD_MASK,
      },
      next: {
        revalidate: REVIEWS_REVALIDATE_SECONDS,
        tags: ["google-reviews"],
      },
    },
  );

  const data = (await response.json()) as PlacesDetailsResponse;

  if (!response.ok || data.error) {
    console.error(
      "Google Places reviews request failed:",
      data.error?.message ?? response.statusText,
    );
    return null;
  }

  const liveReviews = (data.reviews ?? [])
    .map(mapPlaceReview)
    .filter((review): review is GoogleReview => review !== null)
    .filter(isFiveStarReview);

  const reviews = mergeFiveStarReviews(liveReviews, fiveStarReviews);
  if (reviews.length === 0) return null;

  return {
    reviews,
    meta: {
      rating: data.rating ?? googleReviewsMeta.rating,
      reviewCount: data.userRatingCount ?? googleReviewsMeta.reviewCount,
      fiveStarCount: reviews.length,
      placeId,
      reviewsUrl: data.googleMapsUri ?? googleReviewsMeta.reviewsUrl,
    },
  };
}

async function fetchPlacesLegacy(
  apiKey: string,
  placeId: string,
): Promise<GoogleReviewsPayload | null> {
  const params = new URLSearchParams({
    place_id: placeId,
    fields: "name,rating,user_ratings_total,reviews,url",
    reviews_sort: "most_relevant",
    key: apiKey,
  });

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
    {
      next: {
        revalidate: REVIEWS_REVALIDATE_SECONDS,
        tags: ["google-reviews"],
      },
    },
  );

  const data = (await response.json()) as LegacyPlaceDetailsResponse;

  if (!response.ok || data.status !== "OK" || !data.result) {
    console.error(
      "Google Places legacy reviews request failed:",
      data.error_message ?? data.status ?? response.statusText,
    );
    return null;
  }

  const liveReviews = (data.result.reviews ?? [])
    .map(mapLegacyReview)
    .filter((review): review is GoogleReview => review !== null)
    .filter(isFiveStarReview);

  const reviews = mergeFiveStarReviews(liveReviews, fiveStarReviews);
  if (reviews.length === 0) return null;

  return {
    reviews,
    meta: {
      rating: data.result.rating ?? googleReviewsMeta.rating,
      reviewCount: data.result.user_ratings_total ?? googleReviewsMeta.reviewCount,
      fiveStarCount: reviews.length,
      placeId,
      reviewsUrl: data.result.url ?? googleReviewsMeta.reviewsUrl,
    },
  };
}

/**
 * Places API (New), then 5-star reviews with text only.
 * Google returns at most 5 most-relevant reviews. Filter that set,
 * then keep every verified 5-star quote already on file for this clinic.
 */
export const getDisplayedGoogleReviews = cache(
  async (): Promise<GoogleReviewsPayload> => {
    const apiKey = getApiKey();
    const placeId =
      process.env.GOOGLE_PLACE_ID?.trim() || googleReviewsMeta.placeId;

    if (!apiKey || placeId.startsWith("REPLACE_")) return fallbackPayload();

    try {
      const live =
        (await fetchPlacesNew(apiKey, placeId)) ??
        (await fetchPlacesLegacy(apiKey, placeId));

      return live ?? fallbackPayload();
    } catch (error) {
      console.error("Google Places reviews fetch error:", error);
      return fallbackPayload();
    }
  },
);
