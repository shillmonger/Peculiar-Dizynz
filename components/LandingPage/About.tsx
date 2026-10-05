"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  HeartHandshake,
  Award,
  Sparkles,
  Search,
  Compass,
  Lightbulb,
  Palette,
  CheckCircle2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

// Stats Data
const STATS = [
  {
    icon: Briefcase,
    value: "50+",
    label: "Projects Completed",
  },
  {
    icon: HeartHandshake,
    value: "30+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "3+",
    label: "Years of Experience",
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Commitment to Quality",
  },
];

// Design Process Steps
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understanding the client's brand identity, target audience, and core project goals.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Research",
    desc: "Exploring industry competitors, visual design trends, and creative directions.",
    icon: Search,
  },
  {
    step: "03",
    title: "Concept",
    desc: "Developing innovative creative ideas, moodboards, and initial draft directions.",
    icon: Lightbulb,
  },
  {
    step: "04",
    title: "Design",
    desc: "Turning chosen concepts into polished, pixel-perfect visual designs and branding.",
    icon: Palette,
  },
  {
    step: "05",
    title: "Deliver",
    desc: "Preparing final print-ready and digital export files for effortless launch.",
    icon: CheckCircle2,
  },
];

export default function AboutSection() {
  return (
    <div className={`${poppins.className} w-full space-y-10 py-16 lg:pt-24`}>
      {/* ================= ABOUT ME SECTION ================= */}
      <section
        id="about"
        className="mx-auto w-full max-w-[1500px] scroll-mt-28 px-4 lg:px-8"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image with floating badge */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-[#8B5E3C] bg-[#E8C9B8]/30 shadow-xl ring-1 ring-[#8B5E3C]/20 dark:ring-white/10">
              <img
                src="/aboutimg.png"
                alt="Graphic Designer Profile"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge (Signature/Name Style) */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-[#8B5E3C]/15 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#2B1810]/90 md:-left-6">
              <span className="block font-serif text-2xl font-bold italic text-[#8B5E3C] dark:text-[#D2B48C]">
                Creative Designer
              </span>
              <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#2B1810]/70 dark:text-white/70">
                <MapPin className="h-3.5 w-3.5 text-[#8B5E3C] dark:text-[#D2B48C]" />
                Based in Nigeria • Remote Worldwide
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content & Stats Grid */}
          <div className="lg:col-span-7">
            {/* Header tag */}
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8B5E3C] dark:text-[#D2B48C]">
              About Me
            </span>

            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#2B1810] dark:text-white md:text-4xl lg:text-5xl">
              Building brands with passion and precision.
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[#2B1810]/80 dark:text-white/80 md:text-lg">
              My names are Eze peculiar Chigaemezunkwaya, i am  a passionate Graphic Designer who believes every brand has a
              unique story waiting to be told. Driven by aesthetics, empathy,
              and purposeful design, I transform ideas into compelling visual
              identities that capture attention and build lasting impact.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-[#2B1810]/65 dark:text-white/65">
              My philosophy centers around clarity, function, and emotion.
              Whether crafting a brand identity, print material, or digital graphics,
              I ensure every detail serves both visual harmony and strategic goals.
            </p>

            {/* Stats Cards Grid (Matching reference layout) */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center rounded-2xl border border-[#8B5E3C]/15 bg-[#E8C9B8]/20 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5E3C]/30 hover:bg-[#E8C9B8]/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <Icon className="mb-2 h-5 w-5 text-[#8B5E3C] dark:text-[#D2B48C]" />
                    <span className="text-2xl font-bold text-[#2B1810] dark:text-white">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs font-medium text-[#2B1810]/70 dark:text-white/70">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Link */}
            <div className="text-center lg:text-left">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#6F4429] hover:shadow-lg dark:bg-[#D2B48C] dark:text-[#2B1810] dark:hover:bg-[#E8C9B8]"
              >
                Let's Work Together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* ================= DESIGN PROCESS SECTION ================= */}
      <section
        id="process"
        className="mx-auto w-full max-w-[1500px] scroll-mt-28 px-4 lg:px-8"
      >
        <div>
          <div className="text-center mb-5">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8B5E3C] dark:text-[#D2B48C]">
              How I Work
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#2B1810] dark:text-white md:text-4xl">
              My Design Process
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#2B1810]/70 dark:text-white/70 md:text-base">
              A structured, collaborative approach ensuring every project delivers
              exceptional creativity and strategic value.
            </p>
          </div>

          {/* Process Grid: 1 column on mobile, 2 on tablet, 5 on desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative cursor-pointer flex flex-col justify-between rounded-2xl border border-[#8B5E3C]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#8B5E3C]/30 hover:shadow-xl dark:border-white/10 dark:bg-[#2B1810]/50"
                >
                  <div>
                    {/* Top Step Number + Icon */}
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-2xl font-black text-[#8B5E3C]/40 dark:text-[#D2B48C]/40">
                        {item.step}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8C9B8]/40 text-[#8B5E3C] transition-colors group-hover:bg-[#8B5E3C] group-hover:text-white dark:bg-white/10 dark:text-[#D2B48C] dark:group-hover:bg-[#D2B48C] dark:group-hover:text-[#2B1810]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-[#2B1810] dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-[#2B1810]/65 dark:text-white/65">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}