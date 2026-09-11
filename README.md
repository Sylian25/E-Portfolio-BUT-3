# 🗂️ Portfolio BUT3 GEA GEMA — Sylian AOUDIA

> Portfolio numérique de soutenance BUT3 — Data Analyst RH — 2023-2026  
> **Stack : HTML · CSS · JavaScript · Git · GitHub · Vercel**

---

## 🎯 Présentation du projet

Ce portfolio est un site web **conçu, développé et déployé entièrement par moi-même**, sans framework, dans le cadre de ma soutenance de Bachelor Universitaire de Technologie GEA, parcours GEMA.

Il présente mon parcours de Data Analyst RH : mes expériences professionnelles, mes cinq SAE, mes trois articles réflexifs sur les compétences ANALYSER / DÉCIDER / PILOTER, et mes preuves documentées.

🌐 **[→ Voir le portfolio en ligne](https://sylian-aoudia-eportfolio.vercel.app/#accueil/)**

---

## ⚙️ Architecture technique

Single Page Application (SPA) **vanilla** — zéro framework, zéro dépendance externe.

| Fonctionnalité | Implémentation |
|---|---|
| Navigation multi-pages | JavaScript pur — `history.pushState`, hash URLs |
| Refresh universel | `window.addEventListener('load')` + `popstate` |
| Traduction FR/EN | Dictionnaire de 500+ clés `data-tkey`, swap dynamique |
| Mode sombre/clair | CSS variables + `localStorage` |
| Carrousel SAE | JS natif, 3 slides, `data-slide` sur chaque carte |
| Animations scroll | `IntersectionObserver` — classe `.fi` / `.vis` |
| Menu mobile | Burger + panneau latéral, overlay cliquable |
| Curseur custom | Canvas JS, suivi smooth avec `requestAnimationFrame` |
| Formulaire contact | Formspree — aucun backend requis |

---

## 📄 Contenu du portfolio

### Pages principales

| Page | Contenu |
|---|---|
| Accueil | Hero animé, présentation profil, passions |
| Mon Parcours | Formation (Bac → BUT → Master MSI), carrousel 5 SAE |
| Mes Expériences | 4 stages/alternances + 3 jobs étudiants (accordéons) |
| Articles | Hub + Compétences BUT + 3 articles réflexifs |
| Annexes | 14 documents classés par catégorie, consultables en ligne |
| Contact | Formulaire Formspree + coordonnées directes |

### Cinq SAE détaillées

| SAE | Niveau | Compétences |
|---|---|---|
| BOOSTA'Carrière | BUT 2 | ENTREPRENDRE · ANALYSER · PILOTER |
| Solid'R — Épicerie solidaire | BUT 2 | ANALYSER · DÉCIDER · PILOTER |
| Maia Village — Déploiement ERP | BUT 3 | DÉCIDER · ANALYSER · PILOTER |
| E-réputation Clariane | BUT 3 | DÉVELOPPER · ANALYSER · PILOTER |
| Audit DIMM | BUT 3 | ANALYSER · PILOTER |

---

## 🚀 Déploiement

Le déploiement en production est continu via **Vercel** — chaque `git push` sur `main` déclenche un redéploiement automatique.

---

## 🛠️ Stack technique

| Outil | Usage |
|---|---|
| HTML5 | Structure sémantique, SPA mono-fichier |
| CSS3 | Design system complet (variables, animations, responsive) |
| JavaScript ES6+ | Navigation, traduction, carrousel, accordéons, curseur |
| Google Fonts | Space Grotesk + Inter |
| Formspree | Formulaire de contact sans backend |
| Git / GitHub | Versioning et hébergement du code |
| Vercel | Déploiement continu |

---

## 👤 Auteur

**Sylian AOUDIA** — Data Analyst RH en alternance @ BNP Paribas IT Group  
Futur alternant @ PwC France · Admis Master MSI Big Data — Paris 1 Sorbonne

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/sylian-aoudia-867411298/)
[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=github)](https://github.com/Sylian25)
[![PSG Data Hub](https://img.shields.io/badge/PSG_Data_Hub-white?style=flat)](https://psg-data-hub.vercel.app/)

---

> *"Ce portfolio n'est pas une liste de compétences. C'est le récit d'un profil construit à l'intersection de la gestion des organisations et de la donnée."*
