import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { EcosystemGrid } from "@/components/sections/ecosystem-grid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "The Kurinji — Ecosystem Brand",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemGrid />
      {/* Vision, Roadmap, and Latest Articles sections come next —
          left out of this pass so the homepage ships with content
          that's actually final, not filler. */}
    </>
  );
}
