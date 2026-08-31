import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { conditions } from "@/lib/conditions";
import { site } from "@/lib/site";
import { ServiceCard, ConditionCard } from "@/components/Cards";
import { ArrowIcon, CheckIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-sand to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-800">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Doctor of Chiropractic · Certified Pedorthist
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Custom orthotics that keep you{" "}
              <span className="text-brand-700">moving without pain</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              At {site.name}, {site.clinician} combines chiropractic insight with
              certified pedorthic care — custom foot orthotics, compression
              socks, bracing, and footwear built around your feet and how you
              move.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
              >
                Book an assessment
                <ArrowIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 text-base font-semibold text-brand-800 transition-colors hover:bg-brand-50"
              >
                Explore services
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
              {[
                "Custom-built devices",
                "Full biomechanical assessment",
                "Personal follow-up",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual */}
          <div className="relative animate-fade-up">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl lg:ml-auto lg:mr-0">
              <Image
                src="/hero.png"
                alt="Pedorthist fitting a custom foot orthotic into a patient's shoe"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                  Care for every step you take
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  {site.credentials}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            What we offer
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Pedorthic care, tailored to you
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Four core services designed to relieve pain, improve mobility, and
            keep you comfortable on your feet.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Conditions — large highlightable boxes */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Conditions we treat
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Relief for the most common foot & lower-limb complaints
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                Click any condition to learn more about the symptoms and how
                pedorthic care can help.
              </p>
            </div>
            <Link
              href="/conditions"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
            >
              View all conditions
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((condition) => (
              <ConditionCard key={condition.slug} condition={condition} />
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-w-md overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="/schatz-talking-to-patient.png"
                alt="Dr. Peter Schatz discussing custom orthotics with a patient"
                fill
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/55 to-transparent p-6">
                <div className="rounded-2xl bg-white/90 p-5 shadow-md backdrop-blur">
                  <p className="font-display text-lg font-semibold text-ink">
                    {site.clinician}
                  </p>
                  <p className="mt-1 text-sm text-brand-700">
                    {site.credentials}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              About Schatz Pedorthics
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A different perspective on foot care
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              As both a Doctor of Chiropractic and a Certified Pedorthist,{" "}
              {site.clinician} sees the whole picture — how your feet connect to
              your knees, hips, and back. That dual training means your orthotics
              aren&apos;t just built for your feet; they&apos;re built to improve
              the way your whole body moves.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Meet Dr. Schatz
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/cta.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/65" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to take the first step?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Send a message and Dr. Schatz will follow up personally — usually
            with a quick phone call — to book your assessment.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-brand-400"
          >
            Get in touch
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
