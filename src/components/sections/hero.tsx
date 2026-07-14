import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Neela Kurinji signature atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-bloom/20 blur-[120px] animate-bloom-pulse"
      />

      <div className="container relative flex min-h-[86vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
          The Kurinji Ecosystem
        </span>

        <h1 className="mt-6 max-w-4xl text-balance font-heading text-5xl font-medium leading-[1.08] tracking-tight md:text-7xl">
          Building meaningful
          <br className="hidden md:block" />
          digital experiences.
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted">
          The Kurinji adalah ecosystem brand dari PT Kurinji Virtual Nusantara
          yang membangun produk digital untuk menciptakan, mengabadikan, dan
          membagikan momen berharga.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/ecosystem"
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-bloom-deep"
          >
            Explore Ecosystem
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-mist px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-bloom hover:text-bloom"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
