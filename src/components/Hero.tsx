"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import image from "next/image";
import Dynamic from "next/dynamic";
import { ArrowRight, ArrowDown } from "lucide-react";
import Photo from "./photo";

const Heroscene = Dynamic(() => import("./Heroscene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(20px, 5vw, 48px)",
        // overflow: "hidden",
      }}
    >
      <Heroscene />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "100vw",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Layout: teks kiri, foto kanan */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
          paddingTop: "clamp(80px, 10vh, 120px)",
          paddingBottom: "clamp(40px, 6vh, 80px)",
        }}
      >
        {/* Kolom kiri — teks */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: "var(--mid)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Backend Developer · RPA · Machine Learning
          </motion.p>

          {/* Nama muncul per baris */}
          {["Muhammad", "Reza Aulia"].map((word, i) => (
            <div key={word} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: "clamp(36px, 6vw, 80px)",
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

          {/* Deskripsi singkat */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            style={{
              marginTop: "24px",
              fontSize: "14px",
              color: "var(--mid)",
              lineHeight: 1.75,
              maxWidth: "380px",
            }}
          >
            IT graduate from Telkom University. I build backends, automate
            financial workflows, and train ML models — all with a focus on
            real-world impact.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            width: "clamp(250px, 35vw, 450px)",
            flexShrink: 0,
          }}
        >
          <Photo />
        </div>
      </div>
    </section>
  );
}
