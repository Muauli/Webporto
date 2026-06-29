"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const defaultObserver = new IntersectionObserver(handleIntersect, {
      threshold: 0.4,
    });
    const projectsObserver = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => {
      if (s.id === "projects") {
        projectsObserver.observe(s);
      } else {
        defaultObserver.observe(s);
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
      defaultObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (isProjectPage) {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (href: string) => {
    setMenuOpen(false);
    if (isProjectPage) {
      sessionStorage.setItem("scrollTarget", href.replace("#", ""));
      router.push("/");
    } else {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile === null) return null;

  return (
    <>
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
          background:
            scrolled || menuOpen ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          borderBottom:
            scrolled && !menuOpen ? "0.5px solid rgba(0,0,0,0.08)" : "none",
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
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Roy.
        </button>

        {!isMobile && (
          <>
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
                    padding: "0 4px",
                    transition: "color 0.2s",
                    fontFamily: "var(--font-syne)",
                    fontWeight:
                      activeSection === link.href.replace("#", "") ? 700 : 400,
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
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
          </>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--black)",
              padding: "11px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "44px",
              minHeight: "44px",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </motion.nav>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
            }}
          >
            <div
              style={{ position: "absolute", inset: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(20px)",
                paddingTop: "80px",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => handleNavLinkClick(link.href)}
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontSize: "clamp(40px, 12vw, 60px)",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "var(--black)"
                        : "var(--mid)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 0",
                    fontStyle: "italic",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  color: "var(--mid)",
                  fontFamily: "var(--font-syne)",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginTop: "8px",
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
