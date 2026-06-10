"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  PythonOriginal,
  DjangoPlain, // Django biasanya menggunakan 'Plain' karena logonya solid/satu warna
  PostgresqlOriginal,
  NodejsOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  DockerOriginal,
  GoOriginal,
  PytorchOriginal,
  TensorflowOriginal,
  TailwindcssOriginal,
  GitOriginal,
} from "devicons-react";

gsap.registerPlugin(ScrollTrigger);

// Map nama tag ke komponen icon devicons
const techIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  PythonOriginal,
  DjangoPlain,
  PostgreSQL: PostgresqlOriginal,
  "Node.js": NodejsOriginal,
  JavaScript: JavascriptOriginal,
  TypeScript: TypescriptOriginal,
  TailwindcssOriginal,
  GitOriginal,
  DockerOriginal,
  GoOriginal,
  PyTorch: PytorchOriginal,
  TensorFlow: TensorflowOriginal,
};

const experiences = [
  {
    period: "Aug 2025 — Jan 2026",
    role: "RPA Developer",
    company: "PT Telekomunikasi Indonesia",
    location: "South Jakarta",
    type: "Internship",
    star: "Telkom Indonesia had 6 manual SAP FI/CO financial reporting processes consuming significant finance team hours monthly. I was tasked with automating all 6 use cases end-to-end using Python, n8n, and Power Automate, while also building an internal web interface for 6 finance personnel and a RAG chatbot for recruitment FAQs. The result was full automation of all 6 workflows with insights delivered via Power BI dashboards, and a chatbot backed by 40 curated QA pairs that significantly reduced manual response time.",
    tags: ["Python", "n8n", "Power Automate", "Power BI", "RAG", "SAP"],
    techIcons: ["Python"],
    accent: "#c8f04f",
    number: "01",
  },
  {
    period: "Jul — Aug 2025",
    role: "Backend Developer",
    company: "PT Finnet Indonesia",
    location: "South Jakarta",
    type: "Internship",
    star: "An internal ITSM CRM used by 100+ users was experiencing slow and unfiltered data retrieval, creating performance bottlenecks in daily operations. My task was to implement efficient search, filter, and server-side pagination features for the backend. I built the APIs from scratch with optimized query handling and proper pagination logic. This directly improved data retrieval efficiency and reduced heavy response payloads across all 100+ active users.",
    tags: ["REST API", "Server-side Pagination", "Search & Filter", "Backend"],
    techIcons: ["Python", "Django", "PostgreSQL"],
    accent: "#a78bfa",
    number: "02",
  },
  {
    period: "Apr — Dec 2025",
    role: "Backend Developer",
    company: "Nevmock",
    location: "Bandung",
    type: "Part-time",
    star: "A Bandung-based startup building a no-code website builder needed a robust backend to handle drag-and-drop component logic and page assembly. I was responsible for designing the entire data model and backend foundation. I designed a PostgreSQL schema for drag-and-drop layouts, implemented Django services and REST APIs, and enabled users to assemble pages from predefined templates. The result was a fully functional backend that powers the core no-code building experience of the platform.",
    tags: ["Django", "PostgreSQL", "REST API", "No-code"],
    techIcons: ["Django", "PostgreSQL", "Python"],
    accent: "#67e8f9",
    number: "03",
  },
  {
    period: "Self Project · 2025",
    role: "Machine Learning Engineer",
    company: "Phishing Email Detection",
    location: "Published · HuggingFace Hub",
    type: "Research",
    star: "Standard text-only phishing detection models showed limited precision on legitimate emails, leading to false positives that eroded user trust. My goal was to improve detection by incorporating emotion features alongside text features in a novel dual-branch architecture. I fine-tuned DistilBERT on 40,000 samples for 6 emotion labels, then built a dual-branch LSTM that fuses text and emotion representations for final classification. Evaluated on 5,800 emails, the model achieved 98% accuracy and improved precision by 0.03 over the text-only baseline, and the fine-tuned model is now publicly available on HuggingFace Hub.",
    tags: ["PyTorch", "DistilBERT", "LSTM", "HuggingFace", "NLP"],
    techIcons: ["Python", "PyTorch", "TensorFlow"],
    accent: "#f9a8d4",
    number: "04",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".exp-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
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
          background: "#f8f8f6",
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
            marginBottom: "16px",
          }}
        >
          02 / Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(32px, 5vw, 60px)",
            letterSpacing: "-2px",
            color: "var(--black)",
            marginBottom: "72px",
          }}
        >
          {"Where I've worked"}
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "1px",
              background: "#e0e0e0",
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "1px",
              background: "var(--black)",
              height: lineHeight,
            }}
          />

          <div style={{ paddingLeft: "clamp(24px, 4vw, 56px)" }}>
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="exp-card"
                style={{ marginBottom: "clamp(32px, 5vh, 56px)", opacity: 0 }}
              >
                {/* Dot timeline */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: exp.accent,
                    transform: "translateX(-50%)",
                    boxShadow: `0 0 14px ${exp.accent}`,
                    marginTop: "28px",
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "#ffffff",
                    border: "0.5px solid #ebebeb",
                    borderRadius: "20px",
                    padding: "clamp(24px, 3vw, 40px)",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                    transition: "box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 48px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 20px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "16px",
                      marginBottom: "24px",
                      paddingBottom: "24px",
                      borderBottom: "0.5px solid #f0f0f0",
                    }}
                  >
                    {/* Kiri header */}
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 12px",
                          background: `${exp.accent}18`,
                          border: `0.5px solid ${exp.accent}50`,
                          borderRadius: "100px",
                          fontSize: "10px",
                          color: exp.accent,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          marginBottom: "10px",
                        }}
                      >
                        {exp.type}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-dm-serif)",
                          fontSize: "clamp(20px, 2.5vw, 28px)",
                          color: "var(--black)",
                          letterSpacing: "-0.5px",
                          marginBottom: "4px",
                        }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: exp.accent,
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                        }}
                      >
                        {exp.role}
                      </p>
                    </div>

                    {/* Kanan header — nomor + periode + tech icons */}
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-serif)",
                          fontSize: "clamp(36px, 4vw, 52px)",
                          color: "#f0f0f0",
                          letterSpacing: "-3px",
                          lineHeight: 1,
                          marginBottom: "6px",
                        }}
                      >
                        {exp.number}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#bbb",
                          marginBottom: "2px",
                        }}
                      >
                        {exp.period}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#ccc",
                          marginBottom: "12px",
                        }}
                      >
                        {exp.location}
                      </p>

                      {/* Tech icons row */}
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          justifyContent: "flex-end",
                          flexWrap: "wrap",
                        }}
                      >
                        {exp.techIcons.map((tech) => {
                          const Icon = techIcons[tech];
                          return Icon ? (
                            <div
                              key={tech}
                              title={tech}
                              style={{
                                width: "32px",
                                height: "32px",
                                background: "#f8f8f8",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "0.5px solid #ebebeb",
                              }}
                            >
                              <Icon size={18} />
                            </div>
                          ) : (
                            <div
                              key={tech}
                              title={tech}
                              style={{
                                padding: "4px 10px",
                                background: "#f8f8f8",
                                borderRadius: "6px",
                                fontSize: "10px",
                                color: "#999",
                                border: "0.5px solid #ebebeb",
                              }}
                            >
                              {tech}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* STAR description — plain text */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: 1.8,
                      marginBottom: "20px",
                      maxWidth: "860px",
                    }}
                  >
                    {exp.star}
                  </p>

                  {/* Tags */}
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "5px 13px",
                          background: "#f5f5f5",
                          borderRadius: "100px",
                          fontSize: "11px",
                          color: "#888",
                          border: "0.5px solid #eee",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
