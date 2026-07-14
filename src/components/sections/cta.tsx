import Link from "next/link";

export function CTA() {
  return (
    <section className="border-t border-mist py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-bloom/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-paper/60">
              Discover The Kurinji
            </span>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-paper md:text-6xl">
              Every moment has a story.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-paper/70">
              Jelajahi ekosistem digital The Kurinji dan temukan
              pengalaman yang kami bangun untuk menciptakan,
              mengabadikan, dan membagikan momen berharga.
            </p>

            <Link
              href="/ecosystem"
              className="mt-10 inline-flex rounded-full bg-paper px-8 py-3 text-sm font-medium text-ink transition-colors hover:bg-bloom hover:text-paper"
            >
              Explore Ecosystem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
