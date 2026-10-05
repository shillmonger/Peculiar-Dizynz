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
  FaFacebook,
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

  EDIT YOUR DETAILS HERE
*/
const CONTACT = {
  hotline: { label: "Hotline", value: "+234 814 039 7526", href: "tel:+2348140397526" },
  whatsapp: { label: "WhatsApp / SMS", value: "+234 814 039 7526", href: "https://wa.me/2348140397526" },
  email: { label: "Email", value: "peculiarchigaemezu@gmail.com", href: "mailto:peculiarchigaemezu@gmail.com" },
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

const inputBase =
  "w-full rounded-full border border-[#8B5E3C]/25 bg-white px-5 py-3.5 text-sm text-[#2B1810] placeholder:text-[#2B1810]/45 outline-none transition focus:border-[#8B5E3C] focus:ring-4 focus:ring-[#8B5E3C]/15 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-[#D2B48C] dark:focus:ring-[#D2B48C]/20";

const labelBase = "mb-2 block text-xs font-semibold text-[#2B1810] dark:text-white";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // Point this at your own API route / form service (Formspree, Resend, etc.)
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
      className={`${poppins.className} relative w-full overflow-hidden py-10 lg:pb-10 lg:pt-0`}
    >
      <div className="mx-auto max-w-[1500px] px-4 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#2B1810] dark:text-white sm:text-5xl">
          Contact <span className="text-[#7A4A2B] dark:text-[#D2B48C]">Us</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#2B1810]/80 dark:text-white/80 md:text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
        </p>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-8">
          {/* ============ FORM CARD ============ */}
          <div className="rounded-[2rem] border border-[#8B5E3C]/15 bg-white p-6 shadow-[0_10px_40px_-12px_rgba(139,94,60,0.25)] dark:border-white/10 dark:bg-[#2A1A11] sm:p-8 lg:p-10">
            <h3 className="text-xl font-bold text-[#2B1810] dark:text-white sm:text-2xl">
              Send us a message
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#2B1810]/70 dark:text-white/70">
              Have a question, a project in mind, or need help choosing the right design package?
              Feel free to contact us.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
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
                    placeholder="Enter your first name"
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
                    placeholder="Enter your last name"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
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
                  <div className="flex items-center overflow-hidden rounded-full border border-[#8B5E3C]/25 bg-white transition focus-within:border-[#8B5E3C] focus-within:ring-4 focus-within:ring-[#8B5E3C]/15 dark:border-white/15 dark:bg-white/5 dark:focus-within:border-[#D2B48C] dark:focus-within:ring-[#D2B48C]/20">
                    <select
                      name="countryCode"
                      aria-label="Country code"
                      defaultValue="+234"
                      className="h-full cursor-pointer bg-transparent py-3.5 pl-5 pr-1 text-sm font-medium text-[#2B1810] outline-none dark:text-white [&>option]:text-[#2B1810]"
                    >
                      {COUNTRY_CODES.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </select>
                    <span className="h-5 w-px bg-[#8B5E3C]/25 dark:bg-white/20" aria-hidden />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel-national"
                      placeholder="Enter your number"
                      className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-[#2B1810] placeholder:text-[#2B1810]/45 outline-none dark:text-white dark:placeholder:text-white/40"
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
                  rows={5}
                  placeholder="Enter your message"
                  className={`${inputBase} resize-none rounded-xl`}
                />
              </div>

              <div className="flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    status === "sent"
                      ? "text-green-700 dark:text-green-400"
                      : status === "error"
                      ? "text-red-600 dark:text-red-400"
                      : "text-transparent"
                  }`}
                >
                  {status === "sent" && "Thanks! Your message has been sent."}
                  {status === "error" && "Something went wrong. Please try again."}
                  {(status === "idle" || status === "sending") && "."}
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F130C] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#F5EDE3] dark:text-[#2B1810]"
                >
                  {status === "sending" ? "Sending..." : "Send a Message"}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* ============ INFO CARD ============ */}
          <aside className="relative overflow-hidden rounded-[2rem] bg-[#8B5E3C] p-6 text-white transition-colors duration-500 dark:bg-[#4A2F1E] sm:p-8">
            {/* soft blobs (same as hero panel) */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-56 rotate-[-20deg] rounded-[50%] bg-white/10" />

            <div className="relative">
              <h3 className="max-w-[16rem] text-lg font-bold leading-snug">
                Hi! We are always here to help you.
              </h3>

              <ul className="mt-6 space-y-3">
                <InfoRow icon={CONTACT_ICONS.hotline} {...CONTACT.hotline} />
                <InfoRow icon={CONTACT_ICONS.whatsapp} {...CONTACT.whatsapp} />
                <InfoRow icon={CONTACT_ICONS.email} {...CONTACT.email} />
              </ul>

              <div className="mt-8 border-t border-white/30 pt-6">
                <p className="text-xs font-semibold text-white/90">Connect with us</p>
                <ul className="mt-4 flex items-center gap-3">
                  {SOCIALS.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:scale-110 hover:bg-[#F5EDE3] hover:text-[#7A4A2B]"
                      >
                        <Icon className="h-[18px] w-[18px]" />
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
        className="flex items-center gap-4 rounded-2xl bg-white/15 px-4 py-3.5 backdrop-blur-sm transition hover:bg-white/25"
      >
        <Icon className="h-5 w-5 shrink-0" />
        <span className="min-w-0">
          <span className="block text-xs font-bold">{label}</span>
          <span className="block break-words text-xs text-white/85">{value}</span>
        </span>
      </a>
    </li>
  );
}