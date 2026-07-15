export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** Full article body. Optional — falls back to excerpt if not filled in yet. */
  body?: string;
};

/**
 * All blog posts live here, and only here — same pattern as products.ts.
 * Adding a post = adding one object here. The list page and the
 * detail page at /blog/[slug] both render from this array.
 */
export const posts: Post[] = [
  {
    slug: "mengenal-the-kurinji",
    title: "Mengenal The Kurinji dan Ekosistem Digitalnya",
    excerpt:
      "Perjalanan The Kurinji sebagai ecosystem brand dari PT Kurinji Virtual Nusantara.",
    category: "Company",
    date: "2026-07-15",
    body: "The Kurinji adalah ecosystem brand yang membangun berbagai produk digital untuk membantu manusia menciptakan, mengabadikan, dan membagikan momen berharga. Artikel ini akan terus diperbarui seiring perkembangan ekosistem.",
  },
];

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((post) => post.slug === slug);
