import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { Collaboration } from "@/components/sections/collaboration";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Hubungi The Kurinji untuk partnership, kolaborasi, dan informasi mengenai PT Kurinji Virtual Nusantara.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="container py-24 md:py-32">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Contact
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-medium leading-tight md:text-6xl">
          Hubungi The Kurinji
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Terbuka untuk partnership, kolaborasi, dan berbagai kesempatan
          untuk membangun sesuatu yang bermakna bersama.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-mist p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Email
            </p>

            <a
              href={`mailto:${siteConfig.email.hello}`}
              className="mt-4 block text-lg text-ink hover:text-bloom"
            >
              {siteConfig.email.hello}
            </a>
          </div>

          <div className="rounded-3xl border border-mist p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Company
            </p>

            <p className="mt-4 text-lg text-ink">
              {siteConfig.legalName}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-muted">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bloom"
          >
            Instagram
          </a>

          <a
            href={siteConfig.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bloom"
          >
            TikTok
          </a>

          <a
            href={siteConfig.socials.threads}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bloom"
          >
            Threads
          </a>
        </div>
      </section>

      <Collaboration />
    </>
  );
}
