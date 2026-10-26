import locations, { type Location } from "./locations";
import services, { type PseoService } from "./services";

export interface Combination {
  urlSlug: string;
  location: Location;
  service: PseoService;
}

export function getAllCombinations(): Combination[] {
  return locations.flatMap((location) =>
    services.map((service) => ({
      urlSlug: `${service.slug}-${location.slug}`,
      location,
      service,
    })),
  );
}

export function getCombinationBySlug(slug: string): Combination | undefined {
  return getAllCombinations().find((c) => c.urlSlug === slug);
}

export function getAllSlugs(): string[] {
  return getAllCombinations().map((c) => c.urlSlug);
}
