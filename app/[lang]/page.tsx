import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Browser,
  CalendarCheck,
  Plugs,
  Plus,
  ShoppingBag,
} from "@phosphor-icons/react/dist/ssr";
import { BOOKING_URL, EMAIL, content, type Locale } from "./content";
import { Reveal } from "./Reveal";
import { ScrollLine } from "./ScrollLine";

// PLACEHOLDER stock photos. Drop real files in /public/images and point these at "/images/<name>.jpg".
// Photos get the blue duotone (.duo), so real ones will match the brand automatically.
const IMAGES = {
  almendro: "https://picsum.photos/id/849/1400/1050",
  nordvik: "https://picsum.photos/id/379/1400/1050",
  mares: "https://picsum.photos/id/909/1400/1050",
};

const SERVICE_ICONS = [AppWindow, ShoppingBag, CalendarCheck, Browser, Plugs];

// Process cards: [dark, bright] steps of the brand blue. The giant numeral is cut out in the page color.
const PROCESS_SHADES = [
  ["#0a1a5c", "#1d4eff"],
  ["#0d3b8e", "#3c7dff"],
  ["#0b4a7a", "#1f9bf0"],
  ["#13235e", "#6e9dff"],
];

// Stepped "skyline" edge rising into the closing band (heights in %).
const STEPS = [10, 10, 20, 20, 20, 35, 35, 50, 65, 80, 100, 100, 100, 80, 65, 50, 35, 20, 10, 10];

