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
    "Des décisions stratégiques à l'exécution quotidienne — nous accompagnons institutions et entreprises de bout en bout.",
  "services.learnMore": "En savoir plus",
  "services.s1.title": "Conseil stratégique aux entreprises",
  "services.s1.desc":
    "Diagnostics, feuilles de route de transformation et aide à la décision pour aligner les opérations sur la stratégie long terme.",
  "services.s2.title": "Attraction & conseil en investissement",
  "services.s2.desc":
    "Déployer, personnaliser et affiner des solutions d'investissement alignées avec les impératifs stratégiques et la croissance.",
  "services.s3.title": "Excellence opérationnelle & support",
  "services.s3.desc":
    "Assistance technique et fonctionnelle, suivi proactif de la performance et optimisation continue des solutions.",

  // Why
  "why.eyebrow": "Pourquoi nous choisir",
  "why.title": "Pourquoi les institutions de premier plan choisissent MultiVision.",
  "why.p1.title": "Expertise sectorielle reconnue",
  "why.p1.body":
    "Nos partenaires ont piloté des missions sur les marchés mondiaux auprès de multinationales publiques et privées.",
  "why.p2.title": "Approche agile centrée client",
  "why.p2.body":
    "Des missions sur mesure alignées avec les besoins spécifiques de chaque client et les dynamiques du marché.",
  "why.p3.title": "Engagement d'excellence",
  "why.p3.body":
    "Un état d'esprit orienté résultats, focalisé sur la création de valeur durable et d'avantages compétitifs.",

  // Stats
  "stats.eyebrow": "En chiffres",
  "stats.title": "Un track record bâti sur la livraison.",
  "stats.s1": "Hubs continentaux",
  "stats.s2": "Entités nationales conseillées",
  "stats.s3": "Fidélisation client",
  "stats.s4": "Années de pratique cumulée",

  // Testimonial
  "testimonial.quote":
    "MultiVision a apporté de la clarté à une transformation complexe et livré des résultats mesurables. Leur équipe senior est restée engagée du mandat à l'exécution.",
  "testimonial.author": "Directeur de programme · Mission secteur public",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "Les réponses avant vos questions.",
  "faq.description":
    "Les questions les plus fréquentes des clients avant un engagement.",
  "faq.cta": "Voir toutes les questions",
  "faq.q1": "Avec quels types de clients travaille MultiVision Strategies ?",
  "faq.a1":
    "Nous travaillons avec des ministères, entités souveraines, family offices, sociétés en portefeuille de private equity et grands groupes multinationaux au MENA et en Europe.",
  "faq.q2": "Quelles régions couvrez-vous ?",
  "faq.a2":
    "Nos hubs à Casablanca, Riyad et Paris nous permettent de mener des missions en Afrique du Nord, dans le Golfe et en Europe occidentale avec une seule équipe responsable.",
  "faq.q3": "Comment débutent typiquement les missions ?",
  "faq.a3":
    "La plupart des missions commencent par un échange de cadrage avec l'un de nos partenaires. Nous rédigeons ensuite une proposition sur mesure sous 5 jours ouvrés.",

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
