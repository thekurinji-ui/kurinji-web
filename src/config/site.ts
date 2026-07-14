export const siteConfig = {
  name: "The Kurinji",
  legalName: "PT Kurinji Virtual Nusantara",
  url: "https://kurinji.asia",

  description:
    "The Kurinji adalah ecosystem brand dari PT Kurinji Virtual Nusantara yang membangun produk digital untuk menciptakan, mengabadikan, dan membagikan momen berharga.",

  keywords: [
    "The Kurinji",
    "PT Kurinji Virtual Nusantara",
    "Digital Ecosystem",
    "Creative Technology",
    "Digital Experience",
    "Technology Company Indonesia",
    "Selalu Ajak",
    "Kenang Kurinji",
    "Kurinji Booth",
    "Kurinji Music Nusantara",
    "Kurinji Hub",
  ],

  email: {
    hello: "halo@kurinji.asia",
    noreply: "noreply@kurinji.asia",
  },

  socials: {
    instagram: "https://instagram.com/thekurinji",
    tiktok: "https://tiktok.com/@thekurinji",
    threads: "https://threads.net/@thekurinji",
  },

  socialsProducts: {
    selaluAjak: "https://instagram.com/selaluajak",
    kenangKurinji: "https://instagram.com/kenangkurinji",
    kurinjiHub: "https://instagram.com/kurinjihub",
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  footerLegal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
