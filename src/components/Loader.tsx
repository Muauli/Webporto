"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Module-level flag: persists for the browser session, resets on hard refresh.
// Prevents the loader from replaying on back navigation.
let _loaderPlayed = false;

export default function Loader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "reveal">("counting");

  useEffect(() => {
    setMounted(true);
    if (_loaderPlayed || sessionStorage.getItem("lp") === "1") {
      _loaderPlayed = true;
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("reveal"), 200);
          setTimeout(() => {
            setVisible(false);
            _loaderPlayed = true;
            if (typeof sessionStorage !== "undefined") {
              sessionStorage.setItem("lp", "1");
            }
          }, 1400);
          return 100;
        }

        const increment = prev < 60 ? 1.2 : prev < 85 ? 2.5 : 4;
        return Math.min(prev + increment, 100);
      });
    }, 18);

    return () => clearInterval(interval);
  }, [visible]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(28px, 5vw, 56px)",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={phase === "reveal" ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--black)",
              zIndex: -1,
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(28px, 5vw, 52px)",
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1,
              marginBottom: "32px",
            }}
          >
            {"Muhammad Reza Aulia".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#222",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                background: "var(--accent)",
                width: `${progress}%`,
                transition: "width 0.1s linear",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "11px",
                color: "#444",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Loading portfolio
            </motion.p>
            <span
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(32px, 5vw, 56px)",
                color: "#333",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              {Math.floor(progress)}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
