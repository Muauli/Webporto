"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Phishing Email Detection",
    subtitle: "ML Research · Published on HuggingFace",
    description:
      "A dual-branch LSTM model that fuses text and emotion features to detect phishing emails. Fine-tuned DistilBERT on 40,000 samples across 6 emotion labels. Achieved 98% accuracy on 5,800 test emails — outperforming text-only baseline by 0.03 precision.",
    tech: ["Python", "PyTorch", "DistilBERT", "LSTM", "HuggingFace"],
    accent: "#c8f04f",
    link: "https://github.com/Muauli/Improved-Phishing-email-Detection-using-emotion-feature",
    visual: "ml",
  },
  {
    number: "02",
    title: "No-code Website Builder",
    //subtitle: "Backend · Nevmock",
    description:
      "PostgreSQL-backed Django REST API powering a drag-and-drop website builder. Designed the data model for component/layout assembly, implemented services for page structure management, and enabled users to build complete sites from predefined templates.",
    tech: ["Django", "PostgreSQL", "REST API", "Python"],
    accent: "#67e8f9",
    link: "https://github.com/Muauli/JAKA-BACKEND",
    visual: "backend",
  },
  {
    number: "03",
    title: "Financial RPA Automation",
    //subtitle: "RPA · PT Telekomunikasi Indonesia",
    description:
      "End-to-end automation of 6 SAP FI/CO financial reporting workflows using Python, n8n, and Power Automate. Includes an internal web interface for finance personnel and a RAG chatbot backed by 40 custom QA pairs for recruitment FAQ automation.",
    tech: ["Python", "n8n", "Power Automate", "Power BI", "RAG"],
    accent: "#fbbf24",
    link: "https://github.com/Muauli",
    visual: "rpa",
  },
  {
    number: "04",
    title: "ITSM CRM Backend",
    //subtitle: "Backend · PT Finnet Indonesia",
    description:
      "Backend features for an internal ITSM CRM serving 100+ users. Implemented search and filter APIs alongside server-side pagination to reduce heavy response payloads and improve overall data retrieval performance at scale.",
    tech: ["REST API", "Django", "PostgreSQL", "Pagination"],
    accent: "#a78bfa",
    link: "https://github.com/Muauli",
    visual: "api",
  },
];

// Visual placeholder 3D animasi per project type
function ProjectVisual({ type, accent }: { type: string; accent: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animId: number;
    let t = 0;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      t += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const accentRgb =
        accent === "#c8f04f"
          ? "200,240,79"
          : accent === "#67e8f9"
            ? "103,232,249"
            : accent === "#fbbf24"
              ? "251,191,36"
              : "167,139,250";

      if (type === "ml") {
        // Neural network nodes
        const layers = [3, 5, 5, 3];
        const layerX = canvas.width / (layers.length + 1);
        const nodePositions: { x: number; y: number }[][] = [];

        layers.forEach((count, li) => {
          const nodes = [];
          const x = layerX * (li + 1);
          for (let n = 0; n < count; n++) {
            const y = (canvas.height / (count + 1)) * (n + 1);
            nodes.push({ x, y });
          }
          nodePositions.push(nodes);
        });

        // Draw connections
        for (let l = 0; l < nodePositions.length - 1; l++) {
          nodePositions[l].forEach((from) => {
            nodePositions[l + 1].forEach((to) => {
              const pulse =
                (Math.sin(t * 2 + from.x * 0.01 + to.y * 0.01) + 1) / 2;
              ctx.beginPath();
              ctx.moveTo(from.x, from.y);
              ctx.lineTo(to.x, to.y);
              ctx.strokeStyle = `rgba(${accentRgb}, ${pulse * 0.3 + 0.05})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            });
          });
        }

        // Draw nodes
        nodePositions.forEach((layer, li) => {
          layer.forEach((node) => {
            const pulse = (Math.sin(t * 1.5 + li + node.y * 0.02) + 1) / 2;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 4 + pulse * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${accentRgb}, ${0.4 + pulse * 0.6})`;
            ctx.fill();
          });
        });
      } else if (type === "backend") {
        // Database cylinders
        for (let i = 0; i < 3; i++) {
          const x = cx + (i - 1) * 60;
          const y = cy + Math.sin(t + i) * 8;
          const w = 44;
          const h = 18;
          const bodyH = 36;

          ctx.beginPath();
          ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accentRgb}, 0.12)`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${accentRgb}, 0.4)`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.rect(x - w, y, w * 2, bodyH);
          ctx.fillStyle = `rgba(${accentRgb}, 0.06)`;
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(x - w, y);
          ctx.lineTo(x - w, y + bodyH);
          ctx.moveTo(x + w, y);
          ctx.lineTo(x + w, y + bodyH);
          ctx.strokeStyle = `rgba(${accentRgb}, 0.25)`;
          ctx.stroke();

          ctx.beginPath();
          ctx.ellipse(x, y + bodyH, w, h, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accentRgb}, 0.12)`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${accentRgb}, 0.4)`;
          ctx.stroke();
        }
      } else if (type === "rpa") {
        // Gear / automation flow
        for (let g = 0; g < 3; g++) {
          const gx = cx + (g - 1) * 70;
          const gy = cy;
          const r = 22;
          const teeth = 8;
          const dir = g % 2 === 0 ? 1 : -1;

          ctx.save();
          ctx.translate(gx, gy);
          ctx.rotate(t * dir * 0.6);
          ctx.beginPath();
          for (let i = 0; i < teeth * 2; i++) {
            const angle = (i / (teeth * 2)) * Math.PI * 2;
            const rad = i % 2 === 0 ? r + 6 : r;
            ctx.lineTo(Math.cos(angle) * rad, Math.sin(angle) * rad);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(${accentRgb}, 0.5)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.fillStyle = `rgba(${accentRgb}, 0.08)`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(0, 0, 7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accentRgb}, 0.3)`;
          ctx.fill();
          ctx.restore();
        }

        // Connecting lines between gears
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(cx - 70 + 22, cy);
        ctx.lineTo(cx - 22, cy);
        ctx.moveTo(cx + 22, cy);
        ctx.lineTo(cx + 70 - 22, cy);
        ctx.strokeStyle = `rgba(${accentRgb}, 0.2)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);
      } else {
        // API — request/response arcs
        for (let i = 0; i < 4; i++) {
          const progress = (t * 0.4 + i * 0.25) % 1;
          const startX = cx - 80;
          const endX = cx + 80;
          const x = startX + (endX - startX) * progress;
          const arcY =
            cy + Math.sin(progress * Math.PI) * (i % 2 === 0 ? -30 : 30);

          ctx.beginPath();
          ctx.arc(x, arcY, 3, 0, Math.PI * 2);
          const alpha = Math.sin(progress * Math.PI);
          ctx.fillStyle = `rgba(${accentRgb}, ${alpha * 0.8})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.roundRect(cx - 90, cy - 18, 36, 36, 6);
        ctx.roundRect(cx + 54, cy - 18, 36, 36, 6);
        ctx.strokeStyle = `rgba(${accentRgb}, 0.4)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = `${10}px monospace`;
        ctx.fillStyle = `rgba(${accentRgb}, 0.6)`;
        ctx.textAlign = "center";
        ctx.fillText("API", cx - 72, cy + 4);
        ctx.fillText("DB", cx + 72, cy + 4);
      }
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [type, accent]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}

