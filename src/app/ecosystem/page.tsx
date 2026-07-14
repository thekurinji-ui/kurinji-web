import type { Metadata } from "next";
import { EcosystemGrid } from "@/components/sections/ecosystem-grid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Ecosystem",
  description: "Seluruh produk digital dalam ekosistem The Kurinji.",
  path: "/ecosystem",
});

export default function EcosystemPage() {
  return (
    <div className="pt-16">
      <div className="container pt-12">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Ecosystem
        </span>
        <h1 className="mt-4 max-w-2xl font-heading text-4xl font-medium md:text-5xl">
          Produk dalam ekosistem The Kurinji
        </h1>
      </div>
      <EcosystemGrid />
    </div>
  );
}
