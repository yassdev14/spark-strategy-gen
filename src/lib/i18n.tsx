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

  // Shared CTA
  "cta.eyebrow": "Prêt quand vous l'êtes",
  "cta.title": "Demandez un devis ou planifiez une consultation.",
  "cta.body": "Nos partners interviennent directement auprès des fondateurs, comités exécutifs et institutions publiques sur des mandats de stratégie et d'investissement transfrontaliers.",
  "cta.primary": "Démarrer une conversation",
  "cta.secondary": "Écrire à la direction",

  // About page
  "aboutPage.eyebrow": "À propos",
  "aboutPage.titleA": "Un cabinet de conseil pensé pour la",
  "aboutPage.titleB": "prochaine décennie",
  "aboutPage.titleC": "de croissance.",
  "aboutPage.subtitle":
    "MultiVision Strategies — un cabinet basé à Casablanca, Riyad et Paris, spécialisé dans l'accompagnement d'entreprises de secteurs variés en conseil stratégique et opérationnel.",
  "aboutPage.values.mission.title": "Mission",
  "aboutPage.values.mission.body":
    "Permettre aux institutions et entreprises d'atteindre une croissance durable, en combinant expertise pointue et exécution rigoureuse.",
  "aboutPage.values.vision.title": "Vision",
  "aboutPage.values.vision.body":
    "Être le partenaire stratégique de référence pour les organisations construisant des ponts entre la région MENA et l'Europe.",
  "aboutPage.values.values.title": "Valeurs",
  "aboutPage.values.values.body":
    "Intégrité, discrétion et partenariat long terme. Nous nous mesurons aux résultats que nous aidons nos clients à obtenir.",
  "aboutPage.values.philosophy.title": "Philosophie",
  "aboutPage.values.philosophy.body":
    "Impliquer des partners senior sur chaque mandat. Rester engagés jusqu'à l'exécution. Laisser le client plus fort qu'à notre arrivée.",
  "aboutPage.timeline.eyebrow": "Notre histoire",
  "aboutPage.timeline.title": "Une brève chronologie.",
  "aboutPage.timeline.2019.title": "Rencontre des associés fondateurs",
  "aboutPage.timeline.2019.body":
    "Un groupe de consultants Tier-1 fait germer l'idée d'un cabinet reliant MENA et Europe.",
  "aboutPage.timeline.2021.title": "Bureau de Casablanca",
  "aboutPage.timeline.2021.body":
    "Premiers mandats livrés pour des clients publics et industriels en Afrique du Nord.",
  "aboutPage.timeline.2023.title": "Ouverture du hub de Riyad",
  "aboutPage.timeline.2023.body":
    "Expansion dans le Golfe pour accompagner les programmes d'investissement souverains et les PMI régionales.",
  "aboutPage.timeline.2024.title": "Bureau de Paris",
  "aboutPage.timeline.2024.body":
    "Le hub parisien ancre la couverture européenne — marchés de capitaux, chaînes industrielles, énergie.",
  "aboutPage.leadership.eyebrow": "Leadership",
  "aboutPage.leadership.title": "Des partners senior dans chaque salle.",
  "aboutPage.leadership.description":
    "Les biographies des partners seront publiées prochainement. En attendant, notre direction est joignable directement pour toute conversation de cadrage.",
  "aboutPage.leadership.cta": "Rencontrer l'équipe",

  // Services page
  "servicesPage.eyebrow": "Nos services",
  "servicesPage.titleA": "Trois pratiques.",
  "servicesPage.titleB": "Une équipe responsable.",
  "servicesPage.subtitle":
    "Du comité exécutif aux opérations quotidiennes, nous impliquons des partners senior sur chaque mandat et restons engagés jusqu'à l'exécution.",
  "servicesPage.whatClients": "Ce que reçoivent nos clients",
  "servicesPage.s1.description":
    "Diagnostics approfondis, feuilles de route de transformation et optimisation opérationnelle pour les entreprises qui préparent leur prochain chapitre.",
  "servicesPage.s1.o1": "Stratégie de croissance et d'entrée sur le marché",
  "servicesPage.s1.o2": "Refonte organisationnelle et du modèle opérationnel",
  "servicesPage.s1.o3": "Intégration post-fusion et direction PMO",
  "servicesPage.s1.o4": "Aide à la décision au niveau conseil et direction",
  "servicesPage.s2.description":
    "Nous déployons, personnalisons et affinons des solutions d'investissement alignées avec les impératifs stratégiques et la croissance.",
  "servicesPage.s2.o1": "Programmes d'investissement souverains et régionaux",
  "servicesPage.s2.o2": "Sourcing d'opérations et due diligence",
  "servicesPage.s2.o3": "Relations investisseurs et support aux levées de fonds",
  "servicesPage.s2.o4": "Planification de création de valeur en portefeuille",
  "servicesPage.s3.description":
    "Assistance technique et fonctionnelle, suivi proactif de la performance et optimisation continue des solutions.",
  "servicesPage.s3.o1": "Cadres de performance et systèmes de KPI",
  "servicesPage.s3.o2": "Réingénierie des processus et optimisation des coûts",
  "servicesPage.s3.o3": "Livraison de transformation digitale",
  "servicesPage.s3.o4": "Support géré pendant les phases de montée en charge",
  "servicesPage.outcomes.eyebrow": "Résultats attendus",
  "servicesPage.outcomes.title": "De la valeur mesurable sur chaque mandat.",
  "servicesPage.outcomes.description":
    "Chaque mission est cadrée autour d'un petit ensemble de résultats — chiffre d'affaires, coûts, capital ou délai — sur lesquels nous nous engageons dès le départ.",

  // Industries page
  "industriesPage.eyebrow": "Secteurs",
  "industriesPage.titleA": "Une expertise sectorielle,",
  "industriesPage.titleB": "délivrée à l'échelle mondiale.",
  "industriesPage.subtitle":
    "Nous n'acceptons de missions que dans les secteurs où nos partners disposent d'une expérience opérationnelle et de conseil de première main.",
  "industriesPage.public.title": "Secteur public",
  "industriesPage.public.body":
    "Ministères, véhicules d'investissement souverains et autorités régionales de développement au MENA.",
  "industriesPage.finance.title": "Services financiers",
  "industriesPage.finance.body":
    "Banques, assureurs et gestionnaires d'actifs engagés dans des transformations digitales, réglementaires ou M&A.",
  "industriesPage.energy.title": "Énergie & utilities",
  "industriesPage.energy.body":
    "Programmes d'énergie, de renouvelables et de transition énergétique auprès d'acteurs publics et privés.",
  "industriesPage.industry.title": "Industrie & manufacturing",
  "industriesPage.industry.body":
    "Opérateurs industriels optimisant chaînes d'approvisionnement, capacités et coût de service à grande échelle.",
  "industriesPage.health.title": "Santé & sciences du vivant",
  "industriesPage.health.body":
    "Systèmes de santé publics et privés modernisant la prestation, les achats et le digital.",
  "industriesPage.tech.title": "Technologie",
  "industriesPage.tech.body":
    "Sociétés tech en forte croissance naviguant leur entrée sur le marché, leur scale-up et leur stratégie de capital.",
  "industriesPage.transport.title": "Transport & logistique",
  "industriesPage.transport.body":
    "Ports, mobilité et logistique optimisant leur débit et la productivité de leurs actifs.",
  "industriesPage.real.title": "Immobilier & infrastructure",
  "industriesPage.real.body":
    "Portefeuilles d'infrastructure et immobilier long cycle avec un prisme de création de valeur.",

  // FAQ page
  "faqPage.eyebrow": "FAQ",
  "faqPage.titleA": "Questions",
  "faqPage.titleB": "fréquentes.",
  "faqPage.subtitle":
    "Tout ce que les clients veulent généralement savoir avant de démarrer une mission.",
  "faqPage.g1.title": "Engager le cabinet",
  "faqPage.g1.q1": "Avec quels types de clients travaille MultiVision Strategies ?",
  "faqPage.g1.a1":
    "Nous travaillons avec des ministères, entités souveraines, family offices, sociétés en portefeuille de private equity et grands groupes multinationaux au MENA et en Europe.",
  "faqPage.g1.q2": "Comment débutent typiquement les missions ?",
  "faqPage.g1.a2":
    "La plupart des missions commencent par un échange de cadrage avec l'un de nos partners. Nous rédigeons ensuite une proposition sur mesure sous 5 jours ouvrés.",
  "faqPage.g1.q3": "Travaillez-vous sous NDA ?",
  "faqPage.g1.a3":
    "Oui — chaque conversation est confidentielle par défaut, et un NDA est signé avant tout travail de diagnostic approfondi.",
  "faqPage.g2.title": "Pratique & méthode",
  "faqPage.g2.q1": "Quelles régions couvrez-vous ?",
  "faqPage.g2.a1":
    "Nos hubs à Casablanca, Riyad et Paris nous permettent de mener des missions en Afrique du Nord, dans le Golfe et en Europe occidentale avec une seule équipe responsable.",
  "faqPage.g2.q2": "Quelle est la séniorité de l'équipe de livraison ?",
  "faqPage.g2.a2":
    "Des partners et senior managers interviennent sur chaque mandat dès le premier jour et restent engagés jusqu'à l'exécution.",
  "faqPage.g2.q3": "Comment tarifez-vous les missions ?",
  "faqPage.g2.a3":
    "Forfait, retainer ou jalons — selon le mandat. Nous sommes transparents sur le périmètre, le coût et les résultats attendus dès le départ.",
  "faqPage.g3.title": "Après la mission",
  "faqPage.g3.q1": "Accompagnez-vous l'exécution après la définition de la stratégie ?",
  "faqPage.g3.a1":
    "Oui. Notre pratique Excellence Opérationnelle & Support est dédiée à cela — nous aidons les clients à implémenter, suivre et affiner.",
  "faqPage.g3.q2": "Comment mesurez-vous le succès ?",
  "faqPage.g3.a2":
    "Chaque mission est cadrée autour d'un petit ensemble de résultats — chiffre d'affaires, coûts, capital ou délai — sur lesquels nous nous engageons dès le départ.",

  // Contact page
  "contactPage.eyebrow": "Contact",
  "contactPage.titleA": "Demandez un devis ou planifiez une",
  "contactPage.titleB": "consultation.",
  "contactPage.subtitle":
    "Parlez-nous brièvement de votre entreprise et de vos objectifs. Un partner vous répondra personnellement sous deux jours ouvrés.",
  "contactPage.phone": "Téléphone",
  "contactPage.email": "Email",
  "contactPage.linkedin": "LinkedIn",
  "contactPage.offices": "Bureaux",
  "contactPage.office1": "Casablanca, Maroc",
  "contactPage.office2": "Riyad, Arabie Saoudite",
  "contactPage.office3": "Paris, France",
  "contactPage.mapNote": "Carte disponible sur demande",
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
  "services.s1.desc":
    "Assessments, transformation roadmaps, and executive decision support to align operations with long-term strategy.",
  "services.s2.title": "Investment Attraction & Advisory",
  "services.s2.desc":
    "Deploy, customise, and fine-tune investment solutions that align with strategic imperatives and drive growth.",
  "services.s3.title": "Operational Excellence & Support",
  "services.s3.desc":
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
  "faq.description":
    "The most common questions from clients evaluating an engagement.",
  "faq.cta": "See all questions",
  "faq.q1": "What kinds of clients does MultiVision Strategies work with?",
  "faq.a1":
    "We work with ministries, sovereign entities, family offices, private-equity portfolio companies, and multinational corporates across MENA and Europe.",
  "faq.q2": "Which regions do you cover?",
  "faq.a2":
    "Our hubs in Casablanca, Riyadh and Paris let us run mandates across North Africa, the Gulf, and Western Europe with a single accountable team.",
  "faq.q3": "How do engagements typically start?",
  "faq.a3":
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

  // Shared CTA
  "cta.eyebrow": "Ready when you are",
  "cta.title": "Get a quote or set up a consultation.",
  "cta.body":
    "Our partners engage directly with founders, boards and public institutions on cross-border strategy and investment mandates.",
  "cta.primary": "Start a conversation",
  "cta.secondary": "Email management",

  // About page
  "aboutPage.eyebrow": "About us",
  "aboutPage.titleA": "A consulting firm built for the",
  "aboutPage.titleB": "next decade",
  "aboutPage.titleC": "of growth.",
  "aboutPage.subtitle":
    "MultiVision Strategies — a consulting firm based in Casablanca, Riyadh and Paris, specialising in supporting companies across diverse industries with strategic advisory and business consulting services.",
  "aboutPage.values.mission.title": "Mission",
  "aboutPage.values.mission.body":
    "Enable institutions and companies to achieve sustainable growth by pairing deep expertise with rigorous, hands-on execution.",
  "aboutPage.values.vision.title": "Vision",
  "aboutPage.values.vision.body":
    "Be the strategic partner of reference for organisations building bridges between the MENA region and Europe.",
  "aboutPage.values.values.title": "Values",
  "aboutPage.values.values.body":
    "Integrity, discretion, and long-term partnership. We are measured by the outcomes we help our clients realise.",
  "aboutPage.values.philosophy.title": "Philosophy",
  "aboutPage.values.philosophy.body":
    "Bring senior partners into every mandate. Stay accountable through execution. Leave the client stronger than we found them.",
  "aboutPage.timeline.eyebrow": "Our story",
  "aboutPage.timeline.title": "A short timeline.",
  "aboutPage.timeline.2019.title": "Founding partners meet",
  "aboutPage.timeline.2019.body":
    "A group of Tier-1 consultants incubates the idea of a firm bridging MENA and Europe.",
  "aboutPage.timeline.2021.title": "Casablanca office",
  "aboutPage.timeline.2021.body":
    "First mandates delivered for public-sector and industrial clients across North Africa.",
  "aboutPage.timeline.2023.title": "Riyadh hub opens",
  "aboutPage.timeline.2023.body":
    "Expanding into the Gulf to accompany sovereign investment programmes and regional PMIs.",
  "aboutPage.timeline.2024.title": "Paris office",
  "aboutPage.timeline.2024.body":
    "Paris hub anchors European coverage — capital markets, industrial supply chains, energy.",
  "aboutPage.leadership.eyebrow": "Leadership",
  "aboutPage.leadership.title": "Senior partners in every room.",
  "aboutPage.leadership.description":
    "Partner biographies will be published shortly. In the meantime, our management team is reachable directly for scoping conversations.",
  "aboutPage.leadership.cta": "Meet the team",

  // Services page
  "servicesPage.eyebrow": "Our services",
  "servicesPage.titleA": "Three practices.",
  "servicesPage.titleB": "One accountable team.",
  "servicesPage.subtitle":
    "From the boardroom to day-to-day operations, we bring senior partners into every mandate and stay accountable through execution.",
  "servicesPage.whatClients": "What clients get",
  "servicesPage.s1.description":
    "In-depth assessments, transformation roadmaps and operational optimisation for companies preparing their next chapter.",
  "servicesPage.s1.o1": "Growth and market-entry strategy",
  "servicesPage.s1.o2": "Organisational and operating-model redesign",
  "servicesPage.s1.o3": "Post-merger integration and PMO leadership",
  "servicesPage.s1.o4": "Board and executive decision support",
  "servicesPage.s2.description":
    "We deploy, customise and fine-tune investment solutions that align with strategic imperatives and drive growth for institutions and companies.",
  "servicesPage.s2.o1": "Sovereign and regional investment programmes",
  "servicesPage.s2.o2": "Deal origination and due diligence",
  "servicesPage.s2.o3": "Investor relations and capital-raise support",
  "servicesPage.s2.o4": "Portfolio value-creation planning",
  "servicesPage.s3.description":
    "Technical and functional assistance, proactive performance monitoring, and continuous solution optimisation.",
  "servicesPage.s3.o1": "Performance frameworks and KPI systems",
  "servicesPage.s3.o2": "Process re-engineering and cost optimisation",
  "servicesPage.s3.o3": "Digital transformation delivery",
  "servicesPage.s3.o4": "Managed support during ramp-up phases",
  "servicesPage.outcomes.eyebrow": "Expected outcomes",
  "servicesPage.outcomes.title": "Measurable value on every mandate.",
  "servicesPage.outcomes.description":
    "Every engagement is scoped around a small set of business outcomes we agree upfront — revenue, cost, capital, or time-to-value — and we hold ourselves to them.",

  // Industries page
  "industriesPage.eyebrow": "Industries",
  "industriesPage.titleA": "Sector-specific depth,",
  "industriesPage.titleB": "delivered globally.",
  "industriesPage.subtitle":
    "We take on engagements only in sectors where our partners have first-hand operating and advisory experience.",
  "industriesPage.public.title": "Public sector",
  "industriesPage.public.body":
    "Ministries, sovereign investment vehicles, and regional development authorities across MENA.",
  "industriesPage.finance.title": "Financial services",
  "industriesPage.finance.body":
    "Banks, insurers and asset managers pursuing digital, regulatory or M&A transformation.",
  "industriesPage.energy.title": "Energy & utilities",
  "industriesPage.energy.body":
    "Power, renewables and energy-transition programmes across public and private stakeholders.",
  "industriesPage.industry.title": "Industry & manufacturing",
  "industriesPage.industry.body":
    "Industrial operators optimising supply chains, capacity, and cost-to-serve at scale.",
  "industriesPage.health.title": "Health & life sciences",
  "industriesPage.health.body":
    "Public and private health systems modernising delivery, procurement and digital care.",
  "industriesPage.tech.title": "Technology",
  "industriesPage.tech.body":
    "Growth-stage tech companies navigating market entry, scale-up and capital strategy.",
  "industriesPage.transport.title": "Transport & logistics",
  "industriesPage.transport.body":
    "Ports, mobility and logistics operators optimising throughput and asset productivity.",
  "industriesPage.real.title": "Real estate & infrastructure",
  "industriesPage.real.body":
    "Long-cycle infrastructure and real-estate portfolios with a value-creation lens.",

  // FAQ page
  "faqPage.eyebrow": "FAQ",
  "faqPage.titleA": "Frequently asked",
  "faqPage.titleB": "questions.",
  "faqPage.subtitle":
    "Everything clients typically want to know before starting an engagement.",
  "faqPage.g1.title": "Engaging the firm",
  "faqPage.g1.q1": "What kinds of clients does MultiVision Strategies work with?",
  "faqPage.g1.a1":
    "We work with ministries, sovereign entities, family offices, private-equity portfolio companies, and multinational corporates across MENA and Europe.",
  "faqPage.g1.q2": "How do engagements typically start?",
  "faqPage.g1.a2":
    "Most engagements start with a short scoping conversation with one of our partners. From there, we draft a tailored proposal within 5 business days.",
  "faqPage.g1.q3": "Do you work under NDA?",
  "faqPage.g1.a3":
    "Yes — every conversation is confidential by default, and NDAs are signed prior to detailed diagnostic work whenever needed.",
  "faqPage.g2.title": "Practice & method",
  "faqPage.g2.q1": "Which regions do you cover?",
  "faqPage.g2.a1":
    "Our hubs in Casablanca, Riyadh and Paris let us run mandates across North Africa, the Gulf, and Western Europe with a single accountable team.",
  "faqPage.g2.q2": "How senior is the delivery team?",
  "faqPage.g2.a2":
    "Partners and senior managers are on every mandate from day one and stay accountable through execution.",
  "faqPage.g2.q3": "How do you price engagements?",
  "faqPage.g2.a3":
    "We use fixed fee, retainer, or milestone-based pricing depending on the mandate. We are transparent about scope, cost and expected outcomes upfront.",
  "faqPage.g3.title": "After the engagement",
  "faqPage.g3.q1": "Do you support execution after the strategy is defined?",
  "faqPage.g3.a1":
    "Yes. Operational Excellence & Support is a dedicated practice for exactly that — we help clients implement, monitor, and refine.",
  "faqPage.g3.q2": "How do you measure success?",
  "faqPage.g3.a2":
    "Every engagement is scoped around a small set of business outcomes we agree upfront — revenue, cost, capital, or time-to-value — and we hold ourselves to them.",

  // Contact page
  "contactPage.eyebrow": "Contact",
  "contactPage.titleA": "Get a quote or set up a",
  "contactPage.titleB": "consultation.",
  "contactPage.subtitle":
    "Tell us a little about your business and what you're trying to accomplish. A partner will reply personally within two business days.",
  "contactPage.phone": "Phone",
  "contactPage.email": "Email",
  "contactPage.linkedin": "LinkedIn",
  "contactPage.offices": "Offices",
  "contactPage.office1": "Casablanca, Morocco",
  "contactPage.office2": "Riyadh, Saudi Arabia",
  "contactPage.office3": "Paris, France",
  "contactPage.mapNote": "Map available on request",
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
