"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "0.5px solid #1a1a1a",
        padding: "clamp(24px, 4vh, 40px) clamp(20px, 5vw, 80px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "15px",
            color: "#333",
            marginBottom: "4px",
            letterSpacing: "-0.3px",
          }}
        >
          Muhammad Reza Aulia
        </p>
        <p
          style={{ fontSize: "11px", color: "#2a2a2a", letterSpacing: "0.3px" }}
        >
          © 2026 · copyright Muhammad Reza Aulia
        </p>
      </div>

      {/* Tengah — social icons */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {[
          {
            icon: <FaGithub size={18} />,
            href: "https://github.com/Muauli",
            label: "GitHub",
          },
          {
            icon: <FaLinkedin size={18} />,
            href: "https://www.linkedin.com/in/muhammad-reza-aulia-397773362/",
            label: "LinkedIn",
          },
          {
            icon: <FaInstagram size={18} />,
            href: "https://www.instagram.com/murezaaulia/",
            label: "Instagram",
          },
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.label}
            whileHover={{ y: -3, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "36px",
              height: "36px",
              border: "0.5px solid #1a1a1a",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#333",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1a1a1a";
              e.currentTarget.style.color = "#333";
            }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -2 }}
        style={{
          background: "none",
          border: "0.5px solid #2a2a2a",
          color: "var(--mid)",
          padding: "8px 18px",
          borderRadius: "100px",
          fontSize: "11px",
          cursor: "pointer",
          fontFamily: "var(--font-syne)",
          letterSpacing: "0.5px",
          transition: "border-color 0.2s, color 0.2s",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          minHeight: "44px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#2a2a2a";
          e.currentTarget.style.color = "var(--mid)";
        }}
      >
        Back to top <ArrowUp size={14} />
      </motion.button>
    </footer>
  );
}
