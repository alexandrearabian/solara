"use client";

import { useEffect, useRef } from "react";

// Fades children in once when they enter the viewport. Animation itself is CSS (.reveal in globals.css),
// so reduced-motion users get content immediately.
export function Reveal({
  children,
  className = "",
  i = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  i?: number;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-shown", "");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${className}`}
      style={{ "--i": i } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
