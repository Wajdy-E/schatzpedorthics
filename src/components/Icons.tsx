import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/** Service icons */
export function ServiceIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  switch (name) {
    case "orthotics":
      return (
        <svg {...base} {...props}>
          <path d="M7 4c2.4 0 3.8 1.6 4 4 .2 2.3-1 3.7-1 6 0 2.6 1.2 3.4 1 5.4-.2 1.6-1.6 2.6-3.4 2.6C5.6 22 4 20.4 4 18c0-2 .8-2.8.6-5C4.3 10 3.2 8.6 3.4 6.2 3.6 4.8 5 4 7 4Z" />
          <path d="M14 20c4 0 6.5-2.2 6.5-5.5 0-2-1.2-3-1-5 .2-1.8-.8-3-2.2-3" />
        </svg>
      );
    case "compression":
      return (
        <svg {...base} {...props}>
          <path d="M9 3h6l-.6 7.5a5.5 5.5 0 0 1-1.7 3.6l-.7.7V21H9v-6.2l-.7-.7A5.5 5.5 0 0 1 6.6 10.5L6 3Z" />
          <path d="M7 7h10M7.4 11h9.2" />
        </svg>
      );
    case "brace":
      return (
        <svg {...base} {...props}>
          <path d="M12 3v18" />
          <path d="M7 6c0 3 2 5 5 5s5-2 5-5M7 18c0-3 2-5 5-5s5 2 5 5" />
          <path d="M5 6h4M15 6h4M5 18h4M15 18h4" />
        </svg>
      );
    case "shoe":
      return (
        <svg {...base} {...props}>
          <path d="M3 9c1.6 0 2.4 1 3.5 1 1.2 0 1.7-1.4 3-1.4 1.6 0 2 1.7 3.6 2.6 1.7 1 4.3 1.1 6.4 1.6 1.3.3 2 1.1 2 2.4V17H3V9Z" />
          <path d="M3 17h18M6.5 10.2 8 12.5M10 9.5l1.6 2.3" />
        </svg>
      );
    default:
      return (
        <svg {...base} {...props}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

/** Condition icons */
export function ConditionIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  switch (name) {
    case "heel":
      return (
        <svg {...base} {...props}>
          <path d="M6 4c3 0 5 2 5 5 0 2-1 3-1 5s1 3 1 5H4c0-2 .6-3 .4-5C4.2 11 3 10 3.2 7 3.4 5 4.4 4 6 4Z" />
          <path d="M13 18c1 1 2.6 1.6 4.2 1.4 1.8-.2 2.8-1.6 2.8-3.4" />
        </svg>
      );
    case "arch":
      return (
        <svg {...base} {...props}>
          <path d="M4 17c0-5 3.5-9 9-9 4 0 7 2.5 7 6" />
          <path d="M4 17h16" />
        </svg>
      );
    case "toe":
      return (
        <svg {...base} {...props}>
          <circle cx="9" cy="12" r="5" />
          <circle cx="17" cy="9.5" r="2.4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base} {...props}>
          <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "joint":
      return (
        <svg {...base} {...props}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M10 10c1.5 1.5 2.5 2.5 4 4" />
        </svg>
      );
    case "achilles":
      return (
        <svg {...base} {...props}>
          <path d="M12 3v9c0 3-2 5-5 5H5" />
          <path d="M12 12c0 3 2 5 5 5h2" />
          <circle cx="12" cy="4" r="1.3" />
        </svg>
      );
    case "ball":
      return (
        <svg {...base} {...props}>
          <circle cx="12" cy="14" r="5" />
          <path d="M9 6.5C9.8 5 10.8 4.5 12 4.5s2.2.5 3 2" />
        </svg>
      );
    case "spine":
      return (
        <svg {...base} {...props}>
          <path d="M12 3c-1.5 0-2.5 1-2.5 2.5S10.5 8 12 8s2.5 1 2.5 2.5S13.5 13 12 13s-2.5 1-2.5 2.5S10.5 18 12 18s2.5 1 2.5 2.5" />
          <path d="M8 5.5h3M13 10.5h3M8 15.5h3" />
        </svg>
      );
    default:
      return (
        <svg {...base} {...props}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4 4L19 7" />
    </svg>
  );
}
