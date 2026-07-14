export function Collaboration() {
  return (
    <section className="border-t border-mist py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Collaboration
          </span>

          <h2 className="mt-6 font-heading text-4xl font-medium leading-tight md:text-5xl">
            Building together,
            <br />
            creating meaningful experiences.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            The Kurinji terbuka untuk bekerja sama dengan individu,
            kreator, brand, dan organisasi yang memiliki visi untuk
            menciptakan sesuatu yang bernilai.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:halo@kurinji.asia"
              className="rounded-full bg-ink px-8 py-3 text-sm font-medium text-paper transition-colors hover:bg-bloom-deep"
            >
              Start a Conversation
            </a>

            <a
              href="/contact"
              className="rounded-full border border-mist px-8 py-3 text-sm font-medium text-ink transition-colors hover:border-bloom hover:text-bloom"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
