"use client";

import React, { useState } from "react";
import { Headphones, Send } from "lucide-react";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

/*
  Palette (same brown theme as the hero + showcase)
  light: page white, form card white, info card #8B5E3C, ink #2B1810, accent #7A4A2B
  dark:  page inherits your app bg, form card #2A1A11, info card #4A2F1E, accent #D2B48C
*/
const CONTACT = {
  hotline: {
    label: "Hotline",
    value: "+234 814 039 7526",
    href: "tel:+2348140397526",
  },
  whatsapp: {
    label: "WhatsApp / SMS",
    value: "+234 814 039 7526",
    href: "https://wa.me/2348140397526",
  },
  email: {
    label: "Email",
    value: "peculiarchigaemezu@gmail.com",
    href: "mailto:peculiarchigaemezu@gmail.com",
  },
};

const CONTACT_ICONS = {
  hotline: Headphones,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
};

const SOCIALS = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "X / Twitter", href: "#", icon: FaTwitter },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Pinterest", href: "#", icon: FaPinterestP },
  { label: "Behance", href: "#", icon: FaBehance },
  { label: "Dribbble", href: "#", icon: FaDribbble },
];

const COUNTRY_CODES = ["+234", "+233", "+27", "+254", "+44", "+1", "+971"];

// Optimized input styling to avoid horizontal overflow on small screens
const inputBase =
  "w-full rounded-full border border-[#8B5E3C]/25 bg-white px-3.5 py-3 text-xs sm:px-5 sm:py-3.5 sm:text-sm text-[#2B1810] placeholder:text-[#2B1810]/45 outline-none transition focus:border-[#8B5E3C] focus:ring-4 focus:ring-[#8B5E3C]/15 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-[#D2B48C] dark:focus:ring-[#D2B48C]/20";

const labelBase =
  "mb-1.5 block text-xs font-semibold text-[#2B1810] dark:text-white";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className={`${poppins.className} relative w-full overflow-hidden py-8 lg:py-10`}
    >
      {/* Set to px-1 (4px) on mobile as requested, scaling up smoothly */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-4 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#2B1810] dark:text-white sm:text-4xl md:text-5xl">
          Contact <span className="text-[#7A4A2B] dark:text-[#D2B48C]">Us</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-[#2B1810]/80 dark:text-white/80 sm:text-sm md:text-base">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's create something amazing together.
        </p>

        <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-8">
          {/* ============ FORM CARD ============ */}
          <div className="rounded-2xl border border-[#8B5E3C]/15 bg-white p-3.5 shadow-[0_10px_40px_-12px_rgba(139,94,60,0.25)] dark:border-white/10 dark:bg-[#2A1A11] sm:rounded-[2rem] sm:p-8 lg:p-10">
            <h3 className="text-lg font-bold text-[#2B1810] dark:text-white sm:text-xl lg:text-2xl">
              Send us a message
            </h3>
            <p className="mt-1 max-w-md text-xs leading-relaxed text-[#2B1810]/70 dark:text-white/70 sm:text-sm">
              Have a question, a project in mind, or need help choosing the
              right design package? Feel free to contact us.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelBase}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="First name"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelBase}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Last name"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelBase}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelBase}>
                    Contact Details
                  </label>
                  <div className="flex w-full items-center overflow-hidden rounded-full border border-[#8B5E3C]/25 bg-white transition focus-within:border-[#8B5E3C] focus-within:ring-4 focus-within:ring-[#8B5E3C]/15 dark:border-white/15 dark:bg-white/5 dark:focus-within:border-[#D2B48C] dark:focus-within:ring-[#D2B48C]/20">
                    <select
                      name="countryCode"
                      aria-label="Country code"
                      defaultValue="+234"
                      className="h-full cursor-pointer bg-transparent py-3 pl-2.5 pr-1 text-xs font-medium text-[#2B1810] outline-none dark:text-white sm:pl-4 sm:text-sm [&>option]:text-[#2B1810]"
                    >
                      {COUNTRY_CODES.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </select>
                    <span
                      className="h-4 w-px bg-[#8B5E3C]/25 dark:bg-white/20"
                      aria-hidden
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel-national"
                      placeholder="Number"
                      className="w-full min-w-0 flex-1 bg-transparent px-2.5 py-3 text-xs text-[#2B1810] placeholder:text-[#2B1810]/45 outline-none dark:text-white dark:placeholder:text-white/40 sm:px-4 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelBase}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Enter your message"
                  className={`${inputBase} resize-none rounded-xl`}
                />
              </div>

              <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-xs ${
                    status === "sent"
                      ? "text-green-700 dark:text-green-400"
                      : status === "error"
                      ? "text-red-600 dark:text-red-400"
                      : "text-transparent"
                  }`}
                >
                  {status === "sent" && "Thanks! Message sent."}
                  {status === "error" && "Error. Please try again."}
                  {(status === "idle" || status === "sending") && "."}
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F130C] px-6 py-3 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#F5EDE3] dark:text-[#2B1810] sm:px-8 sm:py-3.5 sm:text-sm"
                >
                  {status === "sending" ? "Sending..." : "Send a Message"}
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* ============ INFO CARD ============ */}
          <aside className="relative overflow-hidden rounded-2xl bg-[#8B5E3C] p-4 text-white transition-colors duration-500 dark:bg-[#4A2F1E] sm:rounded-[2rem] sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 sm:h-44 sm:w-44" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-48 rotate-[-20deg] rounded-[50%] bg-white/10 sm:h-48 sm:w-56" />

            <div className="relative">
              <h3 className="text-base font-bold leading-snug sm:text-lg">
                Hi! We are always here to help you.
              </h3>

              <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                <InfoRow icon={CONTACT_ICONS.hotline} {...CONTACT.hotline} />
                <InfoRow icon={CONTACT_ICONS.whatsapp} {...CONTACT.whatsapp} />
                <InfoRow icon={CONTACT_ICONS.email} {...CONTACT.email} />
              </ul>

              <div className="mt-6 border-t border-white/20 pt-5 sm:mt-8 sm:pt-6">
                <p className="text-xs font-semibold text-white/90">
                  Connect with us
                </p>
                <ul className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
                  {SOCIALS.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:scale-110 hover:bg-[#F5EDE3] hover:text-[#7A4A2B] sm:h-10 sm:w-10"
                      >
                        <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-3 rounded-xl bg-white/15 px-3 py-2.5 backdrop-blur-sm transition hover:bg-white/25 sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-3.5"
      >
        <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-bold sm:text-xs">
            {label}
          </span>
          <span className="block truncate text-[11px] text-white/85 sm:text-xs">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}