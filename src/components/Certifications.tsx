"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CertEntry {
  title: string;
  category: "CERTIFICATION" | "ACHIEVEMENT";
  issuer: string;
  date: string;
  image: string;
  link: string;
}
const allCerts: CertEntry[] = [
  {
    title: "Microsoft Office Specialist: Excel 2019",
    category: "CERTIFICATION",
    issuer: "Microsoft, Certiport",
    date: "July 24, 2024",
    image: "/certs/cert-excel.png",
    link: "https://drive.google.com/drive/folders/103k7M7omJ6h8AuTENN_UrVlseR43HE45",
  },
  {
    title: "EPRT: English Proficiency",
    category: "CERTIFICATION",
    issuer: "Telkom University",
    date: "October 20, 2025",
    image: "/certs/cert-eprt.png",
    link: "https://drive.google.com/drive/folders/1X47f5csK5aBmOGmIEc22nU39In1HAI3n?usp=sharing",
  },
  {
    title: "Agile & Scrum Fundamentals",
    category: "CERTIFICATION",
    issuer: "MindMagine",
    date: "June 23, 2026",
    image: "/certs/cert-agile.png",
    link: "https://drive.google.com/drive/folders/14VtQzKv0_f0ZC4_tcZj_l2jyt49sFbFM",
  },
  {
    title: "AI Azure Fundamentals",
    category: "CERTIFICATION",
    issuer: "Microsoft, Azure",
    date: "March 29, 2026",
    image: "/certs/cert-azure.png",
    link: "https://drive.google.com/drive/folders/1CgeF3Rk_gEmJcWSBv6nRfXPOCqKafZtI",
  },
  {
    title: "REMIND Competition: 2nd Place Silver Medal",
    category: "ACHIEVEMENT",
    issuer: "Epicentrum, Universitas Padjadjaran",
    date: "May 5, 2025",
    image: "/certs/cert-remind.png",
    link: "https://drive.google.com/drive/folders/15ea7E_1jZu9O5zAmy8DMRniihz9Dwf3G",
  },
];

const cardPad = "clamp(18px, 2.5vw, 26px)";

const cardBase: React.CSSProperties = {
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  aspectRatio: "4 / 3",
  background: "var(--black)",
  border: "0.5px solid rgba(255,255,255,0.08)",
};

function CertCard({ cert, index }: { cert: CertEntry; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.07,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...cardBase,
        boxShadow: hovered
          ? "0 0 0 1px var(--accent), 0 0 24px rgba(200,240,79,0.2)"
          : "none",
        transition: "box-shadow 0.3s ease",
        cursor: "default",
      }}
    >
      <Image
        src={cert.image}
        fill
        alt={cert.title}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: cardPad,
          paddingBottom: "68px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "9px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              border: "0.5px solid rgba(255,255,255,0.14)",
              padding: "4px 10px",
              borderRadius: "100px",
            }}
          >
            {cert.category}
          </span>
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "10px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "8px",
            }}
          >
            {cert.issuer} &middot; {cert.date}
          </p>
          <h3
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(15px, 1.5vw, 20px)",
              color: "#ffffff",
              letterSpacing: "-0.3px",
              lineHeight: 1.2,
            }}
          >
            {cert.title}
          </h3>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: cardPad,
          left: cardPad,
          zIndex: 4,
        }}
      >
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 18px",
            borderRadius: "100px",
            background: "var(--accent)",
            color: "var(--black)",
            fontSize: "10px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const certifications = allCerts.filter(
    (cert) => cert.category === "CERTIFICATION",
  );
  const achievements = allCerts.filter(
    (cert) => cert.category === "ACHIEVEMENT",
  );

  return (
    <section
      id="certifications"
      style={{
        background: "transparent",
        padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 64px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: "clamp(48px, 8vh, 80px)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--mid)",
            marginBottom: "12px",
          }}
        >
          04 / Recognition
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
          Milestones
        </h2>
      </motion.div>

      {certifications.length > 0 && (
        <div style={{ marginBottom: "64px" }}>
          <h3
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "24px",
              color: "var(--black)",
              marginBottom: "24px",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              paddingBottom: "12px",
            }}
          >
            Certifications
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "clamp(14px, 2vw, 22px)",
            }}
          >
            {certifications.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </div>
      )}

      {achievements.length > 0 && (
        <div>
          <h3
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "24px",
              color: "var(--black)",
              marginBottom: "24px",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              paddingBottom: "12px",
            }}
          >
            Achievements
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "clamp(14px, 2vw, 22px)",
            }}
          >
            {achievements.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
