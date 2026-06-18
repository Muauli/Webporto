"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    number: "01",
    period: "Aug 2025 — Jan 2026",
    role: "AI & RPA Developer Intern",
    company: "PT Telekomunikasi Indonesia",
    location: "South Jakarta",
    tags: ["Python", "n8n", "Power Automate", "Power BI", "SAP"],
    accent: "#c8f04f",
    description:
      "Automated 6 SAP FI/CO financial reporting workflows. Built an internal web interface and a RAG chatbot with 40-pair knowledge base for recruitment FAQ automation.",
    // Warna visual unik per card
    visualColor: "#e8f5d0",
    visualPattern: "flow",
  },
  {
    number: "02",
    period: "Jul — Aug 2025",
    role: "Backend Developer Intern",
    company: "PT Finnet Indonesia",
    location: "South Jakarta",
    tags: ["REST API", "Django", "PostgreSQL", "Server-side Pagination"],
    accent: "#a78bfa",
    description:
      "Built search, filter, and server-side pagination APIs for an internal ITSM CRM serving 100+ daily users, improving data retrieval efficiency.",
    visualColor: "#ede8fc",
    visualPattern: "grid",
  },
  {
    number: "03",
    period: "Apr — Dec 2025",
    role: "Backend Developer Intern",
    company: "Nevmock",
    location: "Bandung",
    tags: ["Django", "PostgreSQL", "REST API", "No-code"],
    accent: "#67e8f9",
    description:
      "Designed PostgreSQL schema and implemented Django REST APIs for a no-code website builder, enabling drag-and-drop page assembly from predefined templates.",
    visualColor: "#e0f8fc",
    visualPattern: "nodes",
  },
];

