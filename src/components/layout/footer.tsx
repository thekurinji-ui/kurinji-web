import Link from "next/link";
import { siteConfig } from "@/config/site";
import { products } from "@/config/products";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist bg-paper">
      <div className="container grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-heading text-lg font-semibold">
            {siteConfig.name}
          </p>

          <p className="mt-3 max-w-xs text-sm text-muted">
            {siteConfig.description}
          </p>

          <p className="mt-5 text-sm text-muted">
            {siteConfig.legalName}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Navigation
          </p>

          <ul className="mt-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink transition-colors hover:text-bloom"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Ecosystem
          </p>

          <ul className="mt-4 space-y-3">
            {products.map((product) => (
              <li key={product.slug}>
                {product.status === "active" ? (
                  <a
                    href={product.url}
                    className="text-sm text-ink transition-colors hover:text-bloom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                  </a>
                ) : (
                  <span className="text-sm text-muted">
                    {product.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Connect
          </p>

          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink transition-colors hover:text-bloom"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink transition-colors hover:text-bloom"
              >
                TikTok
              </a>
            </li>

            <li>
              <a
                href={siteConfig.socials.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink transition-colors hover:text-bloom"
              >
                Threads
              </a>
            </li>

            <li>
              <a
                href={`mailto:${siteConfig.email.hello}`}
                className="text-sm text-ink transition-colors hover:text-bloom"
              >
                {siteConfig.email.hello}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted md:flex-row">
          <p>
            {siteConfig.legalName} · Copyright © {year} {siteConfig.name}
          </p>

          <div className="flex gap-6">
            {siteConfig.footerLegal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
