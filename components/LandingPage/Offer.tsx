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
    desc: "Logos, visual identities, brand guidelines, and cohesive brand systems.",
    icon: Palette,
  },
  {
    id: "social-media",
    title: "Social Media Design",
    desc: "Social posts, stories, ads, banners, and campaign visuals.",
    icon: ImageIcon,
  },
  {
    id: "print",
    title: "Print & Marketing Design",
    desc: "Flyers, posters, business cards, brochures, and promotional materials.",
    icon: FileText,
  },
  {
    id: "packaging",
    title: "Packaging Design",
    desc: "Creative packaging and product visuals designed to stand out.",
    icon: PackageCheck,
  },
  {
    id: "presentation",
    title: "Presentation & Infographic Design",
    desc: "Pitch decks, presentations, reports, infographics, and visual storytelling.",
    icon: Presentation,
  },
  {
    id: "mobile-app",
    title: "Mobile App Design",
    desc: "User-friendly mobile interfaces, user flows, wireframes, and interactive prototypes.",
    icon: PenTool,
  },
  {
    id: "website-design",
    title: "Website Design",
    desc: "Responsive website interfaces focused on usability, clarity, and conversion.",
    icon: Globe,
  },
  {
    id: "dashboard",
    title: "Dashboard Design",
    desc: "Intuitive dashboards for SaaS, businesses, finance, education, and other digital products.",
    icon: Sparkles,
  },
  {
    id: "ux-ui",
    title: "UX/UI Design & Prototyping",
    desc: "User flows, wireframes, high-fidelity UI designs, prototypes, and design systems.",
    icon: Brush,
  },
  {
    id: "digital-product",
    title: "Web & Digital Product Design",
    desc: "Landing pages, SaaS platforms, e-commerce interfaces, and digital product experiences.",
    icon: Mail,
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
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#471700] dark:text-[#D2B48C]">
            My Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#351200] dark:text-white md:text-4xl">
            Designing Ideas Into Impact
          </h2>
        </div>

        <Link
          href="#"
          className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-[#471700] transition-colors hover:text-[#351200] dark:text-[#D2B48C] dark:hover:text-[#E8C9B8] sm:inline-flex"
        >
          View All Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Mobile: swipe row. Tablet/desktop: grid. */}
      <div className="space-y-5">
        {/* Graphic Design Section */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-[#351200] dark:text-white">
            Graphic Design
          </h3>
          <ul
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden"
            aria-label="Graphic design services"
          >
            {SERVICES.slice(0, 5).map((service) => (
              <li
                key={service.id}
                className="w-[72%] shrink-0 snap-start sm:w-auto sm:shrink"
              >
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>

        {/* UI/UX Design Section */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-[#351200] dark:text-white">
            UI/UX Design
          </h3>
          <ul
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden"
            aria-label="UI/UX design services"
          >
            {SERVICES.slice(5).map((service) => (
              <li
                key={service.id}
                className="w-[72%] shrink-0 snap-start sm:w-auto sm:shrink"
              >
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="#"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#471700] dark:text-[#D2B48C] sm:hidden"
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
    <div className="group h-full cursor-pointer rounded-2xl border border-[#471700]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#471700]/25 hover:shadow-xl hover:shadow-[#471700]/15 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#D2B48C]/30 dark:hover:shadow-black/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3E4D8] text-[#471700] transition-colors duration-300 group-hover:bg-[#471700] group-hover:text-white dark:bg-[#D2B48C]/15 dark:text-[#D2B48C] dark:group-hover:bg-[#D2B48C] dark:group-hover:text-[#351200]">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <h3 className="mt-5 text-[15px] font-semibold text-[#351200] dark:text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#351200]/60 dark:text-white/60">
        {service.desc}
      </p>
    </div>
  );
}