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
            Berbagai produk digital yang dibangun dalam satu ekosistem
            untuk menciptakan pengalaman yang lebih bermakna.
          </p>
        </div>

        <div className="mt-14 divide-y divide-mist border-y border-mist">
          {products.map((product) => (
            <a
              key={product.slug}
              href={product.status === "active" ? product.url : undefined}
              target={product.status === "active" ? "_blank" : undefined}
              rel={
                product.status === "active"
                  ? "noopener noreferrer"
                  : undefined
              }
              className={cn(
                "group flex flex-col items-start justify-between gap-2 py-8 md:flex-row md:items-center",
                product.status === "active"
                  ? "cursor-pointer"
                  : "cursor-default"
              )}
            >
              <div>
                <h3 className="font-heading text-2xl transition-colors group-hover:text-bloom">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm text-muted">
                  {product.tagline}
                </p>
              </div>

              <span
                className={cn(
                  "shrink-0 rounded-full px-3 py-1 text-xs font-medium",
                  product.status === "active"
                    ? "bg-mist text-bloom-deep"
                    : "border border-mist text-muted"
                )}
              >
                {product.status === "active" ? "Live" : "Coming Soon"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
