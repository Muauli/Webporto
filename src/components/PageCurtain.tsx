"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";

interface CurtainCtxValue {
  showCurtain: (fromTop?: boolean) => Promise<void>;
}

const CurtainCtx = createContext<CurtainCtxValue | null>(null);

export function useCurtain(): CurtainCtxValue {
  const ctx = useContext(CurtainCtx);
  if (!ctx) throw new Error("useCurtain must be used inside <PageCurtain>");
  return ctx;
}

export default function PageCurtain({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const curtainEl = useRef<HTMLDivElement>(null);
  const dirRef = useRef<"top" | "bottom">("bottom");
  const isFirstPathname = useRef(true);
  const pathname = usePathname();

  const hideCurtain = useCallback(() => {
    const el = curtainEl.current;
    if (!el) return;
    el.style.pointerEvents = "none";
    el.style.transformOrigin =
      dirRef.current === "top" ? "bottom" : "top";
    animate(el, { scaleY: 0 }, { duration: 0.4, ease: [0.76, 0, 0.24, 1] });
  }, [animate]);

  const showCurtain = useCallback(
    async (fromTop = false) => {
      const el = curtainEl.current;
      if (!el) return;
      dirRef.current = fromTop ? "top" : "bottom";
      el.style.transformOrigin = dirRef.current;
      el.style.pointerEvents = "all";
      await animate(
        el,
        { scaleY: 1 },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
      );
      await new Promise<void>((r) => setTimeout(r, 150));
    },
    [animate],
  );

  // Auto-hide the curtain when the route changes (after showCurtain + navigate)
  useEffect(() => {
    if (isFirstPathname.current) {
      isFirstPathname.current = false;
      return;
    }
    hideCurtain();
  }, [pathname, hideCurtain]);

  return (
    <CurtainCtx.Provider value={{ showCurtain }}>
      <div ref={scope} style={{ display: "contents" }}>
        <div
          ref={curtainEl}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--accent)",
            zIndex: 9999,
            pointerEvents: "none",
            transform: "scaleY(0)",
            transformOrigin: "bottom",
            willChange: "transform",
          }}
        />
        {children}
      </div>
    </CurtainCtx.Provider>
  );
}
