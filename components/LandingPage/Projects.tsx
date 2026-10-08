"use client";

import React from "react";
import Link from "next/link";
import {
  Play,
  FileText,
  Image as ImageIcon,
  Eye,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

type ResourceType = "video" | "pdf" | "image";

type ResourceItem = {
  id: string;
  type: ResourceType;
  title: string;
  desc: string;
  views: string;
  img: string;
  href: string;
};

const RESOURCES: ResourceItem[] = [
  {
    id: "fin-account-dashboard",
    type: "image",
    title: "FIN-ACCOUNT Dashboard",
    desc: "A financial management dashboard designed to help institutions record, monitor, and manage their monthly income and expenses.",
    views: "1.4K",
    img: "https://i.postimg.cc/DysB35wr/1.jpg",
    href: "https://www.behance.net/gallery/250469573/FIN-ACCOUNT-DASHBOARD",
  },
  {
    id: "verbum-edu-app",
    type: "image",
    title: "VERBUM EDU APP",
    desc: "A school payment and student management platform designed to simplify how schools register students, manage fees, apply discounts and scholarships, process payments, and generate receipts.",
    views: "2.1K",
    img: "https://i.postimg.cc/1RFp8X1w/Whats-App-Image-2026-10-07-at-5-32-24-PM.jpg",
    href: "https://www.behance.net/gallery/250056047/VERBUM-EDU-APP",
  },
  {
    id: "foodies-express",
    type: "image",
    title: "FOODIES EXPRESS",
    desc: "A food delivery app concept designed to make discovering restaurants, exploring menus, placing orders, making payments, and receiving food more convenient.",
    views: "4.1K",
    img: "https://i.postimg.cc/DyFbmcgK/Whats-App-Image-2026-10-07-at-5-32-24-PM.jpg",
    href: "https://www.behance.net/gallery/249584503/FOODIES-EXPRESS",
  },
  {
    id: "mater-christi-website",
    type: "image",
    title: "Mater Christi Center Website UI",
    desc: "A website UI designed for an educational/religious institution to communicate its identity, programs, services, and other important information.",
    views: "9.9K",
    img: "https://i.postimg.cc/3RFYq2Dm/Whats-App-Image-2026-10-07-at-5-32-25-PM.jpg",
    href: "https://www.behance.net/gallery/249587085/MATERCHRISTICENTER-WEBSITE",
  },
  {
    id: "dev-portfolio",
    type: "image",
    title: "DEV PORTFOLIO",
    desc: "This is a Developer Portfolio Website that showcases a Web developers Skills and Projects.",
    views: "2.5K",
    img: "https://i.postimg.cc/xjsSbfGQ/Whats-App-Image-2026-10-07-at-5-32-25-PM-(1).jpg",
    href: "https://www.behance.net/gallery/250053699/DEVPORTFOLIO",
  },
  {
    id: "research-workspace",
    type: "image",
    title: "RESPONSIVE DESIGNS",
    desc: "These are websites or web Applications that it's Layout and Content automatically adapt to different screen sizes and devices.",
    views: "1.2K",
    img: "https://i.postimg.cc/YS7PsZNF/Whats-App-Image-2026-10-07-at-5-32-26-PM.jpg",
    href: "https://www.behance.net/peculiarchigaemezu",
  },
];

export default function ExploreLibrary() {
  return (
    <section
      id="projects"
      className={`${poppins.className} mx-auto w-full max-w-[1500px] scroll-mt-28 px-4 py-16 lg:px-8 lg:py-20`}
    >
      {/* Header */}
      <div className="mb-12 text-center md:mb-16">
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.3em] text-[#471700] dark:text-[#D2B48C] md:text-sm">
          Curated Resources • Expertly Managed
        </span>
        <h2 className="mb-3 text-3xl font-black tracking-tighter uppercase text-[#351200] dark:text-white md:text-5xl">
          Explore My Digital Library
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#351200]/70 dark:text-white/70 md:text-xl">
          A collection of my best work and creative projects. Explore to see the latest designs and updates.
        </p>
      </div>

      {/* Content Cards Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {RESOURCES.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#471700]/15 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#471700]/15 dark:border-white/10 dark:bg-[#351200]/30"
          >
            {/* Media Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Icon Overlay Badge */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#351200]/80 text-[#E8C9B8] shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 dark:bg-black/70">
                  {item.type === "video" && (
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  )}
                  {item.type === "pdf" && <FileText className="h-5 w-5" />}
                  {item.type === "image" && <ImageIcon className="h-5 w-5" />}
                </div>
              </div>

              {/* Type Tag Badge */}
              <div className="absolute top-3 right-3 rounded bg-[#351200]/80 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#E8C9B8] backdrop-blur-sm">
                {item.type}
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="mb-2 text-lg font-bold leading-snug text-[#351200] transition-colors group-hover:text-[#471700] dark:text-white dark:group-hover:text-[#D2B48C]">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#351200]/65 line-clamp-2 dark:text-white/65">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Info */}
              <div className="flex items-center justify-between border-t border-[#471700]/10 pt-4 dark:border-white/10">
                <div className="flex items-center gap-1.5 text-[#471700] dark:text-[#D2B48C]">
                  <Eye className="h-4 w-4 shrink-0" />
                  <span className="text-xs font-semibold">
                    {item.views} Views
                  </span>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-tight text-[#471700] transition-colors hover:text-[#351200] hover:underline dark:text-[#D2B48C] dark:hover:text-[#E8C9B8]"
                >
                  View Study Case
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Call To Action Button */}
      <div className="mt-5 text-center md:mt-8">
        <Link
          href="https://www.pinterest.com/peculiardizynz/_created/"
          className="inline-flex items-center gap-3 rounded-full bg-[#471700] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#351200] hover:shadow-xl dark:bg-[#D2B48C] dark:text-[#351200] dark:hover:bg-[#E8C9B8]"
        >
          Access Full Library
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}