export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  icon: "orthotics" | "compression" | "brace" | "shoe";
  image: string;
};

export const services: Service[] = [
  {
    slug: "custom-foot-orthotics",
    title: "Custom Foot Orthotics",
    short:
      "Prescription orthotics cast and built to your feet to relieve pain and correct biomechanics.",
    description:
      "Every pair of custom orthotics begins with a full biomechanical assessment and a 3D scan or plaster cast of your feet. Using that impression, your orthotics are hand-crafted to support your arches, redistribute pressure, and correct the way you move — reducing strain on your feet, knees, hips, and lower back.",
    points: [
      "Full biomechanical and gait assessment",
      "3D scanning or plaster casting for a precise fit",
      "Devices for dress shoes, athletic shoes, and work boots",
      "Adjustments and refits included",
    ],
    icon: "orthotics",
    image: "/custom-orthotics.png",
  },
  {
    slug: "compression-socks",
    title: "Compression Socks & Stockings",
    short:
      "Medical-grade compression to improve circulation, reduce swelling, and keep tired legs comfortable.",
    description:
      "Graduated compression socks help move blood back up the legs, easing swelling, fatigue, and the risk of clots. We measure and fit you for the correct compression level and size, with options ranging from everyday support to medical-grade therapy for travel, pregnancy, diabetes, and vein conditions.",
    points: [
      "Professional measuring and fitting",
      "Mild to medical-grade compression levels",
      "Styles for work, sport, travel, and everyday wear",
      "Guidance on care and replacement",
    ],
    icon: "compression",
    image: "/compression-socks.png",
  },
  {
    slug: "braces-supports",
    title: "Braces & Supports",
    short:
      "Ankle, knee, and foot bracing to stabilize joints, protect injuries, and support recovery.",
    description:
      "From ankle sprains to arthritic knees, the right brace can protect a healing joint and let you stay active with confidence. We assess your needs and fit off-the-shelf or custom bracing for the ankle, knee, and foot — for injury recovery, chronic instability, and ongoing support.",
    points: [
      "Ankle, knee, and foot bracing",
      "Injury recovery and chronic instability support",
      "Off-the-shelf and custom options",
      "Fitting and wear guidance included",
    ],
    icon: "brace",
    image: "/braces.png",
  },
  {
    slug: "footwear",
    title: "Orthopedic Footwear & Shoes",
    short:
      "Properly fitted footwear and orthopedic shoes that work with your feet — and your orthotics.",
    description:
      "Good footwear is half the treatment. We help you select supportive, orthotic-friendly footwear and orthopedic shoes that fit correctly and suit your lifestyle. If required, we can also arrange footwear modifications so your shoes work with your feet rather than against them.",
    points: [
      "Supportive, orthotic-friendly footwear selection",
      "Orthopedic and accommodative shoes",
      "Professional fitting and sizing",
      "Footwear modifications when required",
    ],
    icon: "shoe",
    image: "/footwear.png",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
