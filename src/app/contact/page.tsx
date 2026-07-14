import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Hubungi tim The Kurinji.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container py-24">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Contact</span>
      <h1 className="mt-4 font-heading text-4xl font-medium md:text-5xl">Hubungi Kami</h1>

      <div className="mt-10 grid gap-2 text-muted">
        <a href={`mailto:${siteConfig.email.hello}`} className="hover:text-bloom">
          {siteConfig.email.hello}
        </a>
        <a href={siteConfig.socials.instagram} className="hover:text-bloom">
          Instagram
        </a>
        <a href={siteConfig.socials.tiktok} className="hover:text-bloom">
          TikTok
        </a>
        <a href={siteConfig.socials.threads} className="hover:text-bloom">
          Threads
        </a>
      </div>

      {/* TODO: contact form — wire to an API route or form service once decided. */}
    </div>
  );
}
