"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

/*
  Palette (matches the hero)
  light: cream #FBF6F1, brown #471700 / #471700, ink #351200, blush #E8C9B8
  dark:  deep brown #1F130C, sand #D2B48C, cream text
*/

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const BRAND_FIRST = "Peculiar";
const BRAND_SECOND = "Dizynz";

function Logo({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        if (onLogoClick) onLogoClick();
      }}
      className="group inline-flex items-center gap-2.5 focus:outline-none cursor-pointer"
    >
      <span className="text-lg font-bold tracking-tight text-[#351200] dark:text-white sm:text-xl sm:pl-2">
        {BRAND_FIRST}{" "}
        <span className=" text-[#471700] dark:text-[#D2B48C]">{BRAND_SECOND}</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isManualScroll, setIsManualScroll] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the link for the section currently in view (home page only)
  useEffect(() => {
    if (pathname !== "/" || isManualScroll) return;
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname, isManualScroll]);

  // Lock body scroll while the mobile menu is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  // Close the mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  // Smooth scroll to section
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Disable intersection observer temporarily
      setIsManualScroll(true);
      // Update active state immediately
      setActiveId(id);
      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
      // Scroll smoothly
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Re-enable intersection observer after scroll completes
      setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    }
  }, []);

  // Scroll to top when logo is clicked
  const handleLogoClick = useCallback(() => {
    // Disable intersection observer temporarily
    setIsManualScroll(true);
    // Update active state immediately
    setActiveId("home");
    // Update URL hash without jumping
    window.history.pushState(null, "", "/");
    // Scroll smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Re-enable intersection observer after scroll completes
    setTimeout(() => {
      setIsManualScroll(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* Floating pill header */}
      <header className={`${poppins.className} fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4`}>
        <div
          className={`mx-auto flex h-13 max-w-5xl items-center justify-between rounded-full border px-4 backdrop-blur-xl transition-all duration-300 sm:px-2  ${
            isScrolled
              ? "border-[#471700]/20 bg-[#FBF6F1]/90 shadow-lg shadow-[#471700]/15 dark:border-[#D2B48C]/20 dark:bg-[#1F130C]/90 dark:shadow-black/40"
              : "border-[#471700]/10 bg-[#FBF6F1]/70 shadow-sm dark:border-white/10 dark:bg-[#1F130C]/60"
          }`}
        >
          <Logo onLogoClick={handleLogoClick} />

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === "/" && activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#471700]/10 text-[#471700] dark:bg-[#D2B48C]/15 dark:text-[#D2B48C]"
                      : "text-[#351200]/70 hover:bg-[#471700]/5 hover:text-[#471700] dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-[#D2B48C]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#471700] dark:bg-[#D2B48C]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#471700] to-[#C48A6A] py-2 pl-5 pr-3 text-sm font-semibold text-white shadow-md shadow-[#471700]/30 transition-all hover:shadow-lg hover:shadow-[#471700]/40 active:scale-95 dark:from-[#C48A6A] dark:to-[#D2B48C] dark:text-[#351200] sm:inline-flex cursor-pointer"
            >
              Get a Quote
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="rounded-full p-2.5 text-[#351200] transition-colors hover:bg-[#471700]/10 focus-visible:outline-2 focus-visible:outline-[#471700] dark:text-white dark:hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so page content starts below the floating header */}
      <div className="h-20 sm:h-24" />

      {/* Mobile backdrop */}
      <div
        onClick={closeMobileMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-[#351200]/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile drawer */}
      <aside
        aria-label="Mobile navigation"
        className={`${poppins.className} fixed right-0 top-0 z-[70] h-full w-full max-w-sm transform bg-[#FBF6F1] shadow-2xl transition-transform duration-300 ease-out dark:bg-[#1F130C] lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex h-full flex-col justify-between overflow-y-auto p-4">
          {/* soft blob */}
          <div className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-[#E8C9B8]/50 blur-3xl dark:bg-[#471700]/25" />

          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <Logo onLogoClick={handleLogoClick} />
              <button
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="rounded-full p-2.5 text-[#351200] transition-colors hover:bg-[#471700]/10 dark:text-white dark:hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === "/" && activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`/#${link.id}`}
                    onClick={(e) => {
                      handleSmoothScroll(e, link.id);
                      closeMobileMenu();
                    }}
                    className={`rounded-full px-5 py-3 text-lg font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#471700] text-white dark:bg-[#D2B48C] dark:text-[#351200]"
                        : "text-[#351200] hover:bg-[#471700]/10 dark:text-white dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="relative pt-8">
            <a
              href="/#contact"
              onClick={(e) => {
                handleSmoothScroll(e, "contact");
                closeMobileMenu();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#471700] to-[#C48A6A] py-3.5 text-base font-semibold text-white shadow-lg shadow-[#471700]/30 transition-transform active:scale-95 dark:from-[#C48A6A] dark:to-[#D2B48C] dark:text-[#351200] cursor-pointer"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}