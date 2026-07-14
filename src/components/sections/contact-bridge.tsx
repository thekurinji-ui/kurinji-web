import Link from "next/link";

export function ContactBridge() {
  return (
    <section className="border-t border-mist py-24">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Let's Connect
            </span>

            <h2 className="mt-5 font-heading text-3xl font-medium md:text-4xl">
              Have an idea?
              <br />
              Let's build something meaningful.
            </h2>

            <p className="mt-5 text-muted">
              Kami terbuka untuk kolaborasi, partnership, dan ide baru
              yang dapat menciptakan pengalaman digital yang bermakna.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit rounded-full bg-ink px-8 py-3 text-sm font-medium text-paper transition-colors hover:bg-bloom-deep"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
