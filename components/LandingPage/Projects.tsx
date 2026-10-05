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
    id: "forensic-psych",
    type: "image",
    title: "New Month Design",
    desc: "This is a video about the new month design and its features. It showcases the latest design trends.",
    views: "1.4K",
    img: "https://i.postimg.cc/j5xv3vs5/New-Month-design.jpg",
    href: "https://www.pinterest.com/pin/936748791276799168/",
  },
  {
    id: "crime-stats-2024",
    type: "image",
    title: "Independence Day Design",
    desc: "Comprehensive design for independence day celebration. Download to view the full design.",
    views: "2.1K",
    img: "https://i.postimg.cc/mDp3XspB/Independence-day-design.jpg",
    href: "https://www.pinterest.com/pin/936748791283409251",
  },
  {
    id: "crime-scene-402",
    type: "image",
    title: "September Design",
    desc: "A beautiful design for the month of September. Download to view the full design.",
    views: "4.1K",
    img: "https://i.postimg.cc/d1fdR9D1/September.jpg",
    href: "https://www.pinterest.com/pin/936748791272504921/",
  },
  {
    id: "modern-policing",
    type: "image",
    title: "New Week Post",
    desc: "A new week post showcasing the latest design trends. Download to view the full design.",
    views: "9.9K",
    img: "https://i.postimg.cc/FFJGWfvK/New-week-post.jpg",
    href: "https://www.pinterest.com/pin/936748791272504880/",
  },
  {
    id: "profiling-tech",
    type: "image",
    title: "Independence Day Design",
    desc: "Comprehensive design for independence day celebration. Download to view the full design.",
    views: "2.5K",
    img: "https://i.postimg.cc/XqMKS8W9/Independence-day-design-(1).jpg",
    href: "https://www.pinterest.com/pin/936748791283409229/",
  },
  {
    id: "research-workspace",
    type: "image",
    title: "April Design",
    desc: "A beautiful design for the month of April. Download to view the full design.",
    views: "1.2K",
    img: "https://i.postimg.cc/L62fth8Z/April-Design.jpg",
    href: "https://www.pinterest.com/pin/936748791283408105/",
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
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.3em] text-[#8B5E3C] dark:text-[#D2B48C] md:text-sm">
          Curated Resources • Expertly Managed
        </span>
        <h2 className="mb-3 text-3xl font-black tracking-tighter uppercase text-[#2B1810] dark:text-white md:text-5xl">
          Explore Our Digital Library
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#2B1810]/70 dark:text-white/70 md:text-xl">
          A comprehensive collection of verified criminology resources. Access
          high-quality video lectures, photographic evidence, and academic
          research papers.
        </p>
      </div>

      {/* Content Cards Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {RESOURCES.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#8B5E3C]/15 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8B5E3C]/15 dark:border-white/10 dark:bg-[#2B1810]/30"
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#2B1810]/80 text-[#E8C9B8] shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 dark:bg-black/70">
                  {item.type === "video" && (
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  )}
                  {item.type === "pdf" && <FileText className="h-5 w-5" />}
                  {item.type === "image" && <ImageIcon className="h-5 w-5" />}
                </div>
              </div>

              {/* Type Tag Badge */}
              <div className="absolute top-3 right-3 rounded bg-[#2B1810]/80 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#E8C9B8] backdrop-blur-sm">
                {item.type}
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="mb-2 text-lg font-bold leading-snug text-[#2B1810] transition-colors group-hover:text-[#8B5E3C] dark:text-white dark:group-hover:text-[#D2B48C]">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#2B1810]/65 line-clamp-2 dark:text-white/65">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Info */}
              <div className="flex items-center justify-between border-t border-[#8B5E3C]/10 pt-4 dark:border-white/10">
                <div className="flex items-center gap-1.5 text-[#8B5E3C] dark:text-[#D2B48C]">
                  <Eye className="h-4 w-4 shrink-0" />
                  <span className="text-xs font-semibold">
                    {item.views} Views
                  </span>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-tight text-[#8B5E3C] transition-colors hover:text-[#6F4429] hover:underline dark:text-[#D2B48C] dark:hover:text-[#E8C9B8]"
                >
                  View {item.type}
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
          className="inline-flex items-center gap-3 rounded-full bg-[#8B5E3C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#6F4429] hover:shadow-xl dark:bg-[#D2B48C] dark:text-[#2B1810] dark:hover:bg-[#E8C9B8]"
        >
          Access Full Library
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}