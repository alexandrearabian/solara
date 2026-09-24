"use client";

import { useEffect, useRef } from "react";

// A line drawn behind the page as you scroll. It runs down every [data-line] block inside the same parent
// (at that fraction of the content width) and ends on [data-line-end]; its head tracks the middle of the
// viewport, and on arrival the whole line turns brand blue.
// The parent must be `relative`. Reduced-motion users get the full line, already blue.
export function ScrollLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = svgRef.current!;
    const path = pathRef.current!;
    const head = headRef.current!;
    const box = svg.parentElement!;
    const end = box.querySelector<HTMLElement>("[data-line-end]")!;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let xs: number[] = []; // path sampled every STEP px of length
    let ys: number[] = [];
    let total = 0;
    let top = 0; // box offset from document top
    let frame = 0;
    const STEP = 4;

    function layout() {
      const b = box.getBoundingClientRect();
      const e = end.getBoundingClientRect();
      top = b.top + scrollY;
      const W = b.width;
      const ex = e.left - b.left;
      const ey = e.top - b.top;
      // Below lg the content is full width, so the line keeps to the right-hand gutter instead.
      const C = Math.min(W, 1400);
      const xAt = (f: number) => (W < 1024 ? W - 8 : (W - C) / 2 + f * C);
      const pts: [number, number][] = [];
      for (const el of box.querySelectorAll<HTMLElement>("[data-line]")) {
        const r = el.getBoundingClientRect();
        const x = xAt(Number(el.dataset.line));
        const inset = Math.min(60, r.height / 4); // turns happen in the padding between blocks
        pts.push([x, r.top - b.top + inset], [x, r.bottom - b.top - inset]);
      }
      pts.push([ex, ey - 200], [ex, ey]); // final vertical drop into the target

      // Straight runs with each corner replaced by a quadratic curve through the vertex.
      let d = `M${pts[0]}`;
      for (let i = 1; i < pts.length - 1; i++) {
        const [p, c, q] = [pts[i - 1], pts[i], pts[i + 1]];
        const r = Math.min(140, Math.hypot(c[0] - p[0], c[1] - p[1]) / 2, Math.hypot(q[0] - c[0], q[1] - c[1]) / 2);
        const at = (a: number[]) => {
          const l = Math.hypot(a[0] - c[0], a[1] - c[1]);
          return [c[0] + ((a[0] - c[0]) * r) / l, c[1] + ((a[1] - c[1]) * r) / l];
        };
        d += `L${at(p)}Q${c} ${at(q)}`;
      }
      d += `L${pts.at(-1)}`;
      svg.setAttribute("viewBox", `0 0 ${W} ${b.height}`);
      path.setAttribute("d", d);

      total = path.getTotalLength();
      xs = [];
      ys = [];
      for (let l = 0; l <= total + STEP; l += STEP) {
        const pt = path.getPointAtLength(Math.min(l, total));
        xs.push(pt.x);
        ys.push(pt.y);
      }
      path.style.strokeDasharray = `${total}`;
      draw();
    }

    // y only ever increases along the path, so binary-search the samples for the drawn length.
    function draw() {
      frame = 0;
      const y = still ? Infinity : scrollY + innerHeight * 0.55 - top;
      let lo = 0;
      let hi = ys.length - 1;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (ys[mid] < y) lo = mid + 1;
        else hi = mid;
      }
      path.style.strokeDashoffset = `${total - Math.min(total, lo * STEP)}`;
      head.setAttribute("cx", `${xs[lo]}`);
      head.setAttribute("cy", `${ys[lo]}`);
      svg.toggleAttribute("data-done", y >= ys.at(-1)!);
    }

    const onScroll = () => (frame ||= requestAnimationFrame(draw));
    const ro = new ResizeObserver(layout);
    ro.observe(box);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg ref={svgRef} aria-hidden className="scroll-line pointer-events-none absolute inset-0 -z-10 size-full">
      <path ref={pathRef} fill="none" strokeWidth="4" strokeLinecap="round" />
      <circle ref={headRef} r="8" />
    </svg>
  );
}
