"use client";

import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Loader />
      <PageTransition>
        <Navbar />
        <main style={{ position: "relative" }}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
