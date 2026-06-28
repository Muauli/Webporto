"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { stagger, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";

interface StairCtxValue {
  play: () => Promise<void>;
}

const StairCtx = createContext<StairCtxValue | null>(null);

export function useStairTransition(): StairCtxValue {
  const ctx = useContext(StairCtx);
  if (!ctx) throw new Error("useStairTransition must be inside <StairTransition>");
  return ctx;
}

const BAR_COUNT = 6;

export default function StairTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const pathname = usePathname();
  const isFirst = useRef(true);
  const [blocking, setBlocking] = useState(false);

  const play = useCallback(async () => {
    setBlocking(true);
    // Reset bars off-screen right before animating
    await animate(".stair-bar", { x: "100%" }, { duration: 0 });
    // Slide in from right with stagger
    await animate(
      ".stair-bar",
      { x: "0%" },
      { duration: 0.3, ease: [0.4, 0, 1, 1], delay: stagger(0.05) },
    );
    // Minimum hold while navigation begins
    await new Promise<void>((r) => setTimeout(r, 150));
  }, [animate]);

  // Auto-slide bars out once the new page pathname is registered
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const exit = async () => {
      await animate(
        ".stair-bar",
        { x: "-100%" },
        { duration: 0.3, ease: [0, 0, 0.6, 1], delay: stagger(0.05) },
      );
      setBlocking(false);
    };
    exit();
  }, [pathname, animate]);

  return (
    <StairCtx.Provider value={{ play }}>
      <div ref={scope} style={{ display: "contents" }}>
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: blocking ? "all" : "none",
          }}
        >
          {Array.from({ length: BAR_COUNT }).map((_, i) => (
            <div
              key={i}
              className="stair-bar"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${(i / BAR_COUNT) * 100}%`,
                height: `${100 / BAR_COUNT}%`,
                background: "var(--white)",
                willChange: "transform",
                transform: "translateX(100%)",
              }}
            />
          ))}
        </div>
        {children}
      </div>
    </StairCtx.Provider>
  );
}
