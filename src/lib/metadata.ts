import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataInput {
  title: string;
  description?: string;
  path?: string;
}

/**
 * Builds page-level metadata (title, description, OG, Twitter card, canonical)
 * from a small input so every page stays consistent without repeating
 * boilerplate. Override per-page by spreading the result and adjusting.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} · ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** Schema.org Organization structured data, rendered as JSON-LD in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email.hello,
    sameAs: [siteConfig.socials.instagram, siteConfig.socials.tiktok, siteConfig.socials.threads],
  };
}
