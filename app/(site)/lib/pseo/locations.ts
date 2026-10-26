export interface Location {
  city: string;
  state: string;
  slug: string;
  county: string;
  zip: string;
  distanceFromReno: string;
}

const locations: Location[] = [
  // Washoe County — Core market
  { city: "Reno", state: "NV", slug: "reno-nv", county: "Washoe", zip: "89501", distanceFromReno: "0 miles" },
  { city: "Sparks", state: "NV", slug: "sparks-nv", county: "Washoe", zip: "89431", distanceFromReno: "5 miles" },
  { city: "Sun Valley", state: "NV", slug: "sun-valley-nv", county: "Washoe", zip: "89433", distanceFromReno: "8 miles" },
  { city: "Spanish Springs", state: "NV", slug: "spanish-springs-nv", county: "Washoe", zip: "89441", distanceFromReno: "12 miles" },
  { city: "Cold Springs", state: "NV", slug: "cold-springs-nv", county: "Washoe", zip: "89508", distanceFromReno: "18 miles" },
  { city: "Washoe Valley", state: "NV", slug: "washoe-valley-nv", county: "Washoe", zip: "89704", distanceFromReno: "15 miles" },
  { city: "Incline Village", state: "NV", slug: "incline-village-nv", county: "Washoe", zip: "89451", distanceFromReno: "30 miles" },
  // Douglas County
  { city: "Minden", state: "NV", slug: "minden-nv", county: "Douglas", zip: "89423", distanceFromReno: "45 miles" },
  { city: "Gardnerville", state: "NV", slug: "gardnerville-nv", county: "Douglas", zip: "89410", distanceFromReno: "47 miles" },
  { city: "Genoa", state: "NV", slug: "genoa-nv", county: "Douglas", zip: "89411", distanceFromReno: "40 miles" },
  { city: "Stateline", state: "NV", slug: "stateline-nv", county: "Douglas", zip: "89449", distanceFromReno: "55 miles" },
  // Carson City
  { city: "Carson City", state: "NV", slug: "carson-city-nv", county: "Carson City", zip: "89701", distanceFromReno: "32 miles" },
  // Lyon County
  { city: "Fernley", state: "NV", slug: "fernley-nv", county: "Lyon", zip: "89408", distanceFromReno: "35 miles" },
  { city: "Dayton", state: "NV", slug: "dayton-nv", county: "Lyon", zip: "89403", distanceFromReno: "25 miles" },
  { city: "Yerington", state: "NV", slug: "yerington-nv", county: "Lyon", zip: "89447", distanceFromReno: "62 miles" },
  { city: "Silver Springs", state: "NV", slug: "silver-springs-nv", county: "Lyon", zip: "89429", distanceFromReno: "42 miles" },
  // Churchill County
  { city: "Fallon", state: "NV", slug: "fallon-nv", county: "Churchill", zip: "89406", distanceFromReno: "60 miles" },
  // Storey County
  { city: "Virginia City", state: "NV", slug: "virginia-city-nv", county: "Storey", zip: "89440", distanceFromReno: "25 miles" },
  { city: "Mound House", state: "NV", slug: "mound-house-nv", county: "Lyon", zip: "89706", distanceFromReno: "28 miles" },
  // Northern Nevada extended
  { city: "Lovelock", state: "NV", slug: "lovelock-nv", county: "Pershing", zip: "89419", distanceFromReno: "95 miles" },
  { city: "Winnemucca", state: "NV", slug: "winnemucca-nv", county: "Humboldt", zip: "89445", distanceFromReno: "165 miles" },
  { city: "Battle Mountain", state: "NV", slug: "battle-mountain-nv", county: "Lander", zip: "89820", distanceFromReno: "215 miles" },
  { city: "Elko", state: "NV", slug: "elko-nv", county: "Elko", zip: "89801", distanceFromReno: "290 miles" },
  { city: "Hawthorne", state: "NV", slug: "hawthorne-nv", county: "Mineral", zip: "89415", distanceFromReno: "115 miles" },
  // California border communities
  { city: "Truckee", state: "CA", slug: "truckee-ca", county: "Nevada", zip: "96161", distanceFromReno: "35 miles" },
  { city: "South Lake Tahoe", state: "CA", slug: "south-lake-tahoe-ca", county: "El Dorado", zip: "96150", distanceFromReno: "55 miles" },
  { city: "Auburn", state: "CA", slug: "auburn-ca", county: "Placer", zip: "95602", distanceFromReno: "90 miles" },
  { city: "Grass Valley", state: "CA", slug: "grass-valley-ca", county: "Nevada", zip: "95945", distanceFromReno: "100 miles" },
  { city: "Nevada City", state: "CA", slug: "nevada-city-ca", county: "Nevada", zip: "95959", distanceFromReno: "105 miles" },
  { city: "Roseville", state: "CA", slug: "roseville-ca", county: "Placer", zip: "95661", distanceFromReno: "115 miles" },
  { city: "Folsom", state: "CA", slug: "folsom-ca", county: "Sacramento", zip: "95630", distanceFromReno: "120 miles" },
  { city: "Placerville", state: "CA", slug: "placerville-ca", county: "El Dorado", zip: "95667", distanceFromReno: "95 miles" },
  { city: "Susanville", state: "CA", slug: "susanville-ca", county: "Lassen", zip: "96130", distanceFromReno: "90 miles" },
  { city: "Quincy", state: "CA", slug: "quincy-ca", county: "Plumas", zip: "95971", distanceFromReno: "85 miles" },
  { city: "Portola", state: "CA", slug: "portola-ca", county: "Plumas", zip: "96122", distanceFromReno: "70 miles" },
];

export default locations;
