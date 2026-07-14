import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kenang Kurinji",
  description:
    "Kenang Kurinji adalah digital memory experience untuk mengabadikan momen berharga melalui pengalaman disposable camera berbasis web.",
  path: "/ecosystem/kenang-kurinji",
});

export default function KenangKurinjiPage() {
  return (
    <main>
      <section className="container py-24 md:py-32">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          Memory Experience
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-medium leading-tight md:text-7xl">
          Kenang Kurinji
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Mengubah setiap momen acara menjadi kenangan digital melalui
          pengalaman disposable camera yang sederhana, personal, dan penuh cerita.
        </p>

        <Link
          href="https://kenang.kurinji.asia"
          target="_blank"
          className="mt-10 inline-flex rounded-full bg-ink px-7 py-3 text-sm text-paper"
        >
          Visit Kenang Kurinji
        </Link>
      </section>

      <section className="border-t border-mist">
        <div className="container py-24">
          <h2 className="font-heading text-3xl md:text-4xl">
            Setiap jepretan menyimpan cerita.
          </h2>

          <p className="mt-6 max-w-xl text-muted">
            Kenang Kurinji menghadirkan cara baru untuk mengumpulkan momen
            dari para tamu dalam sebuah acara tanpa perlu aplikasi tambahan.
          </p>
        </div>
      </section>

      <section className="border-t border-mist">
        <div className="container py-24">
          <h2 className="font-heading text-3xl md:text-4xl">
            Fitur utama
          </h2>

          <ul className="mt-8 space-y-4 text-muted">
            <li>Scan QR dan langsung gunakan kamera</li>
            <li>Pengalaman disposable camera digital</li>
            <li>Galeri kenangan acara</li>
            <li>AI memory experience</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
