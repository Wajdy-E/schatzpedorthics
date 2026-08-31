import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { conditions, getCondition } from "@/lib/conditions";
import { ConditionIcon, CheckIcon, ArrowIcon } from "@/components/Icons";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/Cards";
import { JsonLd } from "@/components/JsonLd";
import { conditionSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/conditions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) return { title: "Condition not found" };
  const path = `/conditions/${condition.slug}`;
  return {
    title: `${condition.name} — Symptoms & Treatment`,
    description: condition.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: `${condition.name} — Symptoms & Treatment | Schatz Pedorthics`,
      description: condition.summary,
      url: path,
    },
  };
}

export default async function ConditionPage({
  params,
}: PageProps<"/conditions/[slug]">) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();

  const related = conditions.filter((c) => c.slug !== condition.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          ...conditionSchema(condition),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Conditions", path: "/conditions" },
            { name: condition.name, path: `/conditions/${condition.slug}` },
          ]),
        ]}
      />
      <section className="border-b border-sand-deep bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            All conditions
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
              <ConditionIcon name={condition.icon} className="h-8 w-8" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                {condition.tagline}
              </p>
              <h1 className="mt-1 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {condition.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-14">
        <p className="text-xl leading-relaxed text-ink-soft">
          {condition.summary}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-3xl border border-sand-deep bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">Common symptoms</h2>
            <ul className="mt-5 space-y-3">
              {condition.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-700 p-8 text-white shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <CheckIcon className="h-6 w-6 text-brand-200" />
              How we can help
            </h2>
            <p className="mt-5 leading-relaxed text-brand-50">
              {condition.treatment}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-sand px-8 py-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Living with {condition.name.toLowerCase()}?
          </h2>
          <p className="max-w-lg text-ink-soft">
            Book an assessment with Dr. Schatz to find out how custom pedorthic
            care can help you move comfortably again.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Book an assessment
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </article>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Related services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          Other conditions
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {related.map((c) => (
            <Link
              key={c.slug}
              href={`/conditions/${c.slug}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-sand-deep bg-white p-5 transition-colors hover:border-brand-200"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <ConditionIcon name={c.icon} className="h-5 w-5" />
                </span>
                <span className="font-semibold text-ink">{c.name}</span>
              </span>
              <ArrowIcon className="h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
