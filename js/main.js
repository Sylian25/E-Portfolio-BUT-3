// ============================================
// TOGGLE DARK / LIGHT MODE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Au chargement, on vérifie si l'utilisateur avait déjà choisi un thème
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  themeToggle.textContent = '☾';
}

// Au clic sur le bouton, on bascule entre dark et light
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    themeToggle.textContent = '☾';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '☀';
    localStorage.setItem('theme', 'dark');
  }
});


// ============================================
// TOGGLE FRANÇAIS / ANGLAIS
// ============================================

const langToggle = document.getElementById('langToggle');
let currentLang = 'fr';

// Tous les textes du site dans les deux langues
const translations = {
  fr: {
    heroTag: 'Data Analyst · Gestion · RH',
    heroSub: 'BUT GEA GEMA · IUT Paris Rives de Seine · Alternance BNP Paribas IT Group',
    heroIntro: 'Profil hybride gestion–data. Je transforme les données brutes en outils de décision au service des organisations.',
    heroCta1: 'Voir mes projets',
    heroCta2: 'Télécharger mon CV',
    sectionLabel: 'Projets phares',
    card1Title: 'ReCode · BNP Paribas',
    card1Desc: 'Analyse démographique et compétences de 3 000 développeurs mondiaux face à l\'IA. Pipeline Alteryx → Tableau, 230 000 lignes, RGPD.',
    card2Title: 'KPI Formation · BNP Paribas',
    card2Desc: 'Tableaux de bord Power BI conçus en autodidacte. Gain de productivité de 30 % sur le pilotage du reporting RH.',
    card3Title: 'Solid\'R · Épicerie solidaire',
    card3Desc: 'Étude de faisabilité : enquête 427 étudiants, benchmarking ANDES & Banque Alimentaire, modélisation de scénarios.',
    welcomeText: 'Bienvenue sur mon portfolio. Vous y trouverez mon parcours, mes projets et les compétences que j\'ai développées depuis trois ans à l\'intersection de la gestion et de la data.',
    navFormation: 'Formation',
    navExperiences: 'Expériences',
    navCompetences: 'Compétences',
    navTraces: 'Traces & Preuves',
  },
  en: {
    heroTag: 'Data Analyst · Management · HR',
    heroSub: 'Bachelor in Business Administration · IUT Paris Rives de Seine · Apprentice at BNP Paribas IT Group',
    heroIntro: 'Hybrid management–data profile. I turn raw data into decision-making tools for organizations.',
    heroCta1: 'View my projects',
    heroCta2: 'Download my CV',
    sectionLabel: 'Key projects',
    card1Title: 'ReCode · BNP Paribas',
    card1Desc: 'Demographic and skills analysis of 3,000 global developers facing AI. Alteryx → Tableau pipeline, 230,000 rows, GDPR.',
    card2Title: 'Training KPIs · BNP Paribas',
    card2Desc: 'Self-taught Power BI dashboards. 30% productivity gain on HR reporting management.',
    card3Title: 'Solid\'R · Student food bank',
    card3Desc: 'Feasibility study: survey of 427 students, benchmarking, scenario modelling.',
    welcomeText: 'Welcome to my portfolio. Here you will find my background, projects and the skills I have developed over three years at the intersection of management and data.',
    navFormation: 'Education',
    navExperiences: 'Experience',
    navCompetences: 'Skills',
    navTraces: 'Evidence',
  }
};

// Fonction qui met à jour tous les textes de la page
function applyTranslation(lang) {
  const t = translations[lang];

  document.querySelector('.hero-tag').textContent = t.heroTag;
  document.querySelector('.hero-sub').textContent = t.heroSub;
  document.querySelector('.hero-intro').textContent = t.heroIntro;
  document.querySelectorAll('.hero-cta a')[0].textContent = t.heroCta1;
  document.querySelectorAll('.hero-cta a')[1].textContent = t.heroCta2;
  document.querySelector('.section-label').textContent = t.sectionLabel;
  document.querySelectorAll('.card-title')[0].textContent = t.card1Title;
  document.querySelectorAll('.card-desc')[0].textContent = t.card1Desc;
  document.querySelectorAll('.card-title')[1].textContent = t.card2Title;
  document.querySelectorAll('.card-desc')[1].textContent = t.card2Desc;
  document.querySelectorAll('.card-title')[2].textContent = t.card3Title;
  document.querySelectorAll('.card-desc')[2].textContent = t.card3Desc;
  document.querySelector('.welcome-text').textContent = t.welcomeText;

  // Mise à jour des liens de navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks[1].textContent = t.navFormation;
  navLinks[2].textContent = t.navExperiences;
  navLinks[3].textContent = t.navCompetences;
  navLinks[4].textContent = t.navTraces;
}

// Au clic sur le bouton langue
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  langToggle.textContent = currentLang === 'fr' ? 'EN' : 'FR';
  applyTranslation(currentLang);
});


// ============================================
// EFFET TYPEWRITER sur le nom
// ============================================

const typewriterEl = document.getElementById('typewriter');
const word = 'Aoudia';
let i = 0;

function type() {
  if (i < word.length) {
    typewriterEl.textContent += word[i];
    i++;
    setTimeout(type, 120);
  }
}

// On démarre l'effet après un petit délai
setTimeout(type, 600);