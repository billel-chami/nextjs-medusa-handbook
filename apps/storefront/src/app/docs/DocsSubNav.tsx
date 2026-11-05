"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/infrastructure/locale-context";

export function DocsSubNav() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const backLabel = isArabic
    ? "العودة للرئيسية"
    : isFrench
    ? "Retour à l'Accueil"
    : "Back to Canvas";

  const allModulesLabel = isArabic
    ? "جميع الوحدات (13)"
    : isFrench
    ? "Tous les 13 Modules"
    : "All 13 Modules";

  return (
    <div className="border-b border-border-subtle bg-surface-elevated/70 backdrop-blur-md sticky top-18 z-30">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between ps-6 pe-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-caption font-semibold text-content-secondary hover:text-content-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            <span>{backLabel}</span>
          </Link>
          <span className="text-content-muted">/</span>
          <span className="font-mono text-caption font-bold text-brand-primary">
            OCTERA E-COMMERCE HANDBOOK
          </span>
        </div>

        <Link
          href="/docs"
          className="text-caption font-semibold text-content-secondary hover:text-content-primary"
        >
          {allModulesLabel}
        </Link>
      </div>
    </div>
  );
}

