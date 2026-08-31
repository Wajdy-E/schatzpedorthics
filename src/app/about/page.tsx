import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { CheckIcon, ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Dr. Peter Schatz",
  description:
    "Dr. Peter Schatz is a Doctor of Chiropractic and Certified Pedorthist providing custom orthotics and pedorthic care.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    title: "About Dr. Peter Schatz | Schatz Pedorthics",
    description:
      "Dr. Peter Schatz is a Doctor of Chiropractic and Certified Pedorthist providing custom orthotics and pedorthic care.",
    url: "/about",
  },
};

const credentials = [
  "Doctor of Chiropractic (D.C.)",
  "Certified Pedorthist (C. Ped. (C))",
  "Degrees in Biology, Human Biology & Physical and Health Education",
  "Contemporary acupuncture",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="border-b border-sand-deep bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              About
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {site.clinician}
            </h1>
            <p className="mt-3 text-lg font-medium text-brand-700">
              {site.credentials}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Schatz Pedorthics was founded on a simple idea: your feet are the
              foundation of how your whole body moves. With training as both a
              Doctor of Chiropractic and a Certified Pedorthist, Dr. Schatz
              brings a uniquely complete perspective to foot and lower-limb care.
            </p>
          </div>
          <div className="justify-self-center lg:justify-self-end">
            <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/schatz.webp"
                alt="Dr. Peter Schatz"
                fill
                sizes="256px"
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6">
                <div className="rounded-2xl bg-white/90 px-5 py-4 shadow backdrop-blur">
                  <p className="font-display font-semibold text-ink">
                    Dr. Peter Schatz
                  </p>
                  <p className="text-sm text-brand-700">D.C., C. Ped. (C)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="prose-lg space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            Most foot pain doesn&apos;t start — or end — at the foot. Years of
            clinical experience taught Dr. Schatz that the way you stand and walk
            ripples all the way up through your knees, hips, and lower back. His
            chiropractic background means he doesn&apos;t just look at the
            symptom; he looks at the chain of movement behind it.
          </p>
          <p>
            His clinical approach combines therapeutic modalities, soft-tissue
            release, stretching, core stabilization, nutritional supplementation,
            and clinical acupuncture. As a Certified Pedorthist, he translates
            that assessment into practical solutions: custom orthotics cast to
            your feet, appropriate footwear, compression therapy, and customized
            bracing when it&apos;s needed.
          </p>
          <p>
            Before earning his Doctor of Chiropractic degree from the National
            University of Health Sciences in Chicago, Dr. Schatz earned degrees
            in Biology, Human Biology, and Physical and Health Education at
            Queen&apos;s University. He works with professional and amateur athletes
            and uses Lactate Threshold Testing to build personalized fitness
            programs for people of all ages and abilities.
          </p>
          <p>
            His combined chiropractic and pedorthic backgrounds inform a unique
            approach to lower-extremity conditions, with particular interests in
            golf and basketball. Every device is built and fitted with the goal
            of getting you back to the activities you love — comfortably.
          </p>
          <p>
            Dr. Schatz is registered with the Acupuncture Council of Ontario,
            the Canadian and Ontario Chiropractic Associations, the Workplace
            Safety and Insurance Board, and the United States Chiropractic Board
            (Certified Parts I-IV).
          </p>
          <p>
            At Schatz Pedorthics, you work directly with Dr. Schatz from your
            first assessment through to fitting and follow-up. No rushed
            appointments, no one-size-fits-all — just careful, personal care.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-sand-deep bg-sand p-8">
          <h2 className="text-xl font-semibold text-ink">
            Credentials & focus
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-soft">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Let&apos;s get you moving comfortably
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/70">
            Reach out to book an assessment with Dr. Schatz.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-brand-400"
          >
            Contact Dr. Schatz
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
