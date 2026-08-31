import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 ${className}`}
      aria-label="Schatz Pedorthics home"
    >
      <Image
        src="/logo.png"
        alt="Schatz Pedorthics: Custom Orthotics & Pedorthic Care"
        width={1254}
        height={515}
        sizes="(max-width: 640px) 144px, 176px"
        className="h-auto w-36 sm:w-44"
        priority
      />
    </Link>
  );
}
