export const site = {
  name: "Schatz Pedorthics",
  legalName: "Schatz Pedorthics",
  clinician: "Dr. Peter Schatz",
  credentials: "Doctor of Chiropractic, Certified Pedorthist (C. Ped.)",
  tagline: "Custom orthotics and pedorthic care that keep you moving.",
  description:
    "Schatz Pedorthics provides custom foot orthotics, compression socks, bracing, and orthopedic footwear. Led by Dr. Peter Schatz, Doctor of Chiropractic and Certified Pedorthist.",

  // Canonical production URL (no trailing slash). Update when the domain is live.
  url: "https://schatzpedorthics.ca",

  phone: "905 329 9537",
  email: "schatzpedorthics@gmail.com",

  // Public Burlington clinic address. St. Catharines appointments are arranged
  // privately by phone or email.
  address: {
    street: "1005 Skyview Dr #102",
    locality: "Burlington",
    region: "ON",
    postalCode: "",
    country: "CA",
  },
  // Coordinates can be added once the public listing is finalized.
  geo: { latitude: 0, longitude: 0 },

  areaServed: "Burlington, St. Catharines, Niagara Region, and surrounding Ontario",
  city: "Burlington, ON · St. Catharines/Niagara by appointment",

  // TODO: confirm real opening hours.
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],

  priceRange: "$$",

  // TODO: add real profile URLs (Google Business, Facebook, Instagram, etc.)
  socials: [] as string[],
};
