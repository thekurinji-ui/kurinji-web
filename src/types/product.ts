export type ProductStatus = "active" | "coming-soon";

export interface Product {
  /** Stable identifier, used as the React key and for future deep-linking. */
  slug: string;
  /** Display name, e.g. "Selalu Ajak". */
  name: string;
  /** One-line description of what the product does. */
  tagline: string;
  /** Fully qualified subdomain URL, e.g. https://selaluajak.kurinji.asia */
  url: string;
  status: ProductStatus;
  /** Path to the product's logo/icon, relative to /public. Optional until assets exist. */
  icon?: string;
  /** Instagram/TikTok/Threads handles, without the @. Optional — not every product has its own socials yet. */
  socials?: {
    instagram?: string;
    tiktok?: string;
    threads?: string;
  };
}