const display = "font-bold tracking-[-0.04em]";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale; // validated in layout
  const t = content[lang];
  const other: Locale = lang === "es" ? "en" : "es";

  return (
    <>
      <header id="top" className="mx-auto flex max-w-[1400px] items-center justify-between px-4 pt-6 md:px-8">
        <Logo />
        <Link
          href={`/${other}`}
          hrefLang={other}
          aria-label={other === "en" ? "English" : "Español"}
          className="flex size-12 items-center justify-center rounded-full text-sm font-semibold uppercase ring-1 ring-fg/70 transition-colors duration-300 hover:bg-fg hover:text-bg"
        >
          {other}
        </Link>
      </header>

      <main>
        {/* Hero: poster type + sunrise mark */}
        <section className="mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-[1400px] items-center gap-12 px-4 pt-10 pb-28 md:px-8 lg:grid-cols-12 lg:pt-0">
          <div className="lg:col-span-8">
            <h1 className={`rise text-[clamp(3rem,7.2vw,7rem)] leading-[1] ${display}`}>
              {t.hero.title} <span className="mark">{t.hero.highlight}</span>
            </h1>
            <p className="rise mt-8 max-w-[44ch] text-lg leading-relaxed text-muted md:text-xl" style={{ "--i": 1 } as React.CSSProperties}>
              {t.hero.body}
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-6" style={{ "--i": 2 } as React.CSSProperties}>
              <BookButton label={t.nav.cta} />
              <a href="#work" className="group inline-flex items-center gap-2 font-medium">
                {t.hero.secondary}
                <ArrowDown weight="bold" className="size-4 text-blue-text transition-transform duration-500 ease-out-soft group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <Sunrise />
          </div>
        </section>

        {/* Everything below the hero shares one scroll line. It runs down each [data-line] block at that fraction
            of the content width (picked to sit in empty space) and ends on the skyline peak. */}
        <div className="relative isolate">
          <ScrollLine />

          {/* Statement */}
          <section data-line="0.2" className="mx-auto grid max-w-[1400px] gap-8 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{t.about.label}</p>
              <p lang="hy" aria-hidden className="mt-6 text-7xl font-bold tracking-[-0.04em] text-blue-text md:text-8xl">
                Նոր
              </p>
            </Reveal>
            <Reveal className="lg:col-span-9" i={1}>
              <p className="font-display text-3xl leading-[1.2] font-medium tracking-[-0.02em] md:text-[2.75rem]">{t.about.lead}</p>
              <p className="mt-8 font-display text-3xl leading-[1.35] font-medium tracking-[-0.02em] md:text-[2.75rem]">
                <Marked text={t.about.body} />
              </p>
            </Reveal>
          </section>

          {/* Services: 2 + 3 grid */}
          <section id="services" data-line="0.85" className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <Reveal>
              <h2 className={`max-w-[14ch] text-5xl leading-[0.98] md:text-7xl ${display}`}>{t.services.title}</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6">
              {t.services.items.map((s, i) => {
                const Icon = SERVICE_ICONS[i];
                const tone = i === 0 ? "bg-blue text-white" : i === 4 ? "bg-ink text-on-dark" : "bg-surface";
                const body = i === 0 ? "text-white/85" : i === 4 ? "text-on-dark-muted" : "text-muted";
                const ring = i === 0 || i === 4 ? "ring-current/60" : "ring-fg/70";
                return (
                  <Reveal key={s.name} i={i % 3} className={i < 2 ? "md:col-span-3" : "md:col-span-2"}>
                    <article className={`flex h-full min-h-72 flex-col rounded-3xl p-8 md:p-10 ${tone}`}>
                      <span className={`flex size-12 items-center justify-center rounded-full ring-2 ${ring}`}>
                        <Icon weight="regular" className="size-5" aria-hidden />
                      </span>
                      <h3 className={`mt-auto pt-12 text-3xl ${display}`}>{s.name}</h3>
                      <p className={`mt-3 max-w-[40ch] leading-relaxed ${body}`}>{s.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* Process: sticky stacked cards with cut-out numerals */}
          <section id="process" data-line="0.85" className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <Reveal>
              <h2 className={`text-5xl leading-[0.98] md:text-7xl ${display}`}>{t.process.title}</h2>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">{t.process.body}</p>
            </Reveal>
            <ol className="mt-16 space-y-6">
              {t.process.steps.map((s, i) => {
                const [dark, bright] = PROCESS_SHADES[i];
                return (
                  <li key={s.name} className="sticky" style={{ top: `calc(1.5rem + ${i} * 1.5rem)` }}>
                    <div className="grid overflow-hidden rounded-3xl text-on-dark md:h-[32rem] md:grid-cols-2">
                      <div className="flex flex-col p-8 md:p-12" style={{ background: dark }}>
                        <span aria-hidden className="font-display text-8xl leading-none font-bold md:hidden" style={{ color: bright }}>
                          {i + 1}
                        </span>
                        <h3 className={`mt-6 text-4xl leading-[1.02] md:mt-0 md:text-6xl ${display}`}>{s.name}</h3>
                        <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-on-dark/80">{s.body}</p>
                      </div>
                      <div aria-hidden className="relative hidden overflow-hidden md:block" style={{ background: bright }}>
                        <span className="absolute -right-[2%] -bottom-[22%] font-display text-[34rem] leading-none font-bold tracking-[-0.06em] text-bg">
                          {i + 1}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Work: staggered two-column layout */}
          <section id="work" className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{t.work.eyebrow}</p>
              <h2 className={`mt-4 text-5xl leading-[0.98] md:text-7xl ${display}`}>{t.work.title}</h2>
            </Reveal>
            <div data-line="0.5" className="mt-16 grid gap-16 md:grid-cols-2 md:gap-10">
              {[0, 1].map((col) => (
                <div key={col} className={`flex flex-col gap-16 ${col ? "md:pt-48" : ""}`}>
                  {t.work.items
                    .filter((_, i) => i % 2 === col)
                    .map((p) => (
                      <Reveal key={p.name}>
                        <article className="group">
                          <div className="duo parallax aspect-[4/3] rounded-3xl">
                            <Image
                              src={IMAGES[p.image as keyof typeof IMAGES]}
                              alt={`${p.name}, ${p.sector}`}
                              fill
                              sizes="(min-width: 768px) 45vw, 100vw"
                              className="object-cover"
                            />
                          </div>
                          <h3 className={`mt-6 text-3xl ${display}`}>{p.name}</h3>
                          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                            {[p.sector, p.scope].map((tag) => (
                              <li key={tag} className="rounded-full px-3 py-1 ring-1 ring-line">
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </article>
                      </Reveal>
                    ))}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section data-line="0.5" className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <Reveal>
              <figure className="grid gap-10 rounded-3xl bg-ink p-8 text-on-dark md:grid-cols-12 md:p-16">
                <blockquote className={`text-3xl leading-[1.12] md:col-span-9 md:text-5xl ${display}`}>
                  &ldquo;{t.quote.body}&rdquo;
                </blockquote>
                <figcaption className="self-end text-xs font-semibold tracking-[0.14em] uppercase md:col-span-3">
                  {t.quote.name}
                  <span className="mt-1 block text-on-dark-muted">{t.quote.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          </section>

          {/* FAQ */}
          <section id="faq" data-line="0.36" className="mx-auto grid max-w-[1400px] gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className={`text-5xl leading-[0.98] md:text-6xl ${display}`}>{t.faq.title}</h2>
            </Reveal>
            <div className="lg:col-span-7">
              {t.faq.items.map((f, i) => (
                <Reveal key={f.q} i={i}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-display text-xl font-semibold tracking-[-0.01em]">
                      {f.q}
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full ring-2 ring-fg/70 transition-colors duration-300 group-open:bg-blue group-open:text-white group-open:ring-blue">
                        <Plus weight="bold" className="faq-icon size-4 transition-transform duration-500 ease-out-soft" aria-hidden />
                      </span>
                    </summary>
                    <p className="max-w-[60ch] pb-7 text-lg leading-relaxed text-muted">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Closing band: stepped skyline edge into full-bleed blue */}
          <section className="mt-16">
            <div aria-hidden className="relative flex h-16 items-end md:h-28">
              {/* Scroll line target: top-centre of the peak (steps 10-12 of 20) */}
              <span data-line-end className="absolute top-0 left-[57.5%]" />
              {STEPS.map((h, i) => (
                <div key={i} className="step flex-1 bg-blue" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="bg-blue pt-16 pb-24 text-white md:pt-20 md:pb-32">
              <div className="mx-auto max-w-[1400px] px-4 md:px-8">
                <Reveal>
                  <h2 className={`max-w-[14ch] text-6xl leading-[0.95] md:text-8xl ${display}`}>{t.cta.title}</h2>
                  <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-white/85 md:text-xl">{t.cta.body}</p>
                  <div className="mt-12 flex flex-wrap items-center gap-8">
                    <BookButton label={t.nav.cta} onBlue />
                    <a href={`mailto:${EMAIL}`} className="font-medium underline decoration-white/50 underline-offset-8 hover:decoration-white">
                      {EMAIL}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer t={t} />
      <Dock t={t} />
    </>
  );
}

// Flat geometric sunrise: the brand mark at hero scale.
function Sunrise() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[20rem] lg:max-w-none">
      <div className="absolute inset-x-0 top-0 bottom-[42%] overflow-hidden">
        <div className="sun-disc absolute inset-x-[8%] top-[8%] aspect-square rounded-full bg-blue" />
      </div>
      <div className="absolute inset-x-0 top-[62%] bottom-0 flex flex-col justify-between">
        {[26, 19, 13, 7].map((h, i) => (
          <div key={h} className="sun-bar rounded-full bg-blue" style={{ height: `${h}%`, "--i": i } as React.CSSProperties} />
        ))}
      </div>
    </div>
  );
}

function Footer({ t }: { t: (typeof content)["es"] }) {
  const links = [
    ["#services", t.nav.services],
    ["#process", t.nav.process],
    ["#work", t.nav.work],
    ["#faq", t.nav.faq],
  ];
  return (
    <footer className="bg-ink pt-20 pb-32 text-on-dark">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo onDark />
          </div>
          <nav className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-on-dark-muted uppercase">{t.footer.nav}</p>
            <ul className="mt-5 space-y-3">
              {links.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-on-dark-muted uppercase">{t.footer.contact}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {t.nav.cta}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p aria-hidden className="wordmark mt-20 font-display text-[calc((min(100vw,1400px)-2rem)/5)] leading-[0.8] font-bold tracking-[-0.06em] whitespace-nowrap md:text-[calc((min(100vw,1400px)-4rem)/5)]">
          Solara <span className="text-blue">Nor</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-on-dark-muted">
          <p>
            © {new Date().getFullYear()} Solara Nor. {t.footer.rights}
          </p>
          <a href="#top" className="inline-flex items-center gap-2 font-semibold tracking-[0.14em] uppercase hover:text-white">
            {t.footer.top}
            <ArrowUp weight="bold" className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Floating bottom dock (Zeynapp-style) in place of a top nav bar.
function Dock({ t }: { t: (typeof content)["es"] }) {
  const links = [
    ["#services", t.nav.services],
    ["#process", t.nav.process],
    ["#work", t.nav.work],
    ["#faq", t.nav.faq],
  ];
  return (
    <nav className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <div className="flex h-14 w-full max-w-md items-center gap-6 rounded-full bg-ink pr-1.5 pl-5 text-on-dark shadow-[0_16px_40px_-16px_rgb(10_26_92/0.6)] ring-1 ring-white/10 md:w-auto md:max-w-none">
        <a href="#top" aria-label="Solara Nor">
          <Logo onDark />
        </a>
        <ul className="hidden items-center gap-6 text-sm text-on-dark-muted md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto rounded-full bg-blue px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-transform active:scale-[0.97]"
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}

function BookButton({ label, onBlue = false }: { label: string; onBlue?: boolean }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-4 rounded-full py-2 pr-2 pl-7 text-lg font-semibold whitespace-nowrap transition-transform duration-300 ease-out-soft active:scale-[0.98] ${
        onBlue ? "bg-ink text-on-dark" : "bg-fg text-bg"
      }`}
    >
      {label}
      <span className="flex size-11 items-center justify-center rounded-full bg-blue text-white transition-transform duration-500 ease-out-soft group-hover:translate-x-1 group-hover:scale-105">
        <ArrowRight weight="bold" className="size-4" aria-hidden />
      </span>
    </a>
  );
}

// *word* in copy renders as a blue marker highlight.
function Marked({ text }: { text: string }) {
  return text.split("*").map((part, i) =>
    i % 2 ? (
      <span key={i} className="mark">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

// Mark: the sunrise in miniature (half disc over a horizon line).
function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.04em] ${onDark ? "text-on-dark" : "text-fg"}`}>
      <span aria-hidden className="flex flex-col items-center gap-[3px]">
        <span className="h-2.5 w-5 rounded-t-full bg-blue" />
        <span className="h-[3px] w-5 rounded-full bg-blue" />
      </span>
      <span>
        Solara <span className={`font-medium ${onDark ? "text-[#7d9bff]" : "text-blue-text"}`}>Nor</span>
      </span>
    </span>
  );
}
