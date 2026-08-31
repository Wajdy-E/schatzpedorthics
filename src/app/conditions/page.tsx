import type { Metadata } from "next";
import Link from "next/link";
import { conditions } from "@/lib/conditions";
import { ConditionCard } from "@/components/Cards";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Conditions Treated",
  description:
    "From plantar fasciitis and flat feet to bunions, arthritis, and diabetic foot care — learn how pedorthic care can help.",
  alternates: { canonical: "/conditions" },
  openGraph: {
    title: "Conditions Treated | Schatz Pedorthics",
    description:
      "From plantar fasciitis and flat feet to bunions, arthritis, and diabetic foot care — learn how pedorthic care can help.",
    url: "/conditions",
  },
};

const conditionsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: conditions.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    url: absoluteUrl(`/conditions/${c.slug}`),
  })),
};

export default function ConditionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Conditions", path: "/conditions" },
          ]),
          conditionsItemList,
        ]}
      />
      <section className="border-b border-sand-deep bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Conditions treated
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Common conditions we help with
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Foot and lower-limb pain has many causes. Select a condition to learn
            about the symptoms and how pedorthic care can bring relief.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <ConditionCard key={condition.slug} condition={condition} />
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Don&apos;t see your condition?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/70">
            These are just the most common. Get in touch and Dr. Schatz can tell
            you whether pedorthic care is right for you.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-brand-400"
          >
            Ask a question
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
