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
  // Article fields — populated as you add detail pages
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
    slug: "continuous-glucose-monitoring",
    domains: ["medicine", "technology"],
    tag: "CLINICAL AUDIT",
    title: "CGM in Surgery: A Lesson in Health Tech Adoption",
    problem:
      "Post-surgical patients lacked real-time glucose visibility, delaying interventions and increasing complication risk.",
    approach:
      "Implemented continuous glucose sensors across surgical cohort, designed monitoring protocol, and trained nursing staff on data interpretation.",
    outcome:
      "25% improvement in glucose monitoring accuracy. Findings presented at the 2025 Vascular Society AGM.",
    metrics: [
      { value: "9/11", label: "Domains at good compliance" },
      { value: "45", label: "Patients analysed" },
      { icon: "Presentation", label: "2024 Presented at national conference" },
    ],
    thumbnailImage: "/audit-charts.png",
    subtitle:
      "A two-cycle clinical audit measuring perioperative insulin management compliance, and how introducing continuous glucose monitoring reshaped clinical workflow.",
    date: "2024",
    readTime: "6 min read",
    articleBody: [
      {
        type: "heading",
        text: "Context",
      },
      {
        type: "paragraph",
        text: "Approximately 15% of patients undergoing vascular surgery are diabetic. These patients face longer hospital stays, a higher incidence of complications, and significant variability in how their insulin is managed during the perioperative period. National guidelines provide clear standards for intravenous insulin infusion management in surgical patients, but formal measurement of adherence to those standards at the ward level remained limited.",
      },
      {
        type: "paragraph",
        text: "I saw an opportunity to quantify that gap and, more importantly, to test whether introducing continuous glucose monitoring into the perioperative workflow could close it.",
      },
      {
        type: "heading",
        text: "What I Did",
      },
      {
        type: "paragraph",
        text: "I co-led a two-cycle clinical audit measuring adherence to 11 national guideline standards for perioperative insulin management. The first cycle ran for six months and gave us a baseline. We were doing well in most areas, but there were clear gaps, particularly around glucose monitoring frequency.",
      },
      {
        type: "paragraph",
        text: "Between cycles, we introduced five changes. Most were process fixes: adjusting medication timings, adding routine checks at key handover points, extending insulin overlap windows. But the one that interested me most was the introduction of continuous glucose monitoring sensors for eligible patients.",
      },
      {
        type: "paragraph",
        text: "CGM is well established in outpatient diabetic care. It is not standard in surgical inpatient settings. I wanted to see whether giving clinical staff access to real-time glucose trend data, rather than isolated finger-prick readings every few hours, would change anything.",
      },
      {
        type: "heading",
        text: "What Changed",
      },
      {
        type: "paragraph",
        text: "The second cycle, covering 45 consecutive patients over six months, showed improvement across nearly every domain. Compliance rose from 8 to 9 out of 11 domains at the good threshold.",
      },
      {
        type: "paragraph",
        text: "But the more interesting finding was behavioural. CGM users showed meaningfully higher monitoring compliance than non-CGM users. The technology did not just produce better data. It changed how the team interacted with the data. Nurses started reading trend arrows rather than waiting for threshold breaches. Consultants began reviewing glucose trajectories during ward rounds rather than reacting to isolated spikes.",
      },
      {
        type: "paragraph",
        text: "The shift was from reactive to anticipatory. That mattered more than the percentage improvement.",
      },
      {
        type: "heading",
        text: "Why This Stuck With Me",
      },
      {
        type: "paragraph",
        text: "This project sits at the start of a thread that runs through most of what I have built since. The sensor technology was not new. The guidelines were not new. What was new was applying an existing tool in a context where it had not been tried, measuring the result properly, and showing that the real value was not in the device itself but in the workflow change it enabled.",
      },
      {
        type: "paragraph",
        text: "That pattern, taking proven technology and finding the right clinical context for it, is what I keep coming back to. It is the same instinct behind CarePass, behind DischargeKit, and behind most of the health tech work I care about. The technology is rarely the hard part. Adoption is.",
      },
    ],
    images: [],
  },
  {
    slug: "carepass",
    domains: ["technology", "strategy"],
    tag: "HEALTH-TECH VENTURE",
    title: "CarePass — Emergency Health Passport",
    problem:
      "Emergency responders lack instant access to patient medical history, allergies, and medications during critical moments.",
    approach:
      "Co-founded a wearable-linked health passport platform. Led stakeholder engagement, authored technical development article, and built the software architecture with user input.",
    outcome:
      "Functional prototype enabling rapid access to emergency data via wearable devices.",
    metrics: [
      { value: "01", label: "Co-Founded" },
      { icon: "PenTool", label: "Published Article" },
    ],
    subtitle:
      "Co-founding a wearable-linked health passport to give emergency responders instant patient context.",
    date: "2024",
    readTime: "8 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "Every emergency clinician has experienced it: a patient arrives unconscious, with no identification, no family present, and no accessible medical history. Are they allergic to penicillin? Do they take warfarin? Do they have a pacemaker? These questions, unanswered, can cost minutes or lives.",
      },
      {
        type: "heading",
        text: "The Insight",
      },
      {
        type: "paragraph",
        text: "The problem isn't that this information doesn't exist — it's stored in GP records, hospital systems, and pharmacy databases. The problem is accessibility at the point of crisis. We asked: what if a patient's critical medical data was linked to something they always carry?",
      },
      {
        type: "paragraph",
        text: "CarePass emerged from this question. The core concept: a wearable device (initially a QR-encoded bracelet, later expanded to NFC-enabled options) that emergency responders can scan to instantly retrieve a structured medical summary — allergies, current medications, chronic conditions, blood type, and emergency contacts.",
      },
      {
        type: "heading",
        text: "Building the Architecture",
      },
      {
        type: "paragraph",
        text: "As co-founder, I led the software architecture design and stakeholder engagement strategy. The technical stack was designed around three constraints: zero-latency access in offline environments, GDPR-compliant data storage, and a patient-controlled update mechanism.",
      },
      {
        type: "list",
        items: [
          "Encrypted QR / NFC link to a hosted patient profile",
          "Tiered data access: public-facing emergency summary vs. full record for verified clinicians",
          "Patient-facing mobile interface for updating records",
          "Integration pathway design for NHS-compatible systems",
        ],
      },
      {
        type: "heading",
        text: "Stakeholder Strategy",
      },
      {
        type: "paragraph",
        text: "I led engagement across three stakeholder groups: NHS emergency departments (as end users), patient advocacy groups (as adoption gatekeepers), and potential angel investors (as funding pathway). This shaped both the product roadmap and the go-to-market sequencing.",
      },
      {
        type: "heading",
        text: "What We Built",
      },
      {
        type: "paragraph",
        text: "We delivered a functional prototype demonstrating the core user flow: a paramedic scans the wearable, retrieves a structured medical summary in under three seconds, and can escalate to a full verified record with NHS credential authentication. I authored a technical development article documenting the build process and design rationale.",
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
      "Directed a team of 5 doctors. Conducted market research, designed the UI in Figma, and devised a go-to-market strategy for the prototype.",
    outcome:
      "Working prototype with validated clinical utility and clear market positioning.",
    metrics: [
      { value: "5", label: "Doctors Led" },
      { value: "UI/UX", label: "Figma Design" },
    ],
    subtitle:
      "Directing a clinical team to design and validate a structured ADHD education platform.",
    date: "2024",
    readTime: "7 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "An ADHD diagnosis is a pivot point for a family — but in the current NHS pathway, the education that follows is inconsistent, fragmented, and often relies on patients self-navigating a maze of conflicting online resources. I wanted to change that.",
      },
      {
        type: "heading",
        text: "Identifying the Gap",
      },
      {
        type: "paragraph",
        text: "Through clinical observation and conversations with paediatric and adult ADHD services, I identified a consistent pattern: post-diagnosis, patients and families were discharged with a leaflet and a signpost to CHADD or similar external resources. There was no structured, clinically-validated education journey integrated into the care pathway.",
      },
      {
        type: "heading",
        text: "The Team",
      },
      {
        type: "paragraph",
        text: "I assembled and directed a team of five doctors across psychiatry, paediatrics, and general practice. Each contributed domain expertise to the content architecture: what does a newly-diagnosed adult need to know in week one versus month three? What do parents of a diagnosed child need that differs from what the child needs?",
      },
      {
        type: "heading",
        text: "Designing the Product",
      },
      {
        type: "paragraph",
        text: "I led the UI/UX design process in Figma, translating the clinical content architecture into a structured user journey. Design principles were anchored around three patient states: newly diagnosed, in active treatment, and long-term management. Each state has distinct information needs and interaction patterns.",
      },
      {
        type: "list",
        items: [
          "Modular content library: condition overview, medication guides, behavioural strategies, family resources",
          "Progress-tracking layer: patients mark modules as complete, clinicians see engagement data",
          "Clinician-facing dashboard: assign specific modules to patients at point-of-care",
          "Mobile-first design with accessibility compliance (WCAG 2.1 AA)",
        ],
      },
      {
        type: "heading",
        text: "Validation and Go-to-Market",
      },
      {
        type: "paragraph",
        text: "The prototype was validated through structured user testing with patients and clinicians, confirming clinical utility and identifying the primary go-to-market channel: NHS ADHD services and private psychiatry practices as B2B accounts, with direct-to-patient as a secondary channel.",
      },
    ],
    images: [],
  },
  {
    slug: "castore-digital-strategy",
    domains: ["strategy"],
    tag: "MANAGEMENT CONSULTING",
    title: "Castore — Digital Growth Strategy",
    problem:
      "A fast-growing consumer startup brand needed digital solution recommendations aligned with its growth trajectory.",
    approach:
      "Led a team of 5 consultants and 4 analysts as Project Manager. Conducted competitive analysis, developed strategic frameworks, and delivered actionable recommendations.",
    outcome: "Comprehensive digital solution roadmap presented to client leadership.",
    metrics: [
      { value: "9", label: "Team Members" },
      { value: "PM", label: "Project Lead" },
    ],
    subtitle:
      "Leading a nine-person consulting team to define Castore's digital growth roadmap.",
    date: "2024",
    readTime: "5 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "Castore is a premium British sportswear brand that has scaled rapidly through high-profile kit partnerships. The challenge they brought to us wasn't growth — they had that. The challenge was ensuring their digital infrastructure could sustain and accelerate it.",
      },
      {
        type: "heading",
        text: "Project Scope",
      },
      {
        type: "paragraph",
        text: "As Project Manager, I led a team of five consultants and four analysts. The engagement spanned eight weeks and covered competitive landscape analysis, digital capability assessment, and strategic option development across three horizons: immediate optimisation, 12-month capability build, and 3-year platform transformation.",
      },
      {
        type: "heading",
        text: "Analytical Framework",
      },
      {
        type: "paragraph",
        text: "We structured the analysis around four digital vectors: customer acquisition (paid and organic), retention and loyalty architecture, data and personalisation maturity, and international digital expansion readiness. Each vector was benchmarked against direct competitors and best-in-class analogues from adjacent categories.",
      },
      {
        type: "list",
        items: [
          "Competitive benchmarking across 12 sportswear and direct-to-consumer brands",
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
        text: "The final roadmap centred on three strategic priorities: consolidating the customer data platform to enable genuine personalisation at scale, restructuring the loyalty proposition to convert kit partnership audiences into direct relationships, and building the technical foundation for international market localisation.",
      },
      {
        type: "paragraph",
        text: "The presentation to client leadership was received with strong engagement, with two of the three strategic priorities adopted for immediate planning.",
      },
    ],
    images: [],
  },
  {
    slug: "us-ai-gtm-strategy",
    domains: ["technology", "strategy"],
    tag: "AI GO-TO-MARKET",
    title: "US AI Startup — Market Entry Strategy",
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
    readTime: "6 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "AI companies face a distinctive go-to-market challenge: the technology often outpaces the market's readiness to adopt it. The task isn't just selling a product — it's managing the gap between what the technology can do and what buyers are prepared to pay for today.",
      },
      {
        type: "heading",
        text: "The Engagement",
      },
      {
        type: "paragraph",
        text: "As Project Lead at London Strategic Consulting, I led the GTM strategy engagement for a US-based AI startup entering a new vertical. The client had strong product-market fit in their existing segment and wanted to replicate that success in an adjacent market without diluting the core go-to-market motion.",
      },
      {
        type: "heading",
        text: "Segment Definition",
      },
      {
        type: "paragraph",
        text: "The first phase was rigorous segment definition. We mapped the addressable universe of buyers, applied an ICT (Ideal Customer Type) framework to prioritise by propensity-to-buy and deal economics, and stress-tested segment hypotheses through primary research with seven potential buyers.",
      },
      {
        type: "list",
        items: [
          "Addressable market sizing across five candidate segments",
          "ICT scoring model: propensity to buy, deal economics, competitive intensity",
          "Primary research: 7 buyer interviews across target segments",
          "Competitive positioning matrix against 9 established and emerging players",
        ],
      },
      {
        type: "heading",
        text: "The Playbook",
      },
      {
        type: "paragraph",
        text: "The final GTM playbook covered: primary target segment with entry account list, positioning narrative and differentiation story, pricing architecture with recommended land-and-expand structure, channel sequencing (direct outbound first, then partnership), and a 90-day execution milestone plan.",
      },
      {
        type: "paragraph",
        text: "The client adopted the playbook as the operational guide for their new segment launch, with the 90-day milestones incorporated into their board-level OKR framework.",
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
      "Low vitamin D testing rates in at-risk patients, leading to missed diagnoses and preventable complications.",
    approach:
      "Executed a two-cycle audit across 55 patients. Identified root causes, raised awareness among clinical staff, and implemented behavioural change interventions.",
    outcome: "100% increase in vitamin D testing compliance across the department.",
    metrics: [
      { value: "100%", label: "Testing Increase" },
      { value: "55", label: "Patients Audited" },
    ],
    subtitle:
      "A two-cycle clinical audit that doubled vitamin D testing compliance through behavioural intervention.",
    date: "2023",
    readTime: "5 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "Clinical audits are often reduced to tick-box exercises — data collected, report filed, nothing changes. I designed this one to be different: a two-cycle audit with a behavioural intervention between cycles, built to produce measurable compliance improvement rather than just a snapshot of current practice.",
      },
      {
        type: "heading",
        text: "The Standard",
      },
      {
        type: "paragraph",
        text: "NICE guidelines are clear: at-risk patients — including those with limited sun exposure, darker skin tones, obesity, or malabsorption conditions — should be tested for vitamin D deficiency and offered supplementation where indicated. The question was whether our department was meeting this standard.",
      },
      {
        type: "heading",
        text: "Cycle One: Baseline",
      },
      {
        type: "paragraph",
        text: "Across 55 patients meeting the at-risk criteria, I audited testing rates against the NICE standard. Baseline compliance was significantly below target. Root cause analysis identified three contributing factors: limited clinical awareness of the full at-risk criteria, no systematic prompt within the clerking proforma, and inconsistent senior review of blood panel selection.",
      },
      {
        type: "heading",
        text: "The Intervention",
      },
      {
        type: "list",
        items: [
          "Grand round presentation: 15-minute session on vitamin D deficiency epidemiology and NICE criteria",
          "Clerking proforma update: added vitamin D testing prompt for at-risk patients",
          "Pocket card: laminated at-risk criteria reference for junior doctors",
          "Consultant buy-in: senior sign-off on at-risk patient blood panel selection",
        ],
      },
      {
        type: "heading",
        text: "Cycle Two: Outcome",
      },
      {
        type: "paragraph",
        text: "The re-audit demonstrated a 100% increase in vitamin D testing compliance — the department moved from significantly below to meeting the NICE standard. This wasn't an incremental improvement; it was a structural change in clinical behaviour, sustained by the systemic interventions rather than individual effort.",
      },
      {
        type: "quote",
        text: "The most powerful clinical quality improvement isn't changing what clinicians know — it's changing the environment in which they make decisions.",
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
      "Conducted a structured surgical audit, identified process bottlenecks, and presented improvement strategies to the surgical team.",
    outcome: "Strategies implemented to drive compliance beyond the 80% threshold.",
    metrics: [
      { value: ">80%", label: "Target Compliance" },
      { icon: "Presentation", label: "Presented to Team" },
    ],
    subtitle:
      "Auditing day case surgery rates and delivering a bottleneck analysis to the surgical team.",
    date: "2023",
    readTime: "4 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "Day case surgery — procedures completed within a single day without overnight admission — is both clinically effective and operationally efficient. The NHS target of 80% day case rate for eligible procedures reflects years of evidence that patients recover comparably well at home, while bed occupancy and infection risk are reduced for the system.",
      },
      {
        type: "heading",
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "Our department's day case rate had drifted below the 80% benchmark. The instinct was to attribute this to patient complexity — sicker patients who couldn't safely be discharged same-day. The audit was designed to test that hypothesis and surface the real drivers.",
      },
      {
        type: "heading",
        text: "The Audit",
      },
      {
        type: "paragraph",
        text: "I conducted a structured review of eligible surgical cases over a defined audit period, categorising each case as day case, overnight stay, or extended admission, and for non-day-case outcomes, recording the documented reason for overnight stay.",
      },
      {
        type: "heading",
        text: "What We Found",
      },
      {
        type: "paragraph",
        text: "Patient clinical complexity was a minority driver. The majority of overnight stays in eligible cases were attributable to process factors: late start times pushing recovery into evening hours, insufficient pre-operative optimisation flagged only on the day of surgery, and inconsistent application of the day case selection criteria at the point of listing.",
      },
      {
        type: "list",
        items: [
          "Late theatre start time: cases not completing before the safe discharge window",
          "Pre-operative gaps: issues identified on the day that should have been addressed at listing",
          "Inconsistent criteria application: eligible patients listed as inpatient cases unnecessarily",
          "Post-operative protocol: inconsistent criteria for same-day discharge sign-off",
        ],
      },
      {
        type: "heading",
        text: "Recommendations",
      },
      {
        type: "paragraph",
        text: "I presented the findings and a structured set of process improvement recommendations to the surgical team. The key interventions targeted the three major bottlenecks: pre-operative optimisation standardisation, a revised theatre scheduling protocol, and a clear day case selection checklist embedded in the listing process.",
      },
    ],
    images: [],
  },
  {
    slug: "taskr",
    domains: ["medicine", "technology"],
    tag: "DIGITAL HEALTH TOOL",
    title: "TASKR — Ward Round Dashboard",
    problem:
      "Doctors lacked a structured system to prioritise and track ward round tasks, leading to missed actions and inefficiency.",
    approach:
      "Developed a digital dashboard prototype. Conducted user research through interviews with 6 doctors, iterated on feedback, and authored a development article.",
    outcome:
      "Validated clinical utility confirmed through user testing. Published development journey.",
    metrics: [
      { value: "6", label: "Doctor Interviews" },
      { icon: "PenTool", label: "Published Article" },
    ],
    subtitle:
      "Building a ward round task management dashboard through iterative clinical user research.",
    date: "2024",
    readTime: "8 min read",
    articleBody: [
      {
        type: "paragraph",
        text: "The ward round is one of medicine's most information-dense rituals. In 60–90 minutes, a team reviews every patient on the ward, generates a list of actions — blood tests, imaging, medication changes, referrals, discharge planning — and then disperses to execute. The problem: that list lives in someone's head, or scrawled on a paper handover sheet, or split across three different doctors' bleeps.",
      },
      {
        type: "heading",
        text: "The Frustration That Started It",
      },
      {
        type: "paragraph",
        text: "As an NHS doctor, I experienced this daily. Tasks would be generated on the ward round and fall through the gaps — not from negligence, but from the structural absence of a shared, prioritised task list that persisted through shift handover. I wanted to build something to fix it.",
      },
      {
        type: "heading",
        text: "User Research First",
      },
      {
        type: "paragraph",
        text: "Before writing a line of code, I conducted structured interviews with six doctors — two foundation year doctors, two core medical trainees, and two registrars — to map the actual task management workflow and identify the highest-friction points.",
      },
      {
        type: "list",
        items: [
          "How do you currently track tasks generated on ward rounds?",
          "What happens to tasks that aren't completed by the end of your shift?",
          "What information do you need attached to a task to action it without clarification?",
          "Where do tasks most commonly fall through the gaps?",
        ],
      },
      {
        type: "heading",
        text: "What the Research Revealed",
      },
      {
        type: "paragraph",
        text: "Three consistent themes emerged: tasks need to be patient-anchored (not free-floating), urgency and time-sensitivity need to be explicitly visible rather than implied, and handover is the highest-risk moment — the point where task context most often degrades or disappears.",
      },
      {
        type: "heading",
        text: "Designing TASKR",
      },
      {
        type: "paragraph",
        text: "TASKR was designed around these insights. The dashboard centres on a patient-anchored task list with three urgency tiers, a structured handover mode that surfaces incomplete tasks with their context intact, and a team view that distributes tasks across the on-call team by workload.",
      },
      {
        type: "list",
        items: [
          "Patient-anchored task cards with clinical context attached",
          "Three-tier urgency system: routine, urgent, critical",
          "Handover mode: generates a structured summary of outstanding tasks with status",
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
        text: "After building the prototype, I returned to the same six doctors for usability testing. All six confirmed the core utility of the product. The primary feedback loop led to three iterations: simplifying the task creation flow, adding a 'bleep-free' context field to reduce clarification calls, and building the handover export as a printable format for wards without tablet access.",
      },
      {
        type: "quote",
        text: "TASKR doesn't replace clinical judgement — it just means nothing falls through the gaps because of a broken system.",
        attribution: "Registrar, user testing session",
      },
      {
        type: "paragraph",
        text: "I documented the full development journey — from initial frustration to validated prototype — in a published article, with the intent of contributing to the growing body of evidence for clinician-led digital health product development.",
      },
    ],
    images: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
