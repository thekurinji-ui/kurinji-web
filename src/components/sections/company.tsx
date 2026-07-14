import { siteConfig } from "@/config/site";

export function Company() {
  return (
    <section className="border-t border-mist py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Company
          </span>

          <h2 className="mt-6 font-heading text-4xl font-medium leading-tight md:text-5xl">
            Built by {siteConfig.legalName}.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted">
            The Kurinji dikembangkan oleh PT Kurinji Virtual Nusantara,
            sebuah perusahaan teknologi kreatif yang berfokus pada
            pengembangan produk digital dan ekosistem kreatif.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Kami percaya bahwa teknologi bukan hanya tentang sistem dan
            perangkat, tetapi tentang bagaimana teknologi dapat membantu
            manusia menciptakan pengalaman yang lebih bermakna.
          </p>
        </div>
      </div>
    </section>
  );
}