export default function Projects() {
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
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
      id="projects"
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
          03 / Projects
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
            color: "#ffffff",
            marginBottom: "64px",
          }}
        >
          Selected work
        </motion.h2>

        {/* Projects grid — alternating layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(24px, 4vh, 40px)",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card"
              style={{ opacity: 0 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    i % 2 === 0
                      ? "clamp(200px, 35%, 360px) 1fr"
                      : "1fr clamp(200px, 35%, 360px)",
                  gap: "clamp(20px, 3vw, 40px)",
                  background: "#0d0d0d",
                  border: "0.5px solid #1a1a1a",
                  borderRadius: "20px",
                  overflow: "hidden",
                  minHeight: "240px",
                }}
              >
                {/* Visual canvas */}
                <div
                  style={{
                    order: i % 2 === 0 ? 0 : 1,
                    background: "#0a0a0a",
                    position: "relative",
                    minHeight: "200px",
                    borderRight: i % 2 === 0 ? `1px solid #1a1a1a` : "none",
                    borderLeft: i % 2 !== 0 ? `1px solid #1a1a1a` : "none",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0 }}>
                    <ProjectVisual
                      type={project.visual}
                      accent={project.accent}
                    />
                  </div>
                  {/* Nomor besar overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "16px",
                      fontFamily: "var(--font-dm-serif)",
                      fontSize: "clamp(48px, 6vw, 72px)",
                      color: `${project.accent}15`,
                      letterSpacing: "-4px",
                      lineHeight: 1,
                      pointerEvents: "none",
                    }}
                  >
                    {project.number}
                  </div>
                </div>

                {/* Konten */}
                <div
                  style={{
                    order: i % 2 === 0 ? 1 : 0,
                    padding: "clamp(24px, 3vw, 36px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: project.accent,
                      textTransform: "uppercase",
                      marginBottom: "10px",
                      display: "block",
                    }}
                  >
                    {project.subtitle}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-dm-serif)",
                      fontSize: "clamp(20px, 2.5vw, 30px)",
                      color: "#ffffff",
                      letterSpacing: "-0.5px",
                      marginBottom: "14px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.75,
                      marginBottom: "20px",
                      maxWidth: "480px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "24px",
                    }}
                  >
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "4px 12px",
                          background: "#1a1a1a",
                          borderRadius: "100px",
                          fontSize: "11px",
                          color: "#666",
                          border: "0.5px solid #2a2a2a",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: project.accent,
                      textDecoration: "none",
                      fontWeight: 700,
                      letterSpacing: "0.3px",
                      transition: "gap 0.2s",
                      width: "fit-content",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = "14px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = "8px";
                    }}
                  >
                    View on GitHub →
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
