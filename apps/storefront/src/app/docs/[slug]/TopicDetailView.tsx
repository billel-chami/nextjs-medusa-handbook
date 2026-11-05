"use client";

import Link from "next/link";
import { CrashCourseTopic } from "@/domain/crash-course-data";
import { useLocale } from "@/infrastructure/locale-context";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  Code2,
  BookOpen,
  ExternalLink,
  Cpu,
  Workflow,
} from "lucide-react";

interface TopicDetailViewProps {
  readonly topic: CrashCourseTopic;
  readonly prevTopic: CrashCourseTopic | null;
  readonly nextTopic: CrashCourseTopic | null;
}

export function TopicDetailView({
  topic,
  prevTopic,
  nextTopic,
}: TopicDetailViewProps) {
  const { locale } = useLocale();
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const badge = isArabic
    ? topic.badge_ar
    : isFrench && topic.badge_fr
    ? topic.badge_fr
    : topic.badge;

  const category = isArabic
    ? topic.category_ar
    : isFrench && topic.category_fr
    ? topic.category_fr
    : topic.category;

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

  const coreProblem = isArabic
    ? topic.coreProblemItSolves_ar
    : isFrench && topic.coreProblemItSolves_fr
    ? topic.coreProblemItSolves_fr
    : topic.coreProblemItSolves;

  const analogyTitle = isArabic
    ? "التشبيه الفيزيائي الواقعي"
    : isFrench
    ? "L'Analogie Physique Réelle"
    : "The Real-Life Physical Analogy";

  const coreProblemTitle = isArabic
    ? "المشكلة الجوهرية التي يحلها هذا المفهوم"
    : isFrench
    ? "Le Problème Fondamental Résolu"
    : "The Problem It Solves";

  const hooksTitle = isArabic
    ? "أهم الخطافات والواجهات البرمجية المستخدمة في متجرنا (Hooks & APIs)"
    : isFrench
    ? "Hooks & APIs Clés Utilisés dans ce Projet E-Commerce"
    : "Most Used Hooks & Core APIs in this E-Commerce Store";

  const hooksSubtitle = isArabic
    ? "هذه هي الدوال والأدوات الأكثر استخداماً وتأثيراً في مسارات متجرنا (السلة، الدفع، الكتالوج، وإدارة الجلسات)، مع شرح دور كل منها وسبب اعتمادها:"
    : isFrench
    ? "L'ensemble précis de hooks, directives et méthodes SDK utilisés dans nos flux e-commerce (Panier, Commande, Catalogue, Sessions) :"
    : "The precise set of hooks, directives, and SDK methods used across our e-commerce flows (Cart, Checkout, Catalog, and Sessions), explaining why each exists:";

  const whyInEcomHeader = isArabic
    ? "لماذا نستخدمه في المتجر الإلكتروني؟"
    : isFrench
    ? "Pourquoi l'utiliser dans notre e-commerce ?"
    : "Why We Use It In Our E-Commerce Flows:";

  const scenariosTitle = isArabic
    ? "سيناريوهات واقعية من المتجر الإلكتروني وحلولها الهندسية"
    : isFrench
    ? "Scénarios Pratiques de Production & Solutions Architecturales"
    : "Real-World E-Commerce Production Scenarios & Solutions";

  const challengeLabel = isArabic
    ? "التحدي التجاري:"
    : isFrench
    ? "Le Défi Commercial :"
    : "The Challenge:";

  const solutionLabel = isArabic
    ? "الحل المعماري:"
    : isFrench
    ? "La Solution Architecturale :"
    : "Architectural Solution:";

  const mechanicsTitle = isArabic
    ? "الآليات الفنية الدقيقة وبنية التشغيل"
    : isFrench
    ? "Mécanismes Techniques & Architecture Interne"
    : "Key Technical Mechanics & Architecture";

  const codePatternTitle = isArabic
    ? "النمط البرمجي المعتمد في المشروع"
    : isFrench
    ? "Modèle d'Implémentation en Production"
    : "Production Implementation Pattern";

  const antiPatternTitle = isArabic
    ? "تحليل الأنماط الخاطئة: أخطاء المبتدئين مقابل معايير المؤسسات"
    : isFrench
    ? "Analyse des Anti-Patterns : Erreurs Juniors vs Standards Entreprise"
    : "Anti-Pattern Breakdown: Junior Mistake vs Enterprise Standard";

  const badLabel = isArabic
    ? "نمط مبتدئ محظور"
    : isFrench
    ? "Anti-Pattern Interdit"
    : "Forbidden Anti-Pattern";

  const goodLabel = isArabic
    ? "المعيار المعتمد للمؤسسات"
    : isFrench
    ? "Standard Entreprise Appliqué"
    : "Enforced Enterprise Standard";

  const reasoningLabel = isArabic
    ? "التعليل المعماري:"
    : isFrench
    ? "Justification Architecturale :"
    : "Architectural Reasoning:";

  const antiPatternReason = isArabic
    ? topic.antiPattern.reason_ar
    : isFrench && topic.antiPattern.reason_fr
    ? topic.antiPattern.reason_fr
    : topic.antiPattern.reason;

  const rulesTitle = isArabic
    ? "قواعد الإنتاج غير القابلة للتفاوض في هذا المستودع"
    : isFrench
    ? "Règles Non-Négociables de Production pour cet Outil"
    : "Non-Negotiable Production Rules for this Tool";

  const rulesList = isArabic
    ? topic.securityAndPerfRules_ar
    : isFrench && topic.securityAndPerfRules_fr
    ? topic.securityAndPerfRules_fr
    : topic.securityAndPerfRules;

  const ctaTag = isArabic
    ? "المرجع الرسمي والتوثيق المعتمد"
    : isFrench
    ? "Référence Officielle & Documentation Complète"
    : "Official Reference & Comprehensive Documentation";

  const ctaTitle = isArabic
    ? `تعمق في المعايير الرسمية لـ ${topic.title_ar.split(":")[0]}`
    : isFrench
    ? `Maîtrisez l'API Officielle : ${(topic.title_fr ?? topic.title).split(":")[0]}`
    : `Master the Complete API: ${topic.title.split(":")[0]}`;

  const ctaDesc = isArabic
    ? "يغطي هذا الدليل الداخلي الركائز المعمارية الأساسية للإنتاج. نوصي بشدة كل مهندس في الفريق بمراجعة التوثيق الرسمي وقراءة الشيفرات المرجعية لتغطية الحالات الشاملة."
    : isFrench
    ? "Ce manuel fournit les modèles mentaux et patrons d'entreprise essentiels. Nous recommandons vivement à chaque ingénieur de consulter la documentation officielle complète."
    : "This handbook provides the core first-principles mental model and enterprise patterns. We strongly recommend diving into the official documentation to explore full API surfaces and advanced features.";

  const ctaBtn = isArabic
    ? topic.officialDocsLabel_ar
    : isFrench && topic.officialDocsLabel_fr
    ? topic.officialDocsLabel_fr
    : topic.officialDocsLabel;

  const prevModuleLabel = isArabic
    ? "الوحدة السابقة"
    : isFrench
    ? "Module Précédent"
    : "Previous Module";

  const nextModuleLabel = isArabic
    ? "الوحدة التالية"
    : isFrench
    ? "Module Suivant"
    : "Next Module";

  return (
    <article className="space-y-12 text-start pb-16">
      {/* Topic Header */}
      <header className="border-b border-border-subtle pb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-body font-bold text-brand-primary">
            {isArabic ? `الوحدة ${topic.number}` : `MODULE ${topic.number}`}
          </span>
          <span className="rounded-full bg-surface-panel ps-3 pe-3 py-1 font-mono text-caption text-content-secondary">
            {badge}
          </span>
          <span className="rounded-full bg-surface-sunken ps-3 pe-3 py-1 text-caption font-semibold text-brand-accent">
            {category}
          </span>
        </div>

        <h1 className="mt-4 text-h1 font-extrabold text-content-primary tracking-tight">
          {title}
        </h1>

        <p className="mt-4 text-body-lg text-content-secondary leading-relaxed max-w-4xl">
          {summary}
        </p>
      </header>

      {/* 1. Real-Life Physical Analogy Callout */}
      <section className="rounded-xl border border-border-strong bg-surface-panel p-6 shadow-xs">
        <div className="flex items-center gap-2 text-body font-bold text-content-primary mb-2">
          <Lightbulb className="h-5 w-5 text-brand-accent" />
          <span>{analogyTitle}</span>
        </div>
        <p className="text-body text-content-secondary leading-relaxed">
          {analogy}
        </p>
      </section>

      {/* 2. The Core Problem It Solves */}
      <section className="space-y-3">
        <h2 className="text-h2 font-bold text-content-primary">
          {coreProblemTitle}
        </h2>
        <p className="text-body text-content-secondary leading-relaxed">
          {coreProblem}
        </p>
      </section>

      {/* 3. Most Used Hooks & Core APIs in this E-Commerce Store */}
      {topic.ecomHooksAndApis && topic.ecomHooksAndApis.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-h2 font-bold text-content-primary">
            <Cpu className="h-6 w-6 text-brand-primary" />
            <h2>{hooksTitle}</h2>
          </div>
          <p className="text-body-sm text-content-secondary leading-relaxed">
            {hooksSubtitle}
          </p>

          <div className="grid grid-cols-1 gap-4">
            {topic.ecomHooksAndApis.map((item) => {
              const itemRole = isArabic
                ? item.role_ar
                : isFrench && item.role_fr
                ? item.role_fr
                : item.role;
              const itemWhy = isArabic
                ? item.whyInEcom_ar
                : isFrench && item.whyInEcom_fr
                ? item.whyInEcom_fr
                : item.whyInEcom;

              return (
                <div
                  key={item.name}
                  className="rounded-xl border border-border-strong bg-surface-elevated p-5 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-body font-bold text-brand-primary">
                        {item.name}
                      </span>
                      <span className="rounded-full bg-surface-panel ps-2.5 pe-2.5 py-0.5 text-caption font-semibold text-content-secondary">
                        {itemRole}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-caption font-bold uppercase tracking-wider text-content-muted">
                      {whyInEcomHeader}
                    </h4>
                    <p className="mt-1 text-body-sm text-content-secondary leading-relaxed">
                      {itemWhy}
                    </p>
                  </div>

                  <div
                    className="rounded-md bg-surface-sunken p-3 font-mono text-caption text-content-primary overflow-x-auto"
                    dir="ltr"
                  >
                    <code>{item.signatureOrUsage}</code>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Practical E-Commerce Production Scenarios */}
      {topic.practicalEcomScenarios && topic.practicalEcomScenarios.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-h2 font-bold text-content-primary">
            <Workflow className="h-6 w-6 text-brand-accent" />
            <h2>{scenariosTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.practicalEcomScenarios.map((scenario) => {
              const scTitle = isArabic
                ? scenario.title_ar
                : isFrench && scenario.title_fr
                ? scenario.title_fr
                : scenario.title;
              const scChallenge = isArabic
                ? scenario.challenge_ar
                : isFrench && scenario.challenge_fr
                ? scenario.challenge_fr
                : scenario.challenge;
              const scSolution = isArabic
                ? scenario.solution_ar
                : isFrench && scenario.solution_fr
                ? scenario.solution_fr
                : scenario.solution;

              return (
                <div
                  key={scenario.title}
                  className="rounded-xl border border-border-subtle bg-surface-panel p-5 space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-body font-bold text-content-primary">
                      {scTitle}
                    </h3>

                    <div className="mt-3 space-y-2">
                      <div className="text-body-sm">
                        <strong className="text-state-warning">
                          {challengeLabel}{" "}
                        </strong>
                        <span className="text-content-secondary">
                          {scChallenge}
                        </span>
                      </div>

                      <div className="text-body-sm">
                        <strong className="text-state-success">
                          {solutionLabel}{" "}
                        </strong>
                        <span className="text-content-secondary">
                          {scSolution}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. Key Mechanics & Architecture */}
      <section className="space-y-4">
        <h2 className="text-h2 font-bold text-content-primary">
          {mechanicsTitle}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {topic.keyMechanics.map((mech) => {
            const mechName = isArabic
              ? mech.name_ar
              : isFrench && mech.name_fr
              ? mech.name_fr
              : mech.name;
            const mechExp = isArabic
              ? mech.explanation_ar
              : isFrench && mech.explanation_fr
              ? mech.explanation_fr
              : mech.explanation;

            return (
              <div
                key={mech.name}
                className="rounded-lg border border-border-subtle bg-surface-elevated p-5"
              >
                <h3 className="text-body font-bold text-content-primary">
                  {mechName}
                </h3>
                <p className="mt-2 text-body-sm text-content-secondary leading-relaxed">
                  {mechExp}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Production Code Reference */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-h2 font-bold text-content-primary">
          <Code2 className="h-6 w-6 text-brand-primary" />
          <h2>{codePatternTitle}</h2>
        </div>
        <div
          className="rounded-lg border border-border-strong bg-surface-sunken p-5 overflow-x-auto font-mono text-caption leading-relaxed text-content-primary"
          dir="ltr"
        >
          <pre>{topic.codeSnippet}</pre>
        </div>
      </section>

      {/* 7. Anti-Pattern Breakdown */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-h2 font-bold text-content-primary">
          <AlertTriangle className="h-6 w-6 text-state-warning" />
          <h2>{antiPatternTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bad */}
          <div className="rounded-lg border border-state-error/30 bg-surface-elevated p-5">
            <div className="flex items-center gap-2 text-body-sm font-bold text-state-error mb-2">
              <XCircle className="h-4 w-4" />
              <span>{badLabel}</span>
            </div>
            <code
              className="block rounded bg-surface-sunken p-3 font-mono text-caption text-content-primary break-all"
              dir="ltr"
            >
              {topic.antiPattern.bad}
            </code>
          </div>

          {/* Good */}
          <div className="rounded-lg border border-state-success/30 bg-surface-elevated p-5">
            <div className="flex items-center gap-2 text-body-sm font-bold text-state-success mb-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>{goodLabel}</span>
            </div>
            <code
              className="block rounded bg-surface-sunken p-3 font-mono text-caption text-content-primary break-all"
              dir="ltr"
            >
              {topic.antiPattern.good}
            </code>
          </div>
        </div>

        <p className="rounded-md bg-surface-panel p-4 text-caption text-content-secondary border border-border-subtle">
          <strong className="text-content-primary">{reasoningLabel}</strong>{" "}
          {antiPatternReason}
        </p>
      </section>

      {/* 8. Non-Negotiable Rules */}
      <section className="space-y-3 rounded-xl border border-border-subtle bg-surface-elevated p-6">
        <div className="flex items-center gap-2 text-body font-bold text-content-primary">
          <ShieldAlert className="h-5 w-5 text-brand-primary" />
          <h2>{rulesTitle}</h2>
        </div>
        <ul className="space-y-2 ps-4 list-disc text-body-sm text-content-secondary">
          {rulesList.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>

      {/* 9. Official Documentation Deep-Dive CTA */}
      <section className="relative overflow-hidden rounded-2xl border border-brand-primary/30 bg-gradient-to-br from-surface-elevated via-surface-panel to-brand-primary/5 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-brand-primary font-mono text-caption uppercase tracking-wider font-semibold">
              <BookOpen className="h-4 w-4" />
              <span>{ctaTag}</span>
            </div>
            <h3 className="text-h3 font-bold text-content-primary">{ctaTitle}</h3>
            <p className="text-body-sm text-content-secondary leading-relaxed">
              {ctaDesc}
            </p>
          </div>

          <a
            href={topic.officialDocsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-primary ps-5 pe-5 py-3 text-body-sm font-semibold text-content-inverse shadow-sm hover:opacity-90 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            <span>{ctaBtn}</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Navigation Footer */}
      <nav
        className="flex items-center justify-between border-t border-border-subtle pt-8"
        aria-label="Module Pagination"
      >
        {prevTopic ? (
          <Link
            href={`/docs/${prevTopic.slug}`}
            className="group flex flex-col items-start gap-1 rounded-md p-3 hover:bg-surface-panel transition-colors"
          >
            <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-content-muted">
              <ArrowLeft className="h-3 w-3 rtl:rotate-180" />
              <span>{prevModuleLabel}</span>
            </span>
            <span className="text-body-sm font-bold text-content-primary group-hover:text-brand-primary">
              {isArabic
                ? prevTopic.title_ar.split(":")[0]
                : isFrench && prevTopic.title_fr
                ? prevTopic.title_fr.split(":")[0]
                : prevTopic.title.split(":")[0]}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic && (
          <Link
            href={`/docs/${nextTopic.slug}`}
            className="group flex flex-col items-end gap-1 rounded-md p-3 hover:bg-surface-panel transition-colors text-end"
          >
            <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-content-muted">
              <span>{nextModuleLabel}</span>
              <ArrowRight className="h-3 w-3 rtl:rotate-180" />
            </span>
            <span className="text-body-sm font-bold text-content-primary group-hover:text-brand-primary">
              {isArabic
                ? nextTopic.title_ar.split(":")[0]
                : isFrench && nextTopic.title_fr
                ? nextTopic.title_fr.split(":")[0]
                : nextTopic.title.split(":")[0]}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
