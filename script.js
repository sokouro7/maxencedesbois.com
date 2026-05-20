/* =========================================================
   MAXENCE DESBOIS — Site logic v6
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
      // NAV
      'nav.name': 'Maxence Desbois',
      'nav.about': 'About',
      'nav.career': 'Career',
      'nav.build': 'Build',
      'nav.beyond': 'Beyond',
      'nav.contact': 'Contact',
      'nav.cv': 'Resume',

      // HERO
      'hero.based': 'Based in',
      'hero.status': 'Status',
      'hero.statusValue': 'Open to opportunities',
      'hero.greeting': "Hi, I'm",
      'hero.lede': "Nice to meet you. I'm a full-cycle B2B Account Executive selling CRM & marketing solutions at La Poste Group — and shipping my own micro-SaaS for sales teams on the side.",
      'hero.ctaPrimary': 'Get in touch',
      'hero.ctaSecondary': 'See the work ↓',

      // 01 ABOUT
      'about.label': 'About',
      'about.p1': "Four years between digital marketing and complex B2B sales. At La Poste Group, I learned to run full sales cycles, read business stakes fast, and earn trust over time.",
      'about.p2': "What I love is the mix of strategy, psychology and execution — finding the angle, then making things move.",
      'about.p3': "Today, I'm drawn to SaaS and product-driven environments, alongside ambitious teams.",

      // 02 COUNTER
      'counter.label': 'Live Counter',
      'counter.kicker': 'Generated this year, in real time',
      'counter.sub': "Based on last year's closed revenue at La Poste Group. The counter never stops — same way the work doesn't.",

      // 02 CAREER
      'career.label': 'Career',
      'career.now': 'Now',
      'career.laposte.start': 'Mar 2025',
      'career.laposte.role': 'Account Executive — CRM & Marketing Solutions',
      'career.laposte.p1': 'Full-cycle ownership: outbound, discovery, demo, negotiation, close.',
      'career.laposte.p2': 'Closed-won strategic accounts: Marché International de Rungis, Conseil Départemental 91, Cirque Pinder.',
      'career.laposte.p3': 'Cross-functional work with product & marketing to align positioning with field reality.',
      'career.swatch.start': 'Nov 2024',
      'career.swatch.end': 'Feb 2025',
      'career.swatch.role': 'Sales Associate',
      'career.swatch.p1': 'Top 2 seller in France over the period.',
      'career.swatch.p2': 'Sales index of 1.69 — strong conversion and upselling.',
      'career.freelance.start': 'Mar 2021',
      'career.freelance.end': 'Sep 2024',
      'career.freelance.company': 'Freelance',
      'career.freelance.role': 'Digital Marketing Consultant',
      'career.freelance.p1': 'Full ownership of strategy, execution and performance for 20+ clients.',
      'career.freelance.p2': '+15–20% retention uplift through targeted multi-channel campaigns.',
      'career.freelance.p3': 'Grew a newsletter from 0 to 1,500+ subscribers in 3 months.',
      'career.total.start': 'Oct 2019',
      'career.total.end': 'Sep 2021',
      'career.total.role': 'Prospective & Communication Project Manager (work-study)',
      'career.total.p1': 'Launched a LinkedIn page that hit 50,000+ followers in 8 months.',
      'career.total.p2': 'Delivered data-driven strategic recommendations to executive leadership (CDMS).',
      'career.total.p3': 'SME on emerging mobility ecosystems at a global scale.',
      'career.cartier.start': 'May 2018',
      'career.cartier.end': 'Aug 2018',
      'career.cartier.role': 'Sales Assistant — Summer',
      'career.cartier.p1': 'Proactive account management and premium luxury service aligned with high-end merchandising standards.',

      // 03 BUILD
      'build.label': 'Build',
      'build.intro': "Two products I ship on the side. One is a paid micro-SaaS, the other is open source. Both solve problems I hit every day on the phone.",
      'build.weclosed.status': '● Live · Paid SaaS',
      'build.weclosed.tagline': 'The cold call tracker that converts.',
      'build.weclosed.desc': 'Real-time call tracking, CRM data quality scoring and dopamine-driven gamification — built for SDRs and AEs who want to actually progress, session after session.',
      'build.weclosed.tag1': 'Micro-SaaS',
      'build.weclosed.tag2': 'Subscription',
      'build.weclosed.tag3': 'Sales enablement',
      'build.weclosed.cta': 'Visit weclosed.app',
      'build.seqmail.status': '● Open source',
      'build.seqmail.tagline': 'Smart email sequences, sent from your own inbox.',
      'build.seqmail.desc': 'A lightweight tool to send personalized cold outreach sequences directly from your professional mailbox — no third-party sender, no deliverability tax.',
      'build.seqmail.tag1': 'Open source',
      'build.seqmail.tag2': 'GitHub',
      'build.seqmail.tag3': 'Outbound',
      'build.seqmail.cta': 'View the project',

      // 04 BEYOND
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

      // 05 STACK
      'stack.label': 'Stack',
      'stack.sales.title': 'Sales',
      'stack.sales.l1': 'Full-cycle B2B',
      'stack.sales.l2': 'Outbound &amp; cold calling',
      'stack.sales.l3': 'Discovery &amp; negotiation',
      'stack.sales.l4': 'CRM &amp; pipeline ops',
      'stack.sales.l5': 'Stakeholder coordination',
      'stack.marketing.title': 'Marketing',
      'stack.marketing.l1': 'Acquisition &amp; retention',
      'stack.marketing.l2': 'CRM strategy',
      'stack.marketing.l3': 'Content &amp; copywriting',
      'stack.marketing.l4': 'Multi-channel campaigns',
      'stack.marketing.l5': 'Newsletter growth',
      'stack.tools.title': 'Tools',
      'stack.tools.canva': 'Canva (pro)',
      'stack.tools.ai': 'AI &amp; LLM workflows',
      'stack.languages.title': 'Languages',
      'stack.languages.fr': 'French — Native',
      'stack.languages.en': 'English — Fluent',
      'stack.languages.zh': 'Mandarin — Learning',

      // 06 CONTACT
      'contact.label': 'Contact',
      'contact.headline': 'Get in touch.',
      'contact.lede': "Hiring sales? Let's run the discovery call.",
    },

    fr: {
      // NAV
      'nav.name': 'Maxence Desbois',
      'nav.about': 'À propos',
      'nav.career': 'Parcours',
      'nav.build': 'Projets',
      'nav.beyond': 'Hors-CV',
      'nav.contact': 'Contact',
      'nav.cv': 'CV',

      // HERO
      'hero.based': 'Basé à',
      'hero.status': 'Statut',
      'hero.statusValue': 'Ouvert aux opportunités',
      'hero.greeting': 'Salut, moi c’est',
      'hero.lede': "Ravi de vous rencontrer. Je suis Account Executive B2B full-cycle, je vends des solutions CRM & marketing au sein du groupe La Poste — et je shippe mon propre micro-SaaS pour les équipes commerciales à côté.",
      'hero.ctaPrimary': 'Me contacter',
      'hero.ctaSecondary': 'Voir le parcours ↓',

      // 01 ABOUT
      'about.label': 'À propos',
      'about.p1': "Quatre ans entre marketing digital et vente B2B complexe. Au sein du groupe La Poste, j'ai appris à piloter des cycles de vente complets, lire les enjeux business vite, et construire la confiance dans la durée.",
      'about.p2': "Ce que j'aime, c'est le mélange de stratégie, de psychologie et d'exécution — trouver le bon angle, puis faire bouger les choses.",
      'about.p3': "Aujourd'hui, je m'intéresse aux environnements SaaS et product-driven, aux côtés d'équipes ambitieuses.",

      // 02 COUNTER
      'counter.label': 'Compteur en direct',
      'counter.kicker': 'Généré cette année, en temps réel',
      'counter.sub': "Calculé à partir du CA signé l'année dernière au sein du groupe La Poste. Le compteur ne s'arrête jamais — comme le travail.",

      // 02 CAREER
      'career.label': 'Parcours',
      'career.now': "Aujourd'hui",
      'career.laposte.start': 'Mars 2025',
      'career.laposte.role': 'Account Executive — Solutions CRM & Marketing',
      'career.laposte.p1': 'Pilotage du cycle de vente B2B de bout en bout : outbound, discovery, démo, négociation, closing.',
      'career.laposte.p2': "Comptes stratégiques fermés : Marché International de Rungis, Conseil Départemental 91, Cirque Pinder.",
      'career.laposte.p3': "Collaboration cross-fonctionnelle avec les équipes produit et marketing pour aligner positionnement et terrain.",
      'career.swatch.start': 'Nov 2024',
      'career.swatch.end': 'Fév 2025',
      'career.swatch.role': 'Sales Associate',
      'career.swatch.p1': 'Top 2 vendeur en France sur la période.',
      'career.swatch.p2': "Index de vente moyen de 1,69 — performance solide en conversion et upselling.",
      'career.freelance.start': 'Mars 2021',
      'career.freelance.end': 'Sept 2024',
      'career.freelance.company': 'Freelance',
      'career.freelance.role': 'Consultant Marketing Digital',
      'career.freelance.p1': "Full ownership de la stratégie, l'exécution et la performance pour 20+ clients.",
      'career.freelance.p2': '+15 à 20 % de rétention via des campagnes multi-canales ciblées.',
      'career.freelance.p3': 'Newsletter passée de 0 à 1 500+ abonnés en 3 mois.',
      'career.total.start': 'Oct 2019',
      'career.total.end': 'Sept 2021',
      'career.total.role': 'Chef de Projet Prospective & Communication (alternance)',
      'career.total.p1': "Lancement d'une page LinkedIn ayant atteint 50 000+ abonnés en 8 mois.",
      'career.total.p2': 'Recommandations stratégiques data-driven au comité exécutif (CDMS).',
      'career.total.p3': "Subject Matter Expert sur les écosystèmes de mobilité émergente à l'échelle mondiale.",
      'career.cartier.start': 'Mai 2018',
      'career.cartier.end': 'Août 2018',
      'career.cartier.role': 'Assistant de Vente — Été',
      'career.cartier.p1': "Gestion proactive des comptes et délivrance d'un service premium aligné sur les codes du merchandising luxe.",

      // 03 BUILD
      'build.label': 'Projets',
      'build.intro': "Deux produits que je shippe à côté. L'un est un micro-SaaS payant, l'autre est open source. Les deux résolvent des problèmes que je rencontre tous les jours au téléphone.",
      'build.weclosed.status': '● Live · SaaS payant',
      'build.weclosed.tagline': 'Le tracker de cold call qui convertit.',
      'build.weclosed.desc': "Tracking d'appels en temps réel, score de qualité CRM et gamification dopaminergique — pensé pour les SDRs et AEs qui veulent réellement progresser, session après session.",
      'build.weclosed.tag1': 'Micro-SaaS',
      'build.weclosed.tag2': 'Abonnement',
      'build.weclosed.tag3': 'Sales enablement',
      'build.weclosed.cta': 'Visiter weclosed.app',
      'build.seqmail.status': '● Open source',
      'build.seqmail.tagline': 'Des séquences email intelligentes, depuis votre propre boîte.',
      'build.seqmail.desc': "Un outil léger pour envoyer des séquences cold outreach personnalisées depuis votre boîte mail pro — sans expéditeur tiers, sans taxe de délivrabilité.",
      'build.seqmail.tag1': 'Open source',
      'build.seqmail.tag2': 'GitHub',
      'build.seqmail.tag3': 'Outbound',
      'build.seqmail.cta': 'Voir le projet',

      // 04 BEYOND
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

      // 05 STACK
      'stack.label': 'Stack',
      'stack.sales.title': 'Sales',
      'stack.sales.l1': 'Vente B2B full-cycle',
      'stack.sales.l2': 'Outbound &amp; cold calling',
      'stack.sales.l3': 'Discovery &amp; négociation',
      'stack.sales.l4': 'CRM &amp; pipeline ops',
      'stack.sales.l5': 'Coordination de parties prenantes',
      'stack.marketing.title': 'Marketing',
      'stack.marketing.l1': 'Acquisition &amp; rétention',
      'stack.marketing.l2': 'Stratégie CRM',
      'stack.marketing.l3': 'Content &amp; copywriting',
      'stack.marketing.l4': 'Campagnes multi-canales',
      'stack.marketing.l5': 'Croissance newsletter',
      'stack.tools.title': 'Outils',
      'stack.tools.canva': 'Canva (pro)',
      'stack.tools.ai': 'Workflows IA &amp; LLM',
      'stack.languages.title': 'Langues',
      'stack.languages.fr': 'Français — Natif',
      'stack.languages.en': 'Anglais — Courant',
      'stack.languages.zh': 'Mandarin — En cours',

      // 06 CONTACT
      'contact.label': 'Contact',
      'contact.headline': 'Contactez-moi.',
      'contact.lede': "Vous recrutez côté sales ? Passons à notre découverte.",
    }
  };

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = I18N[lang]?.[key];
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

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

  /* ---------------- LIVE COUNTER ---------------- */
  // Annual revenue baseline (last year's closed revenue at La Poste Group)
  const ANNUAL_REVENUE = 350000;

  // Number of seconds in a non-leap year
  const SECONDS_PER_YEAR = 365 * 24 * 60 * 60;

  // Revenue generated per second
  const PER_SECOND = ANNUAL_REVENUE / SECONDS_PER_YEAR;

  const counterEl = document.getElementById('counter-number');

  function getYearStart() {
    const now = new Date();
    return new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
  }

  function computeCurrentValue() {
    const now = new Date();
    const elapsedSeconds = (now - getYearStart()) / 1000;
    return elapsedSeconds * PER_SECOND;
  }

  function formatNumber(num) {
    // French formatting with non-breaking space as thousands separator
    return Math.floor(num).toLocaleString('fr-FR').replace(/,/g, ' ');
  }

  if (counterEl) {
    // Initial value
    counterEl.textContent = formatNumber(computeCurrentValue());

    // Update every ~150ms for a smooth ticking effect
    setInterval(() => {
      counterEl.textContent = formatNumber(computeCurrentValue());
    }, 150);
  }

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
