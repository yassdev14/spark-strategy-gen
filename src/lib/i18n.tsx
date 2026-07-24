import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

const STORAGE_KEY = "mvs.lang";

type Dict = Record<string, string>;

const FR: Dict = {
  // Nav
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.services": "Services",
  "nav.industries": "Secteurs",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.contactCta": "Nous contacter",
  "nav.skipToContent": "Aller au contenu",
  "nav.openMenu": "Ouvrir le menu",
  "nav.closeMenu": "Fermer le menu",
  "nav.langSwitch": "Changer de langue",

  // Hero
  "hero.badge": "Casablanca · Riyad · Paris",
  "hero.titleA": "Créer de la valeur.",
  "hero.titleB": "Conduire le changement.",
  "hero.subtitle":
    "Cabinet de conseil en stratégie, investissement et excellence opérationnelle accompagnant les institutions et les entreprises dans leur croissance durable et leurs projets de transformation.",
  "hero.ctaPrimary": "Contacter le cabinet",
  "hero.ctaSecondary": "Explorer nos expertises",

  // About
  "about.eyebrow": "À propos du cabinet",
  "about.title": "Perspective globale, précision locale.",
  "about.description":
    "MultiVision Strategies est un cabinet de conseil basé à Casablanca, Riyad et Paris, spécialisé dans l'accompagnement d'entreprises de secteurs variés. Nous fournissons des services de conseil stratégique et opérationnel, en nous appuyant sur une expertise approfondie pour aider les institutions et les entreprises à atteindre une croissance durable et à réussir leurs projets de transformation.",
  "about.item1": "Backgrounds tier-1 — anciens de BCG, KPMG, PwC",
  "about.item2": "Mandats secteur public et multinationales",
  "about.item3": "Des équipes engagées jusqu'à l'exécution",
  "about.cta": "Découvrir notre histoire",

  // Services
  "services.eyebrow": "Nos services",
  "services.title": "Trois pratiques, une équipe responsable.",
  "services.description":
    "Des décisions à fort enjeu à l'exécution quotidienne — nous accompagnons les institutions et les entreprises de bout en bout.",
  "services.learnMore": "En savoir plus",
  "services.s1.title": "Conseil stratégique",
  "services.s1.description":
    "Diagnostics, feuilles de route de transformation et aide à la décision pour aligner les opérations sur la stratégie de long terme.",
  "services.s2.title": "Attraction & conseil en investissement",
  "services.s2.description":
    "Déployer, personnaliser et affiner des solutions d'investissement alignées avec les impératifs stratégiques et la croissance.",
  "services.s3.title": "Excellence opérationnelle",
  "services.s3.description":
    "Assistance technique et fonctionnelle, suivi proactif de la performance et optimisation continue des solutions.",

  // Why
  "why.eyebrow": "Pourquoi nous choisir",
  "why.title": "Pourquoi les grandes institutions choisissent MultiVision.",
  "why.p1.title": "Expertise sectorielle éprouvée",
  "why.p1.body":
    "Nos associés ont dirigé des mandats sur les marchés mondiaux, auprès de multinationales publiques et privées.",
  "why.p2.title": "Approche agile et centrée client",
  "why.p2.body":
    "Des missions sur mesure, alignées avec les besoins de chaque client et la dynamique de son marché.",
  "why.p3.title": "Engagement d'excellence",
  "why.p3.body":
    "Un état d'esprit orienté résultats, focalisé sur la création de valeur durable et d'avantage compétitif.",

  // Stats
  "stats.eyebrow": "En chiffres",
  "stats.title": "Un bilan bâti sur la livraison.",
  "stats.s1": "Hubs continentaux",
  "stats.s2": "Entités nationales conseillées",
  "stats.s3": "Rétention client",
  "stats.s4": "Années de pratique cumulée",

  // Testimonial
  "testimonial.quote":
    "MultiVision a apporté de la clarté à une transformation complexe et livré des résultats mesurables. Leur équipe senior est restée impliquée du mandat à l'exécution.",
  "testimonial.author": "Directeur de programme · Mission secteur public",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "Les réponses avant vos questions.",
  "faq.description": "Les questions les plus fréquentes des clients qui évaluent une mission.",
  "faq.cta": "Voir toutes les questions",
  "faq.q1.q": "Quels types de clients accompagne MultiVision Strategies ?",
  "faq.q1.a":
    "Nous travaillons avec des ministères, entités souveraines, family offices, participations de private equity et grandes multinationales au MENA et en Europe.",
  "faq.q2.q": "Quelles régions couvrez-vous ?",
  "faq.q2.a":
    "Nos hubs de Casablanca, Riyad et Paris nous permettent de mener des missions en Afrique du Nord, dans le Golfe et en Europe occidentale avec une seule équipe responsable.",
  "faq.q3.q": "Comment démarre généralement une mission ?",
  "faq.q3.a":
    "La plupart des missions débutent par un échange de cadrage avec l'un de nos associés. Nous rédigeons ensuite une proposition sur mesure sous 5 jours ouvrés.",

  // Footer
  "footer.tagline":
    "Stratégie, conseil en investissement et excellence opérationnelle pour les institutions et entreprises actives au MENA et en Europe.",
  "footer.company": "Cabinet",
  "footer.resources": "Ressources",
  "footer.offices": "Bureaux",
  "footer.privacy": "Confidentialité",
  "footer.terms": "Conditions",
  "footer.rights": "Tous droits réservés.",
};

