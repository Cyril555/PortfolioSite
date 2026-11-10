export interface Publication {
  title: string;
  venue: string;
  date: string;
  role: string;
  kind: "Journal article" | "Conference paper";
  doi?: string;
}

/** From the master CV (Sep 2026). DOIs added only where verified publicly. */
export const PUBLICATIONS: Publication[] = [
  {
    title: "Parathyroid Carcinoma: A Report of Two Cases",
    venue: "Cureus",
    date: "Sep 2026",
    role: "First author",
    kind: "Journal article",
    doi: "10.7759/cureus.115709",
  },
  {
    title: "The Modified Triple Stapler Technique for Colorectal and Coloanal Anastomosis: A Retrospective Study of 132 Patients",
    venue: "Cureus",
    date: "May 2025",
    role: "Co-author",
    kind: "Journal article",
    doi: "10.7759/cureus.83496",
  },
  {
    title: "A Meta-Analysis and Meta-Regression of Embolisation Outcomes of Pulmonary Arteriovenous Malformations",
    venue: "CardioVascular and Interventional Radiology",
    date: "Nov 2024",
    role: "Second author",
    kind: "Journal article",
    doi: "10.1007/s00270-024-03907-6",
  },
  {
    title: "A Meta-analysis and Meta-regression of Embolization Outcomes and Factors Affecting Embolization Outcomes of PAVMs",
    venue: "Arab Journal of Interventional Radiology",
    date: "Apr 2024",
    role: "Second author",
    kind: "Conference paper",
    doi: "10.1055/s-0044-1785836",
  },
  {
    title: "Embolization Outcomes of Pulmonary Arteriovenous Malformations: A 10-Year Experience from a Tertiary Referral Center",
    venue: "Arab Journal of Interventional Radiology",
    date: "Apr 2024",
    role: "Co-author",
    kind: "Conference paper",
  },
];
