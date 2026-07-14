import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { EcosystemGrid } from "@/components/sections/ecosystem-grid";
import { Philosophy } from "@/components/sections/philosophy";
import { Vision } from "@/components/sections/vision";
import { Company } from "@/components/sections/company";
import { Collaboration } from "@/components/sections/collaboration";
import { CTA } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "The Kurinji — Ecosystem Brand",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <EcosystemGrid />
      <Philosophy />
      <Vision />
      <Company />
      <Collaboration />
      <CTA />
    </>
  );
}
