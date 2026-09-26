import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Schatz Pedorthics to book an assessment for custom orthotics, compression socks, bracing, or footwear.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Schatz Pedorthics",
    description:
      "Get in touch with Schatz Pedorthics to book an assessment for custom orthotics, compression socks, bracing, or footwear.",
    url: "/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Schatz Pedorthics",
  url: absoluteUrl("/contact"),
  mainEntity: { "@id": `${site.url}/#business` },
};

const details = [
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
    hint: "Calls are usually the quickest way to reach us.",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    hint: "We'll reply within one business day.",
  },
  {
    label: "Burlington clinic",
    value: `${site.address.street}, ${site.address.locality}, ${site.address.region}`,
    hint: "Appointments also available in St. Catharines and Niagara by arrangement.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageSchema,
        ]}
      />
      <section className="border-b border-sand-deep bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Book an assessment
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Send a message using the form below and Dr. Schatz will follow up
            personally — most often with a quick phone call to book your visit.
          </p>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Get in touch
            </h2>
            <p className="text-ink-soft">
              Have a question about orthotics, compression, bracing, or
              footwear? We&apos;re happy to help you figure out the right next
              step.
            </p>
            <div className="mt-6 space-y-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-sand-deep bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-lg font-semibold text-ink hover:text-brand-700"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold text-ink">
                      {d.value}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-ink-soft">{d.hint}</p>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
