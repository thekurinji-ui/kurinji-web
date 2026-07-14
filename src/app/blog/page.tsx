import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Artikel dan kabar terbaru dari The Kurinji.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="container py-24">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Blog</span>
      <h1 className="mt-4 font-heading text-4xl font-medium md:text-5xl">Artikel Terbaru</h1>
      <p className="mt-6 max-w-xl text-muted">
        {/* TODO: wire up to a content source (MDX, CMS, etc.) once one is chosen. */}
        Belum ada artikel yang dipublikasikan.
      </p>
    </div>
  );
}
