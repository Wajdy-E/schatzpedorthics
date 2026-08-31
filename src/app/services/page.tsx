import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { ServiceIcon, CheckIcon, ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom foot orthotics, compression socks, bracing and supports, and orthopedic footwear from Schatz Pedorthics.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Schatz Pedorthics",
    description:
      "Custom foot orthotics, compression socks, bracing and supports, and orthopedic footwear from Schatz Pedorthics.",
    url: "/services",
  },
};

const servicesItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    description: s.short,
    url: absoluteUrl(`/services#${s.slug}`),
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          servicesItemList,
        ]}
      />
      <section className="border-b border-sand-deep bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Our services
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Pedorthic care from head to toe
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Everything we offer starts with a proper assessment and ends with a
            solution built around you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-16">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-sand-deep bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-2">
              <div
                className={`relative min-h-64 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                    0{i + 1}
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-ink-soft"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-ink-soft">
            Reach out and Dr. Schatz will help you figure out the right starting
            point.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Book an assessment
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
