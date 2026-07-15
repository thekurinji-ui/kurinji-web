import type { Product } from "@/types/product";

/**
 * All ecosystem products live here, and only here.
 *
 * Adding a new product = adding one object to this array.
 * No component in src/components or src/app needs to change
 * as a result — they all render from this list, including the
 * product detail pages at /ecosystem/[slug].
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
    detail: {
      eyebrow: "Digital Invitation",
      heroDescription:
        "Platform undangan digital modern yang membantu setiap pasangan membagikan cerita menuju hari istimewa dengan cara yang lebih personal dan berkesan.",
      sectionTitle: "Sebuah undangan, sebuah cerita.",
      sectionBody:
        "Selalu Ajak hadir untuk mengubah undangan digital menjadi pengalaman yang lebih dekat, indah, dan mudah diakses oleh setiap tamu.",
      features: [
        "Undangan digital personal",
        "Desain elegan dan responsif",
        "Berbagi melalui link",
        "Pengalaman acara yang lebih modern",
      ],
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
    detail: {
      eyebrow: "Memory Experience",
      heroDescription:
        "Sebuah pengalaman disposable camera digital yang mengubah setiap momen acara menjadi kumpulan kenangan yang dapat dikenang kembali.",
      sectionTitle: "Setiap momen hanya terjadi sekali.",
      sectionBody:
        "Kenang Kurinji menghadirkan cara baru untuk mengumpulkan cerita dari sebuah acara melalui kamera digital sederhana yang terasa seperti disposable camera klasik.",
      features: [
        "Scan QR tanpa instal aplikasi",
        "Ambil foto langsung dari browser",
        "Nuansa film camera klasik",
        "Galeri kenangan setelah acara",
      ],
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
