export interface ProjectMetric {
  /** Headline figure. Omit for a text-only metric. */
  value?: string;
  label: string;
}

export interface Project {
  slug: string;
  domains: string[];
  tag: string;
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  metrics: ProjectMetric[];
  subtitle?: string;
  date?: string;
  /** ISO start date used to order the Articles page and the next-case-study links, newest first. */
  sortDate: string;
  articleBody?: ArticleSection[];
  demoUrl?: string;
}

export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; caption?: string };

/*
 * Facts follow the master CV (Sep 2026) plus the user's corrections:
 * - Castore Consulting is the student consultancy. The client must NOT be named.
 * - CGM audit: FY1, poster at the Vascular Society AGM 2024.
 * - Vitamin D audit: FY2 rotation.
 * - Reviver: four-person team, Cyril was the lead.
 * - Cognify ADHD: one of the two Bitelabs fellowship prototypes, Sep to Nov 2024.
 * - TASKR removed from the site.
 */
export const PROJECTS: Project[] = [
  {
    slug: "reframe-ai",
    domains: ["medicine", "technology"],
    tag: "CLINICAL AI",
    title: "Reframe.ai",
    problem:
      "LLMs are trained to be agreeable. In clinical settings a sycophantic model validates a doctor's framing rather than reasoning from the evidence, amplifying anchoring bias, which contributes to up to 75% of diagnostic errors.",
    approach:
      "Built a five-agent system with a blinded adjudicator. A sycophancy monitor scores each turn 0 to 100 across five behavioural signals. Above 70 it triggers a structured debate between two hypothesis agents, adjudicated by a judge that never sees the clinician's original framing.",
    outcome:
      "Won first place at the Anthropic × LSE Hackathon on 25 March 2026. On the demo case, a Type A aortic dissection framed as a STEMI, the monitor scored the turn 84/100 and triggered the blinded debate.",
    metrics: [
      { value: "1st", label: "Anthropic × LSE Hackathon 2026" },
      { value: "5", label: "Claude agents in parallel" },
      { value: "84", label: "Sycophancy score on demo case" },
    ],
    subtitle:
      "A clinical decision support tool designed to catch one failure mode of LLMs: being too agreeable to disagree.",
    date: "Mar 2026",
    sortDate: "2026-03-25",
    articleBody: [
      {
        type: "paragraph",
        text: "A sycophantic AI does not introduce a new failure mode. It amplifies one that clinicians already train to avoid.",
      },
      {
        type: "heading",
        text: "Architecture",
      },
      {
        type: "paragraph",
        text: "System prompts alone do not fix this. Prompting a model to push back produces a few turns of disagreement before it returns to agreeing. Structure works better: multiple agents with incompatible goals, plus a separate adjudicator.",
      },
      {
        type: "paragraph",
        text: "Reframe runs five Claude agents in parallel on every clinical turn: a Clinical Assistant for the primary response, a Sycophancy Monitor scoring the turn 0 to 100, two Debate Agents generating competing hypotheses, and a Blinded Judge that adjudicates on evidence alone.",
      },
      {
        type: "paragraph",
        text: "The key move is blinding. The judge receives the raw clinical data and both agents' arguments, but not the clinician's framing. Even clinicians who know they are anchored struggle to reason past it. Withholding the framing removes the anchor from the decision step.",
      },
      {
        type: "heading",
        text: "Detection",
      },
      {
        type: "paragraph",
        text: "The monitor watches five behavioural signals rather than detecting abstract agreement:",
      },
      {
        type: "list",
        items: [
          "Agreement without cited evidence",
          "Differential narrowing after user preference",
          "Position drift on pushback with no new evidence",
          "Affirmation language such as 'you are right to consider'",
          "Framing echo: returning the clinician's diagnostic language verbatim",
        ],
      },
      {
        type: "paragraph",
        text: "A score above 40 surfaces an amber flag before the debate threshold is reached.",
      },
      {
        type: "heading",
        text: "Demo case",
      },
      {
        type: "paragraph",
        text: "The demo is a chest pain case: Type A Aortic Dissection versus STEMI. Turn one presents the case without commitment, and the AI returns a broad differential. Turn two anchors on STEMI and asks for anticoagulation dosing. Anticoagulation of an aortic dissection is catastrophic.",
      },
      {
        type: "paragraph",
        text: "Debate runs automatically. Agent A argues for dissection. Agent B argues for STEMI. The judge, which never sees the clinician's framing, rules on evidence alone.",
      },
      {
        type: "heading",
        text: "What is next",
      },
      {
        type: "paragraph",
        text: "The hackathon version was a scripted front-end over the five-agent backend. Next step: rebuild the five-agent system as a production clinical tool rather than a 24-hour prototype.",
      },
      {
        type: "paragraph",
        text: "Three open questions. Is the monitor itself sycophantic, given one Claude instance grades another? Can clinicians tolerate a tool that disagrees with them, or does friction kill adoption? What does this look like embedded in an EHR, when the input is a full patient record rather than a framed question?",
      },
    ],
  },
  {
    slug: "reviver",
    domains: ["technology", "medicine"],
    tag: "HACKATHON",
    title: "Reviver",
    problem:
      "Emergency triage and dispatch decisions have to be made quickly, often with incomplete information about the patient.",
    approach:
      "Led a four-person team at the Harvard Innovation Labs Hackathon (5 to 6 April 2024) to design Reviver, an AI-powered emergency triage and dispatch concept.",
    outcome: "Placed in the global top six and won the UK national round.",
    metrics: [
      { value: "Top 6", label: "Global, Harvard Innovation Labs Hackathon" },
      { value: "UK", label: "National winner" },
      { value: "4", label: "Person team, as lead" },
    ],
    subtitle:
      "An AI-powered emergency triage and dispatch concept. Global top six and UK national winner at the Harvard Innovation Labs Hackathon.",
    date: "Apr 2024",
    sortDate: "2024-04-05",
  },
  {
    slug: "carepass",
    domains: ["technology", "medicine"],
    tag: "HEALTH-TECH PROTOTYPE",
    title: "CarePass",
    problem:
      "Emergency staff often lack rapid access to a patient's critical medical information, such as allergies, current medications and chronic conditions.",
    approach:
      "Built a prototype QR-code health passport in HTML, CSS and JavaScript using AI-assisted development. Scanning the code opens a structured summary of the patient's critical data.",
    outcome: "A working prototype demonstrating the core scan-to-summary flow. Prototype only; not deployed.",
    metrics: [
      { value: "QR", label: "Scan-to-summary health passport" },
      { label: "Prototype, not deployed" },
    ],
    subtitle:
      "A QR-code health passport prototype that gives emergency staff rapid access to critical patient data.",
    date: "2024",
    sortDate: "2024-01-01",
    articleBody: [
      {
        type: "paragraph",
        text: "Emergency clinicians regularly see patients who cannot tell them their history: unconscious, confused, or without family present. Allergies, anticoagulants and chronic conditions are the questions that shape treatment in the first minutes.",
      },
      { type: "heading", text: "The insight" },
      {
        type: "paragraph",
        text: "The information usually exists in GP records, hospital systems and pharmacy databases. The problem is access at the point of crisis.",
      },
    ],
  },
  {
    slug: "adhd-education-platform",
    domains: ["medicine", "technology"],
    tag: "HEALTHTECH FELLOWSHIP",
    title: "Cognify ADHD",
    problem:
      "Patients and families lacked accessible, structured ADHD education resources integrated with clinical pathways.",
    approach:
      "Designed during the Bitelabs Healthtech & Innovation Fellowship. Directed a team of 5 doctors, ran market research, designed the UI in Figma, and devised a go-to-market strategy.",
    outcome:
      "A Figma prototype and pitch deck presented to venture capitalists, covering market sizing, business strategy and commercialisation.",
    metrics: [
      { value: "5", label: "Doctors led" },
      { value: "VC", label: "Pitched to venture capitalists" },
    ],
    subtitle:
      "A structured ADHD education platform, designed and pitched to venture capitalists during the Bitelabs Healthtech & Innovation Fellowship.",
    date: "Sep–Nov 2024",
    sortDate: "2024-09-01",
    articleBody: [
      { type: "heading", text: "The gap" },
      {
        type: "paragraph",
        text: "Post-diagnosis, NHS ADHD patients are typically discharged with a leaflet and a signpost to external resources.",
      },
      { type: "heading", text: "The fellowship" },
      {
        type: "paragraph",
        text: "Cognify was one of two solutions I designed during the eight-week fellowship, a competitive programme built around a current healthcare need.",
      },
      { type: "heading", text: "The team" },
      {
        type: "paragraph",
        text: "The team spanned psychiatry, paediatrics and general practice. Each doctor contributed domain expertise to the content architecture: what a newly diagnosed adult needs in week one versus month three, and what parents of a diagnosed child need differently from the child.",
      },
      { type: "heading", text: "Design" },
      {
        type: "paragraph",
        text: "The user journey is anchored on three states: newly diagnosed, in active treatment, and long-term management. Each state has distinct information needs.",
      },
      {
        type: "list",
        items: [
          "Modular content library: condition overview, medication guides, behavioural strategies, family resources",
          "Progress tracking: patients mark modules complete, clinicians see engagement data",
          "Clinician dashboard: assign specific modules to patients at point of care",
          "Mobile-first design",
        ],
      },
      { type: "heading", text: "Go-to-market" },
      {
        type: "paragraph",
        text: "Primary go-to-market: NHS ADHD services and private psychiatry practices as B2B accounts, with direct-to-patient as a secondary channel.",
      },
    ],
  },
  {
    slug: "continuous-glucose-monitoring",
    domains: ["medicine", "technology"],
    tag: "CLINICAL AUDIT",
    title: "CGM in Emergency Vascular Surgery",
    problem:
      "Diabetic patients undergoing emergency vascular surgery need close perioperative glucose control, but adherence to national standards on the ward is rarely measured.",
    approach:
      "Led, as first author, a two-cycle audit of 90 consecutive perioperative diabetic patients (45 per cycle) against 11 Joint British Diabetes Societies standards, introducing continuous glucose monitoring between cycles.",
    outcome:
      "Standards met at over 80% compliance rose from 8 to 9 of 11. Hourly glucose monitoring, the weakest domain, improved to over 75% among CGM users, and hypoglycaemia was avoided in over 80% of patients. Poster presented at the Vascular Society AGM 2024.",
    metrics: [
      { value: "8→9", label: "Of 11 standards above 80% compliance" },
      { value: "90", label: "Consecutive patients, two cycles" },
      { value: ">80%", label: "Patients with hypoglycaemia avoided" },
    ],
    subtitle:
      "A first-author, two-cycle audit of perioperative diabetes care, with continuous glucose monitoring introduced between cycles.",
    date: "2024",
    sortDate: "2023-08-01",
    articleBody: [
      { type: "heading", text: "Context" },
      {
        type: "paragraph",
        text: "These patients face higher complication rates and wide variability in perioperative insulin management. I ran this audit as an FY1 doctor at Hull Royal Infirmary.",
      },
      { type: "heading", text: "Method" },
      {
        type: "paragraph",
        text: "Cycle one set the baseline: compliance was good in most areas, with a clear gap in hourly glucose monitoring.",
      },
      {
        type: "paragraph",
        text: "CGM is standard in outpatient diabetic care but rarely used for surgical inpatients.",
      },
      { type: "heading", text: "Takeaway" },
      {
        type: "paragraph",
        text: "The sensor technology was not new. The guidelines were not new. What was new was applying an existing tool in a setting where it had not been tried, measuring the result, and showing that the value lay in the workflow change rather than the device.",
      },
    ],
  },
  {
    slug: "vitamin-d-audit",
    domains: ["medicine"],
    tag: "QUALITY IMPROVEMENT",
    title: "Vitamin D Testing in At-Risk Inpatients",
    problem:
      "At-risk inpatients aged 65 and over on a diabetes and endocrinology ward were not routinely being tested for vitamin D deficiency.",
    approach:
      "Led a quality-improvement audit of 55 at-risk inpatients during my FY2 rotation. Delivered a teaching session, put up guideline posters and added reminders at ward meetings.",
    outcome:
      "Testing rates rose from 28.6% to 59.3% (χ² = 5.27, p = 0.022). Between 50% and 71% of those tested were deficient. Recommended electronic prescribing prompts and a re-audit.",
    metrics: [
      { value: "28.6→59.3%", label: "Testing rate after intervention" },
      { value: "p = 0.022", label: "χ² = 5.27" },
      { value: "55", label: "At-risk inpatients" },
    ],
    subtitle:
      "A quality-improvement audit that doubled vitamin D testing among at-risk inpatients aged 65 and over.",
    date: "2024–25",
    sortDate: "2024-08-01",
    articleBody: [
      { type: "heading", text: "Standard" },
      {
        type: "paragraph",
        text: "Older inpatients are at high risk of vitamin D deficiency, and guidelines recommend testing and supplementation where indicated.",
      },
      { type: "heading", text: "Why it mattered" },
      {
        type: "paragraph",
        text: "The deficiency rate among the patients tested confirmed the clinical value of testing. Low-cost prompts depend on people remembering, which is why the recommendations focus on making the change systemic.",
      },
    ],
  },
  {
    slug: "day-case-surgery-audit",
    domains: ["medicine"],
    tag: "SURGICAL AUDIT",
    title: "Day-Case Inguinal Hernia Repair",
    problem:
      "The British Association of Day Surgery sets an 80% day-case standard for inguinal hernia repair. The surgical team needed to know whether it was being met, and why some patients stayed overnight.",
    approach:
      "Collected and analysed data on 51 consecutive inguinal hernia repairs from December 2024 to March 2025, recording discharge outcome, the reason for each failed same-day discharge, and whether day-case planning was documented.",
    outcome:
      "80% achieved same-day discharge. Six of the ten failed discharges were driven by routine overnight observation rather than clinical need, and only 65% of cases had day-case planning documented by the surgeon (75% by the anaesthetist). Presented at the NLaG Surgical Audit Meeting, Grimsby.",
    metrics: [
      { value: "80%", label: "Same-day discharge" },
      { value: "6 of 10", label: "Failed discharges due to routine observation" },
      { value: "65%", label: "Surgeon-documented day-case planning" },
    ],
    subtitle:
      "Auditing 51 hernia repairs against the 80% day-case standard, and finding that most overnight stays were routine rather than clinical.",
    date: "Dec 2024–Mar 2025",
    sortDate: "2024-12-01",
    articleBody: [
      { type: "heading", text: "Standard" },
      {
        type: "paragraph",
        text: "Day-case surgery means the patient goes home the same day. The standard reflects evidence that patients recover as well at home, while bed pressure and infection risk fall.",
      },
      { type: "heading", text: "Why it matters" },
      {
        type: "paragraph",
        text: "The unit met the standard, but most of the remaining overnight stays were a matter of process rather than patient complexity.",
      },
    ],
  },
  {
    slug: "castore-digital-strategy",
    domains: ["strategy"],
    tag: "MANAGEMENT CONSULTING",
    title: "Systems Roadmap for a B-Corp Brand",
    problem:
      "A fast-growing B-Corp personal-care brand (£1.7m angel-funded, 24 staff, UK and US wholesale) was running on spreadsheet workflows and disconnected warehouse, inventory and finance systems that constrained international expansion.",
    approach:
      "As Project Manager at Castore Consulting, the LSE student consultancy, led a team of 9 through an 8-week engagement: stakeholder interviews, end-to-end supply-chain process mapping, and a structured technology scan comparing full-scale ERP with modular options.",
    outcome:
      "Recommended a modular architecture for near-term time-to-value, automated revenue reconciliation via A2X, and deferring full ERP until £75m+ revenue. Delivered as a phased technology roadmap and a case-study deck.",
    metrics: [
      { value: "9", label: "Team members led" },
      { value: "8 wks", label: "Engagement" },
      { value: "£75m+", label: "Revenue before full ERP" },
    ],
    subtitle:
      "Leading a nine-person student consulting team to a phased systems roadmap for a fast-growing personal-care brand.",
    date: "Oct–Dec 2025",
    sortDate: "2025-10-01",
  },
  {
    slug: "us-ai-gtm-strategy",
    domains: ["strategy", "technology"],
    tag: "AI GO-TO-MARKET",
    title: "Go-to-Market for a US AI Startup",
    problem:
      "A US-based AI startup wanted to enter new sectors and needed to know which to prioritise and how to approach them.",
    approach:
      "As Project Lead at London Strategic Consulting, the LSE student consultancy, led the engagement and built a sector-comparison matrix scoring each target sector on attractiveness for AI entry, alongside GTM strategy and lead data.",
    outcome:
      "Delivered a 40-page interim report, presented it to the client and incorporated their feedback. The engagement concluded at the interim stage.",
    metrics: [
      { value: "40", label: "Page interim report" },
      { label: "Sector-comparison matrix for AI entry" },
    ],
    subtitle: "Scoring target sectors for a US AI startup's expansion and turning the result into a go-to-market plan.",
    date: "Mar–May 2026",
    sortDate: "2026-03-01",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Every case study, newest first. */
export const PROJECTS_BY_DATE = [...PROJECTS].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

/** Reading time from the actual word count of the summary and article, at ~220 words a minute. */
export function readingTime(project: Project): string {
  const parts: string[] = [project.problem, project.approach, project.outcome];
  for (const section of project.articleBody ?? []) {
    if (section.type === "list") parts.push(...section.items);
    else if (section.type !== "image") parts.push(section.text);
  }
  const words = parts.join(" ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
