"use client";

import { useEffect, useRef } from "react";

// Not in TypeScript's DOM lib yet.
type ScrollTimelineCtor = new (o: { source: Element }) => AnimationTimeline;

// A line drawn behind the page as you scroll. It runs down every [data-line] block inside the same parent
// (at that fraction of the content width) and ends on [data-line-end]; its head tracks 55% down the
// viewport, and on arrival the whole line turns brand blue. The parent must be `relative`.
// Where supported it is a scroll-driven animation, so it stays in sync with touch scrolling; elsewhere the
// same animation is scrubbed from scroll events. Reduced-motion users get the full line and no head.
export function ScrollLine() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const headRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const svg = svgRef.current!;
    const path = pathRef.current!;
    const head = headRef.current!;
    const box = wrap.parentElement!;
    const end = box.querySelector<HTMLElement>("[data-line-end]")!;
    const root = document.documentElement;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const Timeline = (window as unknown as { ScrollTimeline?: ScrollTimelineCtor }).ScrollTimeline;

    let anims: Animation[] = [];
    let top = 0; // box offset from document top
    let doneY = 0; // head y (box coords) at which the line is complete
    let frame = 0;

    function layout() {
      const b = box.getBoundingClientRect();
      const e = end.getBoundingClientRect();
      top = b.top + scrollY;
      const W = b.width;
      const ex = e.left - b.left;
      const ey = e.top - b.top;
      doneY = ey;

      // lg+: run down each block at its fraction of the content width, chosen to sit in empty space.
      // Below lg the content is full width, so alternate between the side gutters instead.
      const narrow = W < 1024;
      const C = Math.min(W, 1400);
      const pts: [number, number][] = [];
      box.querySelectorAll<HTMLElement>("[data-line]").forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const x = narrow ? (i % 2 ? W - 8 : 8) : (W - C) / 2 + Number(el.dataset.line) * C;
        const inset = Math.min(narrow ? 24 : 60, r.height / 4); // turns happen in the padding between blocks
        pts.push([x, r.top - b.top + inset], [x, r.bottom - b.top - inset]);
      });
      // Final approach: turn halfway between the last block and the peak, then drop straight in.
      const last = Math.min(pts.at(-1)![1], ey - 160);
      pts.at(-1)![1] = last;
      pts.push([ex, (last + ey) / 2], [ex, ey]);
      // The line only ever goes down; the scroll mapping below relies on it too.
      const down = pts.filter((p, i) => i === 0 || p[1] > pts[i - 1][1]);

      // Straight runs with each corner replaced by a quadratic curve through the vertex.
      let d = `M${down[0]}`;
      for (let i = 1; i < down.length - 1; i++) {
        const [p, c, q] = [down[i - 1], down[i], down[i + 1]];
        const r = Math.min(140, Math.hypot(c[0] - p[0], c[1] - p[1]) / 2, Math.hypot(q[0] - c[0], q[1] - c[1]) / 2);
        const at = (a: number[]) => {
          const l = Math.hypot(a[0] - c[0], a[1] - c[1]);
          return [c[0] + ((a[0] - c[0]) * r) / l, c[1] + ((a[1] - c[1]) * r) / l];
        };
        d += `L${at(p)}Q${c} ${at(q)}`;
      }
      d += `L${down.at(-1)}`;
      svg.setAttribute("viewBox", `0 0 ${W} ${b.height}`);
      path.setAttribute("d", d);

      const total = path.getTotalLength();
      path.style.strokeDasharray = `${total}px`;
      anims.forEach((a) => a.cancel());
      anims = [];
      head.hidden = still;
      if (still) return sync();

      // Keyframes keyed by page scroll progress: the head reaches each sampled point as that point
      // passes 55% down the viewport. Samples before scroll 0 / after the end collapse onto 0 and 1.
      const maxScroll = root.scrollHeight - root.clientHeight;
      const samples: { o: number; l: number; x: number; y: number }[] = [];
      for (let l = 0; ; l = Math.min(l + 24, total)) {
        const { x, y } = path.getPointAtLength(l);
        samples.push({ o: (y + top - root.clientHeight * 0.55) / maxScroll, l, x, y });
        if (l === total) break;
      }
      const from = Math.max(0, samples.findLastIndex((s) => s.o <= 0));
      const to = samples.findIndex((s) => s.o >= 1);
      const kept = samples.slice(from, to === -1 ? undefined : to + 1);
      kept.unshift({ ...kept[0] });
      kept.push({ ...kept.at(-1)! });
      kept[0].o = 0;
      kept.at(-1)!.o = 1;
      kept.forEach((s) => (s.o = Math.min(1, Math.max(0, s.o))));

      const opts: KeyframeAnimationOptions = Timeline
        ? { timeline: new Timeline({ source: root }), fill: "both" }
        : { duration: 1000, fill: "both" };
      anims = [
        path.animate(kept.map((s) => ({ offset: s.o, strokeDashoffset: `${total - s.l}px` })), opts),
        head.animate(kept.map((s) => ({ offset: s.o, transform: `translate(${s.x}px, ${s.y}px)` })), opts),
      ];
      if (!Timeline) anims.forEach((a) => a.pause());
      sync();
    }

    // Per scroll frame: scrub the fallback animation and flip the "arrived" colour. No layout reads.
    function sync() {
      frame = 0;
      const progress = scrollY / (root.scrollHeight - root.clientHeight);
      if (!Timeline) anims.forEach((a) => (a.currentTime = Math.min(1, Math.max(0, progress)) * 1000));
      wrap.toggleAttribute("data-done", still || scrollY + root.clientHeight * 0.55 - top >= doneY);
    }

    const onScroll = () => (frame ||= requestAnimationFrame(sync));
    const ro = new ResizeObserver(layout);
    ro.observe(box);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      anims.forEach((a) => a.cancel());
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden className="scroll-line pointer-events-none absolute inset-0 -z-10">
      <svg ref={svgRef} className="size-full">
        <path ref={pathRef} fill="none" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span ref={headRef} className="absolute top-0 left-0 -mt-2 -ml-2 size-4 rounded-full will-change-transform" />
    </div>
  );
}
