export interface EcomHookOrApi {
  readonly name: string;
  readonly role: string;
  readonly role_ar: string;
  readonly role_fr: string;
  readonly whyInEcom: string;
  readonly whyInEcom_ar: string;
  readonly whyInEcom_fr: string;
  readonly signatureOrUsage: string;
}

export interface PracticalEcomScenario {
  readonly title: string;
  readonly title_ar: string;
  readonly title_fr: string;
  readonly challenge: string;
  readonly challenge_ar: string;
  readonly challenge_fr: string;
  readonly solution: string;
  readonly solution_ar: string;
  readonly solution_fr: string;
}

export interface CrashCourseTopic {
  readonly slug: string;
  readonly number: string;
  readonly title: string;
  readonly title_ar: string;
  readonly title_fr: string;
  readonly category:
    | "Frontend & UI"
    | "Commerce Core"
    | "Styling & Motion"
    | "Security & Validation"
    | "Data & Infrastructure";
  readonly category_ar: string;
  readonly category_fr: string;
  readonly summary: string;
  readonly summary_ar: string;
  readonly summary_fr: string;
  readonly badge: string;
  readonly badge_ar: string;
  readonly badge_fr: string;
  readonly analogy: string;
  readonly analogy_ar: string;
  readonly analogy_fr: string;
  readonly coreProblemItSolves: string;
  readonly coreProblemItSolves_ar: string;
  readonly coreProblemItSolves_fr: string;
  readonly ecomHooksAndApis?: readonly EcomHookOrApi[];
  readonly practicalEcomScenarios?: readonly PracticalEcomScenario[];
  readonly keyMechanics: readonly {
    readonly name: string;
    readonly name_ar: string;
    readonly name_fr: string;
    readonly explanation: string;
    readonly explanation_ar: string;
    readonly explanation_fr: string;
  }[];
  readonly codeSnippet: string;
  readonly antiPattern: {
    readonly bad: string;
    readonly good: string;
    readonly reason: string;
    readonly reason_ar: string;
    readonly reason_fr: string;
  };
  readonly securityAndPerfRules: readonly string[];
  readonly securityAndPerfRules_ar: readonly string[];
  readonly securityAndPerfRules_fr: readonly string[];
  readonly officialDocsUrl: string;
  readonly officialDocsLabel: string;
  readonly officialDocsLabel_ar: string;
  readonly officialDocsLabel_fr: string;
}

