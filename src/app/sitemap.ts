import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/ecosystem",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/blog",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/contact",
      priority: 0.6,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms-and-conditions",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
