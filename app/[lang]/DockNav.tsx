"use client";

import { useEffect, useRef } from "react";

// The dock stays out of the way while the hero's own CTA is on screen, then slides up so booking is always one
// tap away. It also marks the section currently crossing the middle of the viewport (aria-current).
export function DockNav({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = ref.current!;
    const heroCta = document.getElementById("hero-cta")!;

    const show = new IntersectionObserver(([e]) => {
      const shown = !e.isIntersecting && e.boundingClientRect.top < 0;
      nav.toggleAttribute("data-shown", shown);
      nav.inert = !shown;
    });
    show.observe(heroCta);

    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const a = nav.querySelector(`a[href="#${e.target.id}"]`);
          if (e.isIntersecting) a?.setAttribute("aria-current", "location");
          else a?.removeAttribute("aria-current");
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#top"])').forEach((a) => {
      const section = document.querySelector(a.hash);
      if (section) spy.observe(section);
    });

    return () => {
      show.disconnect();
      spy.disconnect();
    };
  }, []);

  return (
    <nav ref={ref} className="dock fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      {children}
    </nav>
  );
}
