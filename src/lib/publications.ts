export interface Publication {
  title: string;
  venue: string;
  date: string;
  role: string;
  kind: "Journal article" | "Conference paper";
}

/** From the master CV (Sep 2026). */
export const PUBLICATIONS: Publication[] = [
  {
    title: "Parathyroid Carcinoma: A Report of Two Cases",
    venue: "Cureus",
    date: "Sep 2026",
    role: "First author",
    kind: "Journal article",
  },
  {
    title: "The Modified Triple Stapler Technique for Colorectal and Coloanal Anastomosis: A Retrospective Study of 132 Patients",
    venue: "Cureus",
    date: "May 2025",
    role: "Co-author",
    kind: "Journal article",
  },
  {
    title: "A Meta-Analysis and Meta-Regression of Embolisation Outcomes of Pulmonary Arteriovenous Malformations",
    venue: "CardioVascular and Interventional Radiology",
    date: "Nov 2024",
    role: "Second author",
    kind: "Journal article",
  },
  {
    title: "A Meta-analysis and Meta-regression of Embolization Outcomes and Factors Affecting Embolization Outcomes of PAVMs",
    venue: "Arab Journal of Interventional Radiology",
    date: "Apr 2024",
    role: "Second author",
    kind: "Conference paper",
  },
  {
    title: "Embolization Outcomes of Pulmonary Arteriovenous Malformations: A 10-Year Experience from a Tertiary Referral Center",
    venue: "Arab Journal of Interventional Radiology",
    date: "Apr 2024",
    role: "Co-author",
    kind: "Conference paper",
  },
];
