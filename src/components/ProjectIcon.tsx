import type { ReactNode } from "react";

/** Line icons, one per project slug. Rendered at any size via currentColor. */
const ICONS: Record<string, ReactNode> = {
  "reframe-ai": (
    <>
      <path d="M4 7l6 5-6 5" />
      <path d="M20 7l-6 5 6 5" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),
  reviver: <path d="M3 12h4l2-5 3 10 2-5h7" />,
  carepass: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <path d="M17 14v6M14 17h6" />
    </>
  ),
  "continuous-glucose-monitoring": (
    <>
      <path d="M3 16c3 0 4-8 7-8s4 6 7 6 3-3 4-3" />
      <circle cx="19" cy="6" r="2" />
    </>
  ),
  "adhd-education-platform": (
    <>
      <path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4z" />
      <path d="M20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z" />
      <path d="M8 9h1M8 12h1" />
    </>
  ),
  "castore-digital-strategy": (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="M8 15v-4M12 15V8M16 15v-7" />
    </>
  ),
  "us-ai-gtm-strategy": (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
    </>
  ),
  "vitamin-d-audit": (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
    </>
  ),
  "day-case-surgery-audit": (
    <>
      <circle cx="11" cy="12" r="7" />
      <path d="M11 8v4l3 2" />
      <path d="M18 13l3 3-3 3" />
    </>
  ),
};

interface Props {
  slug: string;
  size?: number;
  className?: string;
}

export default function ProjectIcon({ slug, size = 28, className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      {ICONS[slug] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
