/* =========================================================
   MAXENCE DESBOIS — Site logic v3
   ========================================================= */

(() => {
  'use strict';

  /* ---------------- THEME ---------------- */
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('md-theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }

  themeBtn?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('md-theme', next);
  });

  /* ---------------- LANGUAGE ---------------- */
  const langBtn = document.getElementById('lang-toggle');
  const cvBtn = document.getElementById('cv-download');

  const I18N = {
    en: {
      'nav.name': 'Maxence Desbois',
      'nav.work': 'Work',
      'nav.build': 'Build',
      'nav.beyond': 'Beyond',
      'nav.contact': 'Contact',
      'nav.cv': 'Resume',

      'hero.based': 'Based in',
      'hero.status': 'Status',
      'hero.statusValue': 'Open to opportunities',
      'hero.greeting': "Hi, I'm",
      'hero.lede': "Nice to meet you. I'm a full-cycle B2B Account Executive selling CRM & marketing solutions at La Poste Group — and shipping my own micro-SaaS for sales teams on the side.",
      'hero.ctaPrimary': 'Get in touch',
      'hero.ctaSecondary': 'See the work ↓',

      'manifesto.label': 'Manifesto',
      'manifesto.p1': "I sell B2B for a living, and I build on the side.",
      'manifesto.p2': "Four years of freelance digital marketing, full sales cycles closed at La Poste Group, and a habit of building small tools for the problems I run into every day on the phone.",
      'manifesto.p3': "I'm still learning a lot — about SaaS, product, and the craft of a great sales motion. What I bring is a mix of curiosity, ownership, and the kind of energy that ships things.",
      'manifesto.sign': '— MD, Paris',

      'track.label': 'Track Record',
      'track.now': 'Now',
      'track.laposte.role': 'Account Executive — CRM & Marketing Solutions',
      'track.laposte.p1': 'Full-cycle ownership: outbound, discovery, demo, negotiation, close.',
      'track.laposte.p2': 'Closed-won strategic accounts: Marché International de Rungis, Conseil Départemental 91, Cirque Pinder.',
      'track.laposte.p3': 'Cross-functional work with product & marketing to align positioning with field reality.',
      'track.swatch.role': 'Sales Associate',
      'track.swatch.p1': 'Top 2 seller in France over the period.',
      'track.swatch.p2': 'Sales index of 1.69 — strong conversion and upselling.',
      'track.freelance.company': 'Freelance',
      'track.freelance.role': 'Digital Marketing Consultant',
      'track.freelance.p1': 'Full ownership of strategy, execution and performance for 20+ clients.',
      'track.freelance.p2': '+15–20% retention uplift through targeted multi-channel campaigns.',
      'track.freelance.p3': 'Grew a newsletter from 0 to 1,500+ subscribers in 3 months.',
      'track.total.role': 'Prospective & Communication Project Manager (work-study)',
      'track.total.p1': 'Launched a LinkedIn page that hit 50,000+ followers in 8 months.',
      'track.total.p2': 'Delivered data-driven strategic recommendations to executive leadership (CDMS).',
      'track.total.p3': 'SME on emerging mobility ecosystems at a global scale.',
      'track.cartier.role': 'Sales Assistant — Summer',
      'track.cartier.p1': 'Proactive account management and premium luxury service aligned with high-end merchandising standards.',

      'build.label': 'Build',
      'build.intro': "Two products I ship on the side. One is a paid micro-SaaS, the other is open source. Both solve problems I hit every day on the phone.",
      'build.weclosed.tagline': 'The cold call tracker that converts.',
      'build.weclosed.desc': 'Real-time call tracking, CRM data quality scoring and dopamine-driven gamification — built for SDRs and AEs who want to actually progress, session after session.',
      'build.weclosed.cta': 'Visit weclosed.app',
      'build.seqmail.tagline': 'Smart email sequences, sent from your own inbox.',
      'build.seqmail.desc': 'A lightweight tool to send personalized cold outreach sequences directly from your professional mailbox — no third-party sender, no deliverability tax.',
      'build.seqmail.cta': 'View the project',

      'beyond.label': 'Beyond the CV',
      'beyond.asia.kicker': '8 months · 6 countries',
      'beyond.asia.title': 'A long road through Southeast Asia',
      'beyond.asia.desc': 'Thailand, Cambodia, Indonesia, Korea, Japan, Singapore. A long-format trip taken on purpose — to look at the world from somewhere else and come back with sharper instincts.',
      'beyond.languages.kicker': '3 languages',
      'beyond.languages.title': 'FR · EN · 中文',
      'beyond.languages.desc': "Native French, fluent English, currently learning Mandarin. Three exchanges abroad during my Master's: Dublin, Montréal, Shanghai.",
      'beyond.tutoring.kicker': 'Volunteer · Zup de Co',
      'beyond.tutoring.title': 'Tutoring middle schoolers',
      'beyond.tutoring.desc': 'A full school year mentoring 8 students twice a week at Collège Françoise Seligmann. The first thing that taught me how to translate complex things into clear ones.',
      'beyond.interests.kicker': 'Off-hours',
      'beyond.interests.title': 'Photography, sport, side projects',
      'beyond.interests.desc': 'I spend my off-hours building small things, training, and pointing a camera at people and places. The same loop, in three different forms.',

      'stack.label': 'Stack',
      'stack.sales': 'Sales',
      'stack.sales.outbound': 'Outbound & cold calling',
      'stack.sales.discovery': 'Discovery & negotiation',
      'stack.marketing': 'Marketing',
      'stack.marketing.content': 'Content & copywriting',
      'stack.tools': 'Tools',
      'stack.languages': 'Languages',
      'stack.lang.fr': 'French — Native',
      'stack.lang.en': 'English — Fluent',
      'stack.lang.zh': 'Mandarin — Learning',

      'contact.label': 'Contact',
      'contact.headline': 'Get in touch.',
      'contact.lede': "Building something in B2B SaaS that needs a full-cycle AE who can sell, write and ship? Send a short note. I read everything.",

      'footer.designed': 'Designed & coded with intent',
    },
    fr: {
      'nav.name': 'Maxence Desbois',
      'nav.work': 'Parcours',
      'nav.build': 'Projets',
      'nav.beyond': 'Hors-CV',
      'nav.contact': 'Contact',
      'nav.cv': 'CV',

      'hero.based': 'Basé à',
      'hero.status': 'Statut',
      'hero.statusValue': 'Ouvert aux opportunités',
      'hero.greeting': 'Salut, moi c’est',
      'hero.lede': "Ravi de vous rencontrer. Je suis Account Executive B2B full-cycle, je vends des solutions CRM & marketing au sein du groupe La Poste — et je shippe mon propre micro-SaaS pour les équipes commerciales à côté.",
      'hero.ctaPrimary': 'Me contacter',
      'hero.ctaSecondary': 'Voir le parcours ↓',

      'manifesto.label': 'Manifeste',
      'manifesto.p1': "Je vends en B2B le jour, et je construis à côté.",
      'manifesto.p2': "Quatre ans de freelance en marketing digital, des cycles de vente complets closés au sein du groupe La Poste, et l'habitude de construire de petits outils pour les problèmes que je rencontre tous les jours au téléphone.",
      'manifesto.p3': "J'ai encore beaucoup à apprendre — sur le SaaS, le produit, et l'art d'un beau cycle de vente. Ce que j'apporte, c'est un mélange de curiosité, d'ownership, et de l'énergie qu'il faut pour shipper.",
      'manifesto.sign': '— MD, Paris',

      'track.label': 'Parcours',
      'track.now': "Aujourd'hui",
      'track.laposte.role': 'Account Executive — Solutions CRM & Marketing',
      'track.laposte.p1': 'Pilotage du cycle de vente B2B de bout en bout : outbound, discovery, démo, négociation, closing.',
      'track.laposte.p2': "Comptes stratégiques fermés : Marché International de Rungis, Conseil Départemental 91, Cirque Pinder.",
      'track.laposte.p3': "Collaboration cross-fonctionnelle avec les équipes produit et marketing pour aligner positionnement et terrain.",
      'track.swatch.role': 'Sales Associate',
      'track.swatch.p1': 'Top 2 vendeur en France sur la période.',
      'track.swatch.p2': "Index de vente moyen de 1,69 — performance solide en conversion et upselling.",
      'track.freelance.company': 'Freelance',
      'track.freelance.role': 'Consultant Marketing Digital',
      'track.freelance.p1': "Full ownership de la stratégie, l'exécution et la performance pour 20+ clients.",
      'track.freelance.p2': '+15 à 20 % de rétention via des campagnes multi-canales ciblées.',
      'track.freelance.p3': 'Newsletter passée de 0 à 1 500+ abonnés en 3 mois.',
      'track.total.role': 'Chef de Projet Prospective & Communication (alternance)',
      'track.total.p1': "Lancement d'une page LinkedIn ayant atteint 50 000+ abonnés en 8 mois.",
      'track.total.p2': 'Recommandations stratégiques data-driven au comité exécutif (CDMS).',
      'track.total.p3': "Subject Matter Expert sur les écosystèmes de mobilité émergente à l'échelle mondiale.",
      'track.cartier.role': 'Assistant de Vente — Été',
      'track.cartier.p1': "Gestion proactive des comptes et délivrance d'un service premium aligné sur les codes du merchandising luxe.",

      'build.label': 'Projets',
      'build.intro': "Deux produits que je shippe à côté. L'un est un micro-SaaS payant, l'autre est open source. Les deux résolvent des problèmes que je rencontre tous les jours au téléphone.",
      'build.weclosed.tagline': 'Le tracker de cold call qui convertit.',
      'build.weclosed.desc': "Tracking d'appels en temps réel, score de qualité CRM et gamification dopaminergique — pensé pour les SDRs et AEs qui veulent réellement progresser, session après session.",
      'build.weclosed.cta': 'Visiter weclosed.app',
      'build.seqmail.tagline': 'Des séquences email intelligentes, depuis votre propre boîte.',
      'build.seqmail.desc': "Un outil léger pour envoyer des séquences cold outreach personnalisées depuis votre boîte mail pro — sans expéditeur tiers, sans taxe de délivrabilité.",
      'build.seqmail.cta': 'Voir le projet',

      'beyond.label': 'Hors-CV',
      'beyond.asia.kicker': '8 mois · 6 pays',
      'beyond.asia.title': "Un long voyage en Asie du Sud-Est",
      'beyond.asia.desc': "Thaïlande, Cambodge, Indonésie, Corée, Japon, Singapour. Un voyage long-format pris exprès — pour regarder le monde depuis ailleurs et revenir avec des instincts plus affûtés.",
      'beyond.languages.kicker': '3 langues',
      'beyond.languages.title': 'FR · EN · 中文',
      'beyond.languages.desc': "Français natif, anglais courant, mandarin en cours. Trois échanges académiques pendant mon Master : Dublin, Montréal, Shanghai.",
      'beyond.tutoring.kicker': 'Bénévolat · Zup de Co',
      'beyond.tutoring.title': 'Tutorat de collégiens',
      'beyond.tutoring.desc': "Une année scolaire complète à accompagner 8 élèves deux fois par semaine au Collège Françoise Seligmann. Le premier truc qui m'a appris à rendre simple ce qui est compliqué.",
      'beyond.interests.kicker': 'Hors-bureau',
      'beyond.interests.title': 'Photographie, sport, side projects',
      'beyond.interests.desc': "Mon temps libre, c'est trois choses : construire des petits trucs, m'entraîner, et pointer un appareil photo sur des gens et des lieux. La même boucle, sous trois formes.",

      'stack.label': 'Stack',
      'stack.sales': 'Sales',
      'stack.sales.outbound': 'Outbound & cold calling',
      'stack.sales.discovery': 'Discovery & négociation',
      'stack.marketing': 'Marketing',
      'stack.marketing.content': 'Content & copywriting',
      'stack.tools': 'Outils',
      'stack.languages': 'Langues',
      'stack.lang.fr': 'Français — Natif',
      'stack.lang.en': 'Anglais — Courant',
      'stack.lang.zh': 'Mandarin — En cours',

      'contact.label': 'Contact',
      'contact.headline': 'Contactez-moi.',
      'contact.lede': "Vous construisez un produit B2B SaaS qui a besoin d'un AE full-cycle capable de vendre, écrire et shipper ? Écrivez-moi un mot court. Je lis tout.",

      'footer.designed': 'Conçu & codé avec intention',
    }
  };

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('data-lang', lang);

    // Translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = I18N[lang]?.[key];
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    // CV link points to the right PDF
    if (cvBtn) {
      const href = cvBtn.getAttribute(`data-cv-${lang}`);
      if (href) cvBtn.setAttribute('href', href);
    }

    localStorage.setItem('md-lang', lang);
  }

  const savedLang = localStorage.getItem('md-lang');
  let initialLang = 'en';
  if (savedLang === 'en' || savedLang === 'fr') {
    initialLang = savedLang;
  } else if (navigator.language && navigator.language.toLowerCase().startsWith('fr')) {
    initialLang = 'fr';
  }
  applyLang(initialLang);

  langBtn?.addEventListener('click', () => {
    const current = document.body.getAttribute('data-lang') === 'en' ? 'fr' : 'en';
    applyLang(current);
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  const revealEls = document.querySelectorAll('.section, .track__item, .build__card, .beyond__item');
  revealEls.forEach(el => el.classList.add('reveal-up'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------------- SMOOTH ANCHOR OFFSET ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const t = document.querySelector(id);
        if (t) {
          e.preventDefault();
          const top = t.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

})();
