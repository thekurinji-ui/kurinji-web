export function Story() {
  return (
    <section className="border-t border-mist py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Our Story
            </span>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-tight md:text-5xl">
              Born from ideas,
              <br />
              built with purpose.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              The Kurinji lahir dari sebuah gagasan sederhana:
              teknologi seharusnya membantu manusia menjaga hal-hal
              yang memiliki arti.
            </p>

            <p>
              Dari momen kecil yang ingin dikenang, karya yang ingin
              dibagikan, hingga komunitas yang ingin terhubung, kami
              membangun berbagai pengalaman digital yang dekat dengan
              kehidupan manusia.
            </p>

            <p>
              Melalui PT Kurinji Virtual Nusantara, The Kurinji terus
              mengembangkan ekosistem kreatif yang mempertemukan
              teknologi, seni, dan pengalaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
