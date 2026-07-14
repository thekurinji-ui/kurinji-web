export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: "mengenal-the-kurinji",
    title: "Mengenal The Kurinji dan Ekosistem Digitalnya",
    excerpt:
      "Perjalanan The Kurinji sebagai ecosystem brand dari PT Kurinji Virtual Nusantara.",
    category: "Company",
    date: "2026-07-15",
  },
];
