import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kenang Kurinji",
  description:
    "Kenang Kurinji adalah digital memory experience untuk mengabadikan momen berharga.",
  path: "/ecosystem/kenang-kurinji",
});

export default function KenangKurinjiPage() {
  return (
    <main className="container py-24">
      <span className="text-xs uppercase tracking-[0.2em] text-muted">
        Ecosystem
      </span>

      <h1 className="mt-6 font-heading text-5xl font-medium">
        Kenang Kurinji
      </h1>

      <p className="mt-6 max-w-xl text-muted">
        Digital memory experience untuk menyimpan cerita dan momen berharga.
      </p>
    </main>
  );
}
