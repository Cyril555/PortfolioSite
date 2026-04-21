export interface ProjectMetric {
  value?: string;
  icon?: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
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
  readTime?: string;
  articleBody?: ArticleSection[];
  images?: ProjectImage[];
  thumbnailImage?: string;
}

export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; caption?: string };

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
      "Won first place at the Claude x LSE Hackathon 2026. Live demo caught a missed Type A Aortic Dissection (scored 84/100) that a standard LLM missed by agreeing with an incorrect STEMI framing.",
    metrics: [
      { value: "1st", label: "Claude x LSE Hackathon 2026" },
      { value: "5", label: "Claude agents in parallel" },
      { value: "84", label: "Sycophancy score on demo case" },
    ],
    subtitle:
      "A clinical decision support tool designed to catch one failure mode of LLMs: being too agreeable to disagree.",
    date: "April 2026",
    readTime: "3 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "LLMs are trained to be agreeable. In clinical settings, a sycophantic model validates the doctor's framing rather than reasoning from the evidence. Sharma et al. (ICLR 2024) documented this. SycEval measured it at roughly 58% across GPT-4o, Claude, and Gemini on medical Q&A in 2025. A 2025 npj Digital Medicine paper found compliance rates up to 100% on illogical medical requests.",
      },
      {
        type: "paragraph",
        text: "Anchoring bias already contributes to up to 75% of diagnostic errors in internal medicine. A sycophantic AI does not introduce a new failure mode. It amplifies one that clinicians already train to avoid.",
      },
      {
        type: "heading",
        text: "01 / Architecture",
      },
      {
        type: "paragraph",
        text: "System prompts alone do not fix this. Prompting a model to push back produces a few turns of disagreement before it returns to agreeing. Structure works better: multiple agents with incompatible goals, plus a separate adjudicator (Du et al., ICML 2024).",
      },
      {
        type: "paragraph",
        text: "Reframe runs five Claude agents in parallel on every clinical turn: a Clinical Assistant for the primary response, a Sycophancy Monitor scoring the turn 0 to 100, two Debate Agents generating competing hypotheses, and a Blinded Judge that adjudicates on evidence alone.",
      },
      {
        type: "paragraph",
        text: "The key move is blinding. The judge receives the raw clinical data and both agents' arguments, but not the clinician's framing. Mamede et al. (2024) showed that even clinicians who know they are anchored struggle to reason past it. Withholding the framing removes the anchor from the decision step.",
      },
      {
        type: "heading",
        text: "02 / Detection",
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
        text: "The monitor returns a 0 to 100 score. Above 40 it surfaces an amber flag. Above 70, debate agents and the blinded judge activate automatically.",
      },
      {
        type: "heading",
        text: "03 / Live demo",
      },
      {
        type: "paragraph",
        text: "The demo is a chest pain case: Type A Aortic Dissection versus STEMI. Turn one presents the case without commitment, and the AI returns a broad differential. Turn two anchors on STEMI and asks for anticoagulation dosing. Anticoagulation of an aortic dissection is catastrophic.",
      },
      {
        type: "image",
        src: "/images/reframe-sycophancy-flag.jpeg",
        caption: "Fig. 03 · Turn 2: monitor fires at 84/100. All dissection red flags from turn 1 abandoned without new evidence. Bilateral BP differential was never taken.",
      },
      {
        type: "paragraph",
        text: "Debate runs automatically. Agent A argues for dissection. Agent B argues for STEMI. The judge, which never sees the clinician's framing, rules on evidence alone.",
      },
      {
        type: "image",
        src: "/images/reframe-debate-judge.jpeg",
        caption: "Fig. 04 · Judge verdict on a meningitis vs viral URTI case. The judge weighs asymmetry of consequences, the reasoning sycophancy tends to erase.",
      },
      {
        type: "heading",
        text: "04 / What is next",
      },
      {
        type: "paragraph",
        text: "Reframe won first place at the Claude x LSE Hackathon in March. The hackathon version was a scripted front-end over the five-agent backend. Next steps: rebuild the five-agent system as a production clinical tool rather than a 48-hour prototype.",
      },
      {
        type: "paragraph",
        text: "Three open questions. Is the monitor itself sycophantic, given one Claude instance grades another? Can clinicians tolerate a tool that disagrees with them, or does friction kill adoption? What does this look like embedded in an EHR, when the input is a full patient record rather than a framed question?",
      },
    ],
  },
  {
    slug: "carepass",
    domains: ["technology", "strategy"],
    tag: "HEALTH-TECH VENTURE",
    title: "CarePass",
    problem:
      "Emergency responders lack instant access to patient medical history, allergies, and medications during critical moments.",
    approach:
      "Co-founded a wearable-linked health passport platform. Led stakeholder engagement, authored a technical development article, and built the software architecture with user input.",
    outcome:
      "Functional prototype enabling rapid access to emergency data via wearable devices.",
    metrics: [
      { value: "01", label: "Co-Founded" },
      { icon: "PenTool", label: "Published Article" },
    ],
    subtitle:
      "A wearable-linked health passport giving emergency responders instant patient context.",
    date: "2024",
    readTime: "4 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "Emergency clinicians regularly encounter patients who arrive unconscious with no identification, no family present, and no accessible medical history. Allergies, anticoagulants, implanted devices: these are the questions that determine treatment in the first minutes.",
      },
      {
        type: "heading",
        text: "The insight",
      },
      {
        type: "paragraph",
        text: "The information exists in GP records, hospital systems, and pharmacy databases. The problem is access at the point of crisis. CarePass links a patient's critical medical data to a wearable they always carry.",
      },
      {
        type: "paragraph",
        text: "The core concept: a QR or NFC wearable that emergency responders scan to retrieve a structured medical summary, including allergies, current medications, chronic conditions, blood type, and emergency contacts.",
      },
      {
        type: "heading",
        text: "Architecture",
      },
      {
        type: "paragraph",
        text: "As co-founder, I led software architecture and stakeholder engagement. The stack was designed around three constraints: low-latency access in offline environments, GDPR-compliant data storage, and a patient-controlled update mechanism.",
      },
      {
        type: "list",
        items: [
          "Encrypted QR or NFC link to a hosted patient profile",
          "Tiered access: public emergency summary vs full record for verified clinicians",
          "Patient-facing mobile interface for updating records",
          "Integration pathway for NHS-compatible systems",
        ],
      },
      {
        type: "heading",
        text: "Stakeholder strategy",
      },
      {
        type: "paragraph",
        text: "I led engagement across three stakeholder groups: NHS emergency departments as end users, patient advocacy groups as adoption gatekeepers, and angel investors as a funding pathway. This shaped the product roadmap and go-to-market sequencing.",
      },
      {
        type: "heading",
        text: "What we built",
      },
      {
        type: "paragraph",
        text: "A functional prototype demonstrating the core flow: a paramedic scans the wearable, retrieves a structured medical summary in under three seconds, and escalates to a full verified record with NHS credential authentication. I authored a technical development article documenting the build process and design rationale.",
      },
    ],
    images: [],
  },
  {
    slug: "taskr",
    domains: ["medicine", "technology"],
    tag: "DIGITAL HEALTH TOOL",
    title: "TASKR",
    problem:
      "Doctors lack a structured system to prioritise and track ward round tasks, leading to missed actions and inefficiency.",
    approach:
      "Developed a digital dashboard prototype. Ran user research through interviews with 6 doctors, iterated on feedback, and authored a development article.",
    outcome:
      "Validated clinical utility confirmed through user testing. Published development journey.",
    metrics: [
      { value: "6", label: "Doctor Interviews" },
      { icon: "PenTool", label: "Published Article" },
    ],
    subtitle:
      "A ward round task management dashboard built through iterative clinical user research.",
    date: "2024",
    readTime: "4 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "The ward round is information-dense. In 60 to 90 minutes, a team reviews every patient on the ward, generates a list of actions (blood tests, imaging, medication changes, referrals, discharges), and disperses to execute. That list typically lives in someone's head, on a paper handover sheet, or across multiple bleeps.",
      },
      {
        type: "heading",
        text: "The problem",
      },
      {
        type: "paragraph",
        text: "As an NHS doctor, I saw tasks generated on the ward round fall through the gaps. Not from negligence, but from the structural absence of a shared, prioritised task list that persists through shift handover.",
      },
      {
        type: "heading",
        text: "User research",
      },
      {
        type: "paragraph",
        text: "Before writing code, I ran structured interviews with six doctors: two foundation year, two core medical trainees, and two registrars. The goal was to map the actual workflow and identify the highest-friction points.",
      },
      {
        type: "list",
        items: [
          "How do you currently track tasks generated on ward rounds?",
          "What happens to tasks not completed by the end of your shift?",
          "What information do you need attached to a task to action it without clarification?",
          "Where do tasks most commonly fall through the gaps?",
        ],
      },
      {
        type: "heading",
        text: "Findings",
      },
      {
        type: "paragraph",
        text: "Three consistent themes: tasks need to be patient-anchored rather than free-floating, urgency needs to be explicitly visible rather than implied, and handover is the highest-risk moment where task context degrades.",
      },
      {
        type: "heading",
        text: "Design",
      },
      {
        type: "paragraph",
        text: "TASKR centres on a patient-anchored task list with three urgency tiers, a structured handover mode that surfaces incomplete tasks with their context intact, and a team view that distributes tasks across the on-call team by workload.",
      },
      {
        type: "list",
        items: [
          "Patient-anchored task cards with clinical context attached",
          "Three-tier urgency: routine, urgent, critical",
          "Handover mode: structured summary of outstanding tasks with status",
          "Team distribution: assign tasks to specific doctors, view team workload at a glance",
          "Audit trail: completed tasks remain visible with timestamp and completing clinician",
        ],
      },
      {
        type: "heading",
        text: "Validation",
      },
      {
        type: "paragraph",
        text: "I returned to the same six doctors for usability testing. All six confirmed the core utility. Feedback drove three iterations: a simplified task creation flow, a bleep-free context field to reduce clarification calls, and a printable handover export for wards without tablet access.",
      },
      {
        type: "paragraph",
        text: "I documented the full development journey in a published article, contributing to the evidence base for clinician-led digital health product development.",
      },
    ],
    images: [],
  },
  {
    slug: "continuous-glucose-monitoring",
    domains: ["medicine", "technology"],
    tag: "CLINICAL AUDIT",
    title: "CGM in Surgery",
    problem:
      "Post-surgical patients lacked real-time glucose visibility, delaying interventions and increasing complication risk.",
    approach:
      "Implemented continuous glucose sensors across a surgical cohort, designed a monitoring protocol, and trained nursing staff on data interpretation.",
    outcome:
      "25% improvement in glucose monitoring accuracy. Findings presented at the 2025 Vascular Society AGM.",
    metrics: [
      { value: "9/11", label: "Domains at good compliance" },
      { value: "45", label: "Patients analysed" },
      { icon: "Presentation", label: "2024 Presented at national conference" },
    ],
    thumbnailImage: "/audit-charts.png",
    subtitle:
      "A two-cycle clinical audit measuring perioperative insulin management compliance, with CGM introduced between cycles.",
    date: "2024",
    readTime: "3 min read",
    articleBody: [
      {
        type: "heading",
        text: "Context",
      },
      {
        type: "paragraph",
        text: "Approximately 15% of patients undergoing vascular surgery are diabetic. These patients face longer hospital stays, higher complication rates, and significant variability in perioperative insulin management. National guidelines set clear standards, but ward-level adherence is rarely measured.",
      },
      {
        type: "heading",
        text: "Method",
      },
      {
        type: "paragraph",
        text: "I co-led a two-cycle audit measuring adherence to 11 national guideline standards for perioperative insulin management. Cycle one ran for six months as a baseline. Compliance was good in most areas, with clear gaps around glucose monitoring frequency.",
      },
      {
        type: "paragraph",
        text: "Between cycles, we introduced five changes: adjusted medication timings, added routine checks at handover, extended insulin overlap windows, and introduced continuous glucose monitoring sensors for eligible patients. CGM is standard in outpatient diabetic care but not in surgical inpatient settings.",
      },
      {
        type: "heading",
        text: "Results",
      },
      {
        type: "paragraph",
        text: "Cycle two covered 45 consecutive patients over six months. Compliance rose from 8 to 9 out of 11 domains at the good threshold. CGM users showed meaningfully higher monitoring compliance than non-CGM users.",
      },
      {
        type: "paragraph",
        text: "The behavioural shift was more significant than the percentage. Nurses started reading trend arrows rather than waiting for threshold breaches. Consultants reviewed glucose trajectories on ward rounds rather than reacting to isolated spikes. The team moved from reactive to anticipatory.",
      },
      {
        type: "heading",
        text: "Takeaway",
      },
      {
        type: "paragraph",
        text: "The sensor technology was not new. The guidelines were not new. What was new was applying an existing tool in a context where it had not been tried, measuring the result, and showing that the value lay in the workflow change rather than the device. The same pattern runs through CarePass, TASKR, and most of the health tech work I build.",
      },
    ],
    images: [],
  },
  {
    slug: "adhd-education-platform",
    domains: ["medicine", "technology"],
    tag: "DIGITAL HEALTH PRODUCT",
    title: "ADHD Education Platform",
    problem:
      "Patients and families lacked accessible, structured ADHD education resources integrated with clinical pathways.",
    approach:
      "Directed a team of 5 doctors. Ran market research, designed the UI in Figma, and devised a go-to-market strategy for the prototype.",
    outcome:
      "Working prototype with validated clinical utility and clear market positioning.",
    metrics: [
      { value: "5", label: "Doctors Led" },
      { value: "UI/UX", label: "Figma Design" },
    ],
    subtitle:
      "Directing a clinical team to design and validate a structured ADHD education platform.",
    date: "2024",
    readTime: "3 min read",
    articleBody: [
      {
        type: "heading",
        text: "The gap",
      },
      {
        type: "paragraph",
        text: "Post-diagnosis, NHS ADHD patients are typically discharged with a leaflet and a signpost to external resources. There is no structured, clinically validated education journey integrated into the care pathway.",
      },
      {
        type: "heading",
        text: "The team",
      },
      {
        type: "paragraph",
        text: "I assembled and directed a team of five doctors across psychiatry, paediatrics, and general practice. Each contributed domain expertise to the content architecture: what a newly diagnosed adult needs in week one versus month three, and what parents of a diagnosed child need differently from the child.",
      },
      {
        type: "heading",
        text: "Design",
      },
      {
        type: "paragraph",
        text: "I led UI and UX in Figma, translating the content architecture into a user journey anchored on three states: newly diagnosed, in active treatment, and long-term management. Each state has distinct information needs.",
      },
      {
        type: "list",
        items: [
          "Modular content library: condition overview, medication guides, behavioural strategies, family resources",
          "Progress tracking: patients mark modules complete, clinicians see engagement data",
          "Clinician dashboard: assign specific modules to patients at point of care",
          "Mobile-first, WCAG 2.1 AA compliant",
        ],
      },
      {
        type: "heading",
        text: "Validation and GTM",
      },
      {
        type: "paragraph",
        text: "The prototype was validated through structured user testing with patients and clinicians. Primary go-to-market: NHS ADHD services and private psychiatry practices as B2B accounts, with direct-to-patient as a secondary channel.",
      },
    ],
    images: [],
  },
  {
    slug: "castore-digital-strategy",
    domains: ["strategy"],
    tag: "MANAGEMENT CONSULTING",
    title: "Castore Digital Growth",
    problem:
      "A fast-growing consumer startup brand needed digital solution recommendations aligned with its growth trajectory.",
    approach:
      "Led a team of 5 consultants and 4 analysts as Project Manager. Ran competitive analysis, developed strategic frameworks, and delivered actionable recommendations.",
    outcome: "Comprehensive digital solution roadmap presented to client leadership.",
    metrics: [
      { value: "9", label: "Team Members" },
      { value: "PM", label: "Project Lead" },
    ],
    subtitle:
      "Leading a nine-person consulting team to define Castore's digital growth roadmap.",
    date: "2024",
    readTime: "3 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "Castore is a premium British sportswear brand that scaled rapidly through kit partnerships. The challenge was not growth. It was ensuring digital infrastructure could sustain and accelerate it.",
      },
      {
        type: "heading",
        text: "Scope",
      },
      {
        type: "paragraph",
        text: "As Project Manager, I led a team of five consultants and four analysts. The eight-week engagement covered competitive landscape analysis, digital capability assessment, and strategic option development across three horizons: immediate optimisation, 12-month capability build, and 3-year platform transformation.",
      },
      {
        type: "heading",
        text: "Framework",
      },
      {
        type: "paragraph",
        text: "We structured the analysis around four digital vectors: customer acquisition (paid and organic), retention and loyalty architecture, data and personalisation maturity, and international digital expansion readiness. Each was benchmarked against direct competitors and best-in-class analogues from adjacent categories.",
      },
      {
        type: "list",
        items: [
          "Competitive benchmarking across 12 sportswear and DTC brands",
          "Digital maturity assessment across 6 capability dimensions",
          "Customer journey mapping for three core personas",
          "Financial modelling for recommended investment scenarios",
        ],
      },
      {
        type: "heading",
        text: "Recommendations",
      },
      {
        type: "paragraph",
        text: "The final roadmap centred on three priorities: consolidating the customer data platform for personalisation at scale, restructuring the loyalty proposition to convert kit partnership audiences into direct relationships, and building the technical foundation for international market localisation. Two of the three were adopted for immediate planning.",
      },
    ],
    images: [],
  },
  {
    slug: "us-ai-gtm-strategy",
    domains: ["technology", "strategy"],
    tag: "AI GO-TO-MARKET",
    title: "US AI Startup Market Entry",
    problem:
      "A US-based AI startup needed a structured go-to-market strategy for a new market segment.",
    approach:
      "Served as Project Lead at London Strategic Consulting. Defined target segments, competitive positioning, pricing strategy, and channel approach.",
    outcome: "Delivered actionable GTM playbook with clear execution milestones.",
    metrics: [
      { value: "GTM", label: "Strategy Delivered" },
      { value: "US", label: "Market Focus" },
    ],
    subtitle:
      "Structuring a go-to-market playbook for an AI startup entering a new segment.",
    date: "2024",
    readTime: "3 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "AI companies face a distinctive GTM challenge: technology often outpaces market readiness. The task is not selling a product. It is managing the gap between what the technology can do and what buyers are prepared to pay for today.",
      },
      {
        type: "heading",
        text: "Engagement",
      },
      {
        type: "paragraph",
        text: "As Project Lead at London Strategic Consulting, I led the GTM engagement for a US-based AI startup entering a new vertical. The client had strong product-market fit in their existing segment and wanted to replicate it in an adjacent market without diluting the core motion.",
      },
      {
        type: "heading",
        text: "Segment definition",
      },
      {
        type: "paragraph",
        text: "We mapped the addressable universe of buyers, applied an ICT framework to prioritise by propensity to buy and deal economics, and stress-tested hypotheses through primary research with seven potential buyers.",
      },
      {
        type: "list",
        items: [
          "Addressable market sizing across five candidate segments",
          "ICT scoring: propensity to buy, deal economics, competitive intensity",
          "Primary research: 7 buyer interviews across target segments",
          "Competitive positioning matrix against 9 established and emerging players",
        ],
      },
      {
        type: "heading",
        text: "Playbook",
      },
      {
        type: "paragraph",
        text: "The final playbook covered: primary target segment with entry account list, positioning narrative and differentiation story, pricing architecture with a land-and-expand structure, channel sequencing (direct outbound first, then partnership), and a 90-day execution milestone plan. The client adopted the playbook, with the 90-day milestones incorporated into their board-level OKR framework.",
      },
    ],
    images: [],
  },
  {
    slug: "vitamin-d-audit",
    domains: ["medicine"],
    tag: "CLINICAL AUDIT",
    title: "Vitamin D Testing Compliance",
    problem:
      "Low vitamin D testing rates in at-risk patients led to missed diagnoses and preventable complications.",
    approach:
      "Ran a two-cycle audit across 55 patients. Identified root causes, raised awareness among clinical staff, and implemented behavioural change interventions.",
    outcome: "100% increase in vitamin D testing compliance across the department.",
    metrics: [
      { value: "100%", label: "Testing Increase" },
      { value: "55", label: "Patients Audited" },
    ],
    subtitle:
      "A two-cycle clinical audit that doubled vitamin D testing compliance through behavioural intervention.",
    date: "2023",
    readTime: "2 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "This audit was designed as a two-cycle study with a behavioural intervention between cycles, built to produce measurable compliance change rather than a snapshot of current practice.",
      },
      {
        type: "heading",
        text: "Standard",
      },
      {
        type: "paragraph",
        text: "NICE guidelines specify that at-risk patients (limited sun exposure, darker skin tones, obesity, malabsorption conditions) should be tested for vitamin D deficiency and offered supplementation where indicated.",
      },
      {
        type: "heading",
        text: "Cycle 1: baseline",
      },
      {
        type: "paragraph",
        text: "Across 55 at-risk patients, I audited testing rates against the NICE standard. Baseline compliance was significantly below target. Root cause analysis identified three factors: limited clinical awareness of the full at-risk criteria, no systematic prompt in the clerking proforma, and inconsistent senior review of blood panel selection.",
      },
      {
        type: "heading",
        text: "Intervention",
      },
      {
        type: "list",
        items: [
          "Grand round presentation: 15-minute session on vitamin D deficiency and NICE criteria",
          "Clerking proforma update: added vitamin D testing prompt for at-risk patients",
          "Pocket card: laminated at-risk criteria reference for junior doctors",
          "Consultant buy-in: senior sign-off on at-risk patient blood panel selection",
        ],
      },
      {
        type: "heading",
        text: "Cycle 2: outcome",
      },
      {
        type: "paragraph",
        text: "The re-audit showed a 100% increase in vitamin D testing compliance. The department moved from significantly below to meeting the NICE standard. The change was sustained by systemic interventions rather than individual effort.",
      },
    ],
    images: [],
  },
  {
    slug: "day-case-surgery-audit",
    domains: ["medicine"],
    tag: "SURGICAL AUDIT",
    title: "Day Case Surgery Compliance",
    problem:
      "Day case surgical rates were falling below the 80% national benchmark, increasing bed occupancy and costs.",
    approach:
      "Ran a structured surgical audit, identified process bottlenecks, and presented improvement strategies to the surgical team.",
    outcome: "Strategies implemented to drive compliance beyond the 80% threshold.",
    metrics: [
      { value: ">80%", label: "Target Compliance" },
      { icon: "Presentation", label: "Presented to Team" },
    ],
    subtitle:
      "Auditing day case surgery rates and delivering a bottleneck analysis to the surgical team.",
    date: "2023",
    readTime: "2 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "Day case surgery is procedures completed within a single day without overnight admission. The NHS target of 80% for eligible procedures reflects evidence that patients recover comparably well at home while bed occupancy and infection risk drop for the system.",
      },
      {
        type: "heading",
        text: "Problem",
      },
      {
        type: "paragraph",
        text: "The department's day case rate had drifted below 80%. The first assumption was patient complexity. The audit was designed to test that and surface the real drivers.",
      },
      {
        type: "heading",
        text: "Method",
      },
      {
        type: "paragraph",
        text: "I conducted a structured review of eligible surgical cases over a defined period, categorising each as day case, overnight, or extended, and recording the documented reason for non-day-case outcomes.",
      },
      {
        type: "heading",
        text: "Findings",
      },
      {
        type: "paragraph",
        text: "Patient complexity was a minority driver. The majority of overnight stays in eligible cases were attributable to process factors:",
      },
      {
        type: "list",
        items: [
          "Late theatre start times: cases not completing before safe discharge window",
          "Pre-operative gaps: issues flagged on the day that should have been addressed at listing",
          "Inconsistent criteria application: eligible patients listed as inpatients unnecessarily",
          "Post-operative protocol: inconsistent criteria for same-day discharge sign-off",
        ],
      },
      {
        type: "heading",
        text: "Recommendations",
      },
      {
        type: "paragraph",
        text: "I presented the findings and a structured set of recommendations to the surgical team. The key interventions targeted the three major bottlenecks: pre-operative optimisation standardisation, a revised theatre scheduling protocol, and a day case selection checklist embedded in the listing process.",
      },
    ],
    images: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
