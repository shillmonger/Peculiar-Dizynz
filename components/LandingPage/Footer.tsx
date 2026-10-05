"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  Heart,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Info,
  Clock,
  Send,
} from "lucide-react";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import ScrollToTop from "@/components/LandingPage/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const BRAND_FIRST = "Peculiar";
const BRAND_SECOND = "Dizynz";

const SOCIALS = [
  { name: "Instagram", icon: <FaInstagram size={18} />, href: "https://www.instagram.com/peculiar_dizynz" },
  { name: "Behance", icon: <FaBehance size={18} />, href: "https://www.behance.net/peculiarchigaemezu" },
  // { name: "Dribbble", icon: <FaDribbble size={18} />, href: "#" },
  { name: "Pinterest", icon: <FaPinterestP size={18} />, href: "https://www.pinterest.com/peculiardizynz/" },
  { name: "X", icon: <FaTwitter size={18} />, href: "https://x.com/Peculiar_dizynz" },
  { name: "LinkedIn", icon: <FaLinkedinIn size={18} />, href: "http://www.linkedin.com/in/peculiar-chigaemezu-05932b304" },
  { name: "WhatsApp", icon: <FaWhatsapp size={18} />, href: "https://wa.me/2348140397526" },
];

const FOOTER_COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/#home" },
      { label: "About Me", href: "/#about" },
      { label: "My Process", href: "/#process" },
      { label: "Featured Work", href: "/#work" },
      { label: "Client Reviews", href: "/#testimonials" },
      { label: "Contact Me", href: "/#contact" },
    ],
  },
  {
    title: "Design Services",
    links: [
      { label: "Brand Identity Design", href: "/#services" },
      { label: "Logo & Visual Assets", href: "/#services" },
      { label: "Print & Packaging", href: "/#services" },
      { label: "Social Media Design", href: "/#services" },
      { label: "Posters & Flyers", href: "/#services" },
      { label: "Art Direction", href: "/#services" },
    ],
  },
  {
    title: "Design Stack",
    links: [
      { label: "Adobe Photoshop", href: "/#tools-and-skills" },
      { label: "Adobe Illustrator", href: "/#tools-and-skills" },
      { label: "Adobe InDesign", href: "/#tools-and-skills" },
      { label: "Figma Prototyping", href: "/#tools-and-skills" },
      { label: "Procreate Graphics", href: "/#tools-and-skills" },
    ],
  },
];

const QUALITY_BADGES = [
  {
    icon: ShieldCheck,
    title: "100% Custom Work",
    desc: "Original vector & layout designs tailored to your brand goals.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Structured timeline and clear milestones for prompt delivery.",
  },
  {
    icon: Sparkles,
    title: "Print & Digital Ready",
    desc: "All source files exported in high-res & industry formats.",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className={`${poppins.className} relative mt-16 w-full overflow-hidden scroll-mt-28 bg-[#6F4429] dark:bg-[#4A2F1E] text-[#F5EDE3] transition-colors duration-500`}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8C9B8]/60 to-transparent" />

      {/* Background texture & soft ambient glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245, 237, 227, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 237, 227, 0.2) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at top, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black 20%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 z-0 h-80 w-80 rounded-full bg-[#E8C9B8]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 z-0 h-80 w-80 rounded-full bg-[#C48A6A]/15 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-8 pt-10 md:px-10 lg:pt-10">
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Socials Column */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <Link href="/" className="inline-flex w-fit items-center gap-3">
              <span className="text-3xl font-bold tracking-tight text-white">
                {BRAND_FIRST}{" "}
                <span className="italic text-[#E8C9B8]">{BRAND_SECOND}</span>
              </span>
            </Link>

            <p className="max-w-md text-sm font-medium leading-relaxed text-[#F5EDE3]/80 md:text-base">
              Creative graphic designer crafting logos, visual brand identities,
              marketing collateral, and custom print designs. Transforming ideas
              into polished visuals that elevate brands worldwide.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F5EDE3]/80">
                <Mail className="h-4 w-4 text-[#E8C9B8]" />
                <a
                  href="mailto:hello@example.com"
                  className="transition-colors hover:text-[#E8C9B8]"
                >
                  peculiarchigaemezu@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F5EDE3]/80">
                <MapPin className="h-4 w-4 text-[#E8C9B8]" />
                <span>Enugu, Nigeria • Remote Worldwide</span>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8C9B8]">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SOCIALS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5EDE3]/20 bg-[#F5EDE3]/10 text-[#F5EDE3] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5EDE3] hover:bg-[#F5EDE3] hover:text-[#7A4A2B] hover:shadow-[0_10px_25px_-8px_rgba(232,201,184,0.5)]"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col space-y-5 lg:col-span-2">
              <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8C9B8]" />
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm font-medium text-[#F5EDE3]/75 transition-all duration-200 hover:translate-x-1 hover:text-[#E8C9B8]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ───────── QUALITY & TRUST BADGES ───────── */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {QUALITY_BADGES.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group flex items-center gap-4 rounded-2xl border border-[#F5EDE3]/15 bg-[#F5EDE3]/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8C9B8]/40 hover:bg-[#F5EDE3]/10 hover:shadow-[0_10px_40px_-12px_rgba(232,201,184,0.2)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8C9B8]/30 bg-gradient-to-br from-[#E8C9B8]/20 to-transparent text-[#E8C9B8] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-white">
                    {b.title}
                  </h4>
                  <p className="mt-0.5 text-xs font-medium leading-relaxed text-[#F5EDE3]/70">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ───────── PROJECT AVAILABILITY & DISCLOSURES ───────── */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#F5EDE3]/15 bg-[#F5EDE3]/5 p-5">
            <div className="mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#E8C9B8]" />
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-white">
                Current Availability
              </p>
            </div>
            <p className="text-xs leading-relaxed text-[#F5EDE3]/75">
              Currently accepting new freelance projects, brand rebrands, and
              long-term design retainers. Average project kickoff timeline is
              1-3 business days following brief review.
            </p>
          </div>

          <div className="rounded-2xl border border-[#F5EDE3]/15 bg-[#F5EDE3]/5 p-5">
            <div className="mb-2 flex items-center gap-2">
              <Send className="h-4 w-4 text-[#E8C9B8]" />
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-white">
                Custom Inquiry
              </p>
            </div>
            <p className="text-xs leading-relaxed text-[#F5EDE3]/75">
              Have a custom project or event coming up? Get in touch to request a
              tailored quote. All assets delivered with full commercial licensing
              and print prep files.
            </p>
          </div>
        </div>

        {/* ───────── BOTTOM BAR ───────── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#F5EDE3]/15 pt-6 text-sm text-[#F5EDE3]/70 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <p className="text-xs md:text-sm">
              © {new Date().getFullYear()} {BRAND_FIRST} {BRAND_SECOND}. All
              rights reserved.
            </p>
          </div>

          <p className="flex items-center gap-1.5 text-xs italic">
            Crafted with
            <Heart
              className="h-3.5 w-3.5 fill-[#E8C9B8] text-[#E8C9B8]"
              aria-label="love"
            />
            and strategic creativity
          </p>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}