## 1. Rollback du carrousel des partenaires

Pas de code pour ça — utilise le bouton **Voir l'historique** ci-dessus et sélectionne la version d'avant la refonte du carrousel (celle avec l'affichage simple des logos). Cela évite de créer une nouvelle couche de modifications par-dessus.

## 2. Remplacement du logo (favicon + navbar)

**En attente :** upload du fichier logo (PNG ou SVG, idéalement avec fond transparent).

Une fois le fichier reçu, voici ce que je ferai :

### Favicon
- Copier le logo dans `public/favicon.png` (ou `.svg`).
- Supprimer l'ancien `public/favicon.ico`.
- Mettre à jour la balise `<link rel="icon">` dans `src/routes/__root.tsx` pour pointer vers le nouveau fichier.

### Logo navbar
- Uploader le logo via `lovable-assets` pour un rendu CDN optimisé → `src/assets/brand/logo.png.asset.json`.
- Réécrire `src/components/brand/logo.tsx` pour afficher **uniquement l'image du logo** (sans l'orbe gradient ni le texte "MultiVision Strategies"), avec :
  - Hauteur adaptée à la navbar (~28-32px), largeur auto pour préserver le ratio.
  - `alt="MultiVision Strategies"` pour l'accessibilité.
  - Chargement `eager` (au-dessus de la ligne de flottaison).
- La navbar (`src/components/layout/site-header.tsx`) et le footer utilisent déjà `<Logo />`, aucun autre changement nécessaire.

### Vérification
- Build pour s'assurer que rien ne casse.
- Vérifier visuellement le rendu du logo dans la navbar (desktop + mobile) et l'icône dans l'onglet du navigateur.

---

**Prochaine étape :** envoie-moi le fichier du logo et je passe en mode build pour appliquer les changements.