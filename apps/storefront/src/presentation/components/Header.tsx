"use client";

import Link from "next/link";
import { ShoppingBag, Globe, ChevronDown, Check } from "lucide-react";
import { useLocale, Locale } from "@/infrastructure/locale-context";

const LANGUAGES: readonly {
  readonly code: Locale;
  readonly label: string;
}[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
];

export function Header() {
  const { locale, setLocale } = useLocale();
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const curriculumLabel = isArabic
    ? "المنهج العملي"
    : isFrench
    ? "Programme"
    : "Curriculum";

  const handbookLabel = isArabic
    ? "دليل الهندسة والشرح"
    : isFrench
    ? "Manuel & Formation"
    : "Handbook & Crash Course";

  const cartLabel = isArabic
    ? "عرض سلة المشتريات"
    : isFrench
    ? "Voir le panier"
    : "View shopping bag";

  const activeLang = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-surface-elevated/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between ps-6 pe-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-h3 font-bold tracking-tight text-content-primary"
            aria-label="Octera E-Commerce Handbook"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-primary text-content-inverse font-mono text-body-sm font-bold">
              O
            </span>
            <span>OCTERA</span>
          </Link>

          {/* Navigation Items (Logical Spacing) */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            <Link
              href="/#modules"
              className="text-body-sm font-medium text-content-secondary hover:text-content-primary transition-colors duration-fast"
            >
              {curriculumLabel}
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 ps-3 pe-3 py-1 text-body-sm font-semibold text-brand-primary hover:bg-brand-primary/20 transition-colors duration-fast"
            >
              <span>{handbookLabel}</span>
            </Link>
          </nav>
        </div>

        {/* Action Controls: Hover Dropdown Language Switcher & Cart Indicator */}
        <div className="flex items-center gap-4">
          {/* Simple Dropdown on Hover */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-border-strong bg-surface-panel ps-3.5 pe-3 py-1.5 text-caption font-bold text-content-primary hover:bg-surface-elevated transition-all duration-fast shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label="Language switcher"
            >
              <Globe className="h-3.5 w-3.5 text-brand-primary" aria-hidden="true" />
              <span>{activeLang.label}</span>
              <ChevronDown className="h-3.5 w-3.5 text-content-muted transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu (on hover with invisible bridge) */}
            <div className="absolute end-0 top-full pt-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-fast z-50">
              <div className="w-40 rounded-xl border border-border-strong bg-surface-elevated p-1.5 shadow-lg space-y-0.5 text-start">
                {LANGUAGES.map((lang) => {
                  const isActive = locale === lang.code;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setLocale(lang.code)}
                      className={`w-full flex items-center justify-between ps-3 pe-3 py-2 rounded-lg text-caption font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-brand-primary/10 text-brand-primary font-bold"
                          : "text-content-secondary hover:bg-surface-panel hover:text-content-primary"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {isActive && <Check className="h-3.5 w-3.5 text-brand-primary" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cart Trigger */}
          <Link
            href="#cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-panel text-content-primary hover:bg-surface-sunken transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label={cartLabel}
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -top-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-content-inverse">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

