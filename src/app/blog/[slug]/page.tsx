import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/config/posts";
import { buildMetadata } from "@/lib/metadata";

interface PostPageProps {
  params: { slug: string };
}

/** Pre-render a page for every post in posts.ts — add a post there, get a page here for free. */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return buildMetadata({ title: "Post Not Found", path: "/blog" });

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main>
      <article className="container max-w-2xl py-24 md:py-32">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {post.category}
        </span>

        <h1 className="mt-6 font-heading text-4xl font-medium leading-tight md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-sm text-muted">{post.date}</p>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
          <p>{post.body ?? post.excerpt}</p>
        </div>

        <Link href="/blog" className="mt-12 inline-flex text-sm text-bloom hover:underline">
          ← Kembali ke Blog
        </Link>
      </article>
    </main>
  );
}
