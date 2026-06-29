"use client";

import { motion } from "framer-motion";
import Dynamic from "next/dynamic";
import { ArrowRight, ArrowDown } from "lucide-react";
import Photo from "./photo";
import { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";

const Heroscene = Dynamic(() => import("./Heroscene"), { ssr: false });

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2600);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(20px, 5vw, 48px)",
      }}
    >
      {!isMobile && <Heroscene />}

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "100vw",
          transform: "translateX(-50%)",
          background: isMobile
            ? "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.80) 70%, rgba(255,255,255,0.6) 100%)"
            : "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "flex-start" : "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "32px" : "40px",
          paddingTop: "clamp(80px, 10vh, 120px)",
          paddingBottom: "clamp(40px, 6vh, 80px)",
        }}
      >
        <div
          style={{
            flex: isMobile ? "none" : 1,
            width: isMobile ? "100%" : "auto",
            minWidth: isMobile ? "unset" : "280px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontSize: "15px",
              letterSpacing: "3px",
              color: "var(--mid)",
              textTransform: "uppercase",
              marginBottom: "10px",
              minHeight: "14px",
            }}
          >
            <TypewriterText />
          </motion.p>

          {["Muhammad", "Reza Aulia"].map((word, i) => (
            <div key={word} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: isMobile
                    ? "clamp(44px, 14vw, 72px)"
                    : "clamp(36px, 6vw, 80px)",
                  lineHeight: 1,
                  letterSpacing: "-2px",
                  color: i === 1 ? "var(--mid)" : "var(--black)",
                  fontStyle: i === 1 ? "italic" : "normal",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            style={{
              marginTop: "24px",
              fontSize: "14px",
              color: "var(--mid)",
              lineHeight: 1.75,
              maxWidth: isMobile ? "100%" : "380px",
            }}
          >
            IT graduate from Telkom University. I build backends, automate
            financial workflows, and train ML models, all with a focus on
            real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "36px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--black)",
                color: "var(--white)",
                padding: "13px 28px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "background 0.3s, color 0.3s, transform 0.3s",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--black)";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--black)";
                e.currentTarget.style.color = "var(--white)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              See my work <ArrowRight size={16} />
            </a>

            <a
              href="/Muhammad_Reza_Aulia-Resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "var(--black)",
                padding: "13px 28px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                border: "1px solid rgba(0,0,0,0.15)",
                transition: "border-color 0.3s, transform 0.3s",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--black)";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Download CV <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        <div
          style={{
            position: "relative",
            width: isMobile ? "100%" : "clamp(250px, 35vw, 450px)",
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Photo />
        </div>
      </div>
    </section>
  );
}
