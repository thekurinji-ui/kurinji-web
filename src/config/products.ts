import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "selalu-ajak",
    name: "Selalu Ajak",
    tagline: "Digital invitation experience for meaningful moments.",
    url: "https://selaluajak.kurinji.asia",
    status: "active",
    icon: "/icons/selaluajak.svg",
    socials: {
      instagram: "selaluajak",
      tiktok: "selaluajak",
      threads: "selaluajak",
    },
  },
  {
    slug: "kenang-kurinji",
    name: "Kenang Kurinji",
    tagline: "Digital memory experience to preserve every story.",
    url: "https://kenang.kurinji.asia",
    status: "active",
    icon: "/icons/kenang-kurinji.svg",
    socials: {
      instagram: "kenangkurinji",
      tiktok: "kenangkurinji",
      threads: "kenangkurinji",
    },
  },
  {
    slug: "kurinji-booth",
    name: "Kurinji Booth",
    tagline: "Modern photobooth experience for unforgettable events.",
    url: "https://booth.kurinji.asia",
    status: "coming-soon",
    icon: "/icons/kurinji-booth.svg",
  },
  {
    slug: "kurinji-music-nusantara",
    name: "Kurinji Music Nusantara",
    tagline: "A creative home for music and artistic expression.",
    url: "https://music.kurinji.asia",
    status: "coming-soon",
    icon: "/icons/kurinji-music.svg",
  },
  {
    slug: "kurinji-hub",
    name: "Kurinji Hub",
    tagline: "Connecting creators, talents, and brands through live experiences.",
    url: "https://hub.kurinji.asia",
    status: "coming-soon",
    icon: "/icons/kurinji-hub.svg",
    socials: {
      instagram: "kurinjihub",
      tiktok: "kurinjihub",
      threads: "kurinjihub",
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

export const activeProducts = () =>
  products.filter((p) => p.status === "active");

export const upcomingProducts = () =>
  products.filter((p) => p.status === "coming-soon");
