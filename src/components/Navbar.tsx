"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleLogoClick = () => {
    if (isProjectPage) {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (href: string) => {
    if (isProjectPage) {
      router.push(`/${href}`);
    } else {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(14px, 2vh, 24px) clamp(16px, 4vw, 48px)",
        background: scrolled ? "rgba(255,255,255,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(0,0,0,0.08)" : "none",
        transition: "background 0.4s ease, border 0.4s ease",
      }}
    >
      <button
        onClick={handleLogoClick}
        style={{
          fontFamily: "var(--font-dm-serif)",
          fontWeight: 400,
          fontSize: "clamp(13px, 1.6vw, 16px)",
          letterSpacing: "-0.3px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--black)",
          padding: 0,
          fontStyle: "italic",
        }}
      >
        Roy.
      </button>

      <div style={{ display: "flex", gap: "clamp(16px, 3vw, 36px)" }}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavLinkClick(link.href)}
            style={{
              fontSize: "clamp(11px, 1.2vw, 13px)",
              color:
                activeSection === link.href.replace("#", "")
                  ? "var(--black)"
                  : "var(--mid)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.3px",
              padding: 0,
              transition: "color 0.2s",
              fontFamily: "var(--font-syne)",
              fontWeight:
                activeSection === link.href.replace("#", "") ? 700 : 400,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                activeSection === link.href.replace("#", "")
                  ? "var(--black)"
                  : "var(--mid)";
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "clamp(10px, 1.1vw, 12px)",
          color: "var(--mid)",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#4ade80",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
        Available for work
      </div>
    </motion.nav>
  );
}
