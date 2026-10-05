"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

type ToolSkill = {
  name: string;
  category: "Adobe" | "Design Skill" | "Other Tool";
  imageUrl: string;
};

// Comfortably Used Tools & Skills Data
const TOOLS_AND_SKILLS: ToolSkill[] = [
  {
    name: "Photoshop",
    category: "Adobe",
    imageUrl: "/tool/Adobe.png",
  },
  {
    name: "Illustrator",
    category: "Adobe",
    imageUrl: "/tool/Illustrator.png",
  },
  {
    name: "InDesign",
    category: "Adobe",
    imageUrl: "/tool/indesign.png",
  },
  {
    name: "Figma",
    category: "Other Tool",
    imageUrl: "/tool/figma.png",
  },
  {
    name: "Canva",
    category: "Other Tool",
    imageUrl: "/tool/Canva.png",
  },
  {
    name: "Procreate",
    category: "Other Tool",
    imageUrl: "/tool/Procreate.png",
  },
  {
    name: "Color Theory",
    category: "Design Skill",
    imageUrl: "/tool/colotheory.png",
  },
  {
    name: "Pinterest",
    category: "Other Tool",
    imageUrl: "/tool/pintrest.png",
  },
];

export default function ToolsAndSkillsSection() {
  return (
    <section
      id="tools-and-skills"
      className={`${poppins.className} w-full overflow-hidden bg-white py-16 lg:pt-70 dark:bg-black`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header Tag & Title */}
        <div className="mb-5 text-center">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8B5E3C] dark:text-[#D2B48C]">
            Expertise & Stack
          </span>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#2B1810] dark:text-white md:text-4xl">
            Tools & Creative Skills
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#2B1810]/70 dark:text-white/70 md:text-base">
            A curated mix of industry-standard software and core visual
            disciplines I rely on to craft exceptional designs.
          </p>
        </div>
      </div>

      {/* Infinite Ticker Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Subtle Fade Edges for smooth aesthetic */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />

        <motion.div
          className="flex w-max items-center gap-6 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            x: {
              duration: 25, // Adjusted speed for smooth readability
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {/* Main List */}
          {TOOLS_AND_SKILLS.map((item, index) => (
            <ToolCard key={index} item={item} />
          ))}

          {/* Duplicated List for Seamless Infinite Loop */}
          {TOOLS_AND_SKILLS.map((item, index) => (
            <ToolCard key={`dup-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ToolCard({ item }: { item: ToolSkill }) {
  return (
    <div className="group relative flex cursor-pointer select-none items-center gap-4 rounded-2xl border border-[#8B5E3C]/15 bg-white p-2 pr-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5E3C]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#2B1810]/60">
      {/* Image Container with subtle background hover glow */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#E8C9B8]/25 transition-colors duration-300 group-hover:bg-[#8B5E3C] dark:bg-white/10 dark:group-hover:bg-[#D2B48C]">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Label and Category Tag */}
      <div>
        <h3 className="text-base font-bold text-[#2B1810] dark:text-white">
          {item.name}
        </h3>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8B5E3C]/70 dark:text-[#D2B48C]/70">
          {item.category}
        </span>
      </div>
    </div>
  );
}