"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  startTransition,
} from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { TechBadge } from "./TechIcon";
import { useStairTransition } from "./StairTransition";
import { projects, type ProjectEntry } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);


// ScrambleTitle: always-on vertical slot machine on 2-3 letters, loops forever
function ScrambleTitle({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlsRef = useRef<gsap.core.Timeline[]>([]);
  const delaysRef = useRef<gsap.core.Tween[]>([]);

  // Pick 2 or 3 non-space letter positions, evenly spaced, deterministic per title
  const animatedIndices = useMemo(() => {
    const letters = title
      .split("")
      .map((c, i) => ({ c, i }))
      .filter(({ c }) => c !== " ");
    if (letters.length < 2) return letters.map(({ i }) => i);
    const count = letters.length >= 8 ? 3 : 2;
    const step = Math.floor(letters.length / count);
    return Array.from({ length: count }, (_, k) => letters[k * step].i);
  }, [title]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Recursive cycle: exit, jump from opposite side with same char, enter, repeat
    function runCycle(inner: HTMLSpanElement, realChar: string) {
      const dir = Math.random() > 0.5 ? 1 : -1;
      const speed = 1.2 + Math.random() * 1.6; // 1.2s to 2.8s
      const restDuration = 0.8 + Math.random() * 1.4;

      const tl = gsap.timeline({
        onComplete() {
          const idx = tlsRef.current.indexOf(tl);
          if (idx !== -1) tlsRef.current.splice(idx, 1);
          if (inner.isConnected) runCycle(inner, realChar);
        },
      });
      tlsRef.current.push(tl);

      // Rest: real char visible, centered
      tl.set(inner, { yPercent: 0 });
      tl.call(() => {
        inner.textContent = realChar;
      });
      tl.to(inner, { duration: restDuration });

      // Exit: letter moves out in dir direction
      tl.to(inner, {
        yPercent: dir * 110,
        duration: speed * 0.3,
        ease: "power2.in",
      });

      // Jump: instantly reposition from opposite side, same char still shown
      tl.set(inner, { yPercent: -dir * 110 });

      // Enter: same letter slides back to center
      tl.to(inner, {
        yPercent: 0,
        duration: speed * 0.42,
        ease: "power2.out",
      });
    }

    // Start each animated letter independently with a staggered delay
    animatedIndices.forEach((letterIndex, k) => {
      const inner = container.querySelector<HTMLSpanElement>(
        `.slot-inner[data-index="${letterIndex}"]`,
      );
      if (!inner) return;
      const realChar = inner.dataset.char ?? "";
      const delay = k * 0.5 + Math.random() * 1.0; // 0s to 1.5s stagger

      const dc = gsap.delayedCall(delay, () => runCycle(inner, realChar));
      delaysRef.current.push(dc);
    });

    return () => {
      tlsRef.current.forEach((tl) => tl.kill());
      delaysRef.current.forEach((dc) => dc.kill());
      tlsRef.current = [];
      delaysRef.current = [];
      container.querySelectorAll<HTMLSpanElement>(".slot-inner").forEach((span) => {
        span.textContent = span.dataset.char ?? "";
        gsap.set(span, { yPercent: 0 });
      });
    };
  }, [animatedIndices]);

  return (
    <div ref={containerRef} style={{ display: "inline" }}>
      {title.split("").map((char, i) => {
        if (char === " ") {
          return (
            <span key={i} style={{ display: "inline" }}>
              {" "}
            </span>
          );
        }
        if (!animatedIndices.includes(i)) {
          return (
            <span key={i} style={{ display: "inline-block" }}>
              {char}
            </span>
          );
        }
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              height: "1.2em",
              verticalAlign: "bottom",
            }}
          >
            <span
              className="slot-inner"
              data-char={char}
              data-index={String(i)}
              style={{ display: "block" }}
            >
              {char}
            </span>
          </span>
        );
      })}
    </div>
  );
}

// ProjectCard
interface ProjectCardProps {
  project: ProjectEntry;
  anyHovered: boolean;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
  isMobile: boolean;
  isFirst: boolean;
  onNavigate: (slug: string) => void;
}

