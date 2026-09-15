import type { MetadataRoute } from "next";
import { PROJECTS_BY_DATE } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/articles`, changeFrequency: "monthly", priority: 0.8 },
    ...PROJECTS_BY_DATE.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
