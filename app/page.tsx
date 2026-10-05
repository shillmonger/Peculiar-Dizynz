"use client";

import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";


import Hero from "../components/LandingPage/Hero";
import Projects from "../components/LandingPage/Projects";
import Blog from "@/components/LandingPage/Blog";
import Offer from "@/components/LandingPage/Offer";
import About from "@/components/LandingPage/About";
import Tools from "@/components/LandingPage/Tools";
import Contact from "@/components/LandingPage/Contact";


export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-neutral-800 selection:text-neutral-50 overflow-x-hidden">
      <Hero />
      <Offer />
      <About />
      <Blog />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}