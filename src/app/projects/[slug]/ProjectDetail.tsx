"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TechBadge } from "@/components/TechIcon";
import Navbar from "@/components/Navbar";
import { useStairTransition } from "@/components/StairTransition";
import type { ProjectEntry } from "@/data/projects";

const HeroScene = dynamic(() => import("@/components/Heroscene"), { ssr: false });

interface Props {
  project: ProjectEntry;
}

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-syne)",
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--mid)",
  display: "block",
  marginBottom: "16px",
};

const pillStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 20px",
  border: "0.5px solid rgba(0,0,0,0.15)",
  borderRadius: 100,
  background: "rgba(255,255,255,0.92)",
  color: "var(--black)",
  fontFamily: "var(--font-syne)",
  fontSize: "13px",
  textDecoration: "none",
  letterSpacing: "0.3px",
  cursor: "pointer",
};

export default function ProjectDetail({ project }: Props) {
  const router = useRouter();
  const { play } = useStairTransition();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768 || navigator.maxTouchPoints > 0);
  }, []);

  const handleBack = useCallback(async () => {
    sessionStorage.setItem("scrollTarget", "projects");
    await play();
    router.push("/");
  }, [play, router]);

  return (
    <>
      {/* Blurred HeroScene backdrop — only rendered after hydration */}
      {mounted && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              filter: "blur(24px) brightness(1.1) saturate(0.8)",
              transform: "scale(1.05)",
              transformOrigin: "center",
              pointerEvents: "none",
            }}
          >
            <HeroScene interactive={false} />
          </div>
        </div>
      )}

      <Navbar />

      {/* Scrollable content — white overlay keeps text readable over HeroScene */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          background: "rgba(255,255,255,0.72)",
          paddingTop: "clamp(80px, 10vh, 100px)",
          paddingBottom: "clamp(48px, 8vh, 80px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 64px)",
          }}
        >
          {/* TOP CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "rgba(200,240,79,0.06)",
              borderRadius: "16px",
              padding: "32px",
              marginBottom: "48px",
            }}
          >
            {/* Title — full width */}
            <h1
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(36px, 5vw, 72px)",
                letterSpacing: "-2px",
                color: "var(--black)",
                lineHeight: 1.0,
                marginBottom: "24px",
              }}
            >
              {project.title}
            </h1>

            {/* Grid: image left (2fr), metadata right (1fr) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: mounted && isMobile ? "1fr" : "2fr 1fr",
                gap: "24px",
                alignItems: "start",
              }}
            >
              {/* Left: project image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: "16 / 9",
                  background: "var(--white)",
                }}
              >
                <Image
                  src={project.image}
                  fill
                  priority
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Right: links + tech stacks */}
              <div>
                <span style={labelStyle}>Links</span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "32px",
                  }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={pillStyle}
                  >
                    <FaGithub size={15} />
                    GitHub
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={pillStyle}
                    >
                      Live
                      <ArrowUpRight size={14} />
                    </motion.a>
                  )}
                </div>

                <span style={labelStyle}>Tech Stacks</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tech.map((tag) => (
                    <TechBadge key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Background section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ marginBottom: "48px" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                letterSpacing: "-1px",
                color: "var(--black)",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Background
            </h2>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(13px, 1.3vw, 16px)",
                color: "#555",
                lineHeight: 1.9,
              }}
            >
              {project.background}
            </p>
          </motion.div>

          {/* About Project section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            style={{ marginBottom: "64px" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                letterSpacing: "-1px",
                color: "var(--black)",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              About Project
            </h2>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(14px, 1.5vw, 18px)",
                color: "var(--mid)",
                lineHeight: 1.75,
              }}
            >
              {project.solution}
            </p>
          </motion.div>

          {/* Back to all projects — centered */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.button
              onClick={handleBack}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={pillStyle}
            >
              <ArrowLeft size={14} />
              Back to all projects
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
