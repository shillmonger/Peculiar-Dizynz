"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Package, PenTool } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

/*
  Palette (brown + white)
  light: page white/cream, panel #471700, ink #351200, accent #471700
  dark:  page inherits your app bg, panel #351200, text white, accent #D2B48C
*/

const SERVICES = [
  { label: "Brand and Visual Design", icon: Layers },
  { label: "UI/UX Design", icon: PenTool },
  { label: "Digital Products", icon: Package },
];

/*
  Floating tool logos.
  Positions are relative to the hero image wrapper (NOT clipped by the image),
  so they hang around/over the edges of the portrait on every screen size.
  `pos` holds full Tailwind class strings (kept literal so Tailwind can see them).
  Mobile/tablet values are untouched; only the lg: / xl: values were pulled
  closer to the portrait on big screens.
*/
const FLOATING_LOGOS = [
  {
    src: "/Tool/Adobe.png",
    alt: "Adobe",
    pos: "left-1 top-[5%] sm:-left-2 lg:left-[60px] xl:left-[77px] lg:top-[8%]",
    delay: 0,
    duration: 3.2,
    rotate: -6,
  },
  {
    src: "/Tool/Illustrator.png",
    alt: "Adobe Illustrator",
    pos: "right-1 top-[11%] sm:-right-2 lg:right-[56px] xl:right-[72px] lg:top-[12%]",
    delay: 0.2,
    duration: 3.6,
    rotate: 6,
  },
  {
    src: "/Tool/colotheory.png",
    alt: "Color Theory",
    pos: "left-2 top-[22%] sm:-left-3 lg:left-0 xl:left-0 lg:top-[25%]",
    delay: 0.9,
    duration: 3.7,
    rotate: 4,
  },
  {
    src: "/Tool/pintrest.png",
    alt: "Pinterest",
    pos: "right-2 top-[22%] sm:-right-3 lg:right-0 xl:right-0 lg:top-[40%]",
    delay: 1.1,
    duration: 3.9,
    rotate: -4,
  },
  {
    src: "/Tool/Procreate.png",
    alt: "Procreate",
    pos: "left-0 top-[45%] sm:-left-5 lg:left-0 xl:left-0 lg:top-[50%]",
    delay: 0.8,
    duration: 3.4,
    rotate: 5,
  },
  {
    src: "/Tool/indesign.png",
    alt: "Adobe InDesign",
    pos: "right-0 top-[50%] sm:-right-5 lg:-right-10 xl:-right-10 lg:top-[60%]",
    delay: 1,
    duration: 3.8,
    rotate: -5,
  },
  {
    src: "/Tool/Canva.png",
    alt: "Canva",
    pos: "left-2 bottom-[15%] sm:-left-1 lg:-left-3 xl:-left-3 lg:bottom-[10%]",
    delay: 0.4,
    duration: 3.5,
    rotate: 6,
  },
  {
    src: "/Tool/figma.png",
    alt: "Figma",
    pos: "right-2 bottom-[15%] sm:-right-1 lg:-right-12 xl:-right-5 lg:bottom-[3%]",
    delay: 0.6,
    duration: 3.3,
    rotate: -6,
  },
];

function FourPointStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0c.8 6.2 5.8 11.2 12 12-6.2.8-11.2 5.8-12 12-.8-6.2-5.8-11.2-12-12C6.2 11.2 11.2 6.2 12 0z" />
    </svg>
  );
}

/*
  125% zoom fix.
  Every class prefixed with `min-[1180px]:max-[1279px]:` only applies between
  1180px and 1279px viewport width (where 125% browser zoom lands on a 1920px
  screen with 125% Windows scaling). All other widths are unchanged.
*/

