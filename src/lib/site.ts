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

  phone: "(000) 000-0000",
  email: "info@schatzpedorthics.ca",

  // TODO: fill in the real clinic address for local SEO (Google Business Profile
  // consistency). Leave locality/region at minimum for area targeting.
  address: {
    street: "",
    locality: "",
    region: "ON",
    postalCode: "",
    country: "CA",
  },
  // TODO: set real coordinates once the clinic address is confirmed.
  geo: { latitude: 0, longitude: 0 },

  areaServed: "Ontario, Canada",
  city: "Ontario, Canada",

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
