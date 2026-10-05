"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  PackageCheck,
  Palette,
  PenTool,
  Image as ImageIcon,
  Sparkles,
  Presentation,
  Brush,
  Mail,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

type Service = {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    desc: "Logos, brand guidelines, visual identity & more.",
    icon: Palette,
  },
  {
    id: "social-media",
    title: "Social Media Graphics",
    desc: "Engaging posts, stories, ads and banners.",
    icon: ImageIcon,
  },
  {
    id: "print",
    title: "Print Design",
    desc: "Flyers, posters, business cards, brochures and more.",
    icon: FileText,
  },
  {
    id: "packaging",
    title: "Packaging Design",
    desc: "Product packaging that stands out.",
    icon: PackageCheck,
  },
  {
    id: "ui-ux",
    title: "UI/UX Graphics",
    desc: "App and web interface designs, icons & assets.",
    icon: PenTool,
  },
  {
    id: "illustration",
    title: "Custom Illustrations",
    desc: "Unique artwork, character designs, and digital illustrations.",
    icon: Brush,
  },
  {
    id: "presentation",
    title: "Presentation Design",
    desc: "Professional slide decks, pitch decks and infographics.",
    icon: Presentation,
  },
  {
    id: "email-design",
    title: "Email Marketing Design",
    desc: "Eye-catching email templates and newsletters.",
    icon: Mail,
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    desc: "Animated logos, social media animations and short videos.",
    icon: Sparkles,
  },
  {
    id: "web-banners",
    title: "Web Banners & Ads",
    desc: "Display ads, website banners and promotional graphics.",
    icon: Globe,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={`${poppins.className} mx-auto w-full max-w-[1500px] scroll-mt-28 px-4 py-14 lg:px-8 lg:py-0`}
    >
      {/* Header */}
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B5E3C] dark:text-[#D2B48C]">
            My Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#2B1810] dark:text-white md:text-4xl">
            What I Offer
          </h2>
        </div>

        <Link
          href="#"
          className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-[#8B5E3C] transition-colors hover:text-[#6F4429] dark:text-[#D2B48C] dark:hover:text-[#E8C9B8] sm:inline-flex"
        >
          View All Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Mobile: swipe row. Tablet/desktop: grid. */}
      <ul
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden"
        aria-label="Design services"
      >
        {SERVICES.map((service) => (
          <li
            key={service.id}
            className="w-[72%] shrink-0 snap-start sm:w-auto sm:shrink"
          >
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8B5E3C] dark:text-[#D2B48C] sm:hidden"
      >
        View All Services
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group h-full cursor-pointer rounded-2xl border border-[#8B5E3C]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5E3C]/25 hover:shadow-xl hover:shadow-[#8B5E3C]/15 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#D2B48C]/30 dark:hover:shadow-black/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3E4D8] text-[#8B5E3C] transition-colors duration-300 group-hover:bg-[#8B5E3C] group-hover:text-white dark:bg-[#D2B48C]/15 dark:text-[#D2B48C] dark:group-hover:bg-[#D2B48C] dark:group-hover:text-[#2B1810]">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <h3 className="mt-5 text-[15px] font-semibold text-[#2B1810] dark:text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#2B1810]/60 dark:text-white/60">
        {service.desc}
      </p>
    </div>
  );
}