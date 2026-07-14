import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Penjelasan mengenai The Kurinji dan filosofi di baliknya.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container py-24">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">About</span>
      <h1 className="mt-4 max-w-2xl font-heading text-4xl font-medium md:text-5xl">
        Tentang The Kurinji
      </h1>
      <p className="mt-6 max-w-xl text-muted">
        {/* TODO: Philosophy — makna bunga Neela Kurinji, mengapa nama ini dipilih,
            dan nilai yang menjadi fondasi seluruh produk. */}
        Konten filosofi perusahaan akan diisi di sini.
      </p>
    </div>
  );
}