function ExpVisualCanvas({
  pattern,
  accent,
  bg,
}: {
  pattern: string;
  accent: string;
  bg: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;
    let animId: number;
    let t = 0;

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    };
    const rgb = hexToRgb(accent);

    const draw = () => {
      animId = requestAnimationFrame(draw);
      t += 0.008;
      ctx.clearRect(0, 0, W, H);

      if (pattern === "flow") {
        for (let l = 0; l < 8; l++) {
          ctx.beginPath();
          const yBase = H * 0.15 + l * H * 0.1;
          for (let x = 0; x <= W; x += 4) {
            const y =
              yBase +
              Math.sin(x * 0.008 + t + l * 0.5) * 20 +
              Math.sin(x * 0.004 - t * 0.7) * 12;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${rgb},${0.15 + (l % 3) * 0.08})`;
          ctx.lineWidth = l % 2 === 0 ? 1.5 : 0.8;
          ctx.stroke();
        }
        for (let d = 0; d < 5; d++) {
          const progress = (t * 0.15 + d * 0.2) % 1;
          const x = progress * W;
          const l = d % 8;
          const yBase = H * 0.15 + l * H * 0.1;
          const y = yBase + Math.sin(x * 0.008 + t + l * 0.5) * 20;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},0.8)`;
          ctx.fill();
        }
      } else if (pattern === "grid") {
        const cols = 8,
          rows = 6;
        const cw = W / cols,
          ch = H / rows;
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const pulse = (Math.sin(t * 1.2 + c * 0.5 + r * 0.7) + 1) / 2;
            const x = c * cw,
              y = r * ch;
            ctx.beginPath();
            ctx.rect(x + 2, y + 2, cw - 4, ch - 4);
            ctx.fillStyle = `rgba(${rgb},${pulse * 0.12})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(${rgb},${0.08 + pulse * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        const activeRow = Math.floor(((Math.sin(t * 0.5) + 1) / 2) * rows);
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.rect(c * cw + 2, activeRow * ch + 2, cw - 4, ch - 4);
          ctx.fillStyle = `rgba(${rgb},0.25)`;
          ctx.fill();
        }
      } else {
        const nodeCount = 8;
        const nodes = Array.from({ length: nodeCount }, (_, i) => ({
          x: W * 0.1 + (i % 4) * W * 0.27 + Math.sin(t * 0.6 + i) * 12,
          y:
            H * 0.2 + Math.floor(i / 4) * H * 0.55 + Math.cos(t * 0.4 + i) * 10,
        }));
        nodes.forEach((a, i) => {
          nodes.forEach((b, j) => {
            if (j <= i) return;
            const dx = a.x - b.x,
              dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < W * 0.5) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(${rgb},${0.15 * (1 - dist / (W * 0.5))})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          });
          const pulse = (Math.sin(t + i * 0.7) + 1) / 2;
          ctx.beginPath();
          ctx.arc(a.x, a.y, 4 + pulse * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${0.5 + pulse * 0.4})`;
          ctx.fill();
        });
        for (let p = 0; p < 3; p++) {
          const prog = (t * 0.2 + p * 0.33) % 1;
          const from = nodes[0],
            to = nodes[p + 2] || nodes[1];
          const px = from.x + (to.x - from.x) * prog;
          const py = from.y + (to.y - from.y) * prog;
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${Math.sin(prog * Math.PI)})`;
          ctx.fill();
        }
      }
    };

    draw();
    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [pattern, accent]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

function ExpCard({ exp }: { exp: (typeof experiences)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="exp-panel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: 0,
        border: "0.5px solid rgba(0,0,0,0.08)",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#ffffff",
        cursor: "default",
        transition: "box-shadow 0.4s",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.1)"
          : "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "clamp(200px, 28vh, 320px)",
          background: exp.visualColor,
          overflow: "hidden",
        }}
      >
        <ExpVisualCanvas
          pattern={exp.visualPattern}
          accent={exp.accent}
          bg={exp.visualColor}
        />

        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "24px",
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(48px, 8vw, 80px)",
            color: "rgba(0,0,0,0.06)",
            letterSpacing: "-4px",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {exp.number}
        </div>

        <motion.div
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.6,
            x: hovered ? 0 : -10,
            y: hovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--black)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: exp.accent,
          }}
        >
          <ArrowRight size={16} />
        </motion.div>

        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: "20px",
            fontSize: "11px",
            color: "rgba(0,0,0,0.4)",
            letterSpacing: "1px",
            background: "rgba(255,255,255,0.8)",
            padding: "4px 10px",
            borderRadius: "100px",
            backdropFilter: "blur(8px)",
          }}
        >
          {exp.period}
        </div>
      </div>
      <div
        style={{
          padding: "clamp(20px, 3vw, 32px)",
          borderTop: "0.5px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                color: exp.accent,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: "4px",
                background: "var(--black)",
                display: "inline-block",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {exp.role}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "var(--black)",
                letterSpacing: "-0.5px",
                marginTop: "4px",
              }}
            >
              {exp.company}
            </h3>
          </div>
          <span
            style={{
              fontSize: "11px",
              color: "#aaa",
              paddingTop: "4px",
            }}
          >
            {exp.location}
          </span>
        </div>

        <p
          style={{
            fontSize: "13px",
            color: "#666",
            lineHeight: 1.75,
            marginBottom: "16px",
          }}
        >
          {exp.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {exp.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 12px",
                background: "#f5f5f3",
                borderRadius: "100px",
                fontSize: "11px",
                color: "#888",
                border: "0.5px solid rgba(0,0,0,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".exp-panel").forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 60, clipPath: "inset(8% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
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
      style={{
        background: "var(--white)",
        padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 64px)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "flex-end",
          gap: "24px",
          marginBottom: "clamp(48px, 8vh, 80px)",
          flexWrap: "wrap",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(40px, 7vw, 96px)",
            letterSpacing: "-4px",
            color: "var(--black)",
            lineHeight: 0.95,
          }}
        >
          Work
          <br />
          <em style={{ color: "rgba(0,0,0,0.25)" }}>Experience</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ textAlign: "right", paddingBottom: "8px" }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: "var(--mid)",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            02 / Experience
          </p>
          <p style={{ fontSize: "13px", color: "#aaa", maxWidth: "200px" }}>
            3 internships across automation, backend, and AI
          </p>
        </motion.div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(12px, 2vw, 20px)",
        }}
      >
        {experiences.map((exp, i) => (
          <ExpCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
