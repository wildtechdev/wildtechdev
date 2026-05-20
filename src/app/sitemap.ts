import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wildtechdev.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-14T15:45:17-04:00"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/will-mccants`,
      lastModified: new Date("2026-05-20T12:00:00-04:00"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date("2026-04-09T17:34:56-04:00"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-04-09T17:34:56-04:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-05-20T12:00:00-04:00"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-04-14T14:41:01-04:00"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy/we-the-people-your-rights`,
      lastModified: new Date("2026-05-17T22:35:50-04:00"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
