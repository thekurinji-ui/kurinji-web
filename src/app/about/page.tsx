import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

import { Story } from "@/components/sections/story";
import { Mission } from "@/components/sections/mission";
import { Approach } from "@/components/sections/approach";
import { Vision } from "@/components/sections/vision";
import { Company } from "@/components/sections/company";

export const metadata: Metadata = buildMetadata({
  title: "About The Kurinji",
  description:
    "Mengenal The Kurinji, ecosystem brand dari PT Kurinji Virtual Nusantara yang membangun produk digital dengan menggabungkan teknologi, kreativitas, dan pengalaman manusia.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="container py-24">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          About
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-medium leading-tight md:text-6xl">
          Membangun pengalaman digital yang memiliki arti.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          The Kurinji adalah ecosystem brand dari PT Kurinji Virtual Nusantara
          yang mengembangkan berbagai produk digital untuk membantu manusia
          menciptakan, mengabadikan, dan membagikan momen berharga.
        </p>
      </section>

      <Story />
      <Mission />
      <Approach />
      <Vision />
      <Company />
    </>
  );
}
