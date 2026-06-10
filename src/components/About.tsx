"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Python", level: 95 },
  { name: "Django", level: 88 },
  { name: "PostgreSQL", level: 85 },
  { name: "REST API", level: 92 },
  { name: "PyTorch", level: 82 },
  { name: "TensorFlow", level: 78 },
  { name: "HuggingFace", level: 85 },
  { name: "n8n / RPA", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Go", level: 70 },
  { name: "Docker", level: 72 },
];

const stats = [
  { value: "3.63", label: "GPA", sub: "Telkom University", suffix: "/4.0" },
  { value: "98", label: "Accuracy", sub: "ML phishing model", suffix: "%" },
  { value: "6+", label: "Workflows", sub: "Automated at Telkom", suffix: "" },
  { value: "2nd", label: "Place", sub: "Epicentrum Unpad 2025", suffix: "" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["40px", "-20px"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skill bar animasi mengisi dari kiri
      gsap.utils.toArray<HTMLElement>(".skill-bar-fill").forEach((bar) => {
        const width = bar.getAttribute("data-width") || "0%";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Stats animasi masuk
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-panel"
      style={{
        position: "relative",
        padding: "clamp(100px, 15vh, 160px) clamp(20px, 5vw, 80px)",
        minHeight: "100vh",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--black)",
          opacity: bgOpacity,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--mid)",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          01 / About
        </motion.p>

        {/* Row 1: Judul + Bio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(32px, 5vw, 72px)",
            marginBottom: "clamp(48px, 8vh, 80px)",
          }}
        >
          {/* Judul */}
          <motion.h2
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              lineHeight: 1.08,
              letterSpacing: "-2px",
              color: "#ffffff",
              y: titleY,
            }}
          >
            I turn complex
            <br />
            <em style={{ color: "var(--accent)" }}>problems</em> into
            <br />
            elegant solutions.
          </motion.h2>

          {/* Bio */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                fontSize: "15px",
                color: "#aaa",
                lineHeight: 1.85,
                marginBottom: "20px",
              }}
            >
              IT graduate from Telkom University. I build backends, automate
              financial workflows with Python & RPA tools, and train ML models
              that ship to production — including a phishing detection model
              with 98% accuracy published on HuggingFace.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ fontSize: "15px", color: "#555", lineHeight: 1.85 }}
            >
              Open to full-time roles and freelance projects where technical
              depth meets real-world impact.
            </motion.p>

            {/* Dua badge info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "28px",
                flexWrap: "wrap",
              }}
            >
              {[
                "📍 Jakarta, Indonesia",
                "🎓 Telkom University · 2026",
                "💼 Open to work",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: "8px 16px",
                    border: "0.5px solid #2a2a2a",
                    borderRadius: "100px",
                    fontSize: "12px",
                    color: "#777",
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2: Stats 4 kolom */}
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            background: "#1a1a1a",
            border: "1px solid #1a1a1a",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "clamp(48px, 8vh, 80px)",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card"
              style={{
                background: "#0d0d0d",
                padding: "clamp(24px, 3vw, 36px)",
                opacity: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: "clamp(32px, 3.5vw, 48px)",
                  color: "#fff",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
                <span style={{ color: "var(--accent)", fontSize: "0.5em" }}>
                  {stat.suffix}
                </span>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--accent)",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </p>
              <p style={{ fontSize: "12px", color: "#444" }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Row 3: Skill bars */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--mid)",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Technical Skills
        </motion.p>

        <div
          ref={skillsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(12px, 2vw, 20px)",
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <span style={{ fontSize: "13px", color: "#aaa" }}>
                  {skill.name}
                </span>
                <span style={{ fontSize: "12px", color: "#444" }}>
                  {skill.level}%
                </span>
              </div>
              <div
                style={{
                  height: "2px",
                  background: "#1a1a1a",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <div
                  className="skill-bar-fill"
                  data-width={`${skill.level}%`}
                  style={{
                    height: "100%",
                    background: `linear-gradient(to right, var(--accent), #88d400)`,
                    borderRadius: "2px",
                    width: "0%",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
