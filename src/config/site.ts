export const siteConfig = {
  name: "The Kurinji",
  legalName: "PT Kurinji Virtual Nusantara",
  url: "https://kurinji.asia",
  description:
    "The Kurinji adalah ecosystem brand yang membangun berbagai produk digital untuk membantu manusia menciptakan, mengabadikan, dan membagikan momen berharga.",
  email: {
    hello: "halo@kurinji.asia",
    noreply: "noreply@kurinji.asia",
  },
  socials: {
    instagram: "https://instagram.com/thekurinji",
    tiktok: "https://tiktok.com/@thekurinji",
    threads: "https://threads.net/@thekurinji",
  },
  nav: [
    { label: "Home", href: "/" },
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
