"use client";

import { useLocale } from "@/infrastructure/locale-context";
import { Code2, CircleDashed } from "lucide-react";

interface ModuleCard {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly title_ar: string;
  readonly title_fr: string;
  readonly description: string;
  readonly description_ar: string;
  readonly description_fr: string;
  readonly suggestedPrompt: string;
  readonly suggestedPrompt_ar: string;
  readonly suggestedPrompt_fr: string;
  readonly architecturalPillars: readonly string[];
}

const MODULES: readonly ModuleCard[] = [
  {
    id: "module-1",
    number: "01",
    title: "Catalog & Discovery Engine",
    title_ar: "محرك استعراض وتصفية المنتجات",
    title_fr: "Moteur de Catalogue & Découverte",
    description:
      "Product listings, dynamic server filtering, search, categories, collections, and variant selection with Next.js 16 'use cache'.",
    description_ar:
      "عرض قوائم المنتجات، التصفية الديناميكية على الخادم، البحث، التصنيفات، والمجموعات واختيار المتغيرات مع 'use cache' في Next.js 16.",
    description_fr:
      "Listes de produits, filtrage serveur dynamique, recherche, catégories, collections et sélection de variantes avec 'use cache' de Next.js 16.",
    suggestedPrompt:
      "Build Module 1: Catalog & Discovery Engine. Connect to Medusa v2 SDK, configure fine-grained 'use cache' with cacheTag, and build an accessible product grid with filter controls.",
    suggestedPrompt_ar:
      "ابنِ الوحدة الأولى: محرك استعراض وتصفية المنتجات. اتصل بحزمة Medusa v2 SDK واضبط التخزين المؤقت الدقيق مع وسم cacheTag وابنِ شبكة منتجات مرنة مع أدوات التصفية.",
    suggestedPrompt_fr:
      "Construis le Module 1 : Moteur de Catalogue. Connecte le SDK Medusa v2, configure 'use cache' avec cacheTag et crée une grille de produits accessible avec filtres.",
    architecturalPillars: ["Next.js 16 'use cache'", "Medusa v2 SDK", "CLS = 0"],
  },
  {
    id: "module-2",
    number: "02",
    title: "Authentication & Accounts Boundary",
    title_ar: "منظومة توثيق وحسابات العملاء",
    title_fr: "Authentification & Espace Client",
    description:
      "Secure customer registration, JWT/session tokens, HttpOnly cookies, and route protection via proxy.ts.",
    description_ar:
      "تسجيل العملاء الآمن، رموز JWT والجلسات، ملفات تعريف الارتباط الآمنة HttpOnly، وحماية المسارات الخاصة عبر proxy.ts.",
    description_fr:
      "Inscription sécurisée des clients, jetons JWT/session, cookies HttpOnly et protection des routes privées via proxy.ts.",
    suggestedPrompt:
      "Build Module 2: Customer Authentication. Implement secure login and registration Server Actions, HttpOnly cookie storage, and proxy.ts route boundary protection.",
    suggestedPrompt_ar:
      "ابنِ الوحدة الثانية: توثيق العملاء. نفذ إجراءات تسجيل الدخول وإنشاء الحساب في Server Actions مع ملفات HttpOnly وحماية حدود المسارات عبر proxy.ts.",
    suggestedPrompt_fr:
      "Construis le Module 2 : Authentification Client. Implémente les Server Actions d'inscription/connexion, le stockage en cookie HttpOnly et la protection des routes via proxy.ts.",
    architecturalPillars: ["OWASP A01/A07", "proxy.ts Boundary", "Medusa Auth Module"],
  },
  {
    id: "module-3",
    number: "03",
    title: "Cart & Regional Currency Engine",
    title_ar: "سلة المشتريات ومحرك العملات الإقليمي",
    title_fr: "Panier & Moteur Multi-Devises",
    description:
      "Persistent cart state, multi-currency display, tax calculation, and inventory validation across geographical regions.",
    description_ar:
      "حفظ حالة السلة، العرض متعدد العملات، احتساب الضرائب، والتحقق من توفر المخزون عبر المناطق الجغرافية المختلفة.",
    description_fr:
      "Persistance du panier, affichage multi-devises, calcul des taxes et validation des stocks selon les régions géographiques.",
    suggestedPrompt:
      "Build Module 3: Cart & Regional Engine. Implement optimistic cart mutations with React 19 useActionState/useOptimistic, Medusa cart workflows, and multi-region currency formatting.",
    suggestedPrompt_ar:
      "ابنِ الوحدة الثالثة: السلة ومحرك الأقاليم. نفذ تحديثات السلة المتفائلة باستخدام خطافات React 19 ومسارات عمل Medusa مع دعم تنسيق العملات المتعددة.",
    suggestedPrompt_fr:
      "Construis le Module 3 : Panier & Moteur Régional. Implémente les mutations optimistes avec React 19 useActionState/useOptimistic, les workflows Medusa et le formatage des devises.",
    architecturalPillars: ["React 19 useOptimistic", "Medusa Cart Workflows", "MoneyDTO"],
  },
  {
    id: "module-4",
    number: "04",
    title: "Checkout Flow & Payment Sessions",
    title_ar: "مسار إتمام الطلب وجلسات الدفع",
    title_fr: "Tunnel de Commande & Paiement",
    description:
      "Multi-step checkout saga, shipping method selection, payment session initialization (Stripe/COD), and atomic order completion.",
    description_ar:
      "مسار دفع متعدد المراحل (Saga)، اختيار طرق الشحن، تهيئة جلسات الدفع الإلكتروني (Stripe أو الدفع عند الاستلام)، وتأكيد الطلب الذري.",
    description_fr:
      "Tunnel de commande multi-étapes (Saga), sélection des modes de livraison, initialisation des sessions Stripe/COD et finalisation atomique.",
    suggestedPrompt:
      "Build Module 4: Checkout Flow. Implement multi-step address capture, shipping calculation, Stripe payment session orchestration, and order placement workflow.",
    suggestedPrompt_ar:
      "ابنِ الوحدة الرابعة: مسار إنهاء الطلب. نفذ استلام العنوان والتحقق منه عبر Zod واحتساب الشحن وجلسات الدفع ومسار حفظ الطلب.",
    suggestedPrompt_fr:
      "Construis le Module 4 : Tunnel de Commande. Implémente la saisie d'adresse validée par Zod, le calcul de livraison, la session Stripe et le workflow de commande.",
    architecturalPillars: ["Distributed Sagas", "Zod Address Validation", "Payment Module"],
  },
  {
    id: "module-5",
    number: "05",
    title: "Logistics, Carrier APIs & Webhooks",
    title_ar: "التكامل اللوجستي وتأمين إشعارات الشحن",
    title_fr: "Logistique, APIs Transporteurs & Webhooks",
    description:
      "Integration with shipping carriers (DHL/FedEx/UPS), timing-safe HMAC signature verification, and distributed webhook idempotency locks.",
    description_ar:
      "التكامل مع شركات الشحن (DHL/FedEx)، والتحقق من التوقيع الرقمي الآمن زمنياً (HMAC)، وأقفال عدم التكرار الموزعة عبر Redis.",
    description_fr:
      "Intégration des transporteurs (DHL/FedEx), vérification des signatures HMAC à temps constant et verrous d'idempotence Redis.",
    suggestedPrompt:
      "Build Module 5: Carrier Logistics & Webhook Security. Implement timing-safe HMAC verification (crypto.timingSafeEqual), Redis idempotency locking against replays, and parcel tracking timeline.",
    suggestedPrompt_ar:
      "ابنِ الوحدة الخامسة: لوجستيات الشحن وأمان الإشعارات. نفذ المقارنة الآمنة زمنياً للتوقيع وأقفال عدم التكرار في Redis وخط تتبع الشحنة.",
    suggestedPrompt_fr:
      "Construis le Module 5 : Logistique & Sécurité Webhooks. Implémente la vérification HMAC timing-safe (crypto.timingSafeEqual), les verrous Redis et le suivi de colis.",
    architecturalPillars: ["Timing-Safe HMAC", "Idempotency Locks", "Anti-Corruption Layer"],
  },
];

