"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TbMapPinFilled } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { logoRows as techLogoRows, getTechIcon } from "./TechIcon";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { value: "3.63", label: "GPA", sub: "Telkom University · 2026" },
  { value: "3", label: "Internships", sub: "Telkom · Finnet · Nevmock" },
  { value: "2nd", label: "Place", sub: "Epicentrum Unpad 2025" },
];

interface LogoItem {
  name: string;
  icon?: React.ElementType;
  src?: string;
}
const mappedLogoRows: LogoItem[][] = techLogoRows.map((row) =>
  row.map((techName) => ({
    name: techName,
    icon: getTechIcon(techName) as React.ElementType,
  })),
);
const MarqueeRow = ({
  row,
  rowIndex,
  isMobile,
}: {
  row: LogoItem[];
  rowIndex: number;
  isMobile: boolean;
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isRowPaused, setIsRowPaused] = useState(false);

  const baseDuration = 25 + rowIndex * 5;
  const duration = isMobile ? baseDuration * 2 : baseDuration;
  const ICON_SIZE = 38;

  const isEven = rowIndex % 2 === 0;
  const keyframesName = `scroll-${rowIndex}`;

  return (
    <div
      style={{
        padding: "20px 0",
        display: "flex",
      }}
      onMouseEnter={() => setIsRowPaused(true)}
      onMouseLeave={() => setIsRowPaused(false)}
    >
      <style>{`
        @keyframes ${keyframesName} {
          0% { transform: translateX(${isEven ? "0%" : "-50%"}); }
          100% { transform: translateX(${isEven ? "-50%" : "0%"}); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          gap: "clamp(48px, 6vw, 96px)",
          width: "max-content",
          alignItems: "center",
          paddingRight: "clamp(48px, 6vw, 96px)",
          animationName: keyframesName,
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isRowPaused ? "paused" : "running",
        }}
      >
        {[...row, ...row, ...row, ...row].map((logo, i) => {
          const uniqueKey = `${logo.name}-${i}`;
          const isHovered = hoveredIcon === uniqueKey;

          const style = {
            opacity: isHovered ? "1" : "0.6",
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          };

          return (
            <div
              key={uniqueKey}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              onMouseEnter={() => setHoveredIcon(uniqueKey)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    position: "absolute",
                    top: "-45px",
                    background: "#222",
                    color: "#fff",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 10,
                  }}
                >
                  {logo.name}
                </motion.div>
              )}

              {logo.icon ? (
                <logo.icon size={ICON_SIZE} style={style} />
              ) : (
                <Image
                  src={logo.src as string}
                  alt={`${logo.name} logo`}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  style={{
                    ...style,
                    height: `${ICON_SIZE}px`,
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX1 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-3%", "3%"] : ["-6%", "6%"],
  );
  const titleX2 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["3%", "-3%"] : ["6%", "-6%"],
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fact-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".facts-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".bio-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bio-text",
            start: "top 88%",
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
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f5f4ef 8%, #f5f4ef 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(180deg, #ffffff 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          paddingTop: "clamp(100px, 15vh, 160px)",
          paddingBottom: "clamp(32px, 5vh, 56px)",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ x: titleX1 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(64px, 11vw, 148px)",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              color: "var(--black)",
              whiteSpace: "nowrap",
              paddingLeft: "clamp(24px, 5vw, 64px)",
              userSelect: "none",
            }}
          >
            About me.
          </p>
        </motion.div>

        <motion.div style={{ x: titleX2 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(64px, 11vw, 148px)",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(0,0,0,0.1)",
              whiteSpace: "nowrap",
              textAlign: "right",
              paddingRight: "clamp(24px, 5vw, 64px)",
              userSelect: "none",
            }}
          >
            Who I am.
          </p>
        </motion.div>
      </div>
      <div
        style={{
          padding: "0 clamp(24px, 5vw, 64px)",
          paddingBottom: "20px",
        }}
      >
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
            marginBottom: "clamp(32px, 5vh, 48px)",
          }}
        >
          01 / About
        </motion.p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            marginBottom: "clamp(64px, 10vh, 100px)",
            alignItems: "start",
          }}
        >
          <div>
            <p
              className="bio-text"
              style={{
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#222",
                lineHeight: 1.75,
                marginBottom: "16px",
                fontWeight: 400,
                opacity: 0,
              }}
            >
              A developer who builds things that work, ranging from backend
              systems and automation pipelines to machine learning models that
              deliver real value.
            </p>
            <p
              className="bio-text"
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "#888",
                lineHeight: 1.8,
                marginBottom: "28px",
                opacity: 0,
              }}
            >
              I&apos;m drawn to problems that sit at the intersection of
              engineering and real-world impact, especially where good code
              actually changes how people work.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  label: "Jakarta, Indonesia",
                  icon: TbMapPinFilled,
                  color: "#B5838D",
                },
                { label: "Telkom University", icon: FaGraduationCap },
              ].map((b) => (
                <span
                  key={b.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    border: "0.5px solid rgba(0,0,0,0.1)",
                    borderRadius: "100px",
                    fontSize: "12px",
                    color: "#666",
                    background: "rgba(255,255,255,0.6)",
                  }}
                >
                  <b.icon size={16} style={{ color: b.color }} />
                  {b.label}
                </span>
              ))}
            </motion.div>
          </div>
          <div
            className="facts-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1px",
              background: "rgba(0,0,0,0.06)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "0.5px solid rgba(0,0,0,0.06)",
            }}
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="fact-item"
                style={{
                  flex: "1 1 200px",
                  background: "#fafaf8",
                  padding: "clamp(20px, 3vw, 32px)",
                  opacity: 0,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fafaf8";
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontSize: "clamp(30px, 4vw, 48px)",
                    color: "var(--black)",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {fact.value}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--black)",
                    marginBottom: "3px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {fact.label}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  {fact.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--mid)",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Technical Skills
        </motion.p>
      </div>
      <div
        style={{
          overflow: "hidden",
          paddingTop: "25px",
        }}
      >
        {mappedLogoRows.map((row, rowIndex) => (
          <MarqueeRow key={rowIndex} row={row} rowIndex={rowIndex} isMobile={isMobile} />
        ))}
      </div>
      <div
        style={{
          height: "clamp(60px, 8vh, 100px)",
          background: "linear-gradient(180deg, transparent 0%, #f0efe8 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
