export type ProductStatus = "active" | "coming-soon";

export interface Product {
  /** Stable identifier, used as the React key, URL slug, and deep-linking. */
  slug: string;
  /** Display name, e.g. "Selalu Ajak". */
  name: string;
  /** One-line description shown on cards/grids. */
  tagline: string;
  /** Fully qualified subdomain URL, e.g. https://selaluajak.kurinji.asia */
  url: string;
  status: ProductStatus;
  /** Path to the product's logo/icon, relative to /public. Optional until assets exist. */
  icon?: string;
  /** Instagram/TikTok/Threads handles, without the @. Optional. */
  socials?: {
    instagram?: string;
    tiktok?: string;
    threads?: string;
  };
  /** Extended detail-page content. Optional — falls back to a generic template if missing. */
  detail?: {
    eyebrow: string;
    heroDescription: string;
    sectionTitle: string;
    sectionBody: string;
    features: string[];
  };
}
