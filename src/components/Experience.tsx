"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TechBadge } from "./TechIcon";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    number: "01",
    period: "Aug 2025 — Jan 2026",
    role: "AI & RPA Developer",
    company: "PT Telkom Indonesia",
    location: "South Jakarta",
    tags: ["Python", "n8n", "Power Automate", "Power BI", "SAP"],
    accent: "#c8f04f",
    description:
      "Automated 6 SAP FI/CO financial reporting workflows using Python, n8n, and Power Automate. Built an internal web interface for finance personnel to trigger RPA workflows with custom parameters, and developed a RAG chatbot with a curated 40-pair knowledge base for recruitment FAQ automation, with final insights delivered via Power BI dashboards.",
    visualColor: "#eef7dc",
    visualPattern: "flow",
  },
  {
    number: "02",
    period: "Jul — Aug 2025",
    role: "Backend Developer",
    company: "PT Finnet Indonesia",
    location: "South Jakarta",
    tags: ["Python", "DBeaver", "TypeScript"],
    accent: "#a78bfa",
    description:
      "Developed backend features for an internal ITSM CRM serving 100+ daily users. Implemented search and filter APIs alongside server-side pagination, improving data retrieval efficiency and significantly reducing heavy response payloads at scale.",
    visualColor: "#f1edfc",
    visualPattern: "grid",
  },
  {
    number: "03",
    period: "Apr — Dec 2025",
    role: "Backend Developer",
    company: "Nevmock",
    location: "Remote Bandung",
    tags: ["Django", "PostgreSQL", "Python"],
    accent: "#67e8f9",
    description:
      "Designed a PostgreSQL data model for drag-and-drop component layouts and implemented Django REST APIs for a no-code website builder, enabling users to assemble pages and site structures directly from predefined templates.",
    visualColor: "#e7f9fc",
    visualPattern: "nodes",
  },
];

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function ExpVisualCanvas({
  pattern,
  accent,
  hovered,
}: {
  pattern: string;
  accent: string;
  hovered: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveredRef = useRef(hovered);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

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

    const rgb = hexToRgb(accent);

    const draw = () => {
      animId = requestAnimationFrame(draw);
      const intensity = hoveredRef.current ? 1.7 : 1;
      const glow = hoveredRef.current ? 1.6 : 1;
      t += 0.008 * intensity;
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
          ctx.strokeStyle = `rgba(${rgb},${(0.15 + (l % 3) * 0.08) * glow})`;
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
          ctx.fillStyle = `rgba(${rgb},${0.8 * glow})`;
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
            ctx.fillStyle = `rgba(${rgb},${pulse * 0.12 * glow})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(${rgb},${(0.08 + pulse * 0.1) * glow})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        const activeRow = Math.floor(((Math.sin(t * 0.5) + 1) / 2) * rows);
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.rect(c * cw + 2, activeRow * ch + 2, cw - 4, ch - 4);
          ctx.fillStyle = `rgba(${rgb},${0.25 * glow})`;
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
              ctx.strokeStyle = `rgba(${rgb},${0.15 * (1 - dist / (W * 0.5)) * glow})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          });
          const pulse = (Math.sin(t + i * 0.7) + 1) / 2;
          ctx.beginPath();
          ctx.arc(a.x, a.y, 4 + pulse * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${(0.5 + pulse * 0.4) * glow})`;
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
          ctx.fillStyle = `rgba(${rgb},${Math.sin(prog * Math.PI) * glow})`;
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

function ExpCard({ exp }: { exp: (typeof experiences)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="exp-panel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ opacity: 0 }}
    >
      <div
        style={{
          position: "relative",
          height: "clamp(220px, 30vh, 340px)",
          borderRadius: "18px",
          overflow: "hidden",
          background: exp.visualColor,
          marginBottom: "20px",
        }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", height: "100%" }}
        >
          <ExpVisualCanvas
            pattern={exp.visualPattern}
            accent={exp.accent}
            hovered={hovered}
          />
        </motion.div>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "24px",
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(48px, 8vw, 80px)",
            color: "rgba(0,0,0,0.05)",
            letterSpacing: "-4px",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {exp.number}
        </div>
      </div>
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "var(--mid)",
          marginBottom: "10px",
        }}
      >
        {exp.role} · {exp.period} · {exp.location}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "14px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(22px, 2.8vw, 32px)",
            color: "var(--black)",
            letterSpacing: "-0.5px",
          }}
        >
          {exp.company}
        </h3>
        <motion.span
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : -10,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(18px, 2vw, 26px)",
            color: exp.accent,
          }}
        >
          <MoveRight size={35} />
        </motion.span>
      </div>
      <p
        style={{
          fontSize: "13px",
          color: "#666",
          lineHeight: 1.75,
          marginBottom: "16px",
          maxWidth: "460px",
        }}
      >
        {exp.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {exp.tags.map((tag) => (
          <TechBadge key={tag} tag={tag} accent={exp.accent} />
        ))}
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
          { opacity: 0, y: 50, clipPath: "inset(6% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
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
        background:
          "linear-gradient(180deg, #f0efe8 0%, var(--white) 6%, var(--white) 100%)",
        padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 64px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "flex-end",
          gap: "24px",
          marginBottom: "clamp(56px, 9vh, 96px)",
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
            fontSize: "clamp(40px, 7vw, 88px)",
            letterSpacing: "-4px",
            color: "var(--black)",
            lineHeight: 1,
          }}
        >
          Work Experience
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
              marginBottom: "8px",
            }}
          >
            02 / Experience
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#999",
              maxWidth: "260px",
              lineHeight: 1.6,
            }}
          >
            Three internships across automation, backend systems, and applied
            AI.
          </p>
        </motion.div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(32px, 4vw, 56px)",
        }}
      >
        {experiences.map((exp) => (
          <ExpCard key={exp.company} exp={exp} />
        ))}
      </div>
    </section>
  );
}
