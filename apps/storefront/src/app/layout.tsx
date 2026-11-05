import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Header } from "@/presentation/components/Header";
import { LocaleProvider } from "@/infrastructure/locale-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Octera E-Commerce Handbook — Next.js 16 & Medusa v2 Architecture",
  description:
    "Enterprise-grade headless e-commerce engineering handbook and starter platform built with Next.js 16, Medusa v2, Tailwind CSS v4, and GSAP.",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`}>
      <body className="min-h-screen flex flex-col bg-canvas text-content-primary antialiased">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border-subtle bg-surface-panel py-12">
            <div className="mx-auto max-w-7xl ps-6 pe-6 text-center md:text-start flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-body-sm text-content-secondary">
                © {new Date().getFullYear()} Octera E-Commerce. Clean Architecture & First-Principles Engineering.
              </p>
              <div className="flex items-center gap-6 text-caption text-content-muted">
                <span>Next.js 16 App Router</span>
                <span>•</span>
                <span>Medusa v2 Modular Core</span>
                <span>•</span>
                <span>Tailwind v4 (@theme)</span>
              </div>
            </div>
          </footer>
        </LocaleProvider>
      </body>
    </html>
  );
}
