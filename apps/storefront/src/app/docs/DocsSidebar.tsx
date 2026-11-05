"use client";

import Link from "next/link";
import { CRASH_COURSE_TOPICS } from "@/domain/crash-course-data";
import { useLocale } from "@/infrastructure/locale-context";
import { BookOpen, Shield, Terminal, Cpu, Database, ChevronRight, Palette } from "lucide-react";

export function DocsSidebar() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const categories = [
    {
      name: "Frontend & UI",
      name_ar: "الواجهة الأمامية والتفاعل",
      name_fr: "Frontend & UI",
      icon: Terminal,
    },
    {
      name: "Commerce Core",
      name_ar: "محرك التجارة الإلكترونية",
      name_fr: "Moteur E-Commerce",
      icon: Cpu,
    },
    {
      name: "Styling & Motion",
      name_ar: "التصميم والحركة",
      name_fr: "Design & Animation",
      icon: Palette,
    },
    {
      name: "Security & Validation",
      name_ar: "الأمان والتحقق من البيانات",
      name_fr: "Sécurité & Validation",
      icon: Shield,
    },
    {
      name: "Data & Infrastructure",
      name_ar: "البيانات والبنية التحتية",
      name_fr: "Données & Infrastructure",
      icon: Database,
    },
  ] as const;

  const portalTitle = isArabic
    ? "بوابة الشرح المعماري"
    : isFrench
    ? "Portail Architectural"
    : "Crash Course Portal";

  const portalDesc = isArabic
    ? "المواصفات الهندسية، معايير الأمان، وأدوات التطوير لفريق العمل."
    : isFrench
    ? "Spécifications techniques, sécurité et outils pour l'équipe d'ingénierie."
    : "Architecture, security, and tooling specifications for the entire engineering team.";

  return (
    <aside className="w-full lg:w-76 shrink-0 text-start">
      <div className="sticky top-36 space-y-6">
        <div className="rounded-lg border border-border-subtle bg-surface-panel p-4">
          <div className="flex items-center gap-2 text-body-sm font-bold text-content-primary mb-1">
            <BookOpen className="h-4 w-4 text-brand-primary" />
            <span>{portalTitle}</span>
          </div>
          <p className="text-caption text-content-secondary leading-relaxed">
            {portalDesc}
          </p>
        </div>

        {/* Categorized List */}
        <nav className="space-y-6" aria-label="Documentation Categories">
          {categories.map((cat) => {
            const topicsInCat = CRASH_COURSE_TOPICS.filter(
              (t) => t.category === cat.name
            );
            const Icon = cat.icon;
            const categoryLabel = isArabic
              ? cat.name_ar
              : isFrench
              ? cat.name_fr
              : cat.name;

            return (
              <div key={cat.name} className="space-y-2">
                <div className="flex items-center gap-2 text-caption font-bold uppercase tracking-wider text-content-muted">
                  <Icon className="h-3.5 w-3.5 text-brand-accent" />
                  <span>{categoryLabel}</span>
                </div>

                <ul className="space-y-1 ps-2 border-s border-border-subtle">
                  {topicsInCat.map((topic) => {
                    const title = isArabic
                      ? topic.title_ar
                      : isFrench && topic.title_fr
                      ? topic.title_fr
                      : topic.title;

                    return (
                      <li key={topic.slug}>
                        <Link
                          href={`/docs/${topic.slug}`}
                          className="group flex items-center justify-between rounded-md ps-3 pe-2 py-1.5 text-caption text-content-secondary hover:bg-surface-panel hover:text-content-primary transition-all duration-fast"
                        >
                          <span className="truncate">
                            <span className="font-mono text-[10px] text-content-muted me-2">
                              {topic.number}
                            </span>
                            {title.split(":")[0]}
                          </span>
                          <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 rtl:rotate-180 transition-opacity" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
