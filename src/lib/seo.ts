import { site } from "./site";
import { services } from "./services";
import type { Condition } from "./conditions";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

const telHref = site.phone.replace(/[^\d+]/g, "");

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street || undefined,
  addressLocality: site.address.locality || undefined,
  addressRegion: site.address.region || undefined,
  postalCode: site.address.postalCode || undefined,
  addressCountry: site.address.country || undefined,
};

/**
 * Primary local-business entity for the clinic. Uses a stable @id so other
 * nodes (breadcrumbs, webpages) can reference it.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: telHref || undefined,
    email: site.email,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/icon.svg"),
    priceRange: site.priceRange,
    address: postalAddress,
    ...(site.geo.latitude && site.geo.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: site.geo.latitude,
            longitude: site.geo.longitude,
          },
        }
      : {}),
    areaServed: site.areaServed,
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    founder: { "@id": `${site.url}/#clinician` },
    ...(site.socials.length ? { sameAs: site.socials } : {}),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.short,
        url: absoluteUrl(`/services#${s.slug}`),
      },
    })),
  };
}

/** The clinician as a Person entity, with professional credentials. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#clinician`,
    name: site.clinician,
    url: absoluteUrl("/about"),
    jobTitle: "Certified Pedorthist",
    worksFor: { "@id": `${site.url}/#business` },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor of Chiropractic (D.C.)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Certified Pedorthist (C. Ped.)",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: "en-CA",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** MedicalWebPage + FAQ for a condition, boosting eligibility for rich results. */
export function conditionSchema(condition: Condition) {
  const url = absoluteUrl(`/conditions/${condition.slug}`);
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: condition.name,
      description: condition.summary,
      inLanguage: "en-CA",
      isPartOf: { "@id": `${site.url}/#website` },
      about: {
        "@type": "MedicalCondition",
        name: condition.name,
        signOrSymptom: condition.symptoms.map((s) => ({
          "@type": "MedicalSymptom",
          name: s,
        })),
        possibleTreatment: {
          "@type": "MedicalTherapy",
          name: "Custom pedorthic care",
          description: condition.treatment,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What are the symptoms of ${condition.name.toLowerCase()}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${condition.summary} Common symptoms include: ${condition.symptoms.join("; ")}.`,
          },
        },
        {
          "@type": "Question",
          name: `How can a pedorthist help with ${condition.name.toLowerCase()}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: condition.treatment,
          },
        },
      ],
    },
  ];
}