export default function HeroSection() {
  return (
    <section
      id="home"
      className={`${poppins.className} relative w-full overflow-hidden bg-white py-8 transition-colors duration-500 dark:bg-transparent lg:py-10`}
    >
      <div className="mx-auto max-w-[1500px] px-4 lg:px-8">
        <div className="relative lg:h-[640px]">
          {/* ============ HEADLINES (top row) ============ */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col gap-2 lg:absolute lg:inset-x-0 lg:top-0 lg:flex-row lg:justify-between lg:gap-0 sm:px-10"
          >
            <h1 className="leading-none">
              <span className="block text-3xl font-bold text-[#351200] dark:text-white sm:text-4xl lg:text-[2.6rem]">
                Design Your
              </span>
              <span className="mt-1 block text-[3.5rem] font-extrabold text-[#471700] dark:text-[#D2B48C] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
                VISION
              </span>
            </h1>

            <p className="leading-none lg:text-right" aria-hidden>
              <span className="relative block text-3xl font-bold text-[#351200] dark:text-white sm:text-4xl lg:text-[2.6rem]">
                Build Your
              </span>
              <span className="mt-1 block text-[3.5rem] font-extrabold text-[#471700] dark:text-[#D2B48C] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
                BRAND
              </span>
            </p>
          </motion.div>

          {/* ============ HERO IMAGE WRAPPER (overlaps panel) ============
              Static positioning wrapper (no overflow-hidden) so the floating
              logos can sit outside the image edges without being clipped.
              Positioning lives here, animation lives on the inner motion.div,
              so framer-motion's transform never fights the centering classes. */}
          <div className="relative z-5 sm:z-30 mx-auto mt-4 h-[500px] w-full max-w-[350px] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-full lg:max-w-none lg:w-[460px] lg:-translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative h-full w-full"
            >
              {/* Image (clipped + rounded) */}
              <div className="absolute inset-0 overflow-hidden lg:rounded-b-[2rem]">
                <Image
                  src="/heroimg.png"
                  alt="Creative designer portrait"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 340px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating tool logos (outside the clipped box, never cut off) */}
              {FLOATING_LOGOS.map((logo) => (
                <motion.div
                  key={logo.src}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + logo.delay, type: "spring", stiffness: 160, damping: 14 }}
                  className={`pointer-events-none absolute z-30 lg:hidden ${logo.pos}`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, logo.rotate, 0] }}
                    transition={{
                      duration: logo.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: logo.delay,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-lg shadow-black/20 ring-1 ring-[#471700]/20 backdrop-blur-sm sm:h-14 sm:w-14 sm:rounded-2xl lg:h-16 lg:w-16"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ============ BROWN PANEL ============ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 -mt-23 sm:-mt-28 overflow-hidden rounded-[2rem] bg-[#471700] px-6 pb-8 pt-7 sm:pt-30 text-white transition-colors duration-500 dark:bg-[#351200] lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-[502px] lg:p-0"
          >
            {/* soft blobs */}
            <div className="pointer-events-none absolute -left-10 top-28 h-52 w-72 rotate-[-20deg] rounded-[50%] bg-white/10" />
            <div className="pointer-events-none absolute right-1/3 bottom-0 h-64 w-40 rounded-[50%] bg-white/10" />

            <div className="relative grid gap-10 lg:h-full lg:grid-cols-[1fr_460px_1fr] lg:gap-0 min-[1180px]:max-[1279px]:grid-rows-[minmax(0,1fr)]">
              {/* ----- left column ----- */}
              <div className="flex flex-col gap-8 lg:justify-between lg:py-8 lg:pl-10 lg:pr-4 min-[1180px]:max-[1279px]:py-6">
                <div className="lg:mt-10 min-[1180px]:max-[1279px]:mt-2">
                  <p className="flex items-center gap-2 text-xs text-white/80">
                    <FourPointStar className="h-3 w-3" />
                    Available for projects
                  </p>

                  <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.1rem] xl:text-[2.4rem] min-[1180px]:max-[1279px]:text-[1.7rem]">
                    WHERE CREATIVITY MEETS EXPERIENCE
                  </h2>

                  <p className="mt-4 max-w-[17rem] text-[15px] leading-relaxed text-white/80">
                    Graphic and UI/UX designs that build memorable brands and meaningful digital experiences.
                  </p>

                  <Link
                    href="/EzePeculiar.pdf"
                    className="mt-7 inline-flex w-full items-center justify-between rounded-full bg-[#1F130C] py-3 pl-6 pr-3 text-sm font-semibold uppercase text-white transition-transform hover:scale-[1.03] active:scale-95 dark:bg-[#F5EDE3] dark:text-[#351200] sm:w-[250px]"
                  >
                    View My Resume
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* ----- centre spacer (her image sits here on desktop) ----- */}
              <div className="hidden lg:block" />

              {/* ----- right column ----- */}
              <div className="flex flex-col gap-8 lg:items-end lg:justify-between lg:py-8 lg:pl-4 lg:pr-10">
                <ul className="flex items-start justify-between gap-4 lg:justify-end lg:gap-5">
                  {SERVICES.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex w-[4.5rem] flex-col items-center gap-1.5 text-center">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                      <span className="text-[10px] leading-tight text-white/80">{label}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-full sm:max-w-[250px] self-start lg:self-end">
                  <p className="mb-2 text-center text-xs text-white/85">Featured Work</p>
                  <div className="rounded-3xl border-2 border-white/80 bg-white/10 p-2 backdrop-blur-sm">
                    {/* typographic specimen, swap for a real project image when ready */}
                    <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-[#F5EDE3] dark:bg-[#E8D8C3]">
                      <Image
                        src="/onlaptop.png"
                        alt="Featured work"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 text-center text-sm font-bold">UI/UX & Digital Projects</p>
                    <p className="text-center text-[11px] text-white/80">Web, Mobile & Dashboard Experiences</p>
                    <Link
                      href="https://www.behance.net/peculiarchigaemezu"
                      className="mx-auto mb-1 mt-2 flex w-fit items-center rounded-full bg-[#F5EDE3] px-5 py-2 text-xs font-bold text-[#471700] transition-transform hover:scale-105 active:scale-95"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}