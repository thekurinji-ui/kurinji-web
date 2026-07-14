import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-2xl py-24">
      <h1 className="font-heading text-4xl font-medium">Privacy Policy</h1>
      <p className="mt-6 text-muted">{/* TODO: legal copy */}Konten kebijakan privasi.</p>
    </div>
  );
}
