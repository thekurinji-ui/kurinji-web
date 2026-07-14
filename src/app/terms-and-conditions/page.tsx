import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <div className="container max-w-2xl py-24">
      <h1 className="font-heading text-4xl font-medium">Terms & Conditions</h1>
      <p className="mt-6 text-muted">{/* TODO: legal copy */}Konten syarat & ketentuan.</p>
    </div>
  );
}
