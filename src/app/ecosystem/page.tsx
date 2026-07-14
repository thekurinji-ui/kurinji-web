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
      <section className="container pt-28 pb-20">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Ecosystem
        </span>

        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-medium leading-tight md:text-6xl">
          Satu identitas,
          <br />
          banyak pengalaman digital.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Setiap produk dalam ekosistem The Kurinji dibangun untuk tujuan yang
          berbeda, namun memiliki nilai yang sama: membantu manusia
          menciptakan, mengabadikan, dan membagikan momen yang bermakna.
        </p>

        <p className="mt-4 max-w-2xl text-muted">
          Jelajahi setiap produk untuk mengenal cerita, filosofi, dan
          pengalaman yang kami bangun di baliknya.
        </p>
      </section>

      <EcosystemGrid />

      <Collaboration />
    </>
  );
}
