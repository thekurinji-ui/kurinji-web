const identityItems = [
  {
    title: "1",
    label: "Ecosystem Brand",
    description: "Satu identitas yang menaungi berbagai produk digital.",
  },
  {
    title: "5",
    label: "Digital Initiatives",
    description:
      "Berbagai produk yang dibangun untuk pengalaman manusia yang berbeda.",
  },
  {
    title: "∞",
    label: "Future Possibilities",
    description:
      "Terus berkembang mengikuti ide, teknologi, dan kebutuhan manusia.",
  },
];

export function Identity() {
  return (
    <section className="border-t border-mist py-24">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {identityItems.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-mist p-8"
            >
              <h3 className="font-heading text-5xl font-medium">
                {item.title}
              </h3>

              <p className="mt-5 font-medium">
                {item.label}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
