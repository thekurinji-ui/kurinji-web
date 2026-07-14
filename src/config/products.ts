import type { Product } from "@/types/product";

/**
 * All ecosystem products live here, and only here.
 *
 * Adding a new product = adding one object to this array.
 * No component in src/components or src/app should need to change
 * as a result — they all render from this list.
 */
export const products: Product[] = [
  {
    slug: "selalu-ajak",
    name: "Selalu Ajak",
    tagline: "Platform undangan digital modern.",
    url: "https://selaluajak.kurinji.asia",
    status: "active",
    socials: {
      instagram: "selaluajak",
      tiktok: "selaluajak",
      threads: "selaluajak",
    },
  },
  {
    slug: "kenang-kurinji",
    name: "Kenang Kurinji",
    tagline: "Disposable camera experience.",
    url: "https://kenang.kurinji.asia",
    status: "active",
    socials: {
      instagram: "kenangkurinji",
      tiktok: "kenangkurinji",
      threads: "kenangkurinji",
    },
  },
  {
    slug: "kurinji-booth",
    name: "Kurinji Booth",
    tagline: "Photobooth platform.",
    url: "https://booth.kurinji.asia",
    status: "coming-soon",
  },
  {
    slug: "kurinji-music-nusantara",
    name: "Kurinji Music Nusantara",
    tagline: "Music label.",
    url: "https://music.kurinji.asia",
    status: "coming-soon",
  },
  {
    slug: "kurinji-hub",
    name: "Kurinji Hub",
    tagline: "Live streaming agency.",
    url: "https://hub.kurinji.asia",
    status: "coming-soon",
    socials: {
      instagram: "kurinjihub",
      tiktok: "kurinjihub",
      threads: "kurinjihub",
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

export const activeProducts = () => products.filter((p) => p.status === "active");
export const upcomingProducts = () => products.filter((p) => p.status === "coming-soon");
