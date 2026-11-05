"use client";

import Link from "next/link";
import { CRASH_COURSE_TOPICS } from "@/domain/crash-course-data";
import { Sparkles, ArrowRight, Lightbulb } from "lucide-react";
import { useLocale } from "@/infrastructure/locale-context";

export function DocsIndexView() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const topBadge = isArabic
    ? "المنهج الفني الشامل للمهندسين"
    : isFrench
    ? "Curriculum Technique d'Ingénierie"
    : "Complete Technical Curriculum";

  const bannerTitle = isArabic
    ? "دليل أوكتيرا للهندسة المعمارية والشرح المتقدم"
    : isFrench
    ? "Manuel d'Ingénierie & Formation Accélérée Octera"
    : "Octera Engineering Handbook & Crash Course";

  const bannerDesc = isArabic
    ? "مرحباً بك في الوثائق المعمارية الحية لهذا المشروع. كل إطار عمل، وقاعدة بيانات، ومعيار أمني، ونظام تصميم مستخدم في هذا المستودع مفصل هنا من المبادئ الحاسوبية الأولى بأسلوب تدريجي منطقي. يمكنك التبديل بين اللغات في أي وقت."
    : isFrench
    ? "Bienvenue dans la documentation architecturale vivante de ce projet. Chaque framework, base de données, standard de sécurité et outil utilisé dans ce dépôt est détaillé à partir des premiers principes dans une progression logique."
    : "Welcome to the living architectural documentation for this repository. Every single framework, database, security standard, and tooling pattern used in our codebase is broken down from first principles below in a gradual, logical progression.";

  const readDeepDiveLabel = isArabic
    ? "قراءة الشرح المعماري الكامل"
    : isFrench
    ? "Lire l'Analyse Complète"
    : "Read Full Deep-Dive";

  const analogyLabel = isArabic
    ? "التشبيه الواقعي:"
    : isFrench
    ? "Analogie :"
    : "Analogy:";

  return (
    <div className="space-y-10">
      {/* Overview Banner */}
      <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-panel via-surface-elevated to-surface-panel p-8 text-start">
        <div className="inline-flex items-center gap-2 rounded-full bg-surface-sunken ps-3 pe-3.5 py-1 text-caption font-semibold text-brand-primary mb-4">
          <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
          <span>{topBadge}</span>
        </div>
        <h1 className="text-h1 font-extrabold text-content-primary tracking-tight">
          {bannerTitle}
        </h1>
        <p className="mt-3 text-body text-content-secondary max-w-3xl leading-relaxed">
          {bannerDesc}
        </p>
      </div>

      {/* Grid of all 13 Crash Course Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CRASH_COURSE_TOPICS.map((topic) => {
          const badge = isArabic
            ? topic.badge_ar
            : isFrench && topic.badge_fr
            ? topic.badge_fr
            : topic.badge;
          const title = isArabic
            ? topic.title_ar
            : isFrench && topic.title_fr
            ? topic.title_fr
            : topic.title;
          const summary = isArabic
            ? topic.summary_ar
            : isFrench && topic.summary_fr
            ? topic.summary_fr
            : topic.summary;
          const analogy = isArabic
            ? topic.analogy_ar
            : isFrench && topic.analogy_fr
            ? topic.analogy_fr
            : topic.analogy;

          return (
            <Link
              key={topic.slug}
              href={`/docs/${topic.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-border-subtle bg-surface-elevated p-6 text-start transition-all duration-fast hover:border-brand-primary hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-body-sm font-bold text-brand-primary">
                    {topic.number}
                  </span>
                  <span className="rounded-full bg-surface-panel ps-2.5 pe-2.5 py-0.5 font-mono text-[11px] text-content-secondary">
                    {badge}
                  </span>
                </div>

                <h2 className="mt-3 text-h3 font-bold text-content-primary group-hover:text-brand-primary transition-colors">
                  {title}
                </h2>

                <p className="mt-2 text-body-sm text-content-secondary line-clamp-3">
                  {summary}
                </p>

                {/* Physical Analogy Callout Preview */}
                <div className="mt-4 flex items-start gap-2 rounded-md bg-surface-panel p-3 text-caption text-content-secondary">
                  <Lightbulb className="h-4 w-4 shrink-0 text-brand-accent mt-0.5" />
                  <span className="line-clamp-2">
                    <strong className="text-content-primary">{analogyLabel}</strong>{" "}
                    {analogy}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4 text-caption font-semibold text-brand-primary">
                <span>{readDeepDiveLabel}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
