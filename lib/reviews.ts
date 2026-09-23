/**
 * Per-client Google review types + fallback.
 * Fallback quotes must be real 5-star Google reviews for THIS business.
 * Leave googleReviews empty if none are on file.
 */
export const googleReviewsMeta = {
  rating: 4.7, // Google's published overall rating
  reviewCount: 202, // Google's total review count, all stars
  fiveStarCount: 18,
  placeId: "ChIJHQK0SgkVmYARwy42TO_LG-k",
  reviewsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJHQK0SgkVmYARwy42TO_LG-k",
} as const;

export type GoogleReview = {
  quote: string;
  name: string;
  rating: number;
  relativeTime?: string;
};

export type GoogleReviewsMeta = {
  rating: number;
  reviewCount: number;
  fiveStarCount: number;
  placeId: string;
  reviewsUrl: string;
};

export const googleReviews: GoogleReview[] = [
  {
    quote:
      "Great staff very friendly they are very thorough went in for my shoulder but they fixed everything I had severe foot pain and lower back pain lived on Advil they worked on all of it played my first round of pain free golf ever and haven't taken any Advil for 2 months.",
    name: "Calvin C.",
    rating: 5,
  },
  {
    quote:
      "Was having shoulder and thumb pain and after an adjustment and some home excercises feeling much better. Planning on PRP therapy. The staff was courteous, friendly, knowledgeable and professional.",
    name: "Cindi S.",
    rating: 5,
  },
  {
    quote:
      "The attention Dr Lloyd gives each and every person that comes to see him is amazing. When your in pain it can be a little scary to trust someone not to make it worse. I am so glad I trusted Dr. Lloyd!!!! My pain is manageable now and getting better all the time.",
    name: "Cindy L.",
    rating: 5,
  },
  {
    quote:
      "Four months ago I came in after having neuropathy issues on my feet & ankles from previous Achilles Tendon Surgery. I have seen a huge improvement after receiving stem cell therapy. The staff here has been amazing to work with. Overall I am very impressed and happy with the results so far.",
    name: "Nancy Johns",
    rating: 5,
  },
  {
    quote:
      "Everyone is very Professional, Courteous and Personable. The procedure seems to be helping my feet feel somewhat normal again. I would not hesitate recommending RRM to anyone with Neuropathy issues..",
    name: "William Evans",
    rating: 5,
  },
  {
    quote:
      "Reno regenerative has been great, making me feel welcome at every visit. The staff are very kind and polite. I’m extremely happy with the results I’ve gotten with the shockwave treatment.",
    name: "John Thom",
    rating: 5,
  },
  {
    quote:
      "What a great staff! I am so glad I found RRM! I have neuropathy from my chemotherapy treatments. The treatments have helped decrease the inflammation in my feet so I am walking better and have more feeling in them as well. Thank you!",
    name: "Lg",
    rating: 5,
  },
  {
    quote:
      "I started coming here due to feeling constantly tired and sluggish and after a blood test, they found out I have low testosterone. They started me on treatment immediately and WOW! What a difference it makes. I’m so impressed by how much better I feel. I now tell every guy who tells me they feel tired to get checked for low T-levels. Thank you Kellie, Khara, and Karli so much for helping me. HIGHLY RECOMMEND!",
    name: "Daniel Rohrback",
    rating: 5,
  },
  {
    quote: "After my first visit l did not have the swelling on my right ankle as l usually had every evening🌺",
    name: "Sylvia Martin",
    rating: 5,
  },
  {
    quote:
      "I wasn’t holding big expectations when I had the initial interview for treatment. However that was the last resource I had after having lumbar and cervical pain for two years.\n\nAll I want to say is that the treatment was explained with pros and cons from the beginning and I decided to take the risk on spending money towards my well being.\n\nI do not regret the investment on me! the treatment has been the best I have taken! lumbar or cervical surgery is not on the future as all pain from herniated disks are not bothering anymore, I feel rejuvenated and energetic as I was on my 30’s, all I can say is WOW!\n\nI thank all the staff at Reno Regenerative Medicine for the support, the laughs and their support on my recovery!",
    name: "Maria Moreno",
    rating: 5,
  },
  {
    quote: "Excellent staff , treat you like a person and not a number",
    name: "Jim Quackenbush",
    rating: 5,
  },
  {
    quote:
      "I have suffered for years with pain in my hands. I have consulted with several doctors and the last recommendation is to have surgery on both my hands. Because of my decision not to have surgery I continued having pains and not have good use of both my hands until I attended a seminar offered by the Reno Regenerative Medicine. Although the treatment was not covered by my insurance i decided to take the chance and get treated. I would have to say it was the best decision I ever made. With six weeks of treatment, I can feel significant changes in both my hands. Most of the pain the burning, tingling, tightness and numbness have been greatly reduced. Together with the treatment comes a diet that I have followed strictly and I have also noticed that I feel healthier. My total experience is life changing and I feel great not having to bear the pains in my hands everyday. I’m so glad to have found this place to take care of my issues and avoid surgery. I would like to thank all the staff & nurses who are all exceptionally caring. I highly highly recommend Reno Regenerative Medicine.",
    name: "Gen Gayo",
    rating: 5,
  },
  {
    quote:
      "All of the staff was amazing always made me feel so welcome still does make me feel very welcome come to me during some tough times and overall the whole experience was life-changing I treat myself better I put better things in my body I’m just really glad that I went to these folks very grateful for my experience",
    name: "William Curtis",
    rating: 5,
  },
];

/** The only acceptance test for a card or a JSON-LD review. */
export function isFiveStarReview(review: GoogleReview): boolean {
  return review.rating === 5 && review.quote.trim().length > 0 && review.name.trim().length > 0;
}

export const fiveStarReviews = googleReviews.filter(isFiveStarReview);