export function HomeModulesView() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const roadmapBadge = isArabic
    ? "خارطة طريق المنهج التدريبي"
    : isFrench
    ? "Feuille de Route Pédagogique"
    : "Curriculum Roadmap";

  const roadmapTitle = isArabic
    ? "وحدات التجارة الإلكترونية الجاهزة للبناء"
    : isFrench
    ? "Modules E-Commerce Prêts à Développer"
    : "Commerce Modules to Build";

  const roadmapDesc = isArabic
    ? "هذا القالب مهيأ بمهارات ذكاء اصطناعي مدمجة. انسخ أي أمر مقترح أدناه وأرسله لمساعد الذكاء الاصطناعي لتوليد كود إنتاجي والحصول على تقرير إرشادي معرفي معمق."
    : isFrench
    ? "Ce boilerplate intègre des compétences d'IA avancées. Copiez l'un des prompts ci-dessous dans votre assistant pour générer du code de production et obtenir un rapport de mentorat complet."
    : "This boilerplate is wired with embedded AI skills. Copy any suggested prompt below into your AI assistant to generate production code and receive an in-depth First-Principles Mentorship Report.";

  const readyBadge = isArabic
    ? "جاهز للتنفيذ"
    : isFrench
    ? "Prêt à Générer"
    : "Ready to Prompt";

  const promptTitle = isArabic
    ? "أمر مقترح للذكاء الاصطناعي"
    : isFrench
    ? "Prompt IA Suggéré"
    : "Suggested AI Prompt";

  return (
    <section id="modules" className="mx-auto max-w-7xl ps-6 pe-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-start">
        <div>
          <span className="text-caption font-bold uppercase tracking-widest text-brand-primary">
            {roadmapBadge}
          </span>
          <h2 className="mt-2 text-h2 font-extrabold text-content-primary">
            {roadmapTitle}
          </h2>
        </div>
        <p className="mt-2 md:mt-0 text-body-sm text-content-secondary max-w-lg leading-relaxed">
          {roadmapDesc}
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODULES.map((mod) => {
          const title = isArabic ? mod.title_ar : isFrench ? mod.title_fr : mod.title;
          const description = isArabic
            ? mod.description_ar
            : isFrench
            ? mod.description_fr
            : mod.description;
          const prompt = isArabic
            ? mod.suggestedPrompt_ar
            : isFrench
            ? mod.suggestedPrompt_fr
            : mod.suggestedPrompt;

          return (
            <article
              key={mod.id}
              className="flex flex-col justify-between rounded-lg border border-border-subtle bg-surface-elevated p-6 text-start transition-all duration-fast hover:border-border-strong hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-body-sm font-bold text-brand-primary">
                    {mod.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-panel ps-2.5 pe-2.5 py-1 text-[11px] font-medium text-content-secondary">
                    <CircleDashed className="h-3 w-3 text-brand-accent animate-spin" />
                    <span>{readyBadge}</span>
                  </span>
                </div>

                <h3 className="mt-4 text-h3 font-bold text-content-primary">{title}</h3>
                <p className="mt-2 text-body-sm text-content-secondary leading-relaxed">
                  {description}
                </p>

                {/* Pillars Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {mod.architecturalPillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="rounded bg-surface-panel ps-2 pe-2 py-0.5 font-mono text-[11px] text-content-muted"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              {/* Copyable Prompt Box */}
              <div className="mt-6 rounded-md border border-border-subtle bg-surface-panel p-3">
                <div className="flex items-center gap-1.5 text-caption font-semibold text-content-primary mb-1.5">
                  <Code2 className="h-3.5 w-3.5 text-brand-primary" />
                  <span>{promptTitle}</span>
                </div>
                <p
                  className="font-mono text-[12px] text-content-secondary select-all leading-relaxed"
                  dir="ltr"
                >
                  "{prompt}"
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
