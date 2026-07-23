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
