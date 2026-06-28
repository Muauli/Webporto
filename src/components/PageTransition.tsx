"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // If the loader has already played in this session, skip the 1500ms delay
    // so content appears immediately when returning from a project page.
    const skipDelay =
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem("lp") === "1";

    if (skipDelay) {
      setMounted(true);
      return;
    }

    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
