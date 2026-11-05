"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, Terminal } from "lucide-react";
import { Button } from "@/presentation/atoms/Button";
import { useLocale } from "@/infrastructure/locale-context";

/**
 * Minimal Starter Hero Component
 * Demonstrates:
 * - Scoped GSAP animation with automatic context cleanup
 * - Zero layout reflow (animates transform & autoAlpha only)
 * - CSS logical properties (ps-*, pe-*, ms-*, me-*, text-start)
 * - Native EN/AR language adaptation
 */
export function StarterHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { locale } = useLocale();
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".starter-anim", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.from(".starter-anim", {
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: "expo.out",
        clearProps: "transform,opacity",
      });
    },
    { scope: containerRef }
  );

  const statusLabel = isArabic
    ? "مشروع مهيأ بالحوكمة والمهارات الذكية"
    : isFrench
    ? "Projet de Démarrage Gouverné par l'IA"
    : "AI-Governed Architecture Starter";

  const titleSub = isArabic
    ? "منصة أوكتيرا المعمارية"
    : isFrench
    ? "Plateforme Octera"
    : "Engineering Handbook";

  const narrative = isArabic
    ? "هيكل برمجي نظيف ومحكم الربط مع Next.js 16 و Medusa v2 و Tailwind CSS v4 و GSAP. عندما تطلب من مساعد الذكاء الاصطناعي بناء أي ميزة، تُفعَّل المهارات المعمارية تلقائياً لفرض معايير العمارة النظيفة وأمان OWASP وتقارير الإرشاد المعرفي المعمقة."
    : isFrench
    ? "Une base architecturale propre propulsée par Next.js 16, Medusa v2, Tailwind CSS v4 et GSAP. Lorsque vous demandez à l'IA de concevoir des fonctionnalités, les compétences intégrées appliquent automatiquement la Clean Architecture, la sécurité OWASP et des rapports de mentorat approfondis."
    : "A clean architectural boilerplate wired with Next.js 16, Medusa v2, Tailwind CSS v4, and GSAP. When you prompt your AI assistant to build features, embedded engineering skills automatically enforce Clean Architecture, OWASP security, and deep mentorship reports.";

  const primaryBtn = isArabic
    ? "استعراض المنهج العملي للتنفيذ"
    : isFrench
    ? "Explorer le Programme Pratique"
    : "Explore Implementation Curriculum";

  const secondaryBtn = isArabic
    ? "قراءة دليل الهندسة (13 وحدة)"
    : isFrench
    ? "Consulter le Manuel Technique (13 Modules)"
    : "Read Engineering Handbook (13 Modules)";

  const badgeFrontend = isArabic ? "الواجهة الأمامية" : isFrench ? "Frontend" : "Frontend";
  const badgeCommerce = isArabic ? "محرك التجارة" : isFrench ? "Commerce" : "Commerce";
  const badgeStyling = isArabic ? "نظام التصميم" : isFrench ? "Design Système" : "Styling";
  const badgeMotion = isArabic ? "الحركة والأداء" : isFrench ? "Animation" : "Motion";

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-b border-border-subtle bg-surface-canvas pt-16 pb-20"
    >
      <div className="mx-auto max-w-5xl ps-6 pe-6 text-center">
        {/* Status Pill */}
        <div className="starter-anim inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-elevated ps-3.5 pe-4 py-1.5 shadow-xs mb-6">
          <span className="flex h-2 w-2 rounded-full bg-state-success animate-pulse" />
          <span className="text-caption font-semibold tracking-wide uppercase text-content-secondary">
            {statusLabel}
          </span>
        </div>

        {/* Title */}
        <h1 className="starter-anim text-display font-extrabold tracking-tight text-content-primary">
          {isArabic ? (
            <>
              دليل هندسة التجارة الإلكترونية <br />
              <span className="text-brand-accent">{titleSub}</span>
            </>
          ) : isFrench ? (
            <>
              Guide d'Ingénierie E-Commerce <br />
              <span className="text-brand-accent">{titleSub}</span>
            </>
          ) : (
            <>
              Octera E-Commerce <br />
              <span className="text-brand-accent">{titleSub}</span>
            </>
          )}
        </h1>

        {/* Narrative */}
        <p className="starter-anim mx-auto mt-5 max-w-2xl text-body-lg text-content-secondary leading-relaxed">
          {narrative}
        </p>

        {/* Action Buttons */}
        <div className="starter-anim mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const el = document.getElementById("modules");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Sparkles className="me-2 h-4 w-4" aria-hidden="true" />
            {primaryBtn}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              window.location.href = "/docs";
            }}
          >
            <Terminal className="me-2 h-4 w-4" aria-hidden="true" />
            {secondaryBtn}
          </Button>
        </div>

        {/* 4 Foundation Badges */}
        <div className="starter-anim mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-start">
          <div className="rounded-lg border border-border-subtle bg-surface-elevated p-4">
            <span className="text-caption font-mono uppercase text-content-muted">
              {badgeFrontend}
            </span>
            <p className="text-body font-bold text-content-primary mt-1">Next.js 16</p>
            <p className="text-caption text-content-secondary mt-1">App Router & RSC</p>
          </div>

          <div className="rounded-lg border border-border-subtle bg-surface-elevated p-4">
            <span className="text-caption font-mono uppercase text-content-muted">
              {badgeCommerce}
            </span>
            <p className="text-body font-bold text-content-primary mt-1">Medusa.js v2</p>
            <p className="text-caption text-content-secondary mt-1">Modular Core & Workflows</p>
          </div>

          <div className="rounded-lg border border-border-subtle bg-surface-elevated p-4">
            <span className="text-caption font-mono uppercase text-content-muted">
              {badgeStyling}
            </span>
            <p className="text-body font-bold text-content-primary mt-1">Tailwind CSS v4</p>
            <p className="text-caption text-content-secondary mt-1">@theme & CSS Logical</p>
          </div>

          <div className="rounded-lg border border-border-subtle bg-surface-elevated p-4">
            <span className="text-caption font-mono uppercase text-content-muted">
              {badgeMotion}
            </span>
            <p className="text-body font-bold text-content-primary mt-1">GSAP 3</p>
            <p className="text-caption text-content-secondary mt-1">@gsap/react Scoped</p>
          </div>
        </div>
      </div>
    </section>
  );
}
