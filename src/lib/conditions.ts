export type Condition = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  symptoms: string[];
  treatment: string;
  icon: string;
};

export const conditions: Condition[] = [
  {
    slug: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    tagline: "Heel & arch pain",
    summary:
      "Plantar fasciitis is inflammation of the thick band of tissue that runs along the bottom of the foot. It's one of the most common causes of heel pain — often sharpest with the first steps in the morning.",
    symptoms: [
      "Stabbing heel pain, worst with the first steps of the day",
      "Pain that eases with movement but returns after rest",
      "Tenderness along the arch or bottom of the heel",
    ],
    treatment:
      "Custom foot orthotics off-load the heel and support the arch, while footwear guidance, stretching, and supportive taping help calm the inflammation. Most patients see meaningful relief with a properly built orthotic and the right shoes.",
    icon: "heel",
  },
  {
    slug: "flat-feet",
    name: "Flat Feet & Fallen Arches",
    tagline: "Overpronation",
    summary:
      "Flat feet, or fallen arches, occur when the arch collapses and the foot rolls inward. Over time this can strain the feet, ankles, knees, hips, and lower back.",
    symptoms: [
      "Aching or fatigued feet after standing or walking",
      "Feet that roll inward or shoes that wear unevenly",
      "Knee, hip, or lower back discomfort",
    ],
    treatment:
      "Custom orthotics restore the arch and control excess motion, realigning the foot and the joints above it. Combined with supportive footwear, they reduce strain throughout the lower body.",
    icon: "arch",
  },
  {
    slug: "bunions",
    name: "Bunions",
    tagline: "Big toe joint",
    summary:
      "A bunion is a bony bump that forms at the base of the big toe as the joint shifts out of alignment. Pressure from footwear can make bunions painful and progressively worse.",
    symptoms: [
      "A visible bump at the base of the big toe",
      "Pain, redness, or swelling around the joint",
      "Difficulty finding comfortable shoes",
    ],
    treatment:
      "Orthotics and toe spacers reduce pressure on the joint and slow progression, while properly fitted, wider footwear relieves the friction that aggravates a bunion.",
    icon: "toe",
  },
  {
    slug: "diabetic-foot-care",
    name: "Diabetic Foot Care",
    tagline: "Protection & prevention",
    summary:
      "Diabetes can reduce sensation and circulation in the feet, making small problems harder to notice and slower to heal. Preventive foot care is essential to avoid ulcers and complications.",
    symptoms: [
      "Numbness, tingling, or loss of sensation",
      "Dry skin, calluses, or slow-healing sores",
      "Changes in foot shape or pressure points",
    ],
    treatment:
      "Accommodative orthotics and diabetic footwear off-load high-pressure areas to protect the skin, paired with regular assessment to catch issues early.",
    icon: "shield",
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    tagline: "Joint pain & stiffness",
    summary:
      "Arthritis in the feet and ankles causes pain, stiffness, and swelling that can make walking difficult. The right support cushions and stabilizes affected joints.",
    symptoms: [
      "Stiff, achy joints — worse in the morning or after rest",
      "Swelling and tenderness in the feet or ankles",
      "Pain that increases with walking or standing",
    ],
    treatment:
      "Cushioned custom orthotics and supportive footwear reduce load on arthritic joints, while bracing can add stability where it's needed most.",
    icon: "joint",
  },
  {
    slug: "achilles-tendonitis",
    name: "Achilles Tendonitis",
    tagline: "Back-of-heel pain",
    summary:
      "Achilles tendonitis is irritation of the tendon connecting the calf to the heel, common in active people and those who increase activity quickly.",
    symptoms: [
      "Pain and stiffness at the back of the heel",
      "Tenderness that's worse in the morning or after activity",
      "Swelling along the tendon",
    ],
    treatment:
      "Heel lifts and custom orthotics reduce tension on the tendon, and with footwear guidance and a gradual loading plan, the tendon can settle and heal.",
    icon: "achilles",
  },
  {
    slug: "metatarsalgia",
    name: "Metatarsalgia",
    tagline: "Ball-of-foot pain",
    summary:
      "Metatarsalgia is pain and inflammation in the ball of the foot, often described as walking on a pebble or a burning sensation under the toes.",
    symptoms: [
      "Aching or burning pain in the ball of the foot",
      "A feeling of walking on a pebble",
      "Pain that worsens when standing or walking",
    ],
    treatment:
      "Custom orthotics with metatarsal support redistribute pressure away from the painful area, and cushioned, properly fitted footwear provides lasting relief.",
    icon: "ball",
  },
  {
    slug: "knee-hip-back-pain",
    name: "Knee, Hip & Back Pain",
    tagline: "Whole-body alignment",
    summary:
      "The way your feet strike the ground affects every joint above them. Poor foot mechanics are a common — and often overlooked — source of knee, hip, and lower back pain.",
    symptoms: [
      "Recurring knee, hip, or lower back discomfort",
      "Pain that worsens with walking or standing",
      "Uneven shoe wear or a noticeable gait change",
    ],
    treatment:
      "As a Doctor of Chiropractic and Certified Pedorthist, Dr. Schatz assesses the full kinetic chain and uses custom orthotics to realign the foundation, easing strain on the joints above.",
    icon: "spine",
  },
];

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
