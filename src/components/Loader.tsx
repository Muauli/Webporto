"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let _loaderPlayed = false;

export default function Loader() {
  const [visible, setVisible] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "fadeText" | "reveal">(
    "counting",
  );

  useEffect(() => {
    const init = () => {
      if (_loaderPlayed || sessionStorage.getItem("lp") === "1") {
        _loaderPlayed = true;
        setVisible(false);
        return;
      }
      setVisible(true);
    };
    init();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("fadeText"), 200);
          setTimeout(() => setPhase("reveal"), 700);
          setTimeout(() => {
            setVisible(false);
            _loaderPlayed = true;
            sessionStorage.setItem("lp", "1");
          }, 1800);
          return 100;
        }
        const increment = prev < 60 ? 1.2 : prev < 85 ? 2.5 : 4;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [visible]);

  if (visible === null || !visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ y: phase === "reveal" ? "-100%" : "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--black)",
        }}
      />
      <motion.div
        animate={{ opacity: phase === "counting" ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(28px, 5vw, 56px)",
          pointerEvents: "none",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "-0.3px",
            fontStyle: "italic",
          }}
        >
          Roy.
        </motion.span>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "clamp(16px, 2vh, 24px)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(22px, 3.5vw, 48px)",
                color: "#ffffff",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              {"Muhammad Reza Aulia".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: char === " " ? "inline" : "inline-block",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(72px, 13vw, 148px)",
                color: "#ffffff",
                letterSpacing: "-4px",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {Math.floor(progress)}
            </motion.span>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--accent)",
                transformOrigin: "left center",
                transform: `scaleX(${progress / 100})`,
                transition: "transform 0.1s linear",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.22)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "var(--font-syne)",
              }}
            >
              Loading
            </span>
            <span
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.22)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "var(--font-syne)",
              }}
            >
              Portfolio 2026
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