function ProjectCard({
  project,
  anyHovered,
  onHoverEnter,
  onHoverLeave,
  isMobile,
  isFirst,
  onNavigate,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    onHoverEnter();
  };

  const handleLeave = () => {
    setHovered(false);
    onHoverLeave();
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => onNavigate(project.slug)}
      onKeyDown={(e) => { if (e.key === "Enter") onNavigate(project.slug); }}
      style={{ textDecoration: "none", flexShrink: 0, cursor: "pointer" }}
    >
      <motion.div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        animate={{
          scale: hovered ? 1.03 : anyHovered ? 0.97 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "relative",
          width: isMobile ? "100%" : "clamp(420px, 55vw, 680px)",
          height: isMobile
            ? "clamp(200px, 50vw, 300px)"
            : "clamp(260px, 38vh, 420px)",
          borderRadius: 16,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={project.image}
            fill
            alt={project.title}
            sizes="(max-width: 768px) 85vw, 55vw"
            loading={isFirst ? "eager" : "lazy"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.2)",
            pointerEvents: "none",
          }}
        />

        {/* Number watermark */}
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 22,
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(52px, 7vw, 88px)",
            color: "rgba(255,255,255,0.07)",
            letterSpacing: "-4px",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {project.number}
        </div>

        {/* Bottom gradient + content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "clamp(20px, 3vw, 32px)",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(18px, 2.2vw, 28px)",
              color: "#ffffff",
              letterSpacing: "-0.5px",
              marginBottom: "10px",
              lineHeight: 1.15,
            }}
          >
            <ScrambleTitle title={project.title} />
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tech.map((tag) => (
              <TechBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* Arrow - fades in from bottom-left on hover */}
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : -12,
            y: hovered ? 0 : 12,
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            color: "var(--accent)",
            pointerEvents: "none",
          }}
        >
          <ArrowUpRight size={28} />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Main component
export default function Projects() {
  const router = useRouter();
  const { play } = useStairTransition();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [anyHovered, setAnyHovered] = useState(false);

  // Detect mobile + set up GSAP horizontal scroll (combined to avoid double-run)
  useEffect(() => {
    const mobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0;
    startTransition(() => setIsMobile(mobile));

    if (mobile) return;

    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const getTravel = () => Math.max(0, track.scrollWidth - window.innerWidth);

    section.style.height = `${getTravel() + window.innerHeight}px`;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getTravel(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getTravel()}`,
          scrub: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            section.style.height = `${getTravel() + window.innerHeight}px`;
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHoverEnter = useCallback(() => setAnyHovered(true), []);
  const handleHoverLeave = useCallback(() => setAnyHovered(false), []);

  const handleNavigate = useCallback(
    async (slug: string) => {
      await play();
      router.push(`/projects/${slug}`);
    },
    [play, router],
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-panel"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, var(--white) 0%, rgba(255,255,255,0.14) 45%, rgba(255,255,255,0.06) 100%)",
      }}
    >
      {/* Pin zone: CSS sticky keeps this in view while GSAP scrubs the track */}
      <div
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 0,
          height: isMobile ? "auto" : "100vh",
          overflow: isMobile ? "visible" : "hidden",
        }}
      >
        {/* Section header - stays visible as cards scroll past */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? undefined : "clamp(40px, 6vh, 64px)",
            left: isMobile ? undefined : "clamp(24px, 5vw, 64px)",
            padding: isMobile
              ? "clamp(56px, 10vh, 80px) clamp(24px, 5vw, 64px) 32px"
              : undefined,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--mid)",
              marginBottom: "10px",
            }}
          >
            03 / Projects
          </p>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(32px, 5vw, 64px)",
              letterSpacing: "-2px",
              color: "var(--black)",
              lineHeight: 1,
            }}
          >
            Selected Work
          </h2>
        </motion.div>

        {/* Horizontal card track (vertical on mobile) */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            height: isMobile ? "auto" : "100%",
            gap: "clamp(20px, 3vw, 32px)",
            padding: isMobile
              ? "0 clamp(24px, 5vw, 64px) clamp(60px, 8vh, 80px)"
              : "0 clamp(24px, 5vw, 64px)",
            width: isMobile ? "100%" : "max-content",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              anyHovered={anyHovered}
              onHoverEnter={handleHoverEnter}
              onHoverLeave={handleHoverLeave}
              isMobile={isMobile}
              isFirst={index === 0}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
