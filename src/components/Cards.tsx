import Link from "next/link";
import Image from "next/image";
import { ServiceIcon, ConditionIcon, ArrowIcon } from "./Icons";
import type { Service } from "@/lib/services";
import type { Condition } from "@/lib/conditions";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand-deep bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-6">
        <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700 text-white shadow-md ring-4 ring-white transition-colors group-hover:bg-brand-800">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {service.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          Learn more
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand-deep bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
    >
      <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-50 transition-transform group-hover:scale-125" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
        <ConditionIcon name={condition.icon} className="h-6 w-6" />
      </span>
      <p className="relative mt-4 text-xs font-semibold uppercase tracking-wide text-brand-700">
        {condition.tagline}
      </p>
      <h3 className="relative mt-1 text-lg font-semibold text-ink">
        {condition.name}
      </h3>
      <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
