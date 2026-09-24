import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Schibsted_Grotesk } from "next/font/google";
import { content, hasLocale, locales } from "./content";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const schibsted = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"] });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = content[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${lang}`, languages: { es: "/es", en: "/en", "x-default": "/es" } },
    openGraph: { title: meta.title, description: meta.description, locale: lang, type: "website" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f1ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f14" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    // suppressHydrationWarning: extensions (Dark Reader) stamp attributes on <html> before React hydrates.
    <html lang={lang} className={`${geist.variable} ${schibsted.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* The site ships its own dark theme; tells Dark Reader not to repaint it. */}
        <meta name="darkreader-lock" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