const EN: Dict = {
  // Nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.industries": "Industries",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.contactCta": "Contact",
  "nav.skipToContent": "Skip to content",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "nav.langSwitch": "Switch language",

  // Hero
  "hero.badge": "Casablanca · Riyadh · Paris",
  "hero.titleA": "Delivering Value.",
  "hero.titleB": "Driving Change.",
  "hero.subtitle":
    "A strategy, investment advisory and business consulting firm helping institutions and companies achieve sustainable growth and succeed in their transformation projects.",
  "hero.ctaPrimary": "Engage the firm",
  "hero.ctaSecondary": "Explore capabilities",

  // About
  "about.eyebrow": "About the firm",
  "about.title": "Global perspective, local precision.",
  "about.description":
    "MultiVision Strategies is a consulting firm based in Casablanca, Riyadh and Paris, specialising in supporting companies across diverse industries. We provide strategic advisory and business consulting services, leveraging deep expertise to help institutions and companies achieve sustainable growth and succeed in their transformation projects.",
  "about.item1": "Tier-1 consulting backgrounds — BCG, KPMG, PwC alumni",
  "about.item2": "Public-sector and multinational corporate mandates",
  "about.item3": "Delivery teams that stay accountable through execution",
  "about.cta": "Read our story",

  // Services
  "services.eyebrow": "Our services",
  "services.title": "Three practices, one accountable team.",
  "services.description":
    "From high-stakes decisions to day-to-day execution — we support institutions and enterprises end-to-end.",
  "services.learnMore": "Learn more",
  "services.s1.title": "Strategic Business Advisory",
  "services.s1.description":
    "Assessments, transformation roadmaps, and executive decision support to align operations with long-term strategy.",
  "services.s2.title": "Investment Attraction & Advisory",
  "services.s2.description":
    "Deploy, customise, and fine-tune investment solutions that align with strategic imperatives and drive growth.",
  "services.s3.title": "Operational Excellence & Support",
  "services.s3.description":
    "Technical and functional assistance, proactive performance monitoring, and continuous solution optimisation.",

  // Why
  "why.eyebrow": "Why choose us",
  "why.title": "Why leading institutions choose MultiVision.",
  "why.p1.title": "Proven Industry Knowledge",
  "why.p1.body":
    "Our partners have led mandates across global markets with public and private multinational corporations.",
  "why.p2.title": "Agile, Client-Centric Approach",
  "why.p2.body":
    "Tailored engagements that align with each client's specific business needs and market dynamics.",
  "why.p3.title": "Commitment to Excellence",
  "why.p3.body":
    "A results-driven mindset focused on generating long-term value and durable competitive advantage.",

  // Stats
  "stats.eyebrow": "By the numbers",
  "stats.title": "A track record built on delivery.",
  "stats.s1": "Continental Hubs",
  "stats.s2": "National Entities Advised",
  "stats.s3": "Client Retention",
  "stats.s4": "Years of Combined Practice",

  // Testimonial
  "testimonial.quote":
    "MultiVision brought clarity to a complex transformation and delivered outcomes we can measure. Their senior team stayed hands-on from mandate to execution.",
  "testimonial.author": "Program Director · Public sector engagement",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "Answers before you ask.",
  "faq.description": "The most common questions from clients evaluating an engagement.",
  "faq.cta": "See all questions",
  "faq.q1.q": "What kinds of clients does MultiVision Strategies work with?",
  "faq.q1.a":
    "We work with ministries, sovereign entities, family offices, private-equity portfolio companies, and multinational corporates across MENA and Europe.",
  "faq.q2.q": "Which regions do you cover?",
  "faq.q2.a":
    "Our hubs in Casablanca, Riyadh and Paris let us run mandates across North Africa, the Gulf, and Western Europe with a single accountable team.",
  "faq.q3.q": "How do engagements typically start?",
  "faq.q3.a":
    "Most engagements start with a short scoping conversation with one of our partners. From there, we draft a tailored proposal within 5 business days.",

  // Footer
  "footer.tagline":
    "Strategy, investment advisory, and operational excellence for institutions and enterprises building across MENA and Europe.",
  "footer.company": "Company",
  "footer.resources": "Resources",
  "footer.offices": "Offices",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "footer.rights": "All rights reserved.",
};

const DICTS: Record<Lang, Dict> = { fr: FR, en: EN };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof FR | string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Hydrate from localStorage after mount (SSR-safe)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "fr" || stored === "en") {
        setLangState(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key) => DICTS[lang][key as string] ?? DICTS.en[key as string] ?? String(key),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
