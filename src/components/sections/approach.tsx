const principles = [
  {
    title: "Human First",
    description:
      "Kami memulai dari kebutuhan manusia, lalu membangun teknologi sebagai solusi.",
  },
  {
    title: "Meaningful Experiences",
    description:
      "Setiap produk dirancang untuk menciptakan pengalaman yang memiliki nilai.",
  },
  {
    title: "Creative Technology",
    description:
      "Menggabungkan kreativitas dan teknologi untuk membuka kemungkinan baru.",
  },
];

export function Approach() {
  return (
    <section className="border-t border-mist py-24">
      <div className="container">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Our Approach
          </span>

          <h2 className="mt-5 font-heading text-3xl font-medium md:text-4xl">
            Technology with purpose.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-mist p-8"
            >
              <h3 className="font-heading text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
