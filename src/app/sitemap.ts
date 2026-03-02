import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://andrademarinho.com.br",
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://andrademarinho.com.br/portal-do-corretor",
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
