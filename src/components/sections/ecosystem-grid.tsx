import Link from "next/link";

import { products } from "@/config/products";
import { cn } from "@/lib/utils";

export function EcosystemGrid() {
  return (
    <section className="border-t border-mist py-24">
      <div className="container">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Our Ecosystem
          </span>

          <h2 className="mt-4 font-heading text-3xl font-medium md:text-4xl">
            One vision, multiple experiences.
          </h2>

          <p className="mt-5 text-muted">
            Berbagai produk digital yang dibangun dalam satu ekosistem untuk
            menciptakan pengalaman yang lebih bermakna.
          </p>
        </div>

        <div className="mt-14 divide-y divide-mist border-y border-mist">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/ecosystem/${product.slug}`}
              className={cn(
                "group flex flex-col items-start justify-between gap-4 py-8 transition-colors md:flex-row md:items-center",
                product.status === "coming-soon" && "opacity-80"
              )}
            >
              <div>
                <h3 className="font-heading text-2xl transition-colors group-hover:text-bloom">
                  {product.name}
                </h3>

                <p className="mt-2 max-w-xl text-sm text-muted">
                  {product.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium",
                    product.status === "active"
                      ? "bg-mist text-bloom-deep"
                      : "border border-mist text-muted"
                  )}
                >
                  {product.status === "active" ? "Live" : "Coming Soon"}
                </span>

                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
