import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";
import { posts } from "@/config/posts";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Artikel, cerita, dan kabar terbaru dari The Kurinji mengenai teknologi, kreativitas, dan ekosistem digital.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="container py-24 md:py-32">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Blog
      </span>

      <h1 className="mt-6 font-heading text-4xl font-medium md:text-6xl">
        Artikel Terbaru
      </h1>

      <p className="mt-6 max-w-xl text-lg text-muted">
        Cerita, insight, dan perkembangan terbaru dari The Kurinji.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl border border-mist p-6 transition-colors hover:border-bloom"
          >
            <span className="text-xs uppercase tracking-wider text-muted">
              {post.category}
            </span>

            <h2 className="mt-4 font-heading text-2xl">
              {post.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>

            <p className="mt-5 text-xs text-muted">
              {post.date}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
