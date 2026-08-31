import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-sand-deep bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo className="rounded bg-white p-2" />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            {site.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-white/70 transition-colors hover:text-brand-300"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/conditions" className="text-white/70 hover:text-brand-300">
                Conditions treated
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/70 hover:text-brand-300">
                About Dr. Schatz
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/70 hover:text-brand-300">
                Contact & booking
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="text-white/70 hover:text-brand-300"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-white/70 hover:text-brand-300"
              >
                {site.email}
              </a>
            </li>
            <li className="text-white/70">{site.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.credentials}</p>
        </div>
      </div>
    </footer>
  );
}