export const CRASH_COURSE_TOPICS: readonly CrashCourseTopic[] = [
  {
    "slug": "nextjs-16",
    "number": "01",
    "title": "Next.js 16: Modern App Router, RSC & React 19 Paradigms",
    "title_ar": "Next.js 16: بنية App Router الحديثة، مكونات الخادم ومفاهيم React 19",
    "category": "Frontend & UI",
    "category_ar": "الواجهة الأمامية والتفاعل",
    "badge": "Core Framework",
    "badge_ar": "إطار العمل الأساسي",
    "summary": "Next.js 16 revolutionizes full-stack React with React Server Components (RSC) by default, the explicit 'use cache' directive, React 19 hooks (useActionState, useOptimistic, useTransition), and Turbopack. It cleanly separates server execution from client interactivity.",
    "summary_ar": "يُحدث Next.js 16 نقلة معمارية نوعية في بيئة عمل React عبر جعل 'مكونات الخادم' (RSC) هي النمط الافتراضي، وتوفير التوجيه المباشر 'use cache'، ودعم خطافات React 19 المتقدمة مثل useActionState و useOptimistic و useTransition مع محرك التجميع فائق السرعة Turbopack، مما يفصل تنفيذ الخادم الصرف عن تفاعلية العميل.",
    "officialDocsUrl": "https://nextjs.org/docs",
    "officialDocsLabel": "Official Next.js 16 Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ Next.js 16",
    "analogy": "A luxury dining experience. The kitchen (Server) prepares the entire gourmet dish, plates it elegantly, and serves it finished to your table. Only the salt shaker and fork (Client leaf components) need to be touched and operated by the guest.",
    "analogy_ar": "تجربة تناول طعام في مطعم راقٍ: يقوم المطبخ المركزي (الخادم) بطهي الوجبة وتجهيزها بالكامل وتزيينها في الطبق قبل تقديمها جاهزة إلى طاولتك. الضيف يحتاج فقط إلى تحريك الملعقة والشوكة (مكونات العميل التفاعلية البسيطة) دون الحاجة للطهي بنفسه على الطاولة.",
    "coreProblemItSolves": "Traditional Single-Page Apps (SPAs) ship massive multi-megabyte JavaScript bundles, causing slow First Contentful Paint, poor Core Web Vitals, and flash of empty content. Next.js 16 renders HTML on the server with zero client JavaScript overhead for static elements.",
    "coreProblemItSolves_ar": "تطبيقات الصفحة الواحدة التقليدية (SPAs) تشحن ملفات جافاسكربت ضخمة بالميجابايت لهاتف المستخدم، مما يؤدي إلى بطء ظهور المحتوى الأولي وتدهور مؤشرات الويب الحيوية. يقوم Next.js 16 بتوليد كود HTML الكامل على الخادم بحجم حزمة جافاسكربت يساوي صفراً للمكونات الثابتة.",
    "ecomHooksAndApis": [
      {
        "name": "useActionState(action, initialState)",
        "role": "Server Action State & Form Mutation Handler",
        "role_ar": "إدارة استمارة الإرسال وحالة إجراءات الخادم",
        "whyInEcom": "The primary hook for e-commerce mutations (Add to Cart, Apply Coupon, Customer Login, Checkout Address). It natively handles server validation errors, optimistic rollbacks, and isPending states without external state management libraries.",
        "whyInEcom_ar": "الخطاف الأساسي لجميع التعديلات في متجرنا (إضافة إلى السلة، تطبيق كود الخصم، تسجيل الدخول، وحفظ عنوان الشحن). يدير تلقائياً أخطاء الخادم، والتراجع عند الفشل، وحالة الانتظار دون الحاجة لمكتبات خارجية.",
        "signatureOrUsage": "const [state, formAction, isPending] = useActionState(addToCartAction, { error: null });",
        "role_fr": "Gestionnaire de Formulaire & Mutations Server Action",
        "whyInEcom_fr": "Gère les ajouts au panier, connexions et étapes de commande sans bibliothèques d'état tierces, avec support natif des erreurs serveur et états de chargement."
      },
      {
        "name": "useOptimistic(state, updateFn)",
        "role": "Zero-Latency Instant UI Updates",
        "role_ar": "تحديث الواجهة الفوري قبل استجابة الخادم (Optimistic UI)",
        "whyInEcom": "Ensures the cart counter badge increments and the slide-over cart drawer opens in 0ms when clicking 'Add to Bag', completely eliminating perceived network latency. Automatically rolls back if the server reports an out-of-stock condition.",
        "whyInEcom_ar": "يضمن زيادة عداد السلة وفتح درج السلة في زمن 0 ميللي ثانية فور نقر الزبون على 'أضف للسلة'، متخلصاً تماماً من بطء الشبكة المحسوس. ويعود للحالة السابقة تلقائياً في حال رد الخادم بنفاد الكمية.",
        "signatureOrUsage": "const [optimisticCart, setOptimisticCart] = useOptimistic(cart, (cur, item) => ({ ...cur, items: [...cur.items, item] }));",
        "role_fr": "Mise à Jour Optimiste Zéro-Latence",
        "whyInEcom_fr": "Incrémente instantanément le badge du panier et ouvre le tiroir latéral en 0 ms dès le clic sur 'Ajouter', annulant la modification en cas de rupture de stock."
      },
      {
        "name": "useTransition()",
        "role": "Non-Blocking Async UI Transitions",
        "role_ar": "خطاف الانتقالات غير المحجوبة للمتصفح",
        "whyInEcom": "Critical for faceted catalog search and category filtering. When a user clicks 'Price: High to Low' or adjusts a price slider, useTransition keeps the search input and slider responsive at 60 FPS while the catalog grid renders in the background (optimizing INP).",
        "whyInEcom_ar": "حيوي جداً لتصفية المنتجات والبحث السريع. عند اختيار تصفية مثل 'السعر من الأعلى للأدنى' أو تحريك شريط الأسعار، يحافظ useTransition على استجابة الحقول والشاشة بسرعة 60 إطاراً في الثانية أثناء معالجة القائمة بالخلفية.",
        "signatureOrUsage": "const [isPending, startTransition] = useTransition(); startTransition(() => router.push('/catalog?category=shoes'));",
        "role_fr": "Transitions Asynchrones Non-Bloquantes",
        "whyInEcom_fr": "Permet de filtrer le catalogue par prix ou marque sans figer le champ de recherche textuel à l'écran (maintien de 60 FPS pour un score INP optimal)."
      },
      {
        "name": "useFormStatus()",
        "role": "Sub-Component Pending State Reader",
        "role_ar": "معرفة حالة استمارة الإرسال في المكونات الفرعية",
        "whyInEcom": "Enables deeply nested <SubmitButton> components inside checkout and cart forms to automatically display animated spinners and disable themselves while the parent <form> action is executing.",
        "whyInEcom_ar": "يمكّن أزرار الإرسال الفرعية <SubmitButton> داخل استمارات الدفع والسلة من إظهار أيقونة التحميل وتعطيل النقر تلقائياً أثناء تنفيذ إجراء النموذج الأصلي.",
        "signatureOrUsage": "const { pending } = useFormStatus(); return <button disabled={pending}>{pending ? 'Processing...' : 'Place Order'}</button>;",
        "role_fr": "État de Soumission dans les Sous-Composants",
        "whyInEcom_fr": "Désactive automatiquement les boutons d'achat imbriqués et affiche un indicateur de chargement durant la validation du formulaire parent."
      },
      {
        "name": "'use cache' & cacheTag('products')",
        "role": "Granular Cache Component Invalidation",
        "role_ar": "توجيه التخزين المؤقت الدقيق مع وسم الإبطال",
        "whyInEcom": "Replaces crude segment revalidation. Caches catalog and product detail responses across global edge CDNs, while permitting Medusa stock and price update webhooks to trigger instant targeted revalidation via revalidateTag('products').",
        "whyInEcom_ar": "يستبدل آليات التخزين القديمة. يخزن صفحات المنتجات على حواف الشبكة العالمية (CDNs) مع إمكانية إبطالها فوريًا وبدقة متناهية عبر revalidateTag('products') عند ورود إشعار بتعديل السعر أو المخزون.",
        "signatureOrUsage": "export async function getProductCatalog() { 'use cache'; cacheTag('products'); return fetchProducts(); }",
        "role_fr": "Mise en Cache Ciblée avec Invalidation par Tag",
        "whyInEcom_fr": "Met en cache les pages produits sur les CDN mondiaux tout en permettant une révalidation ciblée instantanée lors des mises à jour de stock ou de prix dans Medusa."
      },
      {
        "name": "proxy.ts (Edge Boundary)",
        "role": "Zero-Trust Session Guard & Regional Router",
        "role_ar": "حاجز الحماية الطرفي والتوجيه الإقليمي للعملاء",
        "whyInEcom": "Intercepts incoming requests at the edge before hitting server nodes to verify customer session cookies, redirect unauthenticated users away from '/account/*' dashboards, and enforce regional country codes.",
        "whyInEcom_ar": "يعترض الطلبات الواردة على الحافة قبل وصولها للخوادم للتحقق من كوكيز جلسة العميل، وإعادة توجيه الزوار غير المسجلين بعيداً عن صفحات الحساب الشخصي، وتطبيق بادئات الدول الإقليمية.",
        "signatureOrUsage": "// proxy.ts running at the edge boundary to guard /account/* routes",
        "role_fr": "Garde-Frontière Edge & Routage Régional",
        "whyInEcom_fr": "Intercepte les requêtes à l'Edge pour valider les sessions clients, protéger l'espace /account/* et router selon le pays."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Flash Sale High-Concurrency Add-to-Bag",
        "title_ar": "الضغط العالي على إضافة السلة أثناء التخفيضات الكبرى",
        "challenge": "Thousands of shoppers hit 'Add to Bag' simultaneously during a limited collection drop. Server response times jump to 750ms, causing users to repeatedly click the button if there is no immediate feedback.",
        "challenge_ar": "آلاف المتسوقين ينقرون زر 'أضف للسلة' في نفس الثانية أثناء إطلاق مجموعة محدودة. يرتفع زمن استجابة الخادم إلى 750 ميللي ثانية، مما يدفع الزبائن للنقر المتكرر في حال عدم وجود تفاعل فوري.",
        "solution": "Pair useOptimistic with useActionState: the cart count jumps by +1 instantaneously and the button disables, while the Server Action handles stock reservation concurrently in the background.",
        "solution_ar": "الجمع بين useOptimistic و useActionState: يرتفع عداد السلة فوراً بمقدار +1 ويتعطل الزر لمنع التكرار، بينما يقوم إجراء الخادم بحجز المخزون بسلاسة في الخلفية.",
        "title_fr": "Ajout au Panier à Haute Concurrence en Vente Flash",
        "challenge_fr": "Des milliers d'utilisateurs cliquent simultanément sur 'Ajouter au Panier'. Le serveur met 750 ms à répondre.",
        "solution_fr": "La combinaison useOptimistic et useActionState incrémente le panier en 0 ms tout en réservant le stock en arrière-plan sans bloquer l'UI."
      },
      {
        "title": "Faceted Product Filtering Without Input Lag",
        "title_ar": "تصفية المنتجات المتشعبة دون تجميد شريط البحث",
        "challenge": "Filtering a catalog of 2,000 items by brand, size, color, and price while the user is actively typing in a live search field causes severe keystroke latency (Interaction to Next Paint degradation).",
        "challenge_ar": "تصفية كتالوج يحتوي على 2000 منتج حسب العلامة التجارية والمقاس واللون والسعر أثناء كتابة المستخدم في حقل البحث تؤدي إلى بطء ملحوظ في استجابة لوحة المفاتيح وتدهور مؤشر INP.",
        "solution": "Wrap search updates in React 19 startTransition. The input typing remains responsive at 60 FPS, while Next.js 16 renders the filtered product grid concurrently without dropping frames.",
        "solution_ar": "تغليف تحديثات التصفية داخل startTransition من React 19: تظل الكتابة سلسة للغاية بسرعة 60 إطاراً بالثانية، بينما يقوم Next.js 16 بمعالجة شبكة المنتجات في الخلفية دون أي تقطيع.",
        "title_fr": "Filtrage à Facettes sans Latence de Frappe",
        "challenge_fr": "Filtrer 2000 articles tout en tapant dans la barre de recherche fige la saisie clavier.",
        "solution_fr": "React 19 useTransition traite le filtrage comme une tâche secondaire, garantissant une saisie fluide à 60 FPS."
      }
    ],
    "keyMechanics": [
      {
        "name": "React Server Components (RSC) by Default",
        "name_ar": "مكونات الخادم الافتراضية (RSC)",
        "explanation": "All components in the app directory are Server Components unless marked with 'use client'. They fetch data directly, access server secrets securely, and render to HTML without adding a single byte to the client bundle.",
        "explanation_ar": "جميع المكونات هي مكونات خادم ما لم تُحدد بالتوجيه 'use client'. تقوم بجلب البيانات مباشرة وتصل للمفاتيح السرية بأمان تام وتتحول إلى HTML خالص دون إضافة بايت واحد لحزمة المتصفح.",
        "name_fr": "React Server Components par Défaut",
        "explanation_fr": "Tous les composants sont exécutés côté serveur par défaut, accédant aux données de manière sécurisée sans alourdir le bundle client."
      },
      {
        "name": "Fine-Grained 'use cache' & cacheTag",
        "name_ar": "التخزين المؤقت الدقيق 'use cache' ووسم cacheTag",
        "explanation": "Replaces unpredictable segment-level revalidation. Functions marked with 'use cache' and cacheTag('products') can be invalidated instantly on-demand when Medusa emits catalog updates.",
        "explanation_ar": "يستبدل آليات إعادة التحقق غير الدقيقة القديمة. الدوال الموسومة بـ 'use cache' والمميزة بوسم cacheTag يمكن إبطالها فوريًا عند ورود إشعار تحديث من منصة Medusa.",
        "name_fr": "Directive 'use cache' & cacheTag",
        "explanation_fr": "Remplace la révalidation imprévisible par un cache granulaire invalidé à la demande."
      },
      {
        "name": "React 19 useActionState & useOptimistic",
        "name_ar": "خطافات React 19 للإجراءات والتحديث المتفائل",
        "explanation": "Natively orchestrates Server Actions with automatic pending states, error envelopes, and zero-latency optimistic UI updates before the server round-trip completes.",
        "explanation_ar": "ينسق إجراءات الخادم (Server Actions) أصليًا ويوفر مؤشرات التحميل والتعامل مع الأخطاء مع تحديث الواجهة فورًا دون انتظار استجابة الشبكة (Optimistic UI).",
        "name_fr": "Hooks useActionState & useOptimistic",
        "explanation_fr": "Orchestre nativement les mutations serveur avec gestion d'erreurs et affichage optimiste instantané."
      }
    ],
    "codeSnippet": "// Server Component (Default, zero client JS bundle):\nimport { medusa } from \"@/infrastructure/medusa-client\";\nimport { AddToCartButton } from \"./AddToCartButton\";\n\nexport default async function ProductCatalog() {\n  'use cache';\n  // cacheTag(\"catalog\");\n\n  const { products } = await medusa.store.product.list();\n\n  return (\n    <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n      {products.map((p) => (\n        <article key={p.id} className=\"p-4 bg-surface-elevated rounded-lg\">\n          <h2 className=\"text-body font-bold\">{p.title}</h2>\n          <AddToCartButton variantId={p.variants[0]?.id} />\n        </article>\n      ))}\n    </div>\n  );\n}",
    "antiPattern": {
      "bad": "'use client'; at the top of every file with useEffect(() => { fetch(...) }, [])",
      "good": "Server Component fetching data directly; extract only the interactive button to a 'use client' leaf.",
      "reason": "Scattering 'use client' at page roots turns Next.js into a slow client-side SPA, ruining SEO, increasing TTFB, and generating massive layout shifts (CLS).",
      "reason_ar": "وضع 'use client' في أعلى الصفحات يحول المشروع إلى تطبيق عميل كلاسيكي بطيء، مما يدمر محركات البحث ويرفع زمن الاستجابة ويحدث ومضات في الشاشة.",
      "reason_fr": "Placer 'use client' en haut de chaque page transforme Next.js en une SPA lente, détruisant le SEO et augmentant le CLS."
    },
    "securityAndPerfRules": [
      "Zero private API keys in client components (never prefix backend secrets with NEXT_PUBLIC_).",
      "Always wrap asynchronous client transitions in startTransition to maintain 60 FPS INP scores.",
      "Isolate interactive leaves ('use client') to tiny components like AddToCartButton, never page layouts."
    ],
    "securityAndPerfRules_ar": [
      "حظر تام لكتابة المفاتيح السرية في مكونات العميل (لا تبدأ أبداً المتغيرات السرية بـ NEXT_PUBLIC_).",
      "تغليف جميع التحولات غير المتزامنة داخل startTransition للحفاظ على معيار الاستجابة INP ممتازاً.",
      "حصر مكونات العميل 'use client' في أوراق الشجرة التفاعلية كالأزرار دون تغليف الصفحات بأكملها."
    ],
    "title_fr": "Next.js 16 : App Router Moderne, RSC & Paradigmes React 19",
    "category_fr": "Frontend & UI",
    "badge_fr": "Framework Principal",
    "summary_fr": "Next.js 16 révolutionne React full-stack avec les React Server Components (RSC) par défaut, la directive explicite 'use cache', les hooks React 19 (useActionState, useOptimistic, useTransition) et Turbopack, séparant strictement l'exécution serveur de l'interactivité client.",
    "officialDocsLabel_fr": "Documentation Officielle Next.js 16",
    "analogy_fr": "Un restaurant gastronomique. La cuisine (Serveur) prépare et dresse l'intégralité du plat avec raffinement avant de le servir à table. Seuls la salière et la fourchette (composants interactifs clients) sont manipulés par le convive.",
    "coreProblemItSolves_fr": "Les SPAs classiques envoient des mégaoctets de bundles JavaScript au navigateur, ralentissant le First Contentful Paint et dégradant les Core Web Vitals. Next.js 16 génère le code HTML complet sur le serveur avec zéro octet de JavaScript client pour les éléments statiques.",
    "securityAndPerfRules_fr": [
      "Aucune clé secrète dans les composants clients (ne jamais préfixer les secrets avec NEXT_PUBLIC_).",
      "Envelopper les transitions asynchrones dans startTransition pour maintenir un excellent score INP.",
      "Restreindre 'use client' aux boutons et feuilles interactives plutôt qu'aux mises en page complètes."
    ]
  },
  {
    "slug": "medusa-v2",
    "number": "02",
    "title": "Medusa.js v2: Modular Commerce Engine & Sagas",
    "title_ar": "Medusa.js v2: محرك التجارة المعياري ونمط حركات الساغا (Sagas)",
    "category": "Commerce Core",
    "category_ar": "محرك التجارة الإلكترونية",
    "badge": "Commerce Core",
    "badge_ar": "محرك التجارة الأساسي",
    "summary": "Medusa v2 is a modular, high-scale headless commerce framework. Built around isolated Commerce Modules, Workflows with compensating rollback steps (Distributed Sagas), and custom subscribers, it guarantees transactional integrity across distributed e-commerce operations.",
    "summary_ar": "تعد Medusa v2 منصة تجارة إلكترونية معيارية فائقة الأداء. تقوم على وحدات تجارية مستقلة، ومسارات عمل (Workflows) مع خطوات تعويضية وتراجع تلقائي (نمط الساغا الموزعة)، لضمان تكامل المعاملات التجارية الموزعة.",
    "officialDocsUrl": "https://docs.medusajs.com",
    "officialDocsLabel": "Official Medusa v2 Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ Medusa v2",
    "analogy": "An aerospace launch checklist. Each stage (fuel check, booster ignition, orbital burn) executes sequentially. If stage 3 fails, the computer automatically triggers abort sequences to safely vent fuel and protect the payload.",
    "analogy_ar": "قائمة إطلاق المركبات الفضائية: تنفذ كل مرحلة بتسلسل دقيق (التحقق من الوقود، إشعال الصاروخ، الانفصال). وإذا فشلت المرحلة الثالثة، يفعل الكمبيوتر تلقائياً خطوات تعويضية لتفريغ الوقود بسلام وحماية المركبة.",
    "coreProblemItSolves": "E-commerce transactions span multiple systems: charging credit cards on Stripe, reserving stock in a warehouse, generating shipping labels on DHL. If any step fails, traditional monolithic systems leave ghost charges or corrupted stock. Medusa v2 Workflows guarantee automatic rollback.",
    "coreProblemItSolves_ar": "تمتد معاملات التجارة عبر أنظمة متعددة: خصم البطاقة في Stripe، حجز البضاعة في المستودع، وإنشاء بوليصة الشحن في DHL. وإذا تعطلت أي خطوة، تحدث خصومات وهمية وتلف في سجلات المخزون. تضمن مسارات عمل Medusa v2 التراجع التلقائي وحماية السجلات.",
    "ecomHooksAndApis": [
      {
        "name": "createWorkflow(name, workflowFn)",
        "role": "Distributed Saga Orchestrator",
        "role_ar": "منسق حركات الساغا الموزعة للعمليات التجارية",
        "whyInEcom": "Coordinates multi-step checkout processes (authorize payment, reserve inventory, complete cart, create order, trigger confirmation email). Guarantees that if step 4 fails, steps 1-3 are rolled back atomically.",
        "whyInEcom_ar": "ينسق العمليات متعددة الخطوات في إتمام الطلب (تفويض الدفع، حجز المخزون، إغلاق السلة، إنشاء الطلب، وإرسال بريد التأكيد). يضمن أنه في حال تعطل الخطوة الرابعة، يتم التراجع عن الخطوات 1 إلى 3 تلقائياً.",
        "signatureOrUsage": "export const checkoutWorkflow = createWorkflow('checkout-flow', function(input) { ... });",
        "role_fr": "Orchestrateur de Sagas Distribuées",
        "whyInEcom_fr": "Coordonne les processus complexes de paiement et de commande avec garantie d'annulation atomique en cas de défaillance."
      },
      {
        "name": "createStep(name, stepFn, compensateFn)",
        "role": "Transactional Step with Rollback Compensation",
        "role_ar": "خطوة معاملة تجارية مزودة بآلية تعويض وتراجع",
        "whyInEcom": "Every step that writes state (like reserving warehouse inventory) defines a compensateFn that executes only if subsequent steps in the saga fail, restoring stock levels without human intervention.",
        "whyInEcom_ar": "كل خطوة تقوم بتعديل البيانات (مثل حجز بضاعة في المستودع) تعرف دالة تعويضية compensateFn تنفذ فقط إذا فشلت الخطوات التالية، لتعيد المخزون فوراً دون تدخل يدوي.",
        "signatureOrUsage": "const reserveInventory = createStep('reserve-inv', async (input) => { ... }, async (id) => { await release(id); });",
        "role_fr": "Étape Transactionnelle avec Compensation",
        "whyInEcom_fr": "Chaque étape modifiant l'état définit une fonction de compensation libérant les stocks réservés si les étapes suivantes échouent."
      },
      {
        "name": "medusa.store.cart.create() & lineItems.create()",
        "role": "SDK Cart Lifecycle Controller",
        "role_ar": "متحكم دورة حياة سلة التسوق عبر الـ SDK",
        "whyInEcom": "Manages persistent customer shopping carts, associates active regional currencies, validates variant stock levels, and applies active promotional discount rules.",
        "whyInEcom_ar": "يدير سلات تسوق العملاء المستمرة، ويربط العملة الإقليمية المعتمدة، ويتحقق من كميات المخزون المتوفرة، ويطبق أكواد الخصم والعروض النشطة.",
        "signatureOrUsage": "const { cart } = await medusa.store.cart.create({ region_id: 'reg_sa', currency_code: 'sar' });",
        "role_fr": "Contrôleur du Cycle de Vie du Panier",
        "whyInEcom_fr": "Gère la persistance des paniers, l'association des devises régionales et l'application des promotions."
      },
      {
        "name": "Remote Query / Remote Link",
        "role": "Cross-Module Data Joining Engine",
        "role_ar": "محرك الاستعلام والربط بين الوحدات المعيارية",
        "whyInEcom": "Allows querying product catalog details, stock location inventories, and B2B customer price tiers across separated module schemas in a single query without N+1 performance bottlenecks.",
        "whyInEcom_ar": "يتيح جلب تفاصيل المنتجات، ومخزون الفروع، وقوائم أسعار العملاء المخصصة عبر قواعد بيانات الوحدات المنفصلة في استعلام موحد دون مشكلة N+1 في قواعد البيانات.",
        "signatureOrUsage": "const products = await remoteQueryObject({ entry_point: 'product', fields: ['id', 'title', 'variants.inventory_items.*'] });",
        "role_fr": "Moteur de Requête Inter-Modules",
        "whyInEcom_fr": "Permet de joindre le catalogue, les stocks et les tarifs clients à travers des modules isolés sans goulot d'étranglement N+1."
      },
      {
        "name": "Payment Module: initiatePaymentSession()",
        "role": "Multi-Gateway Payment Session Initializer",
        "role_ar": "منشئ جلسات الدفع عبر البوابات المتعددة",
        "whyInEcom": "Prepares payment intents with Stripe, Cash on Delivery (COD), or local gateways (e.g. Mada, Tamara, Tabby) and handles 3D-Secure authentication callbacks.",
        "whyInEcom_ar": "يجهز نوايا الدفع الإلكتروني مع Stripe، أو الدفع عند الاستلام، أو البوابات الإقليمية (مثل مدى، تمارا، تابي) ويدير متطلبات التحقق 3D-Secure.",
        "signatureOrUsage": "const session = await medusa.store.payment.initiatePaymentSession(cart, { provider_id: 'pp_stripe_stripe' });",
        "role_fr": "Initialisateur de Sessions Multi-Passerelles",
        "whyInEcom_fr": "Prépare les intentions de paiement avec Stripe, paiement à la livraison (COD) ou passerelles locales."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Stripe Card Declined After Warehouse Stock Reserved",
        "title_ar": "رفض البطاقة الائتمانية بعد حجز بضاعة المستودع",
        "challenge": "The checkout workflow reserves 2 units of an exclusive sneaker in the inventory database. However, the customer's credit card fails 3D-Secure verification at step 2. Without sagas, the stock remains locked and unavailable to other buyers.",
        "challenge_ar": "يقوم مسار الدفع بحجز قطعتين من حذاء حصري في قاعدة بيانات المستودع. لكن بطاقة العميل تفشل في التحقق 3D-Secure في الخطوة التالية. دون نمط الساغا، تظل البضاعة محجوزة ومعلقة ولا يستطيع زبون آخر شراءها.",
        "solution": "Medusa v2 detects the step failure and immediately triggers the compensate function on the inventory reservation step, safely incrementing available stock back in PostgreSQL.",
        "solution_ar": "تكتشف Medusa v2 فشل خطوة الدفع وتفعل فوراً الدالة التعويضية لخطوة حجز المخزون، لتعيد القطعتين إلى المخزون المتاح للبيع في PostgreSQL بأمان تام.",
        "title_fr": "Refus de Carte Après Réservation du Stock",
        "challenge_fr": "Le stock est réservé mais la vérification 3D-Secure échoue, bloquant inutilement les articles.",
        "solution_fr": "La fonction de compensation de l'étape de réservation s'exécute immédiatement, réintégrant les unités dans le stock disponible de PostgreSQL."
      },
      {
        "title": "Cross-Country Regional Tax & Shipping Switch",
        "title_ar": "تحديث الضرائب والشحن تلقائياً عند تغيير بلد التوصيل",
        "challenge": "A customer starts shopping in the UAE (AED, 5% VAT) and enters a shipping address in Saudi Arabia (SAR, 15% VAT). Calculating taxes manually leads to revenue loss or tax compliance penalties.",
        "challenge_ar": "يبدأ العميل التسوق في الإمارات (درهم، 5% ضريبة) ثم يحدد عنوان التوصيل في السعودية (ريال، 15% ضريبة). الحساب اليدوي للضرائب يسبب خسائر مالية ومخالفات نظامية.",
        "solution": "Medusa's Cart Module automatically cascades shipping address changes through the Tax Module, recalculating line item tax rates and available carrier shipping options deterministically.",
        "solution_ar": "تقوم وحدة السلة في Medusa بنقل تغيير عنوان الشحن تلقائياً إلى وحدة الضرائب، لتعيد حساب نسب الضريبة لكل منتج وخيارات الشحن المتاحة بصورة مؤكدة.",
        "title_fr": "Mise à Jour Fiscale et Frais de Port Transfrontaliers",
        "challenge_fr": "Un client commence ses achats aux EAU (TVA 5%) et choisit une adresse en Arabie Saoudite (TVA 15%).",
        "solution_fr": "Le module panier de Medusa réévalue automatiquement les lignes de taxe et recalcule les transporteurs selon l'adresse sélectionnée."
      }
    ],
    "keyMechanics": [
      {
        "name": "Isolated Commerce Modules",
        "name_ar": "الوحدات التجارية المعيارية المنفصلة",
        "explanation": "Product, Cart, Order, Inventory, and Payment logic are isolated in independent modules. They can run embedded in a single monolithic process or scale independently into microservices.",
        "explanation_ar": "فصل منطق المنتجات والسلة والطلبات والمخزون والدفع في وحدات مستقلة تماماً، يمكن تشغيلها كعملية موحدة أو توسيعها كخدمات مصغرة مستقلة.",
        "name_fr": "Modules Commerciaux Isolés",
        "explanation_fr": "Le catalogue, le panier, les commandes et les paiements sont isolés et scalent indépendamment."
      },
      {
        "name": "Workflows with Step Compensation",
        "name_ar": "مسارات العمل مع خطوات التعويض التلقائي",
        "explanation": "Workflows define DAG-based execution pipelines. If any step fails, compensation functions execute in reverse order to return the system to a clean, consistent state.",
        "explanation_ar": "تحدد مسارات العمل سلاسل تنفيذ واضحة، وفي حال فشل أي خطوة، تنفذ دوال التعويض بترتيب عكسي لتعيد النظام إلى حالة مستقرة ونظيفة.",
        "name_fr": "Workflows avec Compensation par Étape",
        "explanation_fr": "Séries d'étapes transactionnelles inversées automatiquement en cas de défaillance."
      },
      {
        "name": "Remote Link & Query Engine",
        "name_ar": "محرك الربط والاستعلام عن بعد",
        "explanation": "Connects data across modules via primary-key linkages without tight foreign-key coupling, enabling joins between commerce data and custom domain entities.",
        "explanation_ar": "يربط البيانات بين الوحدات المختلفة بالمفاتيح الأساسية دون قيود المفاتيح الأجنبية الصارمة، مما يتيح دمج بيانات التجارة مع نماذج النظام المخصصة.",
        "name_fr": "Liaisons et Requêtes Distribuées",
        "explanation_fr": "Jointures directes entre modules sans couplage rigide de clés étrangères."
      }
    ],
    "codeSnippet": "import { createStep, createWorkflow, StepResponse } from \"@medusajs/framework/workflows-sdk\";\n\n// 1. Transactional Step with compensation logic\nexport const reserveInventoryStep = createStep(\n  \"reserve-inventory\",\n  async (input: { variantId: string; quantity: number }, { container }) => {\n    const invService = container.resolve(\"inventory\");\n    const reservation = await invService.reserve(input.variantId, input.quantity);\n    return new StepResponse(reservation, reservation.id);\n  },\n  async (reservationId, { container }) => {\n    // Compensation: release stock if later steps fail\n    if (!reservationId) return;\n    const invService = container.resolve(\"inventory\");\n    await invService.release(reservationId);\n  }\n);\n\n// 2. Composable Workflow\nexport const completeCheckoutWorkflow = createWorkflow(\n  \"complete-checkout\",\n  function (input: { cartId: string; variantId: string; qty: number }) {\n    const res = reserveInventoryStep({ variantId: input.variantId, quantity: input.qty });\n    // Additional steps: chargePaymentStep, createOrderStep...\n    return res;\n  }\n);",
    "antiPattern": {
      "bad": "Writing raw SQL transactions that insert into orders, payments, and inventory tables simultaneously in an API route.",
      "good": "Orchestrate multi-step operations using Medusa v2 Workflows with explicit step compensation.",
      "reason": "Direct SQL transactions fail across external APIs (e.g. if Stripe succeeds but database drops connection, customer was charged but order was never created).",
      "reason_ar": "الاستعلامات المباشرة تفشل عند التعامل مع بوابات خارجية (مثل نجاح خصم Stripe وانقطاع اتصال قاعدة البيانات، فيُخصم المبلغ دون إنشاء الطلب للزبون).",
      "reason_fr": "Les transactions SQL directes échouent face aux APIs externes (ex. si Stripe valide le débit mais que la base coupe la connexion, le client est débité sans commande créée)."
    },
    "securityAndPerfRules": [
      "Never execute payment authorization and fulfillment in a single non-compensable step.",
      "All custom API routes must authenticate caller identity using Medusa Auth Context (Customer vs User).",
      "Always query related module entities using Medusa's Remote Query instead of sequential database queries."
    ],
    "securityAndPerfRules_ar": [
      "عدم تنفيذ تفويض الدفع وإصدار الشحنة في خطوة واحدة دون آلية تراجع وتعويض صريحة.",
      "التحقق من هوية المتصل في جميع المسارات المخصصة عبر سياق المصادقة (زبون مقابل مدير نظام).",
      "استخدام محرك Remote Query لجلب الكيانات المرتبطة بدلاً من الاستعلامات المتتالية البطيئة."
    ],
    "title_fr": "Medusa.js v2 : Moteur E-Commerce Modulaire & Sagas Distribuées",
    "category_fr": "Moteur E-Commerce",
    "badge_fr": "Noyau E-Commerce",
    "summary_fr": "Medusa v2 est un framework e-commerce headless modulaire et hautement évolutif. Conçu autour de modules autonomes, de workflows avec étapes de compensation (Sagas distribuées) et d'abonnés aux événements, il garantit l'intégrité transactionnelle des opérations réparties.",
    "officialDocsLabel_fr": "Documentation Officielle Medusa v2",
    "analogy_fr": "La liste de contrôle de lancement d'une fusée spatiale. Chaque étape s'exécute séquentiellement. Si l'étape 3 échoue, l'ordinateur déclenche automatiquement des séquences de compensation pour évacuer le carburant et sécuriser la charge utile sans explosion.",
    "coreProblemItSolves_fr": "Les transactions e-commerce impliquent plusieurs systèmes : débit bancaire Stripe, réservation d'entrepôt, génération d'étiquette DHL. Si une étape échoue, les systèmes traditionnels laissent des incohérences. Les workflows Medusa v2 assurent un rollback automatique.",
    "securityAndPerfRules_fr": [
      "Ne jamais exécuter le débit et l'expédition dans une étape unique sans fonction de compensation.",
      "Authentifier l'identité de l'appelant dans toutes les routes personnalisées via le contexte Medusa.",
      "Utiliser Remote Query pour interroger les entités liées plutôt que des requêtes séquentielles lentes."
    ]
  },
  {
    "slug": "typescript",
    "number": "03",
    "title": "TypeScript 5.7+: Clean Architecture DTOs & Result Monads",
    "title_ar": "TypeScript 5.7+: كائنات نقل البيانات (DTOs) ونمط Result Monad للتعامل مع الأخطاء",
    "category": "Frontend & UI",
    "category_ar": "الواجهة الأمامية والتفاعل",
    "badge": "Type Safety",
    "badge_ar": "الأمان النمطي الصارم",
    "summary": "TypeScript 5.7+ provides strict-mode compile-time guarantees, Clean Architecture Data Transfer Objects (DTOs), and defensive error handling via Result monads. It shields the UI layer from database schema churn and eliminates floating-point financial bugs.",
    "summary_ar": "توفر TypeScript 5.7+ ضمانات صارمة أثناء الترجمة، وتطبق كائنات نقل البيانات (DTOs) وفق العمارة النظيفة، وتدير الأخطاء بنمط Result Monad دون رمي استثناءات عشوائية، لحماية واجهة المتجر من تقلبات قواعد البيانات والتخلص من أخطاء تقريب العملات.",
    "officialDocsUrl": "https://www.typescriptlang.org/docs/",
    "officialDocsLabel": "Official TypeScript Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ TypeScript",
    "analogy": "A notarized international contract. Both parties sign explicit, typed agreements. Neither party can introduce surprise verbal clauses, assume optional fields exist, or change financial terms without invalidating the contract.",
    "analogy_ar": "عقد دولي موثق لدى كاتب العدل: يوقع الطرفان على بنود واضحة وصارمة. لا يمكن لأي طرف إدخال شروط شفهية مفاجئة أو افتراض وجود بنود غير موقعة دون إبطال العقد تلقائياً.",
    "coreProblemItSolves": "JavaScript treats monetary calculations as floating-point numbers where 0.1 + 0.2 equals 0.30000000000000004. In e-commerce, this causes penny accounting discrepancies. TypeScript enforces integer minor units and forces compile-time handling of all error branches.",
    "coreProblemItSolves_ar": "تتعامل جافاسكربت مع العملات كأرقام عشرية عائمة، حيث ينتج عن جمع 0.1 + 0.2 الناتج 0.30000000000000004 مما يسبب فروقات مالية في الحسابات. تفرض TypeScript حفظ الأموال بالسنتات وتلزم المطور بمعالجة جميع مسارات الخطأ أثناء كتابة الكود.",
    "ecomHooksAndApis": [
      {
        "name": "MoneyDTO { amount: number, currency_code: string }",
        "role": "Minor-Unit Financial Value Object",
        "role_ar": "كائن القيمة المالية بوحدات السنتات الصحيحة",
        "whyInEcom": "Guarantees all product prices, taxes, and shipping rates are strictly represented as integers in minor units ($19.99 = 1999 cents, 15.50 SAR = 1550 halalas), completely eliminating floating-point rounding errors.",
        "whyInEcom_ar": "يضمن تمثيل جميع الأسعار والضرائب ومبالغ الشحن كأعداد صحيحة بوحدة السنتات (19.99 دولار = 1999 سنت، 15.50 ريال = 1550 هللة)، مما يمنع تماماً أخطاء الفاصلة العائمة في العمليات الحسابية.",
        "signatureOrUsage": "export interface MoneyDTO { readonly amount: number; readonly currency_code: string; }",
        "role_fr": "Objet Valeur Financière en Sous-Unités Entières",
        "whyInEcom_fr": "Représente les prix et taxes en centimes entiers (1999 = 19,99 $), éradiquant les erreurs d'arrondi des nombres flottants."
      },
      {
        "name": "Result<T, E> Discriminated Union",
        "role": "Defensive Functional Error Monad",
        "role_ar": "نمط النتيجة الآمن دون رمي استثناءات",
        "whyInEcom": "Server Actions return { success: true, data } | { success: false, error }, forcing the calling React component to check if (res.success) before rendering, preventing unhandled runtime crashes on stock failures.",
        "whyInEcom_ar": "تعيد إجراءات الخادم كائناً من نوع إما نجاح أو خطأ، مما يجبر مكون React على التحقق قبل العرض، ويمنع انهيار الشاشة غير المتوقع عند نفاد الكمية.",
        "signatureOrUsage": "export type Result<T, E = string> = { readonly success: true; readonly data: T } | { readonly success: false; readonly error: E };",
        "role_fr": "Monade Défensive de Résultat",
        "whyInEcom_fr": "Force l'UI à vérifier res.success avant d'accéder aux données, évitant les crashs serveur non gérés."
      },
      {
        "name": "type OrderStatus = 'pending' | 'captured' | ...",
        "role": "Finite State Machine Union Type",
        "role_ar": "نموذج آلة الحالة الصارمة لطلبات الشراء",
        "whyInEcom": "Prevents invalid commerce state transitions (e.g. attempting to dispatch a courier fulfillment for an order whose payment was never captured).",
        "whyInEcom_ar": "يمنع الانتقال غير المنطقي في حالات الطلبات (مثل محاولة إصدار بوليصة شحن لطلب لم يتم تفويض أو خصم مبلغه المالي بعد).",
        "signatureOrUsage": "export type OrderStatus = 'pending' | 'authorized' | 'captured' | 'fulfilled' | 'canceled' | 'refunded';",
        "role_fr": "Union Typée de Machine à États",
        "whyInEcom_fr": "Interdit les transitions invalides (comme expédier une commande dont le paiement n'est pas capturé)."
      },
      {
        "name": "Readonly<ProductDTO>",
        "role": "Immutable Domain Boundary Protection",
        "role_ar": "حماية كائنات النطاق من التعديل العرضي",
        "whyInEcom": "Protects fetched catalog entities from accidental mutations in client components, preserving pristine state across render cycles.",
        "whyInEcom_ar": "يحمي بيانات المنتجات من التعديل العرضي داخل مكونات الواجهة، محافظاً على نقاء البيانات عبر دورات التحديث.",
        "signatureOrUsage": "export interface ProductDTO { readonly id: string; readonly title: string; readonly price: MoneyDTO; }",
        "role_fr": "Protection Immuable de Domaine",
        "whyInEcom_fr": "Empêche toute altération accidentelle des entités de catalogue dans les composants d'affichage."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Penny Discrepancy on Split Discount Coupons",
        "title_ar": "فروقات السنتات عند توزيع كوبونات الخصم على بنود السلة",
        "challenge": "Applying a $10 discount across 3 items ($3.3333... each) results in fractional pennies that cause Stripe payments to be rejected due to amount mismatch.",
        "challenge_ar": "توزيع خصم 10 دولارات على 3 منتجات (3.3333 دولار لكل منتج) ينتج عنه كسور سنتات ترفضها بوابات الدفع لاختلاف مجموع البنود عن الإجمالي.",
        "solution": "TypeScript financial utilities enforce integer remainder distribution, assigning 334, 333, and 333 cents so the line item sum matches the total with 100% mathematical precision.",
        "solution_ar": "تطبيق دوال مالية في TypeScript تفرض توزيع الباقي كأعداد صحيحة (334 و 333 و 333 سنتاً) ليتطابق مجموع البنود مع الإجمالي بدقة رياضية تامة.",
        "title_fr": "Écarts de Centimes lors de Bons de Réduction Partagés",
        "challenge_fr": "Diviser 10 $ de réduction sur 3 articles génère des fractions de centimes rejetées par Stripe.",
        "solution_fr": "Les utilitaires financiers TypeScript distribuent les centimes restants (334, 333, 333) pour une correspondance exacte à 100%."
      },
      {
        "title": "Shielding Frontend from Medusa v2 Schema Updates",
        "title_ar": "حماية الواجهة الأمامية من تعديلات جداول Medusa v2",
        "challenge": "A minor Medusa upgrade renames product.thumbnail to product.images[0].url. Without an abstraction layer, 50 frontend components break simultaneously.",
        "challenge_ar": "تحديث داخلي في Medusa يغير اسم حقل الصورة من thumbnail إلى رابط داخل مصفوفة. دون طبقة عزل، تتعطل عشرات المكونات في المتجر دفعة واحدة.",
        "solution": "The Data Access Layer maps Medusa SDK entities to strict ProductDTOs. The UI only consumes ProductDTO, keeping all backend changes isolated to a single mapper file.",
        "solution_ar": "تقوم طبقة الوصول للبيانات بتحويل استجابات Medusa إلى كائنات ProductDTO موحدة، بحيث تعتمد الواجهة فقط على DTO وتبقى التغييرات معزولة في ملف تحويل واحد.",
        "title_fr": "Protection de l'UI contre les Changements de Schéma Medusa",
        "challenge_fr": "Une mise à jour Medusa renomme des colonnes internes, risquant de briser 50 composants.",
        "solution_fr": "La couche d'accès aux données transforme les entités Medusa en ProductDTO stables, isolant l'UI de toute rupture externe."
      }
    ],
    "keyMechanics": [
      {
        "name": "Strict Minor-Unit Money Modeling",
        "name_ar": "تمثيل الأموال بوحدات السنتات والأعداد الصحيحة",
        "explanation": "All monetary amounts are strictly modeled as integers in minor units (cents, halalas, pence) to prevent IEEE 754 floating-point rounding bugs.",
        "explanation_ar": "تخزين جميع المبالغ كأعداد صحيحة بوحدات السنتات لمنع أخطاء تقريب الأرقام العشرية في الحسابات المالية.",
        "name_fr": "Modélisation Financière en Sous-Unités Entières",
        "explanation_fr": "Tous les montants sont stockés en entiers de centimes pour bannir les erreurs d'arrondi IEEE 754."
      },
      {
        "name": "Defensive Result Monad Pattern",
        "name_ar": "نمط Result Monad الدفاعي للأخطاء",
        "explanation": "Functions return typed Result<T, E> monads instead of throwing unhandled exceptions, forcing callers to explicitly handle failure branches at compile time.",
        "explanation_ar": "تعيد الدوال كائنات Result<T, E> بدلاً من رمي أخطاء مجهولة، مما يلزم المبرمج بمعالجة احتمالات الفشل برمجياً قبل تشغيل التطبيق.",
        "name_fr": "Patron Monade Result Défensif",
        "explanation_fr": "Les fonctions retournent des unions Result<T, E> au lieu de lever des exceptions imprévues."
      },
      {
        "name": "Clean Architecture DTO Boundaries",
        "name_ar": "فصل كائنات نقل البيانات (DTO) في العمارة النظيفة",
        "explanation": "Raw database schemas and third-party SDK entities never leak into presentation components. Strongly-typed DTOs act as an Anti-Corruption Layer.",
        "explanation_ar": "منع تسرب نماذج قواعد البيانات إلى مكونات العرض، حيث تعمل كائنات DTO كطبقة حماية عازلة للتغييرات الخارجية.",
        "name_fr": "Frontières DTO en Clean Architecture",
        "explanation_fr": "Les schémas de base de données ne fuient jamais dans l'UI grâce à une couche anti-corruption."
      }
    ],
    "codeSnippet": "// packages/types/src/domain/result.ts\nexport type Result<T, E = string> =\n  | { readonly success: true; readonly data: T }\n  | { readonly success: false; readonly error: E };\n\nexport const Result = {\n  ok: <T>(data: T): Result<T, never> => ({ success: true, data }),\n  fail: <E>(error: E): Result<never, E> => ({ success: false, error }),\n};\n\n// packages/types/src/domain/money.ts\nexport interface MoneyDTO {\n  readonly amount: number; // Stored in minor units: 1999 = $19.99\n  readonly currency_code: string; // ISO 4217: \"USD\", \"SAR\", \"EUR\"\n}",
    "antiPattern": {
      "bad": "amount: 19.99 stored as a floating point number and functions throwing generic Error('Out of stock').",
      "good": "amount: 1999 (minor units) and functions returning Result<CartDTO, 'OUT_OF_STOCK'>.",
      "reason": "Floating-point arithmetic creates rounding errors during tax and discount calculation; thrown errors cause uncaught crashes in Server Actions.",
      "reason_ar": "الأرقام العشرية تسبب أخطاء حسابية في الضرائب والخصومات، ورمي الأخطاء يسبب انهياراً غير متوقع في إجراءات الخادم.",
      "reason_fr": "Les nombres flottants créent des écarts comptables et les exceptions non capturées font planter les Server Actions."
    },
    "securityAndPerfRules": [
      "Never store currency amounts as floating-point decimals; always use integer minor units.",
      "Server Actions must return typed Result<T, E> objects, never unhandled raw thrown errors.",
      "Mark all DTO properties with readonly to enforce functional immutability."
    ],
    "securityAndPerfRules_ar": [
      "حظر تخزين مبالغ العملات كأرقام عشرية؛ واستخدام الأعداد الصحيحة بوحدات السنتات دائماً.",
      "إلزام إجراءات الخادم بإعادة كائنات Result<T, E> بدلاً من رمي استثناءات غير ممسوكة.",
      "تعريف جميع خصائص كائنات DTO بالصفة readonly لضمان عدم قابليتها للتعديل."
    ],
    "title_fr": "TypeScript 5.7+ : DTOs en Clean Architecture & Monades Result",
    "category_fr": "Frontend & UI",
    "badge_fr": "Sécurité Typologique",
    "summary_fr": "TypeScript 5.7+ fournit des garanties strictes à la compilation, des DTOs conformes à la Clean Architecture et une gestion défensive des erreurs par monades Result, protégeant l'interface des changements de schéma de base de données.",
    "officialDocsLabel_fr": "Documentation Officielle TypeScript",
    "analogy_fr": "Un contrat international certifié par un notaire. Les clauses sont explicites et signées. Aucune partie ne peut introduire de modification verbale imprévue sous peine de nullité immédiate.",
    "coreProblemItSolves_fr": "JavaScript traite l'argent comme des nombres flottants (0.1 + 0.2 = 0.30000000000000004), créant des anomalies d'arrondi de centimes. TypeScript impose des entiers en sous-unités et force la gestion de tous les cas d'erreur.",
    "securityAndPerfRules_fr": [
      "Ne jamais stocker de devises sous forme de décimales flottantes ; utiliser uniquement des centimes entiers.",
      "Les Server Actions doivent obligatoirement retourner des objets Result<T, E> typés.",
      "Déclarer toutes les propriétés des DTOs en 'readonly' pour garantir leur immuabilité."
    ]
  },
  {
    "slug": "tailwind-v4",
    "number": "04",
    "title": "Tailwind CSS v4: CSS-First Design Tokens & @theme",
    "title_ar": "Tailwind CSS v4: رموز التصميم القائمة على CSS الصرف وتوجيه @theme",
    "category": "Styling & Motion",
    "category_ar": "التصميم والحركة",
    "badge": "Design System",
    "badge_ar": "نظام التصميم الموحد",
    "summary": "Tailwind CSS v4 discards JavaScript-based configuration in favor of pure CSS @theme declarations powered by LightningCSS. It introduces a rigid, token-first architecture in perceptually uniform OKLCH color space with zero arbitrary magic values.",
    "summary_ar": "يتخلى Tailwind CSS v4 عن ملفات الإعداد بلغة جافاسكربت لصالح توجيهات @theme داخل CSS الصرف بدعم من محرك LightningCSS فائق السرعة. يرسخ بنية رموز تصميم صارمة في فضاء ألوان OKLCH المتناسق ويحظر القيم العشوائية تماماً.",
    "officialDocsUrl": "https://tailwindcss.com/docs",
    "officialDocsLabel": "Official Tailwind CSS v4 Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ Tailwind CSS v4",
    "analogy": "Standardized architectural blueprints. Instead of builders cutting random custom 17.3mm wood planks on site, every measurement, joint, and color snaps strictly to approved tokens on the blueprint.",
    "analogy_ar": "المخطط الهندسي المعماري الموحد: بدلاً من قيام عمال البناء بقص أخشاب بقياسات عشوائية كـ 17.3 ملم في الموقع، تلتزم جميع القياسات والألوان بالرموز المحددة بدقة في المخطط المعتمد.",
    "coreProblemItSolves": "Legacy e-commerce styling is littered with arbitrary one-off values (e.g. p-[13px], text-[#ff3300]), causing severe design inconsistency, stylesheet bloat, and poor accessibility contrast. Tailwind v4 enforces strict theme tokens in pure CSS.",
    "coreProblemItSolves_ar": "تعاني المتاجر الإلكترونية الكلاسيكية من انتشار قيم عشوائية مبعثرة (مثل p-[13px] و text-[#ff3300]) مما يؤدي إلى تباين التصميم وتضخم ملفات التنسيق وضعف وضوح النصوص. يفرض Tailwind v4 رموزاً موحدة داخل CSS.",
    "ecomHooksAndApis": [
      {
        "name": "@theme { --color-brand-primary: ...; }",
        "role": "CSS-First Design Token Engine",
        "role_ar": "محرك رموز التصميم داخل CSS الصرف",
        "whyInEcom": "Centralizes enterprise brand colors, sale badge alerts, and surface panels in pure CSS. Available as instant utility classes (bg-brand-primary, text-state-error) with zero JavaScript runtime penalty.",
        "whyInEcom_ar": "يوحد ألوان المتجر الرسمية، وشارات التخفيضات، وألوان الخلفيات في CSS، لتتاح كفئات تنسيق فورية دون أي حمل إضافي على جافاسكربت.",
        "signatureOrUsage": "@theme { --color-brand-primary: oklch(0.20 0.04 260); --color-sale: oklch(0.65 0.22 25); }",
        "role_fr": "Moteur de Design Tokens en CSS Pur",
        "whyInEcom_fr": "Centralise les couleurs de marque, alertes de solde et fonds de carte en CSS sans surcoût d'exécution JavaScript."
      },
      {
        "name": "aspect-square & line-clamp-2",
        "role": "CLS = 0 Layout Stability Utilities",
        "role_ar": "أدوات ثبات الهيكل ومنع ومضات الشاشة (CLS = 0)",
        "whyInEcom": "Guarantees product image containers maintain exact square dimensions before high-resolution imagery loads, eliminating layout shift. line-clamp-2 ensures product cards maintain identical heights regardless of title length.",
        "whyInEcom_ar": "تضمن احتفاظ إطارات صور المنتجات بأبعادها المربعة المحددة بدقة قبل اكتمال تحميل الصور لمنع تحرك العناصر (CLS = 0). وتضمن line-clamp-2 تساوي أطوال بطاقات المنتجات مهما اختلف طول العنوان.",
        "signatureOrUsage": "<div className='aspect-square relative'><h3 className='line-clamp-2'>...</h3></div>",
        "role_fr": "Utilitaires de Stabilité du Layout (CLS = 0)",
        "whyInEcom_fr": "Maintient les conteneurs d'images carrés avant chargement pour éviter tout décalage visuel, et unifie la hauteur des titres."
      },
      {
        "name": "oklch(...) Perceptually Uniform Palette",
        "role": "Accessible High-Contrast Color Palette",
        "role_ar": "فضاء ألوان عالي التباين متوافق مع معايير الوصول",
        "whyInEcom": "Ensures sale price tags, stock badges, and action buttons achieve WCAG AA/AAA contrast ratios across both light and dark display modes without color distortion.",
        "whyInEcom_ar": "يضمن تحقيق نسب تباين WCAG AA/AAA لأسعار العروض وشارات توفر المخزون في الوضعين الفاتح والداكن دون تشوه لوني.",
        "signatureOrUsage": "--color-surface-panel: oklch(0.96 0.005 260); --color-content-primary: oklch(0.12 0.02 260);",
        "role_fr": "Palette Uniforme à Fort Contraste",
        "whyInEcom_fr": "Garantit des ratios de contraste WCAG AA/AAA pour les badges de stock et boutons en modes clair et sombre."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Preventing Cumulative Layout Shift (CLS) on Product Grids",
        "title_ar": "منع تحرك الصفحة (CLS) عند تحميل صور شبكة المنتجات",
        "challenge": "As 24 product images load over mobile 4G, product cards resize dynamically, pushing content down and ruining the user's reading position.",
        "challenge_ar": "أثناء تحميل 24 صورة منتج عبر شبكة الجوال، يتغير حجم البطاقات باستمرار فتهتز الصفحة للأسفل ويفقد المتسوق موضع قراءته.",
        "solution": "Apply aspect-square to the image container and reserve explicit card footer heights with Tailwind tokens, locking geometry into place so CLS = 0.",
        "solution_ar": "تطبيق فئة aspect-square على إطار الصورة وحجز ارتفاع ثابت لأسفل البطاقة عبر رموز Tailwind، مما يثبت أبعاد الصفحة بدقة ويحقق CLS = 0.",
        "title_fr": "Prévention du Décalage de Mise en Page (CLS) sur les Grilles",
        "challenge_fr": "Le chargement de 24 images sur réseau mobile 4G déforme les cartes et fait sauter la page.",
        "solution_fr": "Appliquer aspect-square réserve l'espace exact de chaque image pour garantir un score CLS = 0."
      },
      {
        "title": "Unified Stock Availability Badges Across Catalog and Checkout",
        "title_ar": "توحيد شارات توفر المخزون في الكتالوج وصفحة الدفع",
        "challenge": "Different developers style 'Out of Stock' badges differently across the cart, product page, and checkout, creating a confusing user experience.",
        "challenge_ar": "يقوم مطورون مختلفون بتنسيق شارة 'نفد المخزون' بألوان مختلفة في السلة وصفحة المنتج والدفع، مما يشوش تجربة العميل.",
        "solution": "Define semantic tokens (--color-state-error, --color-state-warning) in @theme and enforce component-level badge usage.",
        "solution_ar": "تعريف رموز دلالية موحدة في @theme مثل --color-state-error وتعميمها عبر مكون الشارات Badge المعتمد.",
        "title_fr": "Harmonisation des Badges de Stock entre Catalogue et Panier",
        "challenge_fr": "Différents développeurs stylisent les ruptures de stock de manières divergentes.",
        "solution_fr": "Les tokens sémantiques (@theme --color-state-error) unifient l'aspect sur toutes les pages."
      }
    ],
    "keyMechanics": [
      {
        "name": "CSS-First Configuration",
        "name_ar": "التكوين القائم على CSS الصرف",
        "explanation": "No tailwind.config.js file exists. The entire design system is declared using @theme in globals.css, parsed directly by the Rust-based LightningCSS compiler.",
        "explanation_ar": "الاستغناء عن ملف tailwind.config.js؛ يتم تعريف نظام التصميم بالكامل باستخدام توجيه @theme داخل globals.css، ويُعالج مباشرة بمترجم Rust.",
        "name_fr": "Configuration 100% CSS",
        "explanation_fr": "Plus aucun fichier tailwind.config.js ; tout le design réside dans @theme compilé par LightningCSS."
      },
      {
        "name": "OKLCH Perceptual Color Spaces",
        "name_ar": "فضاء ألوان OKLCH المتناسق بصرياً",
        "explanation": "All colors are defined in OKLCH, ensuring uniform lightness and chroma across color ramps, guaranteeing WCAG AA/AAA accessibility compliance.",
        "explanation_ar": "تعريف جميع الألوان في فضاء OKLCH لضمان تباين وتدرج سطوع متناسق بصرياً وتحقيق معايير الوصول العالمية WCAG AA/AAA.",
        "name_fr": "Espaces Colorimétriques OKLCH",
        "explanation_fr": "Couleurs perceptuellement uniformes assurant la conformité d'accessibilité WCAG."
      },
      {
        "name": "Zero-Magic-Value Policy",
        "name_ar": "سياسة حظر القيم العشوائية",
        "explanation": "Arbitrary values (e.g. p-[17px]) are strictly prohibited. Spacing, radius, and typography must snap to predefined design tokens.",
        "explanation_ar": "حظر استخدام القيم العشوائية كـ p-[17px]؛ يجب أن تلتزم المسافات والانحناءات والخطوط برموز التصميم المعتمدة فقط.",
        "name_fr": "Politique Zéro Valeur Arbitraire",
        "explanation_fr": "Interdiction stricte des crochets arbitraires pour maintenir la rigueur du système."
      }
    ],
    "codeSnippet": "/* apps/storefront/src/app/globals.css */\n@import \"tailwindcss\";\n\n@theme {\n  /* OKLCH Perceptually Uniform Palette */\n  --color-canvas: oklch(0.985 0.002 260);\n  --color-surface-panel: oklch(0.96 0.005 260);\n  --color-surface-elevated: oklch(1 0 0);\n  --color-brand-primary: oklch(0.20 0.04 260);\n  --color-brand-accent: oklch(0.68 0.16 260);\n\n  /* Semantic State Tokens */\n  --color-state-success: oklch(0.60 0.18 145);\n  --color-state-error: oklch(0.55 0.22 25);\n  --color-state-warning: oklch(0.70 0.18 65);\n}",
    "antiPattern": {
      "bad": "Creating a tailwind.config.js file and writing arbitrary inline styles like className='p-[13px] bg-[#1a2b3c]'.",
      "good": "Declare tokens in globals.css via @theme and use semantic utilities like className='p-3 bg-surface-panel'.",
      "reason": "Arbitrary values bypass design consistency, bloat CSS bundles, and break dark/light mode maintainability.",
      "reason_ar": "القيم العشوائية تكسر اتساق التصميم وتضخم حجم ملفات CSS وتمنع صيانة الوضع الليلي بسلاسة.",
      "reason_fr": "Les valeurs arbitraires détruisent la cohérence visuelle, alourdissent le CSS et compliquent la maintenance."
    },
    "securityAndPerfRules": [
      "Never create a tailwind.config.js file; all tokens reside in globals.css under @theme.",
      "Arbitrary bracket values are strictly prohibited across all storefront components.",
      "All interactive touch targets (add to cart, filters) must be at least 44x44px for accessibility."
    ],
    "securityAndPerfRules_ar": [
      "حظر إنشاء ملف tailwind.config.js نهائياً؛ جميع الرموز تعتمد داخل globals.css تحت @theme.",
      "حظر استخدام القيم العشوائية ذات الأقواس المربعة في كافة مكونات المتجر.",
      "يجب ألا يقل قياس الأزرار التفاعلية عن 44x44 بكسل لسهولة النقر على الهواتف."
    ],
    "title_fr": "Tailwind CSS v4 : Design Tokens en CSS Pur & Directive @theme",
    "category_fr": "Design & Animation",
    "badge_fr": "Design Système",
    "summary_fr": "Tailwind CSS v4 abandonne les fichiers de configuration JavaScript au profit de déclarations pures en CSS via @theme propulsées par LightningCSS. Il impose une architecture stricte de tokens en espace colorimétrique OKLCH sans valeurs magiques.",
    "officialDocsLabel_fr": "Documentation Officielle Tailwind CSS v4",
    "analogy_fr": "Les plans d'un architecte certifié. Plutôt que de scier des planches au hasard sur le chantier (17.3 mm), chaque dimension et couleur s'aligne rigoureusement sur les cotes du plan officiel.",
    "coreProblemItSolves_fr": "L'e-commerce classique pullule de valeurs arbitraires dispersées (p-[13px], text-[#ff3300]), créant des incohérences visuelles et des feuilles de style lourdes. Tailwind v4 centralise des tokens CSS stricts.",
    "securityAndPerfRules_fr": [
      "Ne jamais créer de fichier tailwind.config.js ; tous les tokens résident dans globals.css sous @theme.",
      "Les valeurs arbitraires entre crochets sont formellement prohibées dans toute la boutique.",
      "Toutes les zones tactiles interactives doivent mesurer au moins 44x44px pour l'accessibilité."
    ]
  },
  {
    "slug": "css-logical-rtl",
    "number": "05",
    "title": "CSS Logical Properties & Bi-Directional Layout",
    "title_ar": "الخصائص المنطقية في CSS ودعم التدويل ثنائي الاتجاه",
    "category": "Styling & Motion",
    "category_ar": "التصميم والحركة",
    "badge": "i18n & Layout",
    "badge_ar": "التدويل وهندسة الواجهات",
    "summary": "CSS Logical Properties replace physical horizontal coordinates (left, right, margin-left) with flow-relative vectors (start, end, margin-inline-start). This guarantees seamless Arabic and English bi-directional layout mirroring with zero duplicate CSS stylesheets.",
    "summary_ar": "تستبدل الخصائص المنطقية في CSS الإحداثيات الأفقية الثابتة (اليسار واليمين و margin-left) بمتجهات تدفق القراءة (البداية والنهاية و margin-inline-start)، مما يضمن انعكاساً هندسياً تلقائياً بين العربية والإنجليزية دون الحاجة لملفات تنسيق منفصلة.",
    "officialDocsUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",
    "officialDocsLabel": "MDN CSS Logical Properties Guide",
    "officialDocsLabel_ar": "دليل MDN للخصائص المنطقية في CSS",
    "analogy": "A modern train car labeled 'Forward' and 'Backward' relative to travel direction, rather than fixed compass points 'East' and 'West'. Regardless of which way the locomotive heads, passengers intuitively follow the flow.",
    "analogy_ar": "عربة قطار حديثة تحمل لوحات 'للأمام' و 'للخلف' بحسب اتجاه السير، بدلاً من الشرق والغرب. وبغض النظر عن اتجاه القطار، يتبع الركاب مسار الحركة الطبيعي تلقائياً.",
    "coreProblemItSolves": "Traditional internationalization forces teams to maintain dual stylesheets or clutter code with rtl:ml-0 rtl:mr-4 hacks. CSS Logical Properties make the interface inherently directional-agnostic: flipping html dir='rtl' mirrors the entire layout instantly.",
    "coreProblemItSolves_ar": "تجبر الطرق التقليدية الفرق البرمجية على صيانة ملفات CSS مزدوجة أو حشو الأكواد بتعديلات rtl:mr-4 المعقدة. تجعل الخصائص المنطقية الواجهة مستقلة الاتجاه أصلياً، فبمجرد تغيير dir='rtl' تنعكس الواجهة بالكامل فوراً.",
    "ecomHooksAndApis": [
      {
        "name": "ms-* / me-* & ps-* / pe-*",
        "role": "Flow-Relative Inline Spacing Vectors",
        "role_ar": "متجهات الهوامش والحشوات المرنة بحسب اتجاه القراءة",
        "whyInEcom": "Ensures spaces between product variant swatches, currency symbols, and cart item quantities automatically swap between English (left-to-right) and Arabic (right-to-left) without CSS overrides.",
        "whyInEcom_ar": "تضمن تبديل المسافات بين خيارات المقاسات ورموز العملات وكميات السلة تلقائياً بين الإنجليزية والعربية دون الحاجة لكتابة كود تنسيق إضافي.",
        "signatureOrUsage": "<span className='ms-2 pe-3 text-body-sm font-bold'>...</span>",
        "role_fr": "Vecteurs d'Espacement Inline selon le Sens de Lecture",
        "whyInEcom_fr": "Inverse automatiquement les marges entre sélecteurs de tailles, prix et compteurs de quantité en arabe."
      },
      {
        "name": "start-* & end-*",
        "role": "Flow-Relative Absolute Positioning",
        "role_ar": "محاذاة العناصر المطلقة بحسب بداية ونهاية السطر",
        "whyInEcom": "Places promotional discount ribbons ('-20% OFF') on the reading-start corner of product cards and pins slide-over cart drawers to the reading-end of the viewport.",
        "whyInEcom_ar": "تثبت شارات الخصومات الترويجية (-20%) في زاوية بداية القراءة لبطاقة المنتج، وتثبت درج السلة المنزلق في نهاية شاشة المتصفح.",
        "signatureOrUsage": "<div className='absolute start-2 top-2 rounded bg-state-error text-white'>-20%</div>",
        "role_fr": "Positionnement Absolu Relatif au Flux",
        "whyInEcom_fr": "Place les rubans de promotion au coin initial et ancre le tiroir du panier au bout de l'écran."
      },
      {
        "name": "rtl:rotate-180",
        "role": "Directional Glyph & Chevron Transformer",
        "role_ar": "عكس اتجاه الأسهم والأيقونات تلقائياً في الواجهات العربية",
        "whyInEcom": "Automatically points gallery navigation chevrons ('Next Image') and breadcrumb separators in the correct physical direction when Arabic is selected.",
        "whyInEcom_ar": "تعكس اتجاه أسهم التنقل في معرض صور المنتج وأسهم مسار التنقل (Breadcrumbs) لجهة اليسار في الواجهة العربية بما يوافق اتجاه القراءة.",
        "signatureOrUsage": "<ChevronRight className='h-4 w-4 rtl:rotate-180' />",
        "role_fr": "Rotation Automatique des Glyphes Directionnels",
        "whyInEcom_fr": "Oriente les flèches de carrousel et séparateurs de fil d'Ariane dans le bon sens en arabe."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Arabic Quantity Stepper & Add-to-Cart Flow",
        "title_ar": "أزرار التحكم بالكمية وإضافة السلة باللغة العربية",
        "challenge": "Using physical margin-left: 1rem or left-0 on mobile causes the '-' decrease button to appear on the wrong side and pushes the add-to-cart price badge into the card border.",
        "challenge_ar": "استخدام margin-left أو left-0 على الهواتف يجعل زر تقليل الكمية (-) يظهر في موضع خاطئ ويدفع شارة السعر لتلتصق بحافة الشاشة.",
        "solution": "Use ps-3, pe-3, and rounded-s-md / rounded-e-md. The quantity selector mirrors its geometric borders and icon placements seamlessly in Arabic.",
        "solution_ar": "استخدام ps-3 و pe-3 وانحناءات الحواف المنطقية rounded-s-md؛ فينعكس محدد الكمية وأيقوناته هندسياً بكل سلاسة في اللغة العربية.",
        "title_fr": "Contrôleur de Quantité et Ajout au Panier en Arabe",
        "challenge_fr": "L'emploi de classes physiques place le bouton '-' du mauvais côté et comprime le prix.",
        "solution_fr": "Utiliser ps-3, pe-3 et rounded-s-md permet un miroir géométrique parfait sans aucun correctif manuel."
      },
      {
        "title": "Cart Slide-Over Drawer Entering from the Natural Side",
        "title_ar": "درج السلة المنزلق من الجهة الطبيعية لتصفح المستخدم",
        "challenge": "In English, users expect the cart to slide in from the right edge. In Arabic, sliding in from the right feels awkward because the eye reads from right-to-left.",
        "challenge_ar": "في الإنجليزية يتوقع المستخدم دخول السلة من اليمين. أما في العربية، فيبدو ذلك غير طبيعي لأن العين تقرأ وتتحرك من اليمين إلى اليسار.",
        "solution": "Position the drawer at end-0 and animate along the inline axis. The drawer enters from the right in English and from the left in Arabic automatically.",
        "solution_ar": "تثبيت الدرج عند فئة end-0 وتحريكه عبر المحور المنطقي، ليدخل من اليمين في الإنجليزية ومن اليسار في العربية بشكل تلقائي وطبيعي.",
        "title_fr": "Tiroir du Panier Coulissant du Côté Naturel",
        "challenge_fr": "En anglais/français, le panier s'ouvre depuis la droite ; en arabe, l'œil lisant de droite à gauche attend l'opposé.",
        "solution_fr": "Ancrer le tiroir avec end-0 le fait glisser depuis la droite en LTR et depuis la gauche en RTL."
      }
    ],
    "keyMechanics": [
      {
        "name": "Inline Flow-Relative Spacing",
        "name_ar": "المسافات المرتبطة بتدفق القراءة",
        "explanation": "Strictly use ms-* (margin-inline-start), me-* (margin-inline-end), ps-*, and pe-* instead of physical ml-*, mr-*, pl-*, and pr-*.",
        "explanation_ar": "الالتزام التام باستخدام فئات ms-* و me-* و ps-* و pe-* بدلاً من الفئات الأفقية الفيزيائية التقليدية ml-* و mr-*.",
        "name_fr": "Espacements Relatifs au Flux Inline",
        "explanation_fr": "Adoption exclusive de ms-*, me-*, ps-*, pe-* à la place des coordonnées physiques."
      },
      {
        "name": "Directional Alignment Utilities",
        "name_ar": "أدوات المحاذاة الاتجاهية",
        "explanation": "Use text-start and text-end instead of text-left and text-right, ensuring typographic alignment follows the active reading script.",
        "explanation_ar": "استخدام text-start و text-end بدلاً من اليسار واليمين لضمان محاذاة النصوص التلقائية حسب لغة القراءة.",
        "name_fr": "Alignement Typographique Directionnel",
        "explanation_fr": "Utilisation de text-start et text-end pour respecter la typographie active."
      },
      {
        "name": "Directional Glyph Flipping",
        "name_ar": "قلب اتجاه الأيقونات الدلالية",
        "explanation": "Directional symbols like breadcrumb arrows and back buttons automatically flip in Arabic using the rtl:rotate-180 utility class.",
        "explanation_ar": "عكس اتجاه الأسهم وأيقونات التنقل تلقائياً في اللغة العربية باستخدام الفئة rtl:rotate-180.",
        "name_fr": "Inversion Automatique des Flèches",
        "explanation_fr": "Les flèches et icônes directionnelles pivotent automatiquement avec rtl:rotate-180."
      }
    ],
    "codeSnippet": "<!-- Direction-agnostic E-Commerce Card -->\n<div className=\"flex items-center justify-between ps-4 pe-6 py-3 border-s-4 border-brand-primary\">\n  <div className=\"flex items-center gap-3\">\n    <span className=\"font-mono text-caption text-content-muted\">SKU-109</span>\n    <h3 className=\"text-body font-bold text-start\">Wireless Headphones</h3>\n  </div>\n\n  <div className=\"flex items-center gap-2\">\n    <!-- Directional arrow automatically flips in RTL -->\n    <ArrowRight className=\"h-4 w-4 rtl:rotate-180 text-brand-primary\" />\n  </div>\n</div>",
    "antiPattern": {
      "bad": "className='ml-4 pl-2 text-left left-0' with manual [dir=rtl] overrides.",
      "good": "className='ms-4 ps-2 text-start start-0' natively.",
      "reason": "Physical properties require maintaining hundreds of redundant RTL overrides that inevitably desynchronize and break layout geometry.",
      "reason_ar": "الخصائص الفيزيائية تتطلب صيانة مئات الاستثناءات اليدوية التي سرعان ما تنفصل وتحدث تشوهات بصرية في واجهات المتجر.",
      "reason_fr": "Les propriétés physiques imposent des centaines d'exceptions manuelles qui finissent par se désynchroniser."
    },
    "securityAndPerfRules": [
      "Physical horizontal classes (ml-*, mr-*, pl-*, pr-*, left-*, right-*) are strictly prohibited.",
      "Always use text-start and text-end for copy alignment, never text-left or text-right.",
      "Verify all interactive icons with rtl:rotate-180 to guarantee proper semantic direction."
    ],
    "securityAndPerfRules_ar": [
      "حظر استخدام فئات الاتجاهات الفيزيائية (ml-* و mr-* و pl-* و pr-* و left-* و right-*) تماماً.",
      "استخدام text-start و text-end دائماً لمحاذاة النصوص ومنع استخدام text-left أو text-right.",
      "فحص جميع أيقونات الأسهم والتنقل والتأكد من تزويدها بـ rtl:rotate-180 لتعكس الاتجاه الصحيح."
    ],
    "title_fr": "Propriétés Logiques CSS & Internationalisation Birectionnelle",
    "category_fr": "Design & Animation",
    "badge_fr": "i18n & Layout",
    "summary_fr": "Les propriétés logiques CSS remplacent les coordonnées physiques (left, right, margin-left) par des vecteurs de lecture (start, end, margin-inline-start), assurant un miroir parfait entre arabe et anglais/français sans feuilles de style doublonnées.",
    "officialDocsLabel_fr": "Guide MDN des Propriétés Logiques CSS",
    "analogy_fr": "Un train moderne indiquant 'Vers l'avant' et 'Vers l'arrière' selon son sens de marche plutôt que les points cardinaux Est et Ouest. Les voyageurs s'orientent intuitivement quel que soit le trajet.",
    "coreProblemItSolves_fr": "L'approche classique force à maintenir des CSS en double ou à truffer le code de rtl:mr-4. Les propriétés logiques rendent la mise en page indépendante de la direction : changer dir='rtl' inverse tout automatiquement.",
    "securityAndPerfRules_fr": [
      "Interdiction absolue des classes physiques horizontales (ml-*, mr-*, pl-*, pr-*, left-*, right-*).",
      "Toujours utiliser text-start et text-end pour le texte, jamais text-left ou text-right.",
      "Vérifier la présence de rtl:rotate-180 sur toutes les icônes fléchées pour garantir le sens sémantique."
    ]
  },
  {
    "slug": "i18n-localization",
    "number": "06",
    "title": "i18n & Multi-Region Localization Architecture",
    "title_ar": "معمارية التدويل (i18n) وإدارة المناطق والعملات المتعددة",
    "category": "Styling & Motion",
    "category_ar": "التصميم والحركة",
    "badge": "Localization",
    "badge_ar": "التدويل والمناطق",
    "summary": "Enterprise multi-region e-commerce architecture synchronizing browser direction (dir='ltr'|'rtl'), document language (lang='en'|'ar'), currency formatting via Intl.NumberFormat, and region-specific commerce tax and shipping configurations.",
    "summary_ar": "بنية معمارية متقدمة للتجارة متعددة المناطق تزامن اتجاه المتصفح (dir='ltr'|'rtl') ولغة الوثيقة (lang='en'|'ar') وتنسيق العملات عبر Intl.NumberFormat مع إعدادات الضرائب والشحن المخصصة لكل إقليم.",
    "officialDocsUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",
    "officialDocsLabel": "MDN Intl Global Object Reference",
    "officialDocsLabel_ar": "مرجع MDN لكائن التدويل العالمي Intl",
    "analogy": "An international airport customs and currency exchange concourse. It doesn't merely translate the overhead signage into your language; it converts your currency, calculates local duties, and formats addresses according to the host country's regulations.",
    "analogy_ar": "صالة الجوازات وصرف العملات في مطار دولي: لا يكتفي المطار بترجمة اللوحات الإرشادية إلى لغتك، بل يحول العملات، ويحسب الرسوم الجمركية المحلية، ويعتمد صيغ العناوين والرمز البريدي بحسب أنظمة تلك الدولة.",
    "coreProblemItSolves": "Treating localization as simple string replacement fails in global headless commerce. Switching markets requires changing reading vectors (LTR to RTL), adjusting tax presentation (tax-inclusive VAT vs tax-exclusive sales tax), and formatting currency symbols properly.",
    "coreProblemItSolves_ar": "معاملة التدويل كاستبدال سطحي للنصوص تفشل في التجارة الدولية. يتطلب الانتقال بين الأسواق تغيير اتجاه القراءة، وتعديل عرض الضرائب (شاملة ضريبة القيمة المضافة مقابل غير شاملة)، وتنسيق رموز العملات ومواضعها بدقة.",
    "ecomHooksAndApis": [
      {
        "name": "useLocale() / LocaleProvider",
        "role": "Document Language & Direction Synchronizer",
        "role_ar": "مزامنة لغة الوثيقة واتجاه القراءة في سياق التطبيق",
        "whyInEcom": "Maintains persistent user language preference in localStorage and synchronizes document.documentElement.lang and dir, ensuring typography and logical layouts switch without flash of unstyled content.",
        "whyInEcom_ar": "يحفظ تفضيل لغة المستخدم في localStorage ويزامن سمتي lang و dir في وسم html الرئيسي، لضمان تبديل الخطوط والتنسيقات دون ومضات بصرية مزعجة.",
        "signatureOrUsage": "const { locale, direction, setLocale } = useLocale();",
        "role_fr": "Synchroniseur de Langue et Direction",
        "whyInEcom_fr": "Maintient les préférences dans localStorage et synchronise lang et dir sur l'élément racine html."
      },
      {
        "name": "Intl.NumberFormat(locale, { style: 'currency' })",
        "role": "Localized Minor-Unit Currency Formatter",
        "role_ar": "منسق العملات والأسعار الإقليمي الأصلي في المتصفح",
        "whyInEcom": "Formats integer minor-unit prices ($19.99 vs ١٩٫٩٩ ر.س) strictly respecting national currency placement, numeral shapes, and decimal separators without adding heavy external i18n libraries.",
        "whyInEcom_ar": "ينسق مبالغ السنتات كعملات محلية ($19.99 مقابل ١٩٫٩٩ ر.س) مع احترام مواضع الرموز وفواصل الكسور الخاصة بكل بلد دون الحاجة لمكتبات تدويل ثقيلة.",
        "signatureOrUsage": "new Intl.NumberFormat(locale, { style: 'currency', currency: 'SAR' }).format(amount / 100);",
        "role_fr": "Formateur Monétaire Localisé Natif",
        "whyInEcom_fr": "Formate les montants en sous-unités entières selon les conventions nationales sans bibliothèque lourde."
      },
      {
        "name": "Intl.DateTimeFormat(locale, options)",
        "role": "Localized Delivery & Order Timestamp Formatter",
        "role_ar": "منسق تواريخ التوصيل والطلبات حسب ثقافة العميل",
        "whyInEcom": "Displays carrier estimated delivery windows ('Arrives Thursday, Nov 12' vs 'يصل يوم الخميس، ١٢ نوفمبر') in the customer's native calendar format.",
        "whyInEcom_ar": "يعرض مواعيد التوصيل المتوقعة للشحنات بصيغة التقويم المحلي للزبون لرفع موثوقية المتجر.",
        "signatureOrUsage": "new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date());",
        "role_fr": "Formateur Localisé de Dates de Livraison",
        "whyInEcom_fr": "Affiche les fenêtres de livraison estimées selon le calendrier et la langue de l'acheteur."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "VAT-Inclusive vs Tax-Exclusive Pricing Across Borders",
        "title_ar": "عرض الأسعار شاملة الضريبة في الخليج وغير شاملة في أمريكا",
        "challenge": "Consumers in Saudi Arabia and the EU legally require all listed product prices to include VAT, whereas US consumers expect tax-exclusive prices with taxes added at checkout.",
        "challenge_ar": "يلزم القانون في السعودية وأوروبا عرض أسعار المنتجات شاملة ضريبة القيمة المضافة، بينما يتوقع المستهلك الأمريكي أسعاراً غير شاملة وتضاف الضريبة عند الدفع.",
        "solution": "Medusa Region Engine flags tax-inclusive regions. The UI formatter checks region.is_tax_inclusive and appends 'Includes VAT' or 'Excl. Tax' automatically.",
        "solution_ar": "يحدد محرك المناطق في Medusa إذا كانت المنطقة شاملة للضريبة، فيقوم منسق الواجهة تلقائياً بإظهار 'شامل الضريبة' أو 'غير شامل' بحسب الإقليم المعتمد.",
        "title_fr": "Prix TTC vs Prix HT selon les Marchés Régionaux",
        "challenge_fr": "En Europe et dans le Golfe, la loi exige des prix affichés TTC, tandis qu'aux USA les taxes s'ajoutent à la caisse.",
        "solution_fr": "Le moteur régional Medusa transmet l'indicateur is_tax_inclusive pour afficher 'TTC inclus' ou 'Hors Taxes' dynamiquement."
      },
      {
        "title": "Zero-FOUC (Flash of Unstyled Direction) on Page Load",
        "title_ar": "منع وميض اتجاه الصفحة (FOUC) أثناء التحميل الأولي",
        "challenge": "If direction is toggled solely via client JavaScript, an Arabic user sees the English LTR layout for 200ms before it jarringly jumps to RTL.",
        "challenge_ar": "إذا تم تغيير الاتجاه عبر جافاسكربت فقط في المتصفح، يرى الزبون العربي واجهة LTR الإنجليزية لمدة 200 ميللي ثانية قبل أن تقفز فجأة إلى RTL.",
        "solution": "Storefront reads active locale from cookies during Server Component rendering to emit <html lang='ar' dir='rtl'> directly in the initial HTML stream.",
        "solution_ar": "قراءة لغة العميل من الكوكيز في مكونات الخادم وتوليد وسم <html lang='ar' dir='rtl'> مباشرة في تدفق HTML الأولي لتفادي أي وميض.",
        "title_fr": "Zéro Clignotement de Direction au Chargement (FOUC)",
        "challenge_fr": "Si la direction est gérée par JS client, l'utilisateur arabe voit la page sauter de LTR vers RTL.",
        "solution_fr": "Lire la langue depuis les cookies serveur génère directement <html lang='ar' dir='rtl'> dès le premier octet HTML."
      }
    ],
    "keyMechanics": [
      {
        "name": "Bi-Directional Synchronizer",
        "name_ar": "مزامنة الاتجاه واللغة المزدوجة",
        "explanation": "Synchronizes document.documentElement.lang and dir with customer preferences, applying Cairo font for Arabic and Inter font for English automatically.",
        "explanation_ar": "مزامنة سمتي lang و dir في وسم html الرئيسي وتطبيق خط Cairo للعربية و Inter للإنجليزية تلقائياً.",
        "name_fr": "Synchronisation Birectionnelle",
        "explanation_fr": "Ajuste automatiquement les attributs racine lang et dir et applique la typographie appropriée."
      },
      {
        "name": "Native Intl Monetary Formatting",
        "name_ar": "تنسيق العملات عبر واجهة Intl الأصلية",
        "explanation": "Formats minor-unit currencies using browser-native Intl.NumberFormat, positioning currency symbols, commas, and decimal separators correctly for each locale.",
        "explanation_ar": "تنسيق مبالغ السنتات باستخدام Intl.NumberFormat الأصلي في المتصفح لضبط مواقع رموز العملات والفواصل العشرية لكل لغة بدقة.",
        "name_fr": "Formatage Monétaire Natif Intl",
        "explanation_fr": "Placement exact des symboles de devise, séparateurs de milliers et virgules sans poids de bundle."
      },
      {
        "name": "Medusa Multi-Region Alignment",
        "name_ar": "التكامل مع محرك أقاليم Medusa",
        "explanation": "Ties active locale and country codes directly to Medusa Region entities, driving country-specific tax rules, currency codes, and carrier fulfillment options.",
        "explanation_ar": "ربط اللغة المحددة ورمز الدولة بكيانات أقاليم Medusa لضبط نسب الضرائب والعملة وخيارات شركات الشحن تلقائياً.",
        "name_fr": "Intégration aux Régions Medusa",
        "explanation_fr": "Associe le contexte linguistique aux devises, taux de TVA et options de transport de Medusa."
      }
    ],
    "codeSnippet": "// apps/storefront/src/infrastructure/locale-context.tsx\nexport function formatMoney(amountMinor: number, currencyCode: string, locale: string): string {\n  return new Intl.NumberFormat(locale, {\n    style: \"currency\",\n    currency: currencyCode,\n    maximumFractionDigits: 2,\n  }).format(amountMinor / 100);\n}",
    "antiPattern": {
      "bad": "Writing custom string formatting like '$' + (amount / 100).toFixed(2) in client components.",
      "good": "Use browser-native Intl.NumberFormat(locale, { style: 'currency', currency }) across all monetary views.",
      "reason": "Hardcoded currency symbols break in international markets (e.g. SAR appears after the number in Arabic and before in English; decimal separators differ).",
      "reason_ar": "الرموز اليدوية تفشل دولياً؛ فرمز الريال يُكتب بعد الرقم بالعربية وقبله بالإنجليزية، وتختلف فواصل الكسور بحسب الثقافة.",
      "reason_fr": "Les symboles écrits en dur échouent à l'international car leur position et les séparateurs varient selon chaque culture."
    },
    "securityAndPerfRules": [
      "Never load multi-megabyte i18n libraries when browser-native Intl APIs provide zero-bundle-overhead localization.",
      "Always persist customer locale preferences in an HttpOnly cookie or secure localStorage token.",
      "Ensure all translated strings are sanitized to prevent Stored XSS via internationalization dictionaries."
    ],
    "securityAndPerfRules_ar": [
      "عدم تحميل مكتبات تدويل ضخمة بالميجابايت طالما أن كائن Intl الأصلي في المتصفح يوفر كل المزايا بحجم صفر بايت.",
      "حفظ لغة العميل المفضلة في كوكيز آمنة أو localStorage لتجنب ومضات تحميل الواجهة.",
      "فحص وتنقية نصوص الترجمة لمنع هجمات XSS المخزنة عبر قواميس التدويل."
    ],
    "title_fr": "Architecture de Localisation Multi-Régions & i18n",
    "category_fr": "Design & Animation",
    "badge_fr": "Localisation",
    "summary_fr": "Architecture e-commerce multi-régions synchronisant le sens du navigateur (dir='ltr'|'rtl'), la langue (lang='en'|'ar'|'fr'), le formatage monétaire via Intl.NumberFormat et les règles fiscales et de livraison régionales.",
    "officialDocsLabel_fr": "Référence MDN de l'Objet Global Intl",
    "analogy_fr": "Le hall de douane et de change d'un aéroport international. Il ne se contente pas de traduire les panneaux, mais convertit les devises, applique les taxes locales et adapte les formulaires aux normes du pays d'accueil.",
    "coreProblemItSolves_fr": "Traiter la localisation comme un simple remplacement de texte échoue dans le commerce mondial. Changer de marché exige d'inverser le sens de lecture, de basculer l'affichage des taxes (TTC vs HT) et de formater fidèlement les prix.",
    "securityAndPerfRules_fr": [
      "Ne pas charger de bibliothèques i18n volumineuses alors que l'API native Intl offre tout sans surcoût.",
      "Toujours persister le choix linguistique dans un cookie ou le localStorage pour éviter tout clignotement.",
      "Nettoyer et désinfecter les chaînes traduites pour prévenir toute injection XSS via les dictionnaires."
    ]
  },
  {
    "slug": "gsap-motion",
    "number": "07",
    "title": "GSAP 3: Hardware-Accelerated Motion & Scoped Lifecycle Cleanup",
    "title_ar": "GSAP 3: الحركة المسرعة عتادياً والتنظيف التلقائي لدورة حياة الحركة",
    "category": "Styling & Motion",
    "category_ar": "التصميم والحركة",
    "badge": "Motion Engine",
    "badge_ar": "محرك الحركة السينمائية",
    "summary": "GSAP (GreenSock Animation Platform) delivers cinema-grade, 60/120 FPS web animations in React 19. Utilizing @gsap/react and the useGSAP hook, it hardware-accelerates GPU transforms and guarantees zero memory leaks by automatically scoping and reverting animation contexts.",
    "summary_ar": "يوفر محرك GSAP حركات سينمائية فائقة السلاسة بمعدل 60 إلى 120 إطاراً بالثانية في بيئة React 19. وبالاعتماد على خطاف useGSAP ومكتبة @gsap/react، يسرع التحولات عبر معالج الرسوميات (GPU) ويضمن انعدام تسريبات الذاكرة عبر تنظيف دورة الحياة تلقائياً.",
    "officialDocsUrl": "https://gsap.com/docs/v3/",
    "officialDocsLabel": "Official GSAP Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ GSAP",
    "analogy": "A professional movie camera crane on hydraulic rails. Instead of moving heavy stage walls and physical furniture during filming, the camera smoothly pans its lens along designated tracks, creating cinematic motion without straining the building.",
    "analogy_ar": "رافعة كاميرا سينمائية هيدروليكية: بدلاً من تحريك الجدران الحجرية الثقيلة في موقع التصوير، تتحرك عدسة الكاميرا بسلاسة على مسارات مخصصة، لتنتج حركة مبهرة دون إجهاد مبنى الاستوديو.",
    "coreProblemItSolves": "Animating CSS layout properties (top, left, width, margin) triggers continuous CPU layout reflows and repaints, destroying Core Web Vitals and causing janky 15 FPS scrolling. GSAP animates GPU-accelerated transforms (x, y, scale) and guarantees zero dangling event listeners in React 19.",
    "coreProblemItSolves_ar": "تحريك خصائص الهيكل التقليدية (width و margin و top) يجبر المعالج على إعادة حساب أبعاد الصفحة في كل إطار، مما يدمر مؤشرات الويب الحيوية ويسبب تقطيعاً شديداً. يقوم GSAP بتحريك خصائص كرت الشاشة (x و y و scale) مع التخلص من تسريبات الذاكرة في React 19.",
    "ecomHooksAndApis": [
      {
        "name": "useGSAP({ scope: containerRef })",
        "role": "React 19 Scoped Motion Lifecycle Hook",
        "role_ar": "خطاف إدارة دورة حياة الحركة مع العزل والتنظيف التلقائي",
        "whyInEcom": "Automatically tracks all tweens, timelines, and scroll triggers inside a component and reverts them when the customer navigates away, preventing memory leaks during rapid catalog browsing.",
        "whyInEcom_ar": "يتتبع تلقائياً جميع الحركات والمخططات الزمنية ومحفزات التمرير داخل المكون، ويقوم بإلغائها فور مغادرة الصفحة، مما يمنع تسرب الذاكرة أثناء تصفح المنتجات.",
        "signatureOrUsage": "useGSAP(() => { gsap.from('.product-card', { opacity: 0, y: 20, stagger: 0.05 }); }, { scope: containerRef });",
        "role_fr": "Hook de Cycle de Vie d'Animation Isolé",
        "whyInEcom_fr": "Enregistre tous les tweens et les annule proprement lors du démontage pour prévenir les fuites de mémoire."
      },
      {
        "name": "gsap.timeline({ defaults: { ease: 'power2.out' } })",
        "role": "Choreographed Micro-Interaction Timeline",
        "role_ar": "شريط زمني لتنسيق الحركات التفاعلية المتسلسلة",
        "whyInEcom": "Coordinates multi-step e-commerce feedback: e.g. clicking 'Add to Bag' scales the button, launches a flying thumbnail to the cart icon, and opens the cart drawer in perfect sequence.",
        "whyInEcom_ar": "ينسق التفاعل المتسلسل: النقر على 'أضف للسلة' يصغر الزر قليلاً، ويطلق صورة مصغرة تطير نحو أيقونة السلة العلوية، ثم يفتح درج السلة بتناغم زمني مدروس.",
        "signatureOrUsage": "const tl = gsap.timeline(); tl.to(btnRef.current, { scale: 0.95 }).to(cartBadgeRef.current, { scale: 1.2 });",
        "role_fr": "Chronologie de Micro-Interactions Coordonnées",
        "whyInEcom_fr": "Enchaîne les étapes de feedback lors d'un ajout au panier (effet de rebond, icône volante, ouverture du tiroir)."
      },
      {
        "name": "gsap.quickTo(target, property)",
        "role": "High-Frequency 120 FPS Property Updater",
        "role_ar": "محدث الخصائص فائق السرعة للتحريك المتكرر بمعدل 120 إطاراً",
        "whyInEcom": "Powers interactive 360-degree product zoom lenses on desktop without creating thousands of garbage-collected tween objects on every mousemove event.",
        "whyInEcom_ar": "يشغل عدسة تكبير صور المنتجات بزاوية 360 درجة عند تحريك الفأرة دون استهلاك الذاكرة أو التسبب بوقفات تجميع المهملات (Garbage Collection).",
        "signatureOrUsage": "const xTo = gsap.quickTo(lensRef.current, 'x', { duration: 0.2, ease: 'power3' });",
        "role_fr": "Mise à Jour Haute Fréquence à 120 FPS",
        "whyInEcom_fr": "Anime la loupe de zoom produit à 360° sans créer des milliers d'objets collectés par le garbage collector."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Mobile Sticky Add-to-Cart Trigger on Scroll",
        "title_ar": "إظهار شريط الشراء السفلي للهواتف عند التمرير",
        "challenge": "When shoppers scroll past the main buy button on mobile, a floating bottom checkout bar must appear. Using window.addEventListener('scroll') causes sluggish touch scrolling.",
        "challenge_ar": "عندما يتجاوز المتسوق زر الشراء الرئيسي على الهاتف، يجب أن يظهر شريط سفلي عائم. استخدام مستمع التمرير العادي scroll يسبب بطء وثقل حركة اللمس.",
        "solution": "Use GSAP ScrollTrigger hardware-accelerated transforms (translate3d) linked directly to the main button's viewport intersection, guaranteeing smooth 60 FPS scrolling.",
        "solution_ar": "استخدام GSAP ScrollTrigger المسرع عتادياً بنمط translate3d والمرتبط بظهور الزر الرئيسي في الشاشة، مما يضمن تصفحاً فائق النعومة بسرعة 60 إطاراً بالثانية.",
        "title_fr": "Barre d'Achat Flottante Mobile Déclenchée au Défilement",
        "challenge_fr": "Afficher une barre d'achat mobile lors du scroll avec window.addEventListener('scroll') fait saccader le défilement tactile.",
        "solution_fr": "GSAP ScrollTrigger accélère les transformations translate3d sans recalcul de layout pour un défilement constant à 60 FPS."
      },
      {
        "title": "Interactive Fly-to-Cart Micro-Interaction",
        "title_ar": "حركة طيران المنتج نحو سلة التسوق عند إضافته",
        "challenge": "Shoppers often wonder if clicking 'Add to Bag' actually worked, especially on mobile where the cart icon is at the top right.",
        "challenge_ar": "يتساءل المتسوقون غالباً هل تمت إضافة المنتج فعلاً للسلة، خاصة على الهواتف حيث توجد أيقونة السلة في أقصى الزاوية العلوية.",
        "solution": "Clone a tiny thumbnail and animate its trajectory curve (x, y, scale) into the cart badge, pulsing the badge on arrival for undeniable visual confirmation.",
        "solution_ar": "استنساخ صورة مصغرة للمنتج وتحريك مسارها المنحني في الهواء لتسقط داخل أيقونة السلة مع وميض العداد، لمنح العميل تأكيداً بصرياً فورياً وممتعاً.",
        "title_fr": "Micro-Interaction du Produit Volant vers le Panier",
        "challenge_fr": "L'acheteur mobile doute souvent de la prise en compte de son clic sur 'Ajouter'.",
        "solution_fr": "Cloner une vignette et animer sa trajectoire vers l'icône du panier apporte une confirmation visuelle éclatante."
      }
    ],
    "keyMechanics": [
      {
        "name": "Scoped Context via useGSAP",
        "name_ar": "سياق الحركة المعزول عبر useGSAP",
        "explanation": "Guarantees that all child tweens and timeline animations are automatically killed and garbage-collected when the component unmounts, preventing memory leaks in React 19.",
        "explanation_ar": "يضمن إلغاء جميع الحركات والجداول الزمنية وتنظيف الذاكرة تلقائياً عند إغلاق المكون، مما يمنع تسرب الذاكرة في React 19.",
        "name_fr": "Contexte Isolé via useGSAP",
        "explanation_fr": "Garantit que toutes les animations sont stoppées et libérées de la mémoire quand le composant se démonte."
      },
      {
        "name": "GPU Hardware Acceleration",
        "name_ar": "التسريع العتادي عبر معالج الرسوميات (GPU)",
        "explanation": "Animates transform: translate3d and opacity directly on GPU composite layers, achieving 60/120 FPS without triggering browser layout reflows.",
        "explanation_ar": "تحريك خصائص translate3d و opacity مباشرة على طبقات كرت الشاشة المركبة، لتحقيق معدل 60 إلى 120 إطاراً دون إعادة رسم هيكل الصفحة.",
        "name_fr": "Accélération Matérielle GPU",
        "explanation_fr": "Anime transform: translate3d et autoAlpha directement sur les couches composites du processeur graphique."
      },
      {
        "name": "Timeline Micro-Interactions",
        "name_ar": "تنسيق الحركات الدقيقة عبر Timelines",
        "explanation": "Orchestrates complex multi-element choreographies (like product card entrances and fly-to-cart badges) with precise easing and stagger intervals.",
        "explanation_ar": "تنسيق الحركات المعقدة لعدة عناصر معاً (مثل ظهور بطاقات المنتجات وحركة طيران المنتج للسلة) بفواصل زمنية مدروسة.",
        "name_fr": "Micro-Interactions par Timelines",
        "explanation_fr": "Coordonne les chorégraphies multi-éléments avec un contrôle millimétré du timing et des courbes d'accélération."
      }
    ],
    "codeSnippet": "\"use client\";\n\nimport { useRef } from \"react\";\nimport gsap from \"gsap\";\nimport { useGSAP } from \"@gsap/react\";\n\nexport function AnimatedProductGrid({ children }: { children: React.ReactNode }) {\n  const containerRef = useRef<HTMLDivElement>(null);\n\n  useGSAP(\n    () => {\n      gsap.from(\".product-card\", {\n        y: 24,\n        opacity: 0,\n        duration: 0.5,\n        stagger: 0.08,\n        ease: \"power2.out\",\n        force3D: true, // Hardware acceleration\n      });\n    },\n    { scope: containerRef } // Scoped cleanup on unmount\n  );\n\n  return (\n    <div ref={containerRef} className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n      {children}\n    </div>\n  );\n}",
    "antiPattern": {
      "bad": "gsap.to('.card', { left: 100, width: 300 }) inside a raw useEffect without cleanup.",
      "good": "gsap.to('.card', { x: 100, scale: 1.2 }) inside useGSAP({ scope: containerRef }).",
      "reason": "Animating physical geometry (width, left) causes costly CPU layout reflows on every frame; raw useEffect creates memory leaks on route changes.",
      "reason_ar": "تحريك الخصائص الفيزيائية (width و left) يجبر المعالج على إعادة حساب أبعاد الصفحة في كل إطار؛ و useEffect العادي يسرب الذاكرة عند التنقل.",
      "reason_fr": "Animer la géométrie physique force des recalculs CPU continus et les useEffect non nettoyés fuient la mémoire."
    },
    "securityAndPerfRules": [
      "Always wrap GSAP animations in useGSAP with an explicit scope ref to guarantee cleanup.",
      "Only animate GPU-accelerated properties (transform: x, y, scale, rotation, autoAlpha).",
      "Never animate layout dimensions (width, height, top, left, margin) that trigger reflows."
    ],
    "securityAndPerfRules_ar": [
      "تغليف جميع حركات GSAP داخل خطاف useGSAP مع تحديد scope ref صريح لضمان تنظيف الذاكرة.",
      "التحريك الحصري لخصائص كرت الشاشة المسرعة عتادياً (x و y و scale و rotation و autoAlpha).",
      "حظر تحريك أبعاد الهيكل (width و height و top و left و margin) منعاً لتدمير أداء المتصفح."
    ],
    "title_fr": "GSAP 3 : Animation Moteur Accéléré Matériel & Nettoyage Scoped",
    "category_fr": "Design & Animation",
    "badge_fr": "Moteur d'Animation",
    "summary_fr": "GSAP apporte des animations à 60/120 FPS dans React 19. Grâce à @gsap/react et au hook useGSAP, il accélère les transformations sur GPU et garantit zéro fuite mémoire en nettoyant automatiquement les contextes d'animation.",
    "officialDocsLabel_fr": "Documentation Officielle GSAP",
    "analogy_fr": "La grue télescopique hydraulique d'un studio de cinéma. Au lieu de déplacer de lourds décors sur le plateau, la caméra glisse en douceur sur ses rails, capturant des mouvements fluides sans déformer le bâtiment.",
    "coreProblemItSolves_fr": "Animer des propriétés géométriques (width, left) force le processeur à recalculer le layout à chaque image, ruinant les Core Web Vitals. GSAP anime les propriétés GPU (x, y, scale) et élimine tout écouteur fantôme.",
    "securityAndPerfRules_fr": [
      "Toujours envelopper les animations GSAP dans useGSAP avec une référence de portée scope explicite.",
      "Animer exclusivement les propriétés accélérées par GPU (x, y, scale, rotation, autoAlpha).",
      "Ne jamais animer les dimensions du layout (width, height, top, left, margin) sous peine de reflows."
    ]
  },
  {
    "slug": "zod",
    "number": "08",
    "title": "Zod: Runtime Schema Validation & Boundary Defense",
    "title_ar": "Zod: التحقق من صحة البيانات وقت التشغيل وحماية حدود النظام",
    "category": "Security & Validation",
    "category_ar": "الأمان والتحقق من البيانات",
    "badge": "Runtime Validation",
    "badge_ar": "التحقق أثناء التشغيل",
    "summary": "TypeScript types only exist at compile time and are completely erased in production. Zod acts as an infallible runtime boundary defense, parsing and sanitizing untrusted incoming data across Next.js Server Actions, Route Handlers, and Carrier Webhook payloads.",
    "summary_ar": "توجد أنواع TypeScript أثناء كتابة الكود فقط وتُحذف بالكامل عند بناء المشروع للإنتاج. تعمل مكتبة Zod كحاجز دفاعي منيع وقت التشغيل، حيث تفحص وتنقي البيانات الخارجية غير الموثوقة عبر إجراءات الخادم ومسارات الويب وبولصات الشحن.",
    "officialDocsUrl": "https://zod.dev",
    "officialDocsLabel": "Official Zod Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ Zod",
    "analogy": "An airport biometric passport scanner. You cannot just present a handwritten note claiming you are an airline captain; the biometric scanner cryptographically verifies your microchip, biometric facial map, and passport number before opening the gate.",
    "analogy_ar": "البوابة الإلكترونية في المطار: لا يمكنك العبور بمجرد ورقة خطية تدعي أنك طيار، بل تفحص البوابة الشريحة الإلكترونية المشفرة وبصمة الوجه وصلاحية الجواز قبل أن تفتح لك الباب.",
    "coreProblemItSolves": "Malicious actors can send arbitrarily crafted JSON payloads directly to Next.js Server Actions or Route Handlers, bypassing all UI client validation. Zod ensures that only cryptographically valid, schema-compliant data ever reaches your business logic.",
    "coreProblemItSolves_ar": "يستطيع المخترقون إرسال حزم JSON خبيثة ومعدلة مباشرة إلى إجراءات الخادم (Server Actions) متجاوزين جميع فحوصات المتصفح. تضمن Zod ألا تصل إلى منطق التجارة إلا البيانات التي اجتازت فحص المخطط بنجاح.",
    "ecomHooksAndApis": [
      {
        "name": "AddToCartSchema.safeParse(data)",
        "role": "Cart Boundary Validation & Sanitization",
        "role_ar": "فحص وتنقية مدخلات إضافة المنتجات إلى السلة",
        "whyInEcom": "Validates that variant_id is a valid UUID, quantity is an integer between 1 and 10, and metadata contains no malicious script tags before contacting Medusa.",
        "whyInEcom_ar": "يتحقق من أن معرف المنتج هو رمز UUID سليم، والكمية عدد صحيح بين 1 و 10، وأن البيانات الإضافية لا تحتوي على وسوم خبيثة قبل الاتصال بـ Medusa.",
        "signatureOrUsage": "const parse = AddToCartSchema.safeParse(formData); if (!parse.success) return Result.fail(parse.error.format());",
        "role_fr": "Validation des Données d'Ajout au Panier",
        "whyInEcom_fr": "Vérifie que l'ID est un UUID valide et que la quantité est un entier entre 1 et 10 avant d'appeler Medusa."
      },
      {
        "name": "ShippingAddressSchema",
        "role": "Carrier-Compliant Address & Phone Validator",
        "role_ar": "التحقق من صحة عناوين الشحن وأرقام الهواتف",
        "whyInEcom": "Validates postal code formats per country (US 5-digit vs UK alphanumeric) and enforces E.164 international phone number format (+966500000000) for courier SMS updates.",
        "whyInEcom_ar": "يتحقق من صيغة الرمز البريدي لكل دولة ويفرض صيغة أرقام الهواتف الدولية E.164 لضمان وصول رسائل التتبع النصية للعملاء.",
        "signatureOrUsage": "z.object({ phone: z.string().regex(/^\\+[1-9]\\d{1,14}$/), postalCode: z.string().min(3).max(10) });",
        "role_fr": "Validateur d'Adresse et Téléphone Conforme Transporteur",
        "whyInEcom_fr": "Valide le code postal et impose le format international E.164 pour l'envoi de SMS de livraison."
      },
      {
        "name": "CarrierWebhookSchema",
        "role": "Logistics Webhook Boundary Gatekeeper",
        "role_ar": "حارس فحص إشعارات شركات الشحن (Webhooks)",
        "whyInEcom": "Validates external tracking event updates from DHL, FedEx, and Aramex, ensuring status fields conform strictly to our TrackingStatus domain enum.",
        "whyInEcom_ar": "يفحص إشعارات التتبع الواردة من شركات الشحن (مثل DHL وأرامكس) ويضمن مطابقتها الدقيقة لحالات التتبع المعتمدة في متجرنا.",
        "signatureOrUsage": "const event = CarrierWebhookSchema.safeParse(rawBody); if (!event.success) return new Response('Invalid payload', { status: 400 });",
        "role_fr": "Filtre d'Entrée des Webhooks Transporteurs",
        "whyInEcom_fr": "Valide les événements de suivi externe de DHL/FedEx avant toute insertion en base."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Preventing Negative Quantity Price Exploits",
        "title_ar": "منع اختراق الكميات السالبة لتخفيض إجمالي السلة",
        "challenge": "An attacker alters their browser form to submit quantity: -5 on an expensive jacket, attempting to reduce their checkout grand total to a negative number.",
        "challenge_ar": "يقوم مخترق بتعديل استمارة المتصفح ليرسل كمية قدرها -5 لسترة باهظة، بهدف خفض إجمالي قيمة السلة لمبلغ سالب وسرقة المتجر.",
        "solution": "Zod schema enforces z.number().int().min(1).max(10). The Server Action rejects the payload with HTTP 400 before it touches any pricing logic.",
        "solution_ar": "يفرض مخطط Zod أن تكون الكمية عدداً صحيحاً موجباً بين 1 و 10 (z.number().int().min(1).max(10))، فيرفض خادم Next.js الطلب فوراً برمز 400.",
        "title_fr": "Blocage des Quantités Négatives et Falsification du Prix",
        "challenge_fr": "Un pirate soumet quantity: -5 pour abaisser le coût total de sa commande.",
        "solution_fr": "Le schéma Zod impose z.number().int().min(1).max(10), rejetant la requête en HTTP 400 immédiatement."
      },
      {
        "title": "Carrier Webhook Payload Schema Desynchronization",
        "title_ar": "تغير هيكل إشعارات شركة الشحن دون سابق إنذار",
        "challenge": "A courier updates their webhook format from status: 'DELIVERED' to status: 'delivered_successful'. Without validation, workers crash silently.",
        "challenge_ar": "تقوم شركة شحن بتحديث هيكل إشعاراتها من DELIVERED إلى delivered_successful دون إشعار، مما يؤدي لانهيار معالجات الخلفية بصمت.",
        "solution": "CarrierWebhookSchema.safeParse immediately flags the unexpected structure, logging an alert to Sentry without corrupting customer order states.",
        "solution_ar": "يكتشف safeParse التغير فوراً ويرسل تنبيهاً لمهندسي النظام دون إفساد حالة طلبات العملاء في قاعدة البيانات.",
        "title_fr": "Désynchronisation Imprévue du Format Webhook Transporteur",
        "challenge_fr": "Un transporteur modifie la clé de statut sans préavis, risquant de faire planter les workers.",
        "solution_fr": "safeParse isole immédiatement la structure anormale et alerte l'équipe sans corrompre les commandes."
      }
    ],
    "keyMechanics": [
      {
        "name": "Safe Parsing over Exception Throwing",
        "name_ar": "الفحص الآمن وتجنب رمي الاستثناءات",
        "explanation": "Strictly enforce schema.safeParse() instead of schema.parse(). safeParse returns a typed result union without throwing costly unhandled exceptions.",
        "explanation_ar": "الاعتماد الصارم على safeParse بدلاً من parse، حيث يعيد نتيجة فحص نمطية دون رمي استثناءات غير متوقعة في الخادم.",
        "name_fr": "Validation Sûre sans Exception",
        "explanation_fr": "safeParse retourne un résultat typé sans lever d'exception coûteuse pour le serveur."
      },
      {
        "name": "Single Source of Truth Type Inference",
        "name_ar": "استنتاج الأنواع من مصدر وحيد",
        "explanation": "Use z.infer<typeof Schema> to generate TypeScript types directly from runtime schemas, guaranteeing runtime and compile-time parity.",
        "explanation_ar": "استخدام z.infer لاستنتاج أنواع TypeScript مباشرة من مخططات Zod، لضمان تطابق الفحص أثناء كتابة الكود وأثناء التشغيل.",
        "name_fr": "Inférence de Type depuis la Source Unique",
        "explanation_fr": "z.infer génère les types TypeScript directement depuis les schémas d'exécution."
      },
      {
        "name": "Input Sanitization and Coercion",
        "name_ar": "تنقية المدخلات وضبط الأنواع",
        "explanation": "Strips unexpected object keys automatically and coerces FormData string numbers into validated integer quantities.",
        "explanation_ar": "حذف الحقول الدخيلة تلقائياً وتحويل نصوص أرقام الاستمارات (FormData) إلى أعداد صحيحة مفحوصة.",
        "name_fr": "Nettoyage et Coercition des Données",
        "explanation_fr": "Supprime les champs superflus et convertit les chaînes numériques en entiers validés."
      }
    ],
    "codeSnippet": "import { z } from \"zod\";\nimport { Result } from \"@ecom/types\";\n\nexport const AddToCartSchema = z.object({\n  variantId: z.string().uuid(\"Variant ID must be a valid UUID\"),\n  quantity: z.number().int().min(1, \"Quantity must be at least 1\").max(10, \"Maximum 10 items allowed\"),\n});\n\nexport type AddToCartInput = z.infer<typeof AddToCartSchema>;\n\nexport async function validateAddToCart(rawInput: unknown): Promise<Result<AddToCartInput, string>> {\n  const result = AddToCartSchema.safeParse(rawInput);\n  if (!result.success) {\n    return Result.fail(result.error.issues[0]?.message ?? \"Invalid cart data\");\n  }\n  return Result.ok(result.data);\n}",
    "antiPattern": {
      "bad": "Using schema.parse(data) in a Server Action or assuming req.body matches an interface like const data = req.body as ProductDTO.",
      "good": "Always call schema.safeParse(data) and return Result.fail(error) on validation failure.",
      "reason": "Type assertions ('as T') provide zero runtime safety and cause unhandled crashes; schema.parse() throws exceptions that bubble up to generic 500 error boundaries.",
      "reason_ar": "استخدام 'as T' يوفر أماناً وهمياً ولا يفحص البيانات حقيقة؛ و parse() يرمي استثناءات تتسبب بانهيار الخادم وظهور صفحة خطأ 500.",
      "reason_fr": "L'assertion 'as T' ne vérifie rien à l'exécution et schema.parse() déclenche des erreurs 500 génériques."
    },
    "securityAndPerfRules": [
      "Never use TypeScript type casting ('as SomeType') on network boundaries; always parse with Zod.",
      "Never call schema.parse() on user input; always use schema.safeParse() to maintain safe Result monads.",
      "Validate all carrier and payment webhook inputs before performing any database or cache operations."
    ],
    "securityAndPerfRules_ar": [
      "حظر استخدام التحويل القسري ('as SomeType') على حدود الشبكة؛ واستخدام Zod دائماً.",
      "حظر استدعاء schema.parse() على مدخلات المستخدمين؛ واستخدام safeParse() للحفاظ على نمط Result.",
      "فحص جميع بيانات إشعارات شركات الشحن والدفع بواسطة Zod قبل إجراء أي عملية في قاعدة البيانات."
    ],
    "title_fr": "Zod : Validation de Schéma à l'Exécution & Protection des Frontières",
    "category_fr": "Sécurité & Validation",
    "badge_fr": "Validation Exécution",
    "summary_fr": "Les types TypeScript sont effacés en production. Zod sert de rempart infaillible à l'exécution, filtrant et nettoyant les données non fiables arrivant sur les Server Actions, Route Handlers et webhooks transporteurs.",
    "officialDocsLabel_fr": "Documentation Officielle Zod",
    "analogy_fr": "Le portique biométrique d'un aéroport international. Nul ne peut passer avec un simple papier prétendant être commandant de bord : le scanner vérifie la puce cryptographique et les empreintes avant d'ouvrir.",
    "coreProblemItSolves_fr": "Des attaquants peuvent envoyer des requêtes JSON falsifiées directement aux Server Actions, court-circuitant l'interface. Zod garantit que seules des données conformes atteignent la logique métier.",
    "securityAndPerfRules_fr": [
      "Ne jamais utiliser de cast TypeScript ('as Type') sur les frontières réseau ; toujours valider avec Zod.",
      "Ne jamais appeler schema.parse() sur les saisies utilisateurs ; préférer schema.safeParse().",
      "Valider rigoureusement toutes les données des webhooks transporteurs avant toute opération en base."
    ]
  },
  {
    "slug": "owasp-security",
    "number": "09",
    "title": "OWASP Top 10 Enterprise Security & Timing-Safe HMAC",
    "title_ar": "معايير أمان OWASP Top 10 والتحقق المشفر من إشعارات الويب (HMAC)",
    "category": "Security & Validation",
    "category_ar": "الأمان والتحقق من البيانات",
    "badge": "Enterprise Security",
    "badge_ar": "الأمان المؤسسي المتقدم",
    "summary": "A hardened enterprise security posture covering the OWASP Top 10 vulnerability categories. Focuses on timing-safe cryptographic HMAC verification for webhooks, distributed idempotency locks against replay attacks, and strict zero-trust secret isolation.",
    "summary_ar": "منظومة أمان مؤسسية تغطي أهم عشر ثغرات أمنية بحسب تصنيف OWASP العالمي. تركز على الفحص المشفر الثابت زمنياً لإشعارات الويب (HMAC)، وأقفال التكرار الموزعة لمنع هجمات إعادة الإرسال، وعزل الأسرار وفق مبدأ انعدام الثقة (Zero-Trust).",
    "officialDocsUrl": "https://owasp.org/www-project-top-ten/",
    "officialDocsLabel": "Official OWASP Top 10 Project",
    "officialDocsLabel_ar": "مشروع OWASP Top 10 العالمي للأمان",
    "analogy": "A maximum-security bank vault with dual-control mechanical keys and anti-replay counters. Even if a thief intercepts a legitimate withdrawal slip, the vault rejects the transaction because the one-time serial number has already been stamped.",
    "analogy_ar": "خزنة بنكية مشددة الحراسة تعمل بمفتاحين وتعتمد أرقاماً تسلسلية أحادية الاستخدام: حتى لو التقط لص إيصال سحب صحيح، ترفض الخزنة المعاملة لأن الرقم التسلسلي قد تم ختمه وصرفه مسبقاً.",
    "coreProblemItSolves": "Standard string comparison (sig === header) leaks timing information byte-by-byte, allowing attackers to forge webhook signatures. Furthermore, carrier webhook retries can trigger duplicate fulfillments. We mandate timing-safe HMAC checks and Redis idempotency locks.",
    "coreProblemItSolves_ar": "المقارنة النصية العادية للرموز المشفرة تسرب فوارق زمنية تتيح للمخترقين تخمين التوقيع بايت تلو الآخر عبر هجمات التوقيت. كما أن إعادة إرسال إشعارات الشحن قد تصدر بوالص شحن مكررة. نحن نفرض مقارنة ثابتة زمنياً عبر crypto.timingSafeEqual وأقفال Redis.",
    "ecomHooksAndApis": [
      {
        "name": "crypto.timingSafeEqual(bufA, bufB)",
        "role": "Constant-Time Signature Comparator",
        "role_ar": "المقارنة الثابتة زمنياً لمنع هجمات التوقيت (Timing Attacks)",
        "whyInEcom": "Validates cryptographic SHA256 HMAC signatures on Stripe and carrier webhooks in constant time, preventing side-channel statistical timing attacks from deciphering secret keys.",
        "whyInEcom_ar": "يفحص التوقيع المشفر لإشعارات Stripe وشركات الشحن في زمن ثابت تماماً، مما يمنع هجمات التوقيت الإحصائية من استنتاج التوقيع واختراق الخادم.",
        "signatureOrUsage": "const isValid = crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(computed, 'hex'));",
        "role_fr": "Comparateur de Signature à Temps Constant",
        "whyInEcom_fr": "Valide les signatures SHA256 des webhooks Stripe et transporteurs sans fuite temporelle statistique."
      },
      {
        "name": "SETNX webhook:lock:{id} (Redis)",
        "role": "Distributed Webhook Idempotency Lock",
        "role_ar": "قفل التكرار الموزع لمنع ازدواجية معالجة الإشعارات",
        "whyInEcom": "Ensures that when DHL retries an order delivery webhook 3 times due to temporary network timeouts, the delivery completion workflow is executed exactly once.",
        "whyInEcom_ar": "يضمن أنه عندما تعيد شركة الشحن إرسال إشعار توصيل الطلب 3 مرات بسبب بطء الشبكة، يتم تسجيل تسليم الطلب مرة واحدة فقط دون تكرار.",
        "signatureOrUsage": "const acquired = await redis.set(`webhook:${eventId}`, '1', 'EX', 86400, 'NX'); if (!acquired) return 200;",
        "role_fr": "Verrou d'Idempotence Distribué",
        "whyInEcom_fr": "Garantit qu'un webhook de livraison réémis trois fois par le transporteur n'est traité qu'une seule fois."
      },
      {
        "name": "HttpOnly, Secure, SameSite=Strict Cookies",
        "role": "XSS-Immune Session Boundary",
        "role_ar": "حماية جلسات العملاء من هجمات XSS وسرقة الكوكيز",
        "whyInEcom": "Customer JWTs and session tokens are stored exclusively in HttpOnly cookies. Even if an attacker injects a malicious client script, JavaScript document.cookie cannot read the token.",
        "whyInEcom_ar": "تخزين رموز جلسات العملاء حصرياً في كوكيز محمية بخاصية HttpOnly، بحيث تعجز أكواد جافاسكربت الخبيثة عن قراءة أو سرقة جلسة العميل في حال حدوث ثغرة XSS.",
        "signatureOrUsage": "cookies().set('session', token, { httpOnly: true, secure: true, sameSite: 'strict', path: '/' });",
        "role_fr": "Stockage Sécurisé de Session Étanche aux XSS",
        "whyInEcom_fr": "Conserve les jetons clients dans des cookies inaccessibles au JavaScript pour parer tout vol par script."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Client-Side Cart Price Tampering Attack",
        "title_ar": "محاولة التلاعب بسعر المنتج من المتصفح",
        "challenge": "A malicious buyer modifies the network payload to send price: 100 (cents) instead of 150000 ($1,500) for a gaming laptop.",
        "challenge_ar": "يقوم مشترٍ مخترق بتعديل حزمة البيانات ليرسل السعر 100 سنت بدلاً من 150000 سنت (1,500 دولار) لحاسوب ألعاب باهظ.",
        "solution": "Zero-Trust Architecture: The storefront Server Action never accepts prices from the client. It only receives the variantId and retrieves the authoritative price from Medusa.",
        "solution_ar": "بنية انعدام الثقة (Zero-Trust): لا يقبل خادم المتجر السعر من المتصفح نهائياً، بل يستقبل فقط معرف المنتج ويجلب السعر المعتمد من Medusa.",
        "title_fr": "Tentative de Falsification Côté Client du Prix d'un Article",
        "challenge_fr": "Un pirate intercepte la requête réseau pour envoyer un prix de 1 $ au lieu de 1 500 $.",
        "solution_fr": "Architecture Zero-Trust : le serveur n'accepte aucun prix venant du client et recalcule tout depuis Medusa."
      },
      {
        "title": "Duplicate Stripe Webhook Double-Fulfillment Disaster",
        "title_ar": "كارثة تكرار شحن الطلب مرتين بسبب إعادة إرسال إشعار الدفع",
        "challenge": "Stripe fires payment_intent.succeeded twice due to an internet blip. A naive webhook handler creates two duplicate warehouse fulfillment orders.",
        "challenge_ar": "ترسل بوابة Stripe إشعار نجاح الدفع مرتين بسبب بطء اتصال الشبكة، فيقوم المعالج العادي بإنشاء شحنتين مكررتين لنفس الطلب في المستودع.",
        "solution": "The Route Handler atomically claims event.id in Redis via SETNX. The first request processes the fulfillment; the second is recognized as duplicate and acknowledged with HTTP 200 without reprocessing.",
        "solution_ar": "يقوم المعالج بحجز معرف الإشعار في Redis بأمر SETNX الذري؛ فالطلب الأول يصدر الشحنة، والطلب الثاني يُكتشف تكراره فوراً ويُرد عليه بـ 200 دون إعادة التنفيذ.",
        "title_fr": "Double Expédition due à la Répétition d'un Webhook Stripe",
        "challenge_fr": "Stripe renvoie l'événement de paiement suite à une micro-coupure réseau.",
        "solution_fr": "Le verrou atomique SETNX dans Redis traite le premier appel et acquitte immédiatement le second sans doublon."
      }
    ],
    "keyMechanics": [
      {
        "name": "Timing-Safe Comparison",
        "name_ar": "المقارنة الثابتة زمنياً",
        "explanation": "Standard string equality (sig === header) terminates on the first mismatched byte, allowing attackers to deduce signatures via statistical timing analysis. crypto.timingSafeEqual checks all bytes in constant time.",
        "explanation_ar": "المقارنة التقليدية تتوقف عند أول حرف غير متطابق مسربة فوارق زمنية للمخترقين؛ بينما تفحص timingSafeEqual كل البايتات في زمن متطابق تماماً.",
        "name_fr": "Comparaison à Temps Constant",
        "explanation_fr": "crypto.timingSafeEqual examine chaque octet en un temps identique, bloquant les attaques temporelles."
      },
      {
        "name": "Distributed Webhook Idempotency Locks",
        "name_ar": "أقفال تكرار الإشعارات الموزعة",
        "explanation": "Incoming carrier and payment webhooks acquire an atomic 24-hour Redis lock (SETNX eventId) before processing, completely preventing duplicate fulfillment on retries.",
        "explanation_ar": "تسجيل معرفات إشعارات الشحن والدفع في قفل Redis ذري لمدة 24 ساعة، لمنع تكرار تنفيذ الشحنات أو خصم المبالغ مرتين عند إعادة الإرسال.",
        "name_fr": "Verrous d'Idempotence Distribués",
        "explanation_fr": "Verrouille les identifiants d'événements dans Redis pendant 24h pour écarter tout rejeu."
      },
      {
        "name": "Zero-Trust Network Boundaries",
        "name_ar": "حدود الشبكة القائمة على انعدام الثقة",
        "explanation": "Never trust client-submitted prices or order totals. All financial arithmetic, discounts, and inventory balances are computed authoritatively on the server.",
        "explanation_ar": "عدم الوثوق نهائياً بالأسعار أو إجماليات الطلبات القادمة من المتصفح؛ تُحسب كافة الحسابات والخصومات على الخادم بصورة حصرية.",
        "name_fr": "Frontières Réseau Zero-Trust",
        "explanation_fr": "Calcul serveur exclusif de tous les montants, soldes et réductions sans jamais se fier au client."
      }
    ],
    "codeSnippet": "import crypto from \"crypto\";\nimport { redis } from \"@/infrastructure/redis-client\";\n\nexport async function verifyCarrierWebhook(\n  rawPayload: string,\n  signatureHeader: string,\n  secretKey: string\n): Promise<boolean> {\n  const computedHmac = crypto\n    .createHmac(\"sha256\", secretKey)\n    .update(rawPayload)\n    .digest(\"hex\");\n\n  const sigBuffer = Buffer.from(signatureHeader, \"hex\");\n  const compBuffer = Buffer.from(computedHmac, \"hex\");\n\n  if (sigBuffer.length !== compBuffer.length) {\n    return false;\n  }\n\n  // Constant-time comparison prevents timing attacks\n  return crypto.timingSafeEqual(sigBuffer, compBuffer);\n}",
    "antiPattern": {
      "bad": "Using if (signature === computedSignature) to verify Stripe or carrier webhooks.",
      "good": "Use crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(comp, 'hex')).",
      "reason": "String comparison terminates on the first mismatched byte, leaking cryptographic secrets via microsecond timing discrepancies.",
      "reason_ar": "المقارنة النصية تتوقف عند أول بايت غير متطابق، مسربة معلومات التوقيع المشفر للمخترقين عبر فوارق أجزاء الميكروثانية.",
      "reason_fr": "La comparaison de chaînes ordinaire s'interrompt dès le premier caractère différent, trahissant la signature."
    },
    "securityAndPerfRules": [
      "All webhook signature verifications must use crypto.timingSafeEqual with identical buffer lengths.",
      "Every external webhook must enforce atomic idempotency in Redis with a 24-hour TTL.",
      "Zero secret keys in client bundles (never expose STRIPE_SECRET_KEY or database URLs)."
    ],
    "securityAndPerfRules_ar": [
      "إلزامية التحقق من توقيع إشعارات الويب باستخدام crypto.timingSafeEqual وتطابق أطوال الذاكرة المؤقتة.",
      "حماية جميع إشعارات الويب الخارجية بقفل تكرار ذري في Redis لمدة 24 ساعة.",
      "حظر تسريب أي مفاتيح سرية لمتصفح العميل (مثل مفاتيح Stripe السرية أو روابط قواعد البيانات)."
    ],
    "title_fr": "Sécurité Entreprise OWASP Top 10 & HMAC à Temps Constant",
    "category_fr": "Sécurité & Validation",
    "badge_fr": "Sécurité Entreprise",
    "summary_fr": "Postulat de sécurité robuste couvrant le Top 10 de l'OWASP. Se concentre sur la validation cryptographique HMAC à temps constant des webhooks, les verrous d'idempotence Redis et l'isolation stricte des secrets Zero-Trust.",
    "officialDocsLabel_fr": "Projet Officiel OWASP Top 10",
    "analogy_fr": "La chambre forte d'une banque avec clés mécaniques synchronisées et horodatage anti-rejeu. Même si un voleur intercepte un bordereau de retrait valide, la banque le rejette car le numéro de série a déjà été oblitéré.",
    "coreProblemItSolves_fr": "L'égalité de chaînes standard fuite des microsecondes permettant de déduire les signatures cryptographiques. De plus, la répétition d'un webhook peut générer des doubles envois. Nous imposons timingSafeEqual et des verrous Redis.",
    "securityAndPerfRules_fr": [
      "Toutes les signatures de webhooks doivent être comparées via crypto.timingSafeEqual.",
      "Chaque webhook externe doit appliquer un verrou d'idempotence atomique Redis valable 24h.",
      "Zéro clé secrète dans les bundles clients (ne jamais exposer STRIPE_SECRET_KEY ou l'URL de base de données)."
    ]
  },
  {
    "slug": "postgres",
    "number": "10",
    "title": "PostgreSQL 16: Relational ACID Persistence & Cascades",
    "title_ar": "PostgreSQL 16: الحفظ العلائقي الموثوق (ACID) والقيود الصارمة",
    "category": "Data & Infrastructure",
    "category_ar": "البيانات والبنية التحتية",
    "badge": "System of Record",
    "badge_ar": "قاعدة البيانات الأساسية",
    "summary": "PostgreSQL 16 serves as the persistent system-of-record for our commerce engine. It guarantees strict ACID compliance across orders, customers, and inventory allocations, utilizing row-level pessimistic locks and foreign-key cascade protections.",
    "summary_ar": "تعتبر PostgreSQL 16 قاعدة البيانات المعتمدة لحفظ سجلات المتجر الأساسية. تضمن الالتزام الصارم بمعايير ACID عبر الطلبات وحسابات العملاء والمخزون، وتستخدم أقفال السجلات التشاؤمية لمنع البيع الزائد.",
    "officialDocsUrl": "https://www.postgresql.org/docs/16/",
    "officialDocsLabel": "Official PostgreSQL 16 Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ PostgreSQL 16",
    "analogy": "A municipal land deeds registry. Every property title transfer is permanently penned into an indexed, tamper-evident ledger. Two buyers can never simultaneously claim the exact same deed.",
    "analogy_ar": "السجل العقاري الحكومي: يُسجل كل انتقال لملكية عقار بحبر دائم في سجل مفهرس غير قابل للتلاعب، ولا يمكن لشخصين شراء نفس العقار في نفس اللحظة مطلقاً.",
    "coreProblemItSolves": "In high-traffic e-commerce flash sales, multiple shoppers attempt to checkout the last remaining item simultaneously. Without relational ACID transactions and row-level locks, systems oversell inventory and create severe fulfillment failures.",
    "coreProblemItSolves_ar": "أثناء التخفيضات الكبرى، يحاول مئات المتسوقين شراء آخر قطعة متوفرة في نفس الجزء من الثانية. دون معاملات ACID وأقفال السجلات، يحدث بيع زائد لبضائع غير موجودة وتفشل الشحنات.",
    "ecomHooksAndApis": [
      {
        "name": "SELECT ... FOR UPDATE",
        "role": "Row-Level Pessimistic Concurrency Lock",
        "role_ar": "قفل السجلات التشاؤمي لمنع التضارب في المخزون",
        "whyInEcom": "Locks the inventory row of an item during checkout completion. The second concurrent buyer waits until the first transaction commits or rolls back, guaranteeing zero overselling.",
        "whyInEcom_ar": "يقفل سجل مخزون المنتج أثناء إتمام عملية الدفع؛ فينتظر المشتري المتزامن الثاني حتى تكتمل المعاملة الأولى أو تتراجع، مانعاً البيع الزائد نهائياً.",
        "signatureOrUsage": "SELECT available_quantity FROM inventory_level WHERE item_id = $1 FOR UPDATE;",
        "role_fr": "Verrou Pessimiste au Niveau de la Ligne",
        "whyInEcom_fr": "Bloque la ligne de stock durant l'achat ; le second client attend la validation du premier, interdisant le sur-stockage."
      },
      {
        "name": "FOREIGN KEY ... ON DELETE RESTRICT",
        "role": "Historical Order Referential Integrity",
        "role_ar": "حماية سجلات الطلبات التاريخية من الحذف العرضي",
        "whyInEcom": "Prevents merchants or automated scripts from deleting a product or customer record that is referenced by legal invoices and past order items.",
        "whyInEcom_ar": "يمنع التجار أو الأنظمة التلقائية من حذف منتج أو حساب عميل مرتبط بفواتير قانونية وطلبات شراء سابقة.",
        "signatureOrUsage": "CONSTRAINT fk_order_items FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE RESTRICT;",
        "role_fr": "Protection de l'Intégrité Référentielle des Commandes",
        "whyInEcom_fr": "Empêche toute suppression accidentelle d'un produit ou client figurant sur des factures historiques."
      },
      {
        "name": "B-Tree & GIN Indexes",
        "role": "Sub-10ms Catalog Search & Filter Optimizer",
        "role_ar": "فهارس تسريع البحث وتصفية المنتجات في أقل من 10 ميللي ثانية",
        "whyInEcom": "Accelerates product category filtering, SKU lookups, and customer order history queries across hundreds of thousands of records.",
        "whyInEcom_ar": "تسرع استعلامات تصفية الكتالوج والبحث عن رمز المنتج (SKU) وسجل طلبات العميل عبر مئات الآلاف من السجلات.",
        "signatureOrUsage": "CREATE INDEX idx_products_category ON products USING btree (category_id, is_active);",
        "role_fr": "Accélérateur de Recherche et Filtrage Catalogue",
        "whyInEcom_fr": "Optimise les temps de réponse de recherche et filtrage par catégorie sous les 10 ms."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Preventing Overselling on 100-Unit Sneaker Drop",
        "title_ar": "منع البيع الزائد في إطلاق 100 حذاء حصري",
        "challenge": "5,000 customers click 'Checkout' in the exact same second for a limited sneaker drop with only 100 pairs available.",
        "challenge_ar": "5000 متسوق يضغطون زر 'إتمام الشراء' في نفس اللحظة لحذاء حصري يتوفر منه 100 زوج فقط.",
        "solution": "ACID transaction with SELECT stock FOR UPDATE. Exactly 100 transactions succeed; the 101st transaction reads stock = 0 and triggers an atomic rollback.",
        "solution_ar": "معاملة ACID مع قفل SELECT stock FOR UPDATE: تنجح 100 معاملة بالتمام، والمعاملة رقم 101 تقرأ المخزون = 0 وتتراجع تلقائياً دون أي خطأ.",
        "title_fr": "Éviter le Sur-Stockage lors de Ventes Éclair Limitées",
        "challenge_fr": "5 000 acheteurs valident simultanément leur panier pour 100 paires disponibles.",
        "solution_fr": "La transaction ACID avec SELECT ... FOR UPDATE valide exactement 100 ventes et annule la 101e proprement."
      },
      {
        "title": "Auditable Financial Order Invoicing",
        "title_ar": "حفظ السجلات المالية القانونية للطلبات والفواتير",
        "challenge": "Tax authorities require immutable records of order amounts and line item prices, even if the store later changes the catalog price of the product.",
        "challenge_ar": "تطلب هيئات الضرائب سجلات ثابتة لا تتغير لمبالغ الطلبات وأسعار بنودها، حتى لو قام المتجر لاحقاً بتعديل سعر بيع المنتج في الكتالوج.",
        "solution": "Postgres snapshots line items into order_items with immutable minor unit prices, decoupling historical records from live catalog updates.",
        "solution_ar": "تقوم PostgreSQL بأخذ لقطة ثابتة لبنود الطلب بأسعارها المعتمدة في جدول order_items، مما يفصل السجلات التاريخية عن التعديلات اللاحقة.",
        "title_fr": "Immuabilité Légale de l'Historique de Facturation",
        "challenge_fr": "Les autorités fiscales exigent des factures invariables même si les prix catalogue changent plus tard.",
        "solution_fr": "PostgreSQL fige les montants dans order_items au centime près, isolant l'historique du catalogue futur."
      }
    ],
    "keyMechanics": [
      {
        "name": "ACID Transaction Guarantees",
        "name_ar": "ضمانات معاملات ACID",
        "explanation": "Guarantees Atomicity (all or nothing), Consistency, Isolation, and Durability across complex order placements.",
        "explanation_ar": "ضمان الشمولية (الكل أو لا شيء) والاتساق والعزل والموثوقية الدائمة عبر كافة عمليات الشراء.",
        "name_fr": "Garanties Transactionnelles ACID",
        "explanation_fr": "Atomique, Cohérent, Isolé et Durable pour assurer l'exactitude absolue des écritures de commande."
      },
      {
        "name": "Pessimistic Concurrency Locking",
        "name_ar": "أقفال التزامن التشاؤمية",
        "explanation": "SELECT ... FOR UPDATE locks target rows during inventory decrements, preventing concurrent race conditions during checkout surges.",
        "explanation_ar": "قفل السجلات المستهدفة أثناء خصم المخزون لمنع تضارب العمليات المتزامنة في أوقات الذروة.",
        "name_fr": "Verrouillage Pessimiste des Lignes",
        "explanation_fr": "SELECT ... FOR UPDATE évite les conditions de course lors de l'incrémentation ou décrémentation des stocks."
      },
      {
        "name": "Strict Referential Constraints",
        "name_ar": "القيود المرجعية الصارمة",
        "explanation": "Enforces ON DELETE RESTRICT on historical commerce data, preventing accidental cascading deletes of customer invoices.",
        "explanation_ar": "فرض قيد منع الحذف على البيانات التجارية التاريخية لمنع حذف فواتير العملاء بالخطأ.",
        "name_fr": "Contraintes Référentielles Strictes",
        "explanation_fr": "ON DELETE RESTRICT interdit la suppression accidentelle de données comptables fondamentales."
      }
    ],
    "codeSnippet": "-- Deduct inventory with pessimistic lock\nBEGIN;\n\nSELECT available_quantity \nFROM inventory_levels \nWHERE variant_id = 'var_sneakers_01' \nFOR UPDATE;\n\n-- Decrement only if stock > 0\nUPDATE inventory_levels \nSET available_quantity = available_quantity - 1 \nWHERE variant_id = 'var_sneakers_01' AND available_quantity >= 1;\n\nCOMMIT;",
    "antiPattern": {
      "bad": "Reading stock in application memory (if stock > 0) and issuing an UPDATE stock = stock - 1 in a separate query.",
      "good": "Use a single atomic SQL transaction with SELECT ... FOR UPDATE or an atomic UPDATE ... WHERE stock >= 1.",
      "reason": "Separating read and write creates a race condition where 100 concurrent requests all read stock = 1 and all succeed, overselling 99 units.",
      "reason_ar": "فصل القراءة عن الكتابة يحدث تضارباً تقرأ فيه مئات الطلبات المخزون = 1 وتنجح كلها، مما يؤدي لبيع 99 قطعة وهمية.",
      "reason_fr": "Lire le stock en mémoire applicative puis exécuter UPDATE dans une requête séparée crée une faille de concurrence massive."
    },
    "securityAndPerfRules": [
      "All inventory updates during checkout must run within an atomic transaction with row-level locking.",
      "Never allow client applications direct SQL access; all interactions flow through Medusa DTO repositories.",
      "Database connection strings must use isolated credentials with minimal necessary privileges."
    ],
    "securityAndPerfRules_ar": [
      "إجراء جميع تحديثات المخزون أثناء الدفع داخل معاملات ذرية مشروطة بأقفال السجلات.",
      "حظر اتصال واجهة المتجر بقاعدة البيانات مباشرة؛ وتمرير العمليات عبر مستودعات Medusa.",
      "استخدام بيانات اعتماد معزولة لقاعدة البيانات وبأقل صلاحيات ممكنة لمنع الاختراق."
    ],
    "title_fr": "PostgreSQL 16 : Persistance Relationnelle ACID & Verrous Pessimistes",
    "category_fr": "Données & Infrastructure",
    "badge_fr": "Système de Référence",
    "summary_fr": "PostgreSQL 16 constitue le système d'enregistrement de référence pour le moteur de commerce. Il assure le respect scrupuleux des propriétés ACID pour les commandes, les clients et les stocks via des verrous pessimistes au niveau de la ligne.",
    "officialDocsLabel_fr": "Documentation Officielle PostgreSQL 16",
    "analogy_fr": "Le registre foncier d'un cadastre. Chaque acte de propriété est inscrit à l'encre indélébile dans un livre côté. Deux acheteurs ne peuvent jamais acquérir simultanément la même parcelle.",
    "coreProblemItSolves_fr": "Lors des ventes flash, des centaines de clients achètent le dernier article au même instant. Sans verrous de ligne relationnels ACID, le système vend des articles inexistants et plonge la logistique dans le chaos.",
    "securityAndPerfRules_fr": [
      "Toutes les décrémentations de stock doivent s'exécuter dans une transaction atomique verrouillée.",
      "Interdire tout accès SQL direct depuis l'application cliente ; passer obligatoirement par les DTOs Medusa.",
      "Isoler les identifiants de base de données avec le principe du moindre privilège."
    ]
  },
  {
    "slug": "redis",
    "number": "11",
    "title": "Redis 7: In-Memory Caching, Distributed Locks & Pub/Sub",
    "title_ar": "Redis 7: التخزين المؤقت فائق السرعة، الأقفال الموزعة ونظام النشر/الاشتراك",
    "category": "Data & Infrastructure",
    "category_ar": "البيانات والبنية التحتية",
    "badge": "High-Speed Cache",
    "badge_ar": "الذاكرة فائقة السرعة",
    "summary": "Redis 7 serves as our ultra-low-latency in-memory data store. Operating in sub-millisecond speeds, it powers distributed idempotency locks for checkout and webhooks, high-frequency rate limiters, catalog query caches, and asynchronous subscriber event buses.",
    "summary_ar": "تعمل Redis 7 كذاكرة وسيطة فائقة السرعة بزمن استجابة أقل من ميللي ثانية واحدة. تدير أقفال التكرار الموزعة لعمليات الدفع وإشعارات الويب، ومحددات معدل الطلبات، والتخزين المؤقت للكتالوج، ومسار أحداث المشتركين غير المتزامن.",
    "officialDocsUrl": "https://redis.io/docs/",
    "officialDocsLabel": "Official Redis Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ Redis",
    "analogy": "A chef's prep counter. The walk-in refrigerator (Postgres) holds 500 bulk ingredients, but the chopped garlic, butter, and seasonings sit directly on the prep counter (Redis) for instant access in half a second without walking into the back room.",
    "analogy_ar": "طاولة التحضير المباشرة للطاهي: الثلاجة المركزية (Postgres) تخزن 500 صنف من المؤن، لكن الملح وزيت الزيتون والثوم المفروم توضع مباشرة على طاولة التحضير (Redis) للوصول الفوري في جزء من الثانية دون الذهاب للمستودع.",
    "coreProblemItSolves": "Hitting PostgreSQL for every catalog view, rate limit check, and webhook event causes connection pool exhaustion and sluggish 300ms page loads. Redis absorbs 95% of read volume in under 1 millisecond and prevents race conditions with atomic primitives.",
    "coreProblemItSolves_ar": "الاتصال بقاعدة بيانات PostgreSQL عند كل تصفح للمنتجات أو فحص لعدد الطلبات يستنزف اتصالات الخادم ويسبب بطء التصفح. تمتص Redis 95% من عبء القراءة بزمن أقل من 1 ميللي ثانية وتمنع تضارب العمليات بأوامرها الذرية.",
    "ecomHooksAndApis": [
      {
        "name": "SET lock:checkout:{cartId} {id} EX 30 NX",
        "role": "Distributed Checkout Idempotency Lock",
        "role_ar": "قفل التكرار الموزع لعمليات الدفع والطلبات",
        "whyInEcom": "Prevents double-charging if an impatient customer double-taps 'Pay Now' on a slow connection. The first request acquires the lock; the second request is immediately rejected.",
        "whyInEcom_ar": "يمنع خصم المبلغ مرتين إذا نقر المتسوق زر 'ادفع الآن' مرتين متتاليتين؛ حيث يحصل الطلب الأول على القفل، ويُرفض الطلب الثاني فوراً.",
        "signatureOrUsage": "const locked = await redis.set(`lock:checkout:${cartId}`, workerId, 'EX', 30, 'NX');",
        "role_fr": "Verrou Distribué Anti-Double Débit",
        "whyInEcom_fr": "Empêche un acheteur impatient qui clique deux fois sur 'Payer' d'être prélevé à double."
      },
      {
        "name": "SETEX cache:catalog:{id} 3600 {json}",
        "role": "Sub-Millisecond Catalog Read Cache",
        "role_ar": "تخزين مؤقت لبيانات المنتجات بزمن أقل من ميللي ثانية",
        "whyInEcom": "Serves high-traffic landing page product metadata directly from RAM in 0.4ms, relieving PostgreSQL during global marketing campaigns.",
        "whyInEcom_ar": "يقدم بيانات المنتجات في صفحات الهبوط المليونية مباشرة من الذاكرة العشوائية خلال 0.4 ميللي ثانية، مما يريح قاعدة البيانات الأساسية تماماً.",
        "signatureOrUsage": "await redis.setex(`product:${id}`, 3600, JSON.stringify(productDTO));",
        "role_fr": "Cache de Lecture Catalogue Sous-Milliseconde",
        "whyInEcom_fr": "Délivre les pages produits à fort trafic en 0,4 ms directement depuis la RAM lors des campagnes promotionnelles."
      },
      {
        "name": "Redis Pub/Sub & BullMQ",
        "role": "Asynchronous Commerce Event Bus",
        "role_ar": "مسار الأحداث غير المتزامن لإرسال الفواتير والشحنات",
        "whyInEcom": "Offloads slow tasks (generating PDF invoices, sending WhatsApp/SMS order notifications, notifying DHL dispatch) into background workers without delaying checkout.",
        "whyInEcom_ar": "ينقل المهام البطيئة (إنشاء فواتير PDF، إرسال رسائل الواتساب وتنبيه شركة الشحن) لمعالجات الخلفية دون تأخير استجابة صفحة الدفع للزبون.",
        "signatureOrUsage": "await redis.publish('order.created', JSON.stringify({ orderId: 'ord_123' }));",
        "role_fr": "Bus d'Événements Asynchrones de Commerce",
        "whyInEcom_fr": "Décharge les tâches lentes (génération de factures PDF, envoi de SMS de confirmation) vers les workers d'arrière-plan."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Preventing Double-Billing on Mobile 'Place Order' Taps",
        "title_ar": "منع الخصم المزدوج عند نقر زر الدفع مرتين على الهاتف",
        "challenge": "A user on 3G taps 'Place Order', sees no instant spinner, and taps it again 400ms later, potentially triggering two concurrent credit card charges.",
        "challenge_ar": "متسوق عبر شبكة ضعيفة يضغط زر 'تأكيد الطلب'، ولعدم ظهور مؤشر فوري، يضغطه مجدداً بعد 400 ميللي ثانية، مما قد يخصم المبلغ من بطاقته مرتين.",
        "solution": "Acquire an atomic Redis lock on the cartId with NX (only if Not eXists). The second tap fails the lock and returns a polite 'Order already processing' alert.",
        "solution_ar": "حجز قفل ذري في Redis لمعرف السلة عبر أمر NX؛ فيفشل النقر الثاني في الحصول على القفل ويظهر تنبيهاً ودياً بأن الطلب قيد المعالجة بالفعل.",
        "title_fr": "Blocage des Doubles Facturations par Double Clic Mobile",
        "challenge_fr": "Sur connexion lente, l'utilisateur tape deux fois sur 'Commander' faute de spinner immédiat.",
        "solution_fr": "L'acquisition atomique du verrou Redis SETNX sur le cartId rejette la seconde requête poliment."
      },
      {
        "title": "Marketing Campaign Traffic Surge Absorption",
        "title_ar": "امتصاص قفزات الزوار الضخمة من إعلانات المؤثرين",
        "challenge": "An influencer posts a link to an exclusive item, driving 50,000 visitors per minute to a single product page, threatening to overwhelm database connection pools.",
        "challenge_ar": "مؤثر يشارك رابط منتج حصري، مما يجلب 50 ألف زائر في الدقيقة لصفحة واحدة، مهدداً باستنزاف اتصالات قاعدة البيانات وانهيارها.",
        "solution": "Cache the serialized ProductDTO in Redis. Requests are served from RAM in under 1ms, maintaining 100% storefront uptime throughout the campaign.",
        "solution_ar": "تخزين كائن المنتج المجهز في ذاكرة Redis؛ فتتم خدمة الطلبات من الرام في أقل من ميللي ثانية مع بقاء المتجر متاحاً بنسبة 100% طوال الحملة.",
        "title_fr": "Absorption d'un Pic d'Audience Inattendu via Réseaux Sociaux",
        "challenge_fr": "Un influenceur partage un lien produit, déclenchant 50 000 requêtes/minute sur une seule page.",
        "solution_fr": "Servir le DTO pré-sérialisé depuis Redis soulage la base de données et préserve la disponibilité à 100%."
      }
    ],
    "keyMechanics": [
      {
        "name": "Atomic Idempotency Locking",
        "name_ar": "أقفال منع التكرار الذرية",
        "explanation": "SET key val EX 30 NX executes atomically in single-threaded Redis, preventing concurrent checkout and webhook race conditions.",
        "explanation_ar": "تنفيذ أمر SET NX الذري في مسار معالجة Redis الفردي لمنع تضارب عمليات إتمام الطلب وتكرار الإشعارات نهائياً.",
        "name_fr": "Verrouillage Atomique d'Idempotence",
        "explanation_fr": "SET NX s'exécute de façon atomique dans le thread unique de Redis, bloquant toute collision concurrente."
      },
      {
        "name": "Sub-Millisecond Read Throughput",
        "name_ar": "سرعة قراءة فائقة دون ميللي ثانية",
        "explanation": "In-memory data structures deliver responses in 0.2–0.5ms, keeping TTFB (Time to First Byte) under 50ms across the globe.",
        "explanation_ar": "توفير البيانات من الذاكرة الحية خلال أجزاء الميللي ثانية للحفاظ على زمن استجابة المتجر (TTFB) منخفضاً ومثالياً.",
        "name_fr": "Débit de Lecture Sous-Milliseconde",
        "explanation_fr": "Temps de réponse de 0,2 à 0,5 ms pour conserver un TTFB mondial inférieur à 50 ms."
      },
      {
        "name": "Pub/Sub Event Orchestration",
        "name_ar": "تنسيق أحداث النشر والاشتراك",
        "explanation": "Acts as the message backbone for Medusa v2 subscribers, orchestrating async order emails, tracking syncs, and inventory notifications.",
        "explanation_ar": "العمود الفقري لمشتركي Medusa v2 لإرسال رسائل البريد الإلكتروني وتحديثات الشحن وإشعارات نفاد المخزون في الخلفية.",
        "name_fr": "Orchestration d'Événements Pub/Sub",
        "explanation_fr": "Épine dorsale des abonnés Medusa v2 pour les e-mails et la synchronisation des colis en arrière-plan."
      }
    ],
    "codeSnippet": "import { redis } from \"@/infrastructure/redis-client\";\n\nexport async function acquireLock(lockKey: string, ttlSeconds: number): Promise<boolean> {\n  // SET key value EX ttl NX (only set if not exists)\n  const result = await redis.set(lockKey, \"locked\", \"EX\", ttlSeconds, \"NX\");\n  return result === \"OK\";\n}\n\nexport async function releaseLock(lockKey: string): Promise<void> {\n  await redis.del(lockKey);\n}",
    "antiPattern": {
      "bad": "Checking if (await redis.get(key)) await redis.set(key, val) in two separate commands.",
      "good": "Always execute atomic primitives: await redis.set(key, val, 'EX', ttl, 'NX').",
      "reason": "Two sequential commands create a race condition where two requests can both execute GET, see null, and both proceed.",
      "reason_ar": "تنفيذ أمرين منفصلين يخلق تضارباً يقرأ فيه طلبان القيمة فارغة معاً وينفذان كلاهما التعديل في نفس الوقت.",
      "reason_fr": "Exécuter GET puis SET séquentiellement crée une condition de concurrence où deux requêtes lisent la clé vide en même temps."
    },
    "securityAndPerfRules": [
      "Always set an explicit TTL (Time-To-Live) on every cache key to prevent memory exhaustion.",
      "Distributed locks must use atomic commands (SET NX) with sensible expiration windows.",
      "Never store unencrypted sensitive customer PII or credit card numbers in cache layers."
    ],
    "securityAndPerfRules_ar": [
      "تحديد مدة صلاحية (TTL) صريحة لكل مفتاح تخزين مؤقت منعاً لامتلاء الذاكرة العشوائية.",
      "إلزامية استخدام الأوامر الذرية (SET NX) للأقفال الموزعة مع فترات انتهاء مناسبة.",
      "حظر تخزين بيانات العملاء الحساسة أو بطاقات الائتمان غير المشفرة في طبقات التخزين المؤقت."
    ],
    "title_fr": "Redis 7 : Cache Haute Performance, Verrous Distribués & Pub/Sub",
    "category_fr": "Données & Infrastructure",
    "badge_fr": "Cache Ultra-Rapide",
    "summary_fr": "Redis 7 opère en sous-milliseconde dans la mémoire vive. Il propulse les verrous d'idempotence pour la commande et les webhooks, les limiteurs de débit, le cache des catalogues et le bus d'événements asynchrone.",
    "officialDocsLabel_fr": "Documentation Officielle Redis",
    "analogy_fr": "Le plan de travail direct du chef cuisinier. La chambre froide (PostgreSQL) contient 500 ingrédients en gros, mais le beurre, l'ail émincé et les épices restent directement sur le plan de travail (Redis) pour un usage en une demi-seconde.",
    "coreProblemItSolves_fr": "Solliciter PostgreSQL pour chaque vue produit ou vérification de webhook sature le pool de connexions et ralentit les pages à 300 ms. Redis absorbe 95% des lectures en moins d'une milliseconde.",
    "securityAndPerfRules_fr": [
      "Définir impérativement une durée d'expiration (TTL) sur chaque clé pour éviter de saturer la RAM.",
      "Les verrous distribués doivent exclusivement employer des opérations atomiques (SET NX).",
      "Ne jamais entreposer de données bancaires ou d'informations personnelles non chiffrées dans le cache."
    ]
  },
  {
    "slug": "docker",
    "number": "12",
    "title": "Docker Compose & Multi-Container Isolation",
    "title_ar": "Docker Compose وعزل بيئات قواعد البيانات المتعددة",
    "category": "Data & Infrastructure",
    "category_ar": "البيانات والبنية التحتية",
    "badge": "DevOps & Containers",
    "badge_ar": "الحاويات وبيئة التطوير",
    "summary": "Docker Compose packages PostgreSQL 16 and Redis 7 into isolated, reproducible Alpine Linux containers. Configured on non-standard host ports (5433 and 6380), it guarantees zero port collisions with developers' existing local services.",
    "summary_ar": "تجمع أداة Docker Compose كلاً من PostgreSQL 16 و Redis 7 داخل حاويات Alpine Linux معزولة ومتطابقة. تضمن عدم تصادم المنافذ مع خدمات المطورين المحلية عبر تعيين منافذ منفصلة (5433 و 6380).",
    "officialDocsUrl": "https://docs.docker.com/compose/",
    "officialDocsLabel": "Official Docker Compose Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ Docker Compose",
    "analogy": "Standardized intermodal shipping containers. The exact same steel box stacks identically on a container ship, a train flatbed, or a semi-truck trailer without rearranging the cargo inside.",
    "analogy_ar": "حاوية الشحن البحرية القياسية: نفس الصندوق الحديدي يُحمل بشكل متطابق تماماً على ظهر سفينة بضائع، أو مقطورة قطار، أو شاحنة نقل دون الحاجة لفتح الحاوية أو إعادة ترتيب البضائع بداخلها.",
    "coreProblemItSolves": "'Works on my machine' bugs arise when teammates run mismatched database versions (e.g. Postgres 14 vs 16) or have existing background services occupying ports 5432 and 6379. Docker guarantees identical, isolated local runtimes.",
    "coreProblemItSolves_ar": "تنشأ مشكلة 'الكود يعمل على جهازي فقط' عندما يستخدم أعضاء الفريق إصدارات متباينة من قواعد البيانات أو عندما تتعطل المنافذ الافتراضية 5432 و 6379 بسبب برامج سابقة. يضمن Docker بيئة تشغيل متطابقة ومعزولة للجميع.",
    "ecomHooksAndApis": [
      {
        "name": "ports: ['5433:5432', '6380:6379']",
        "role": "Host Port Collision Defense",
        "role_ar": "حماية المنافذ من التصادم مع خدمات المطور المحلية",
        "whyInEcom": "Ensures engineers who already have native Postgres or Redis running for other projects can clone this e-commerce repo and run pnpm db:up without 'address already in use' errors.",
        "whyInEcom_ar": "تضمن أن أي مهندس لديه مشاريع سابقة تشغل منافذ Postgres أو Redis العادية يستطيع تشغيل هذا المتجر دون رسائل خطأ 'المنفذ مستخدم بالفعل'.",
        "signatureOrUsage": "ports: ['127.0.0.1:5433:5432']",
        "role_fr": "Isolation des Ports contre les Collisions",
        "whyInEcom_fr": "Permet aux ingénieurs ayant déjà Postgres ou Redis sur leur machine de lancer le projet sans conflit de port."
      },
      {
        "name": "healthcheck: pg_isready -U postgres",
        "role": "Database Readiness Verification",
        "role_ar": "التحقق من جاهزية قاعدة البيانات قبل بدء التشغيل",
        "whyInEcom": "Prevents Medusa commerce backend from crashing on startup during CI/CD test runs by waiting until PostgreSQL is fully accepting SQL queries.",
        "whyInEcom_ar": "يمنع انهيار خادم Medusa أثناء التشغيل التلقائي عبر الانتظار حتى تصبح قاعدة البيانات جاهزة لاستقبال الاستعلامات بنجاح.",
        "signatureOrUsage": "test: ['CMD-SHELL', 'pg_isready -U postgres -d ecom_medusa']",
        "role_fr": "Vérification de Disponibilité des Services",
        "whyInEcom_fr": "Empêche Medusa de planter au démarrage en attendant que PostgreSQL soit opérationnel pour recevoir des requêtes."
      },
      {
        "name": "volumes: postgres_data & redis_data",
        "role": "Persistent Storage Volume Management",
        "role_ar": "إدارة وحدات التخزين الدائمة للبيانات",
        "whyInEcom": "Preserves sample e-commerce seed data (products, test customer accounts, categories) across docker-compose down and system reboots.",
        "whyInEcom_ar": "يحافظ على بيانات المنتجات التجريبية وحسابات العملاء والفئات من الضياع عند إعادة تشغيل الحاويات أو إعادة تشغيل الجهاز.",
        "signatureOrUsage": "volumes: { postgres_data: { driver: 'local' } }",
        "role_fr": "Persistance et Sauvegarde des Volumes",
        "whyInEcom_fr": "Préserve les données de test (produits, comptes de démonstration) entre les redémarrages de conteneurs."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Onboarding a New Engineer in Under 3 Minutes",
        "title_ar": "تهيئة بيئة العمل لمهندس جديد في أقل من 3 دقائق",
        "challenge": "A new developer joins the team on macOS or Windows and spends two days manually installing Postgres 16 extensions and compiling Redis binaries.",
        "challenge_ar": "ينضم مهندس جديد للفريق فيقضي يومين في تثبيت إضافات Postgres وتجميع Redis يدوياً ومواجهة أخطاء التوافق.",
        "solution": "The developer simply runs pnpm install && pnpm db:up. Fully configured, healthchecked Postgres and Redis databases are online in 30 seconds.",
        "solution_ar": "يقوم المطور فقط بكتابة pnpm install && pnpm db:up؛ فتعمل قواعد البيانات المهيأة والمفحوصة بالكامل خلال 30 ثانية فقط.",
        "title_fr": "Intégration d'un Nouveau Développeur en Moins de 3 Minutes",
        "challenge_fr": "Un nouvel arrivant perd deux jours à installer des extensions PostgreSQL et configurer Redis.",
        "solution_fr": "L'ingénieur tape pnpm install && pnpm db:up ; les bases isolées et saines sont actives en 30 secondes."
      },
      {
        "title": "Isolated CI/CD Automated Testing Pipeline",
        "title_ar": "بيئة اختبارات تلقائية معزولة بالكامل في CI/CD",
        "challenge": "Running integration tests against a shared test database causes tests to overwrite each other's mock carts and inventory numbers.",
        "challenge_ar": "تشغيل الاختبارات التكاملية على قاعدة بيانات تجريبية مشتركة يجعل الاختبارات تعدل على سلات وبيانات بعضها البعض فتفشل الفحوصات عشوائياً.",
        "solution": "GitHub Actions spins up docker-compose.yml per pull request, running tests in a pristine, isolated container sandbox and destroying it upon completion.",
        "solution_ar": "تقوم خوادم GitHub Actions بتشغيل docker-compose.yml لكل سحب كود، فتنفذ الاختبارات في بيئة نظيفة ومعزولة وتُحذف فور الانتهاء.",
        "title_fr": "Pipeline de Tests Automatisés Isolés en Intégration Continue",
        "challenge_fr": "Lancer des tests sur une base partagée pollue les données et provoque des échecs aléatoires.",
        "solution_fr": "GitHub Actions monte docker-compose.yml par pull request dans un bac à sable vierge détruit à la fin des tests."
      }
    ],
    "keyMechanics": [
      {
        "name": "Non-Conflicting Port Bindings",
        "name_ar": "تعيين منافذ غير متعارضة",
        "explanation": "Maps internal Postgres (5432) to host 5433, and Redis (6379) to host 6380, preventing conflicts with host machines.",
        "explanation_ar": "ربط منفذ Postgres الداخلي بالمنفذ الخارجي 5433، ومنفذ Redis بالمنفذ 6380، لمنع التصادم مع البرامج المثبتة على جهاز المطور.",
        "name_fr": "Mappage de Ports Dédiés Non-Conflictuels",
        "explanation_fr": "Redirige Postgres vers 5433 et Redis vers 6380 pour ne jamais interférer avec la machine hôte."
      },
      {
        "name": "Healthcheck Orchestration",
        "name_ar": "مراقبة وفحص جاهزية الخدمات",
        "explanation": "Services define explicit pg_isready health checks, ensuring backend migrations only execute after the database engine is fully operational.",
        "explanation_ar": "فحص جاهزية قاعدة البيانات عبر أمر pg_isready للتأكد من اكتمال الإقلاع قبل تشغيل هجرات البيانات.",
        "name_fr": "Orchestration par Contrôle d'État (Healthcheck)",
        "explanation_fr": "Vérifie la santé des bases avant de démarrer les migrations et le serveur applicatif."
      },
      {
        "name": "Persistent Volume Mounts",
        "name_ar": "أقراص التخزين الدائمة",
        "explanation": "Stores database tables in named Docker volumes, ensuring customer and catalog data persist safely across container restarts.",
        "explanation_ar": "حفظ بيانات الجداول في أقراص Docker مخصصة لضمان بقاء بيانات العملاء والمنتجات عند إعادة تشغيل الحاوية.",
        "name_fr": "Montage de Volumes Persistants",
        "explanation_fr": "Stocke les données dans des volumes Docker nommés pour éviter toute perte lors des redémarrages."
      }
    ],
    "codeSnippet": "# docker-compose.yml\nservices:\n  postgres:\n    image: postgres:16-alpine\n    container_name: ecom-postgres\n    environment:\n      POSTGRES_DB: ecom_medusa\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: supersecretpassword\n    ports:\n      - \"127.0.0.1:5433:5432\" # Safe non-conflicting port\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U postgres -d ecom_medusa\"]\n      interval: 5s\n      retries: 5\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n\n  redis:\n    image: redis:7-alpine\n    container_name: ecom-redis\n    ports:\n      - \"127.0.0.1:6380:6379\" # Safe non-conflicting port\n    volumes:\n      - redis_data:/data",
    "antiPattern": {
      "bad": "Binding containers to default ports '5432:5432' without host IP restriction ('127.0.0.1').",
      "good": "Bind to '127.0.0.1:5433:5432' to prevent port clashes and restrict external network access.",
      "reason": "Binding '0.0.0.0:5432' exposes development databases to local network snooping and fails if local Postgres is running.",
      "reason_ar": "الربط على 0.0.0.0:5432 يعرض قاعدة البيانات المحلية للتنصت عبر الشبكة المحلية ويفشل فوراً إذا كان هناك برنامج آخر يعمل.",
      "reason_fr": "Lier 0.0.0.0:5432 expose la base locale sur le réseau Wi-Fi local et échoue si un service tourne déjà."
    },
    "securityAndPerfRules": [
      "Always bind local database ports to 127.0.0.1 to prevent unauthorized local network exposure.",
      "Never commit production database passwords to docker-compose.yml; use environment variables.",
      "Enforce persistent volume mounts to prevent accidental catalog and customer data loss."
    ],
    "securityAndPerfRules_ar": [
      "حصر ربط منافذ قواعد البيانات المحلية على العنوان الآمن 127.0.0.1 لمنع انكشافها للشبكة المحلية.",
      "حظر كتابة كلمات مرور الإنتاج داخل docker-compose.yml؛ واستخدام متغيرات البيئة السرية.",
      "إلزامية استخدام وحدات التخزين الدائمة لمنع فقدان بيانات الكتالوج والعملاء بالخطأ."
    ],
    "title_fr": "Docker Compose & Isolation Multi-Conteneurs des Données",
    "category_fr": "Données & Infrastructure",
    "badge_fr": "Conteneurs & DevOps",
    "summary_fr": "Docker Compose encapsule PostgreSQL 16 et Redis 7 dans des conteneurs Alpine Linux isolés et reproductibles. Configuré sur des ports hôtes non standard (5433 et 6380), il bannit tout conflit avec les services locaux des développeurs.",
    "officialDocsLabel_fr": "Documentation Officielle Docker Compose",
    "analogy_fr": "Le conteneur maritime standardisé. Le même caisson en acier s'empile à l'identique sur un porte-conteneurs, un wagon de train ou une remorque de camion sans ouvrir ni réarranger la marchandise.",
    "coreProblemItSolves_fr": "Les bugs du type 'ça marche sur ma machine' surviennent lorsque l'équipe utilise des versions divergentes de bases de données ou subit des conflits de ports. Docker offre un environnement identique à tous.",
    "securityAndPerfRules_fr": [
      "Toujours restreindre l'écoute des ports locaux à 127.0.0.1 pour empêcher toute exposition réseau non sollicitée.",
      "Ne jamais inscrire de mots de passe de production dans docker-compose.yml ; passer par des variables d'environnement.",
      "Utiliser obligatoirement des volumes persistants pour préserver les jeux d'essai du catalogue."
    ]
  },
  {
    "slug": "pnpm-monorepo",
    "number": "13",
    "title": "pnpm Workspaces & Monorepo Topology",
    "title_ar": "مساحات عمل pnpm وهندسة المستودع الموحد (Monorepo)",
    "category": "Data & Infrastructure",
    "category_ar": "البيانات والبنية التحتية",
    "badge": "Monorepo Architecture",
    "badge_ar": "إدارة المستودع الموحد",
    "summary": "pnpm workspaces orchestrate our full-stack codebase across apps/storefront, apps/backend, and packages/types. Leveraging content-addressable storage, symlinked node_modules, and strict boundary isolation, it saves 80% disk space and prohibits phantom dependencies.",
    "summary_ar": "تدير مساحات عمل pnpm الكود البرمجي للمشروع عبر واجهة المتجر apps/storefront، والخلفية apps/backend، والحزم المشتركة packages/types. وبفضل التخزين الموحد والعزل الصارم، توفر 80% من مساحة القرص وتمنع الاعتماديات الخفية تماماً.",
    "officialDocsUrl": "https://pnpm.io/",
    "officialDocsLabel": "Official pnpm Documentation",
    "officialDocsLabel_ar": "التوثيق الرسمي لـ pnpm",
    "analogy": "A university master reference library. Instead of 1,000 students purchasing and storing 50 identical heavy encyclopedias in their dorm rooms, the university library stores one central pristine copy, and students hold lightweight catalog cards linking directly to it.",
    "analogy_ar": "مكتبة الجامعة المركزية: بدلاً من قيام ألف طالب بشراء وتخزين 50 مجلداً ضخماً متطابقاً في غرفهم، تحتفظ المكتبة بنسخة مركزية واحدة، ويحمل الطلاب بطاقات فهرسة ذكية ترشدهم مباشرة إليها.",
    "coreProblemItSolves": "npm and yarn duplicate hundreds of megabytes of identical dependencies and suffer from 'phantom dependencies' (allowing code to import packages never declared in package.json). pnpm enforces strict symlink isolation and lightning-fast installations.",
    "coreProblemItSolves_ar": "تقوم مدراء الحزم الكلاسيكية بتكرار مئات الميجابايتات من الحزم وتسمح بما يسمى 'الاعتماديات الخفية' (استدعاء مكتبات غير مصرح بها في package.json). تفرض pnpm عزلاً دقيقاً وتثبيتاً فائق السرعة عبر الروابط الرمزية الصارمة.",
    "ecomHooksAndApis": [
      {
        "name": "'@ecom/types': 'workspace:*'",
        "role": "Zero-Publish Internal Package Linking",
        "role_ar": "الربط المحلي للحزم المشتركة دون نشر خارجي",
        "whyInEcom": "Shares core domain interfaces (MoneyDTO, ProductDTO, Result monad) directly between the Next.js storefront and Medusa backend without publishing to npm.",
        "whyInEcom_ar": "تشارك نماذج البيانات الأساسية (MoneyDTO و ProductDTO ونمط Result) مباشرة بين واجهة Next.js وخلفية Medusa محلياً دون الحاجة لنشرها على npm.",
        "signatureOrUsage": "\"dependencies\": { \"@ecom/types\": \"workspace:*\" }",
        "role_fr": "Liaison Locale Immédiate sans Publication",
        "whyInEcom_fr": "Partage les DTOs et monades Result entre storefront et backend directement sans devoir publier sur npm."
      },
      {
        "name": "pnpm --recursive run typecheck",
        "role": "Full-Stack Cross-Package Static Analysis",
        "role_ar": "الفحص النمطي المتزامن لكافة حزم المشروع في ثوانٍ",
        "whyInEcom": "Validates TypeScript across all apps and packages in parallel. If a backend developer changes a Cart property in @ecom/types, the CI pipeline instantly detects every affected frontend component.",
        "whyInEcom_ar": "يفحص صحة أنواع TypeScript في الواجهة والخلفية والحزم بالتوازي؛ فإذا عدل مطور الخلفية حقلاً في السلة، يكتشف الفحص فوراً المكونات المتأثرة في الواجهة.",
        "signatureOrUsage": "pnpm --recursive run typecheck",
        "role_fr": "Analyse Statique Parallèle Multi-Projets",
        "whyInEcom_fr": "Si le backend change la définition du panier dans @ecom/types, le CI détecte instantanément l'impact dans le storefront."
      },
      {
        "name": "pnpm approve-builds",
        "role": "Supply-Chain Build Script Security Gate",
        "role_ar": "بوابة أمان سلاسل الإمداد للبرمجيات والمكتبات",
        "whyInEcom": "Blocks malicious npm packages from executing unvetted preinstall/postinstall lifecycle scripts on developers' machines without explicit approval.",
        "whyInEcom_ar": "تمنع الحزم الخبيثة من تشغيل برمجيات تلقائية مشبوهة على أجهزة المطورين دون موافقة صريحة منهم.",
        "signatureOrUsage": "pnpm approve-builds --all",
        "role_fr": "Contrôle de Sécurité de la Chaîne d'Approvisionnement",
        "whyInEcom_fr": "Interdit l'exécution de scripts de build post-installation non vérifiés sur les machines des développeurs."
      }
    ],
    "practicalEcomScenarios": [
      {
        "title": "Instant Compile-Time Catching of API Contract Breaking Changes",
        "title_ar": "اكتشاف التغييرات الجذرية في عقود البيانات وقت الترجمة",
        "challenge": "The backend team changes cart.total to cart.subtotal. In a split-repo setup, the storefront team only discovers this runtime bug when customers cannot checkout in production.",
        "challenge_ar": "قام فريق الخلفية بتعديل اسم حقل cart.total إلى cart.subtotal. في المشاريع المنفصلة، لا تكتشف الواجهة ذلك إلا بانهيار صفحة الدفع أمام الزبائن في الإنتاج.",
        "solution": "In our pnpm workspace, updating @ecom/types triggers an immediate compile error in @ecom/storefront during pnpm typecheck, blocking broken builds before deployment.",
        "solution_ar": "في مساحة عمل pnpm الموحدة، يؤدي تعديل الحزمة المشتركة إلى ظهور خطأ فوري في الواجهة أثناء pnpm typecheck، مما يمنع نشر أي كود معطوب نهائياً.",
        "title_fr": "Détection Immédiate à la Compilation des Ruptures de Contrat d'API",
        "challenge_fr": "Le backend modifie le nom d'un champ du panier. Dans des dépôts séparés, l'erreur n'éclate qu'en production.",
        "solution_fr": "Dans notre monorepo, la mise à jour de @ecom/types provoque une erreur immédiate lors de pnpm typecheck."
      },
      {
        "title": "Saving 80% Disk Space on Team Laptops",
        "title_ar": "توفير 80% من مساحة القرص الصلب لأجهزة المطورين",
        "challenge": "Both the Next.js storefront and Medusa backend depend on React, TypeScript, and Zod. Traditional npm installs two full copies, wasting gigabytes of disk space.",
        "challenge_ar": "تعتمد كل من واجهة Next.js وخلفية Medusa على TypeScript و Zod. يقوم npm بتنزيل نسختين كاملتين مهدراً جيجابايتات من مساحة الجهاز.",
        "solution": "pnpm stores packages once in a global content-addressable store and symlinks them into both packages, cutting node_modules disk usage by over 80%.",
        "solution_ar": "تخزن pnpm الحزم مرة واحدة في مستودع مركزي موحد وتربطها بروابط رمزية، مما يخفض استهلاك مساحة القرص بأكثر من 80%.",
        "title_fr": "Économie de 80% d'Espace Disque sur les PC de l'Équipe",
        "challenge_fr": "Next.js et Medusa utilisent tous deux React, TypeScript et Zod, occupant des gigaoctets avec npm.",
        "solution_fr": "Le magasin centralisé de pnpm stocke chaque fichier une fois et crée des hardlinks, réduisant l'empreinte de 80%."
      }
    ],
    "keyMechanics": [
      {
        "name": "Content-Addressable Storage",
        "name_ar": "التخزين الموجه بالمحتوى",
        "explanation": "Identical files across dependencies are stored once on disk, drastically reducing node_modules disk consumption by up to 80%.",
        "explanation_ar": "تخزين الملفات المتطابقة مرة واحدة على القرص، مما يوفر حتى 80% من مساحة مجلد node_modules.",
        "name_fr": "Stockage Adressable par Contenu",
        "explanation_fr": "Fichiers identiques stockés une seule fois sur le disque dur pour économiser jusqu'à 80% d'espace."
      },
      {
        "name": "Strict Symlink Isolation",
        "name_ar": "العزل الصارم بالروابط الرمزية",
        "explanation": "Packages can only access dependencies explicitly declared in their own package.json, completely preventing phantom dependency bugs.",
        "explanation_ar": "لا يمكن لأي حزمة استدعاء مكتبات غير مصرح بها في package.json الخاص بها، مما يقضي على مشاكل الاعتماديات الخفية.",
        "name_fr": "Isolation Stricte par Liens Symboliques",
        "explanation_fr": "Un paquet ne peut accéder qu'aux dépendances explicitement déclarées dans son propre package.json."
      },
      {
        "name": "Workspace Protocol Linking",
        "name_ar": "بروتوكول ربط مساحات العمل المشتركة",
        "explanation": "Links internal packages via workspace:* protocol, enabling seamless cross-package imports without publishing to public or private npm registries.",
        "explanation_ar": "ربط الحزم الداخلية ببروتوكول workspace:* مما يتيح استيراد النماذج المشتركة محلياً دون الحاجة لنشرها.",
        "name_fr": "Protocole workspace:*",
        "explanation_fr": "Lie les bibliothèques internes instantanément sans publication externe."
      }
    ],
    "codeSnippet": "# pnpm-workspace.yaml\npackages:\n  - \"apps/*\"      # apps/storefront, apps/backend\n  - \"packages/*\"  # packages/types\n\n# apps/storefront/package.json\n{\n  \"name\": \"@ecom/storefront\",\n  \"dependencies\": {\n    \"@ecom/types\": \"workspace:*\"\n  }\n}",
    "antiPattern": {
      "bad": "Importing a library without declaring it in package.json (relying on accidental hoisting from another package).",
      "good": "Always declare every imported package in the local package.json or link internal packages with 'workspace:*'.",
      "reason": "Phantom dependencies break unexpectedly in CI/CD environments and Docker builds where dependency hoisting trees differ.",
      "reason_ar": "الاعتماديات الخفية تسبب أخطاء غير متوقعة في بيئات البناء المستمر وحاويات Docker لاختلاف شجرة الحزم.",
      "reason_fr": "Les dépendances fantômes provoquent des pannes sournoises en CI/CD où la disposition des paquets diffère."
    },
    "securityAndPerfRules": [
      "Never import undeclared packages; pnpm strict symlinking will fail the build.",
      "Run pnpm typecheck across the entire workspace before merging any pull request.",
      "Audit third-party dependencies using pnpm audit and approve-builds before deployment."
    ],
    "securityAndPerfRules_ar": [
      "حظر استدعاء حزم غير معلنة في package.json لمنع أخطاء العزل الصارم.",
      "تشغيل pnpm typecheck على كافة مساحات العمل قبل دمج أي كود في الفرع الرئيسي.",
      "فحص أمان الحزم عبر pnpm audit ومراجعة نصوص البناء التلقائية قبل النشر."
    ],
    "title_fr": "Espaces de Travail pnpm & Topologie Monorepo Stricte",
    "category_fr": "Données & Infrastructure",
    "badge_fr": "Architecture Monorepo",
    "summary_fr": "Les espaces de travail pnpm orchestrent notre codebase entre apps/storefront, apps/backend et packages/types. Grâce au stockage adressable par contenu et aux liens symboliques stricts, il économise 80% d'espace disque et bannit les dépendances fantômes.",
    "officialDocsLabel_fr": "Documentation Officielle pnpm",
    "analogy_fr": "La bibliothèque de recherche centrale d'une grande université. Plutôt que de faire acheter et stocker 50 dictionnaires identiques à chaque étudiant dans sa chambre, la bibliothèque en garde une copie unique et distribue des fiches de consultation légères.",
    "coreProblemItSolves_fr": "npm et yarn dupliquent inutilement des centaines de mégaoctets et souffrent de dépendances fantômes (importer un paquet non déclaré). pnpm isole strictement les dépendances avec des liens symboliques robustes.",
    "securityAndPerfRules_fr": [
      "Ne jamais importer de bibliothèque non déclarée dans le package.json local.",
      "Exécuter pnpm typecheck sur l'ensemble du monorepo avant toute fusion de pull request.",
      "Auditer régulièrement les paquets tiers avec pnpm audit et approve-builds avant tout déploiement."
    ]
  }
];
