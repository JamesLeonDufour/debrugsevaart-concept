/* Translations. Dutch text lives in index.html and is read from the page;
   only strings that are built in JavaScript need a Dutch entry here. */
(function () {
  'use strict';

  var dict = {
    nl: {
      'locale': 'nl-NL',
      'meta.title': 'Golfclub Oostburg · Domein De Brugse Vaart',
      'meta.description': '18 holes, par 73 aan de oevers van het oude Zwin in Oostburg. Greenfees, clubhuis met restaurant en terras, evenementen voor 25 tot 300 gasten.',
      'nav.close': 'Menu sluiten',
      'sc.front': 'Eerste negen',
      'sc.back': 'Tweede negen',
      'sc.summary': 'Totaal <b>{m} m</b> · par 73',
      'sc.rating': ' · CR 73,8 · slope 139',
      'sc.hcp': 'HCP',
      'wa.text': 'Hallo, ik wil graag een starttijd boeken.'
    },

    en: {
      'locale': 'en-GB',
      'meta.title': 'Golfclub Oostburg · Domein De Brugse Vaart · 18-hole golf near Bruges',
      'meta.description': '18 holes, par 73 on the banks of the old Zwin in Oostburg, near Bruges. Green fees, manor-style clubhouse with restaurant and terrace, events for 25 to 300 guests.',
      'nav.close': 'Close menu',
      'sc.front': 'Front nine',
      'sc.back': 'Back nine',
      'sc.summary': 'Total <b>{m} m</b> · par 73',
      'sc.rating': ' · CR 73.8 · slope 139',
      'sc.hcp': 'SI',
      'wa.text': 'Hello, I would like to book a tee time.',

      'skip': 'Skip to content',
      'nav.domain': 'The estate',
      'nav.course': 'The course',
      'nav.fees': 'Green fees',
      'nav.clubhouse': 'Clubhouse',
      'nav.events': 'Events',
      'nav.contact': 'Contact',
      'nav.menu': 'Open menu',
      'cta.book': 'Book a tee time',

      'hero.eyebrow': 'Golfclub Oostburg · Domein De Brugse Vaart',
      'hero.title': 'Golf on the banks of the old <em>Zwin</em>',
      'hero.lead': 'Recognised as one of the finest golf courses in the Benelux. Every day we welcome members and guests in a warm, family atmosphere.',
      'hero.cta1': 'Book a tee time',
      'hero.cta2': 'Discover the course',
      'stats.lengthNum': '7,002',
      'stats.length': 'metres, white tees',
      'stats.since': 'established',
      'stats.ratingNum': '4.4',
      'stats.rating': '233 Google reviews',

      'domain.eyebrow': 'The estate',
      'domain.title': 'So much more than golf',
      'domain.p1': 'Domein De Brugse Vaart lies on the banks of the old Zwin. It takes its name from the canal the city of Bruges dug here in the early 16th century, a last, desperate attempt to stop the Zwin from silting up.',
      'domain.p2': 'Since 1986 the estate has been home to an 18-hole course, with many additional water features along the banks of the Brugse Vaart. It promises a special atmosphere that goes far beyond golf: a stately clubhouse, a sunny terrace and a course that challenges you every time you play.',
      'tl.1.year': 'Early 16th century',
      'tl.1.text': 'Bruges digs the Brugse Vaart to hold back the silting of the Zwin.',
      'tl.2.text': 'The 18-hole course is laid out along the historic canal.',
      'tl.3.year': 'Today',
      'tl.3.text': 'One of the finest courses in the Benelux, where members and guests are welcome every day.',

      'course.eyebrow': 'The course',
      'course.title': 'A parkland course where water sets the tone',
      'course.lead': 'A flat, stylish parkland course full of contrasts, both technically and visually. Winding water hazards, island greens and immaculate fairways make every round a new challenge.',
      'course.f1': 'Water in play on many holes, including island greens',
      'course.f2': 'An unusual mix: five par 3s and six par 5s',
      'course.f3': 'A long par 73, up to 7,002 metres from the white tees',
      'course.f4': 'Course rating 73.8 · slope 139 (yellow tees)',
      'course.artTitle': 'Illustration of an island green surrounded by water',
      'course.artCaption': 'Island greens are one of the signatures of De Brugse Vaart.',
      'sc.title': 'Scorecard',
      'sc.choose': 'Choose your tee',
      'tee.white': 'White',
      'tee.yellow': 'Yellow',
      'tee.blue': 'Blue',
      'tee.red': 'Red',

      'fees.eyebrow': 'Green fees',
      'fees.title': 'Play De Brugse Vaart',
      'fees.lead': 'Visitors are very welcome. Book your tee time easily via WhatsApp or by phone.',
      'fees.weekday': 'Monday – Friday',
      'fees.weekend': 'Weekends &amp; public holidays',
      'fees.per': '18 holes',
      'fees.bookTitle': 'Book a tee time',
      'fees.bookText': 'Send us a WhatsApp message for bookings and quick questions.',
      'fees.call': 'Or call',
      'fees.reqTitle': 'Good to know',
      'fees.req1': 'Valid handicap certificate from your home club',
      'fees.req2': 'Maximum handicap 36',
      'fees.req3': 'Soft spikes required',
      'fees.note': 'Rates subject to change. Contact us for current prices, packages and memberships.',
      'fac.title': 'Facilities',
      'fac.range': 'Driving range',
      'fac.putting': 'Putting green',
      'fac.bunker': 'Practice bunker',
      'fac.shop': 'Pro shop',
      'fac.lessons': 'Golf lessons',
      'fac.buggy': 'Buggy hire',
      'fac.caddie': 'Caddie service',
      'fac.restaurant': 'Restaurant &amp; terrace',

      'club.eyebrow': 'The clubhouse',
      'club.title': 'With the grandeur of a country house',
      'club.p1': 'Behind the classical façade lies an interior full of character: Chesterfields by the open fire, warm light and antique furniture.',
      'club.p2': 'After your round, take a seat in our restaurant or enjoy a drink and a bite on the terrace. Guests praise our warm welcome time and again.',
      'club.l1': 'Restaurant',
      'club.l2': 'Sunny terrace',
      'club.l3': 'Lounge with open fire',
      'club.l4': 'Billiards room',
      'club.alt1': 'The lounge with Chesterfields and an open fireplace',
      'club.alt2': 'Leather wing chair by the window in the lounge',
      'club.alt3': 'Billiards room with snooker table',

      'events.eyebrow': 'Events',
      'events.title': 'Your occasion on the estate',
      'events.lead': 'From an intimate meeting to a grand wedding celebration, the estate offers a stylish setting, with in-house catering.',
      'events.cta': 'Request a proposal',
      'events.cap': 'guests',
      'events.a1': 'In-house catering',
      'events.a2': 'Free Wi-Fi',
      'events.a3': 'Free parking',
      'events.e1': 'Weddings',
      'events.e1t': 'A fairy-tale setting by the water, with a clubhouse that makes every photo more beautiful.',
      'events.e2': 'Meetings',
      'events.e2t': 'Meet in peace and quiet, away from the bustle, in green and inspiring surroundings.',
      'events.e3': 'Seminars',
      'events.e3t': 'Room for larger groups, which can be combined with a day of golf if you wish.',

      'reviews.eyebrow': 'What guests say',
      'reviews.title': 'A place that stays with you',
      'reviews.gNum': '4.4',
      'reviews.google': 'average rating from 233 reviews on Google',
      'reviews.fb': 'recommend us on Facebook (52 reviews)',
      'reviews.themes': 'What guests mention most',
      'reviews.t1': 'Superbly maintained course',
      'reviews.t2': 'Stylish clubhouse',
      'reviews.t3': 'Lovely terrace',
      'reviews.t4': 'Varied holes',
      'reviews.t5': 'Friendly welcome',
      'reviews.link': 'Read all reviews on Google',

      'contact.eyebrow': 'Contact &amp; location',
      'contact.title': 'See you soon on the Brugse Vaart',
      'contact.lead': 'In Zeeuws-Vlaanderen, right by the Belgian border: about 30 minutes from Bruges and close to Cadzand.',
      'contact.address': 'Address',
      'contact.wa': 'WhatsApp · bookings &amp; quick questions',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.follow': 'Follow us',
      'map.load': 'Load map',
      'map.note': 'Loading the map shares data with Google.',
      'map.route': 'Plan your route',

      'footer.country': 'The Netherlands',
      'footer.contact': 'Contact',
      'footer.explore': 'Explore',
      'footer.top': 'Back to top ↑',
      'fab': 'Book via WhatsApp',
      'lb.close': 'Close',
      'concept': 'Concept design by <a href="https://bareit.be" target="_blank" rel="noopener">bareit.be</a> · not the official website'
    },

    fr: {
      'locale': 'fr-BE',
      'meta.title': 'Golfclub Oostburg · Domein De Brugse Vaart · golf 18 trous près de Bruges',
      'meta.description': '18 trous, par 73 sur les rives de l’ancien Zwin à Oostburg, près de Bruges. Green fees, club-house avec restaurant et terrasse, événements de 25 à 300 invités.',
      'nav.close': 'Fermer le menu',
      'sc.front': 'Aller',
      'sc.back': 'Retour',
      'sc.summary': 'Total <b>{m} m</b> · par 73',
      'sc.rating': ' · CR 73,8 · slope 139',
      'sc.hcp': 'HCP',
      'wa.text': 'Bonjour, je souhaiterais réserver une heure de départ.',

      'skip': 'Aller au contenu',
      'nav.domain': 'Le domaine',
      'nav.course': 'Le parcours',
      'nav.fees': 'Green fees',
      'nav.clubhouse': 'Club-house',
      'nav.events': 'Événements',
      'nav.contact': 'Contact',
      'nav.menu': 'Ouvrir le menu',
      'cta.book': 'Réserver un départ',

      'hero.eyebrow': 'Golfclub Oostburg · Domein De Brugse Vaart',
      'hero.title': 'Le golf sur les rives de l’ancien <em>Zwin</em>',
      'hero.lead': 'Reconnu comme l’un des plus beaux parcours du Benelux. Chaque jour, nous accueillons membres et visiteurs dans une ambiance chaleureuse et familiale.',
      'hero.cta1': 'Réserver un départ',
      'hero.cta2': 'Découvrir le parcours',
      'stats.lengthNum': '7 002',
      'stats.length': 'mètres, départs blancs',
      'stats.since': 'création',
      'stats.ratingNum': '4,4',
      'stats.rating': '233 avis Google',

      'domain.eyebrow': 'Le domaine',
      'domain.title': 'Bien plus que du golf',
      'domain.p1': 'Le Domaine De Brugse Vaart s’étend sur les rives de l’ancien Zwin. Il doit son nom au canal que la ville de Bruges fit creuser ici au début du XVI<sup>e</sup> siècle, ultime tentative pour enrayer l’ensablement du Zwin.',
      'domain.p2': 'Depuis 1986, un parcours de 18 trous y serpente, agrémenté de nombreux plans d’eau le long de la Brugse Vaart. Le domaine garantit une atmosphère singulière qui va bien au-delà du golf : un club-house majestueux, une terrasse ensoleillée et un parcours qui vous met au défi à chaque partie.',
      'tl.1.year': 'Début du XVI<sup>e</sup> siècle',
      'tl.1.text': 'Bruges creuse la Brugse Vaart pour lutter contre l’ensablement du Zwin.',
      'tl.2.text': 'Création du parcours de 18 trous le long du canal historique.',
      'tl.3.year': 'Aujourd’hui',
      'tl.3.text': 'L’un des plus beaux parcours du Benelux, où membres et visiteurs sont les bienvenus chaque jour.',

      'course.eyebrow': 'Le parcours',
      'course.title': 'Un parcours parkland où l’eau donne le ton',
      'course.lead': 'Un parcours parkland plat et élégant, riche en contrastes, tant sur le plan technique que visuel. Obstacles d’eau sinueux, greens en île et fairways soignés font de chaque partie un nouveau défi.',
      'course.f1': 'De l’eau en jeu sur de nombreux trous, y compris des greens en île',
      'course.f2': 'Un mélange rare : cinq par 3 et six par 5',
      'course.f3': 'Un long par 73, jusqu’à 7 002 mètres depuis les départs blancs',
      'course.f4': 'Course rating 73,8 · slope 139 (départs jaunes)',
      'course.artTitle': 'Illustration d’un green en île entouré d’eau',
      'course.artCaption': 'Les greens en île font partie de la signature de De Brugse Vaart.',
      'sc.title': 'Carte de score',
      'sc.choose': 'Choisissez votre départ',
      'tee.white': 'Blanc',
      'tee.yellow': 'Jaune',
      'tee.blue': 'Bleu',
      'tee.red': 'Rouge',

      'fees.eyebrow': 'Green fees',
      'fees.title': 'Jouez De Brugse Vaart',
      'fees.lead': 'Les visiteurs sont les bienvenus. Réservez votre heure de départ facilement via WhatsApp ou par téléphone.',
      'fees.weekday': 'Lundi – vendredi',
      'fees.weekend': 'Week-ends &amp; jours fériés',
      'fees.per': '18 trous',
      'fees.bookTitle': 'Réserver un départ',
      'fees.bookText': 'Envoyez-nous un message WhatsApp pour vos réservations et questions rapides.',
      'fees.call': 'Ou appelez le',
      'fees.reqTitle': 'Bon à savoir',
      'fees.req1': 'Certificat de handicap valable de votre club',
      'fees.req2': 'Handicap maximum 36',
      'fees.req3': 'Soft spikes obligatoires',
      'fees.note': 'Tarifs sous réserve de modification. Contactez-nous pour les prix actuels, les formules et les affiliations.',
      'fac.title': 'Installations',
      'fac.range': 'Driving range',
      'fac.putting': 'Putting green',
      'fac.bunker': 'Bunker d’entraînement',
      'fac.shop': 'Pro shop',
      'fac.lessons': 'Cours de golf',
      'fac.buggy': 'Location de buggies',
      'fac.caddie': 'Service de caddie',
      'fac.restaurant': 'Restaurant &amp; terrasse',

      'club.eyebrow': 'Le club-house',
      'club.title': 'Avec l’allure d’une maison de maître',
      'club.p1': 'Derrière la façade classique se cache un intérieur plein de caractère : Chesterfield au coin du feu, lumière chaleureuse et meubles anciens.',
      'club.p2': 'Après votre partie, installez-vous dans notre restaurant ou profitez d’un verre et d’une collation en terrasse. Nos hôtes saluent sans cesse la qualité de l’accueil.',
      'club.l1': 'Restaurant',
      'club.l2': 'Terrasse ensoleillée',
      'club.l3': 'Salon avec feu ouvert',
      'club.l4': 'Salle de billard',
      'club.alt1': 'Le salon avec ses Chesterfield et sa cheminée',
      'club.alt2': 'Fauteuil à oreilles en cuir près de la fenêtre du salon',
      'club.alt3': 'Salle de billard avec table de snooker',

      'events.eyebrow': 'Événements',
      'events.title': 'Votre moment au domaine',
      'events.lead': 'D’une réunion intime à une grande fête de mariage, le domaine offre un cadre élégant, avec un service traiteur maison.',
      'events.cta': 'Demander une proposition',
      'events.cap': 'invités',
      'events.a1': 'Traiteur maison',
      'events.a2': 'Wi-Fi gratuit',
      'events.a3': 'Parking gratuit',
      'events.e1': 'Mariages',
      'events.e1t': 'Un décor féerique au bord de l’eau, avec un club-house qui sublime chaque photo.',
      'events.e2': 'Réunions',
      'events.e2t': 'Se réunir au calme, loin de l’agitation, dans un cadre verdoyant et inspirant.',
      'events.e3': 'Séminaires',
      'events.e3t': 'De l’espace pour les grands groupes, à combiner si vous le souhaitez avec une journée de golf.',

      'reviews.eyebrow': 'Ce qu’en disent nos hôtes',
      'reviews.title': 'Un lieu qui marque les esprits',
      'reviews.gNum': '4,4',
      'reviews.google': 'note moyenne sur 233 avis Google',
      'reviews.fb': 'nous recommandent sur Facebook (52 avis)',
      'reviews.themes': 'Ce que nos hôtes citent le plus souvent',
      'reviews.t1': 'Parcours parfaitement entretenu',
      'reviews.t2': 'Club-house élégant',
      'reviews.t3': 'Terrasse agréable',
      'reviews.t4': 'Trous variés',
      'reviews.t5': 'Accueil chaleureux',
      'reviews.link': 'Lire tous les avis sur Google',

      'contact.eyebrow': 'Contact &amp; accès',
      'contact.title': 'À bientôt sur la Brugse Vaart',
      'contact.lead': 'En Flandre zélandaise, tout près de la frontière belge : à environ 30 minutes de Bruges et à deux pas de Cadzand.',
      'contact.address': 'Adresse',
      'contact.wa': 'WhatsApp · réservations &amp; questions rapides',
      'contact.phone': 'Téléphone',
      'contact.email': 'E-mail',
      'contact.follow': 'Suivez-nous',
      'map.load': 'Afficher la carte',
      'map.note': 'L’affichage de la carte partage des données avec Google.',
      'map.route': 'Planifier votre itinéraire',

      'footer.country': 'Pays-Bas',
      'footer.contact': 'Contact',
      'footer.explore': 'Découvrir',
      'footer.top': 'Retour en haut ↑',
      'fab': 'Réserver via WhatsApp',
      'lb.close': 'Fermer',
      'concept': 'Projet de site par <a href="https://bareit.be" target="_blank" rel="noopener">bareit.be</a> · pas le site officiel'
    }
  };

  var SUPPORTED = ['nl', 'en', 'fr'];
  var STORAGE_KEY = 'dbv-lang';
  var current = 'nl';

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  function parseAttrs(spec) {
    return spec.split(';').map(function (pair) {
      var parts = pair.split(':');
      return { attr: parts[0].trim(), key: parts[1].trim() };
    });
  }

  // Read the Dutch source text from the page so it is written only once.
  function collectDutch() {
    var nl = dict.nl;
    each('[data-i18n]', function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in nl)) nl[key] = el.innerHTML;
    });
    each('[data-i18n-attr]', function (el) {
      parseAttrs(el.getAttribute('data-i18n-attr')).forEach(function (p) {
        if (!(p.key in nl)) nl[p.key] = el.getAttribute(p.attr) || '';
      });
    });
  }

  function t(key) {
    var table = dict[current];
    if (table && key in table) return table[key];
    if (key in dict.nl) return dict.nl[key];
    return key;
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'nl';
    current = lang;
    document.documentElement.lang = lang;

    each('[data-i18n]', function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n'));
    });
    each('[data-i18n-attr]', function (el) {
      parseAttrs(el.getAttribute('data-i18n-attr')).forEach(function (p) {
        el.setAttribute(p.attr, t(p.key));
      });
    });
    each('.lang-switch button', function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    document.title = t('meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function initialLanguage() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl && SUPPORTED.indexOf(fromUrl) > -1) return fromUrl;
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) > -1) return stored;
    } catch (e) { /* storage unavailable */ }
    var langs = navigator.languages || [navigator.language || 'nl'];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).slice(0, 2).toLowerCase();
      if (code === 'nl' || code === 'fr') return code;
      if (code === 'en' || code === 'de') return 'en';
    }
    return 'nl';
  }

  collectDutch();

  window.I18N = {
    t: t,
    apply: apply,
    get lang() { return current; },
    init: function () {
      each('.lang-switch button', function (btn) {
        btn.addEventListener('click', function () { apply(btn.getAttribute('data-lang')); });
      });
      apply(initialLanguage());
    }
  };
})();
