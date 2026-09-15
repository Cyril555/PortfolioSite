export interface Role {
  org: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
}

export const EXPERIENCE: Role[] = [
  {
    org: "Synthax AI",
    role: "Clinical AI Fellow",
    period: "Aug 2026 → present",
    current: true,
    points: [
      "Designed and shipped a live voice-driven client onboarding platform, built end to end with Claude Code.",
      "Proposed the trust-and-safety architecture for the company's agentic system.",
      "Report to the CEO in a four-person team, part-time alongside LSE.",
    ],
  },
  {
    org: "London Strategic Consulting",
    role: "Project Lead",
    period: "Mar → May 2026",
    points: [
      "Led a go-to-market engagement for a US AI startup entering new sectors.",
      "Delivered a 40-page interim report and a sector-comparison matrix scoring attractiveness for AI entry.",
    ],
  },
  {
    org: "Castore Consulting",
    role: "Project Manager",
    period: "Oct → Dec 2025",
    points: [
      "Led a team of nine on an eight-week engagement for a fast-growing B-Corp personal-care brand.",
      "Mapped the supply chain end to end and recommended a modular systems architecture over full ERP.",
    ],
  },
  {
    org: "Bitelabs",
    role: "Healthtech & Innovation Fellow",
    period: "Sep → Nov 2024",
    points: [
      "Selected for a competitive eight-week fellowship to design and pitch solutions to current healthcare needs.",
      "Produced two Figma prototypes, including Cognify ADHD, and two pitch decks presented to venture capitalists.",
    ],
  },
  {
    org: "Scunthorpe General Hospital, NLaG NHS Foundation Trust",
    role: "Resident Doctor, FY2",
    period: "Aug 2024 → Aug 2025",
    points: [
      "Audited 51 consecutive hernia repairs against the 80% day-case standard; presented at the NLaG Surgical Audit Meeting.",
      "Led a vitamin D testing quality-improvement audit that raised testing from 28.6% to 59.3% (p = 0.022).",
      "Teaching Coordinator: organised 15 seminars for c. 150 FY2 doctors across Yorkshire.",
    ],
  },
  {
    org: "Hull Royal Infirmary, Hull University Teaching Hospitals",
    role: "Resident Doctor, FY1",
    period: "Aug 2023 → Aug 2024",
    points: [
      "First author on a two-cycle audit of 90 perioperative diabetic patients with CGM introduced between cycles; poster at the Vascular Society AGM 2024.",
      "Delivered ward-based teaching for final-year medical students.",
    ],
  },
];

export const EDUCATION = [
  {
    period: "2025 → 2027",
    school: "London School of Economics",
    degree: "Global Master's in Management (GMiM)",
    detail: "Predicted Distinction · Student Ambassador",
  },
  {
    period: "2018 → 2023",
    school: "University of Sheffield",
    degree: "MBChB, Medicine and Surgery",
    detail: "IB Merit Scholarship · Second author, radiology meta-analysis",
  },
  {
    period: "2016 → 2018",
    school: "Dulwich College Suzhou",
    degree: "International Baccalaureate, 43/45",
    detail: "Head Prefect",
  },
];

export const SKILLS = {
  Technical: ["TypeScript", "Python", "Claude API and Claude Code", "ElevenLabs Conversational AI", "Figma", "SQL (basics)"],
  Languages: ["English (native)", "Mandarin", "Tamil", "Spanish (intermediate)"],
  Finance: ["Financial modelling", "Accounting (CFI)", "AmplifyME Sales and Trading"],
};
