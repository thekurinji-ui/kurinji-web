import type { Metadata } from "next";
import { EcosystemGrid } from "@/components/sections/ecosystem-grid";
import { Collaboration } from "@/components/sections/collaboration";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Ecosystem",
  description:
    "Jelajahi seluruh produk digital dalam ekosistem The Kurinji dari PT Kurinji Virtual Nusantara.",
  path: "/ecosystem",
});

export default function EcosystemPage() {
  return (
    <>
      <section className="container pt-28 pb-16">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Ecosystem
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-medium leading-tight md:text-6xl">
          Satu identitas,
          <br />
          banyak produk digital.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          The Kurinji membangun berbagai produk digital yang dirancang untuk
          menciptakan pengalaman, menyimpan kenangan, dan menghubungkan manusia
          melalui teknologi.
        </p>
      </section>

      <EcosystemGrid />

      <Collaboration />
    </>
  );
}
