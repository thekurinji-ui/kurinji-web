import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Selalu Ajak",
  description:
    "Selalu Ajak adalah platform undangan digital modern untuk menciptakan pengalaman undangan yang personal, elegan, dan mudah dibagikan.",
  path: "/ecosystem/selalu-ajak",
});

export default function SelaluAjakPage() {
  return (
    <main>
      <section className="container py-24 md:py-32">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          Digital Invitation
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-medium leading-tight md:text-7xl">
          Selalu Ajak
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Platform undangan digital modern yang membantu setiap pasangan
          membagikan cerita menuju hari istimewa dengan cara yang lebih
          personal dan berkesan.
        </p>

        <Link
          href="https://selaluajak.kurinji.asia"
          target="_blank"
          className="mt-10 inline-flex rounded-full bg-ink px-7 py-3 text-sm text-paper"
        >
          Visit Selalu Ajak
        </Link>
      </section>


      <section className="border-t border-mist">
        <div className="container py-24">
          <h2 className="font-heading text-3xl md:text-4xl">
            Sebuah undangan, sebuah cerita.
          </h2>

          <p className="mt-6 max-w-xl text-muted">
            Selalu Ajak hadir untuk mengubah undangan digital menjadi
            pengalaman yang lebih dekat, indah, dan mudah diakses oleh setiap
            tamu.
          </p>
        </div>
      </section>


      <section className="border-t border-mist">
        <div className="container py-24">
          <h2 className="font-heading text-3xl md:text-4xl">
            Fitur utama
          </h2>

          <ul className="mt-8 space-y-4 text-muted">
            <li>Undangan digital personal</li>
            <li>Desain elegan dan responsif</li>
            <li>Berbagi melalui link</li>
            <li>Pengalaman acara yang lebih modern</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
