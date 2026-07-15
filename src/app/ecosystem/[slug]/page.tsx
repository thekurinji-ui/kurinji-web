import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/config/products";
import { buildMetadata } from "@/lib/metadata";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return buildMetadata({ title: "Product Not Found", path: "/ecosystem" });

  return buildMetadata({
    title: product.name,
    description: product.detail?.heroDescription ?? product.tagline,
    path: `/ecosystem/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const isComingSoon = product.status === "coming-soon";

  return (
    <main>
      <section className="container py-24 md:py-32">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {product.detail?.eyebrow ?? product.tagline}
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-medium leading-tight md:text-7xl">
          {product.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {product.detail?.heroDescription ?? product.tagline}
        </p>

        {isComingSoon ? (
          <span className="mt-10 inline-flex rounded-full border border-mist px-7 py-3 text-sm font-medium text-muted">Coming Soon</span>
        ) : (
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-ink px-7 py-3 text-sm text-paper transition-colors hover:bg-bloom-deep">Visit {product.name}</a>
        )}
      </section>

      {product.detail && (
        <section className="border-t border-mist">
          <div className="container py-24">
            <h2 className="font-heading text-3xl md:text-4xl">{product.detail.sectionTitle}</h2>
            <p className="mt-6 max-w-xl text-muted">{product.detail.sectionBody}</p>
          </div>
        </section>
      )}

      {product.detail?.features && (
        <section className="border-t border-mist">
          <div className="container py-24">
            <h2 className="font-heading text-3xl md:text-4xl">Fitur utama</h2>
            <ul className="mt-8 space-y-4 text-muted">
              {product.detail.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {isComingSoon && (
        <section className="border-t border-mist">
          <div className="container py-24 text-center">
            <p className="text-muted">
              {product.name} sedang dalam pengembangan. Pantau terus untuk info terbaru.
            </p>
            <Link href="/ecosystem" className="mt-6 inline-flex text-sm text-bloom hover:underline">
              ← Kembali ke Ecosystem
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
