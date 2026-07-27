/* =========================================================
   KT VVS — interaktioner

   Fire bevægelser, alle bundet til scroll eller et klik:
   1. Mærket rejser fra hero op i navigationen og dokker.
   2. Medie-felterne løber ind fra venstre, i flowets retning.
   3. Arbejdssporet kører sideværts mens siden scrolles forbi.
   4. Afsnit toner ind når de kommer i syne.

   Scrollet bliver aldrig låst eller kapret. Alt kan forlades når som helst,
   og uden script står hele siden stille og fuldt læsbar.
   ========================================================= */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rod = document.documentElement;

  // Markerer at script kører. CSS må først skjule noget herefter,
  // så intet forsvinder på en side uden JS.
  rod.classList.add('js');

  function spaend(v, lav, hoej) { return v < lav ? lav : (v > hoej ? hoej : v); }

  /* ---------- mobilmenu ---------- */
  var burger = document.getElementById('burger');
  var sheet = document.getElementById('sheet');

  function lukSheet() {
    sheet.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Åbn menu');
    document.body.style.overflow = '';
  }

  if (burger && sheet) {
    burger.addEventListener('click', function () {
      var aaben = sheet.hidden === false;
      if (aaben) { lukSheet(); return; }
      sheet.hidden = false;
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Luk menu');
      document.body.style.overflow = 'hidden';
      var foerste = sheet.querySelector('a');
      if (foerste) foerste.focus();
    });
    sheet.addEventListener('click', function (e) {
      if (e.target.closest('a')) lukSheet();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !sheet.hidden) { lukSheet(); burger.focus(); }
    });
  }

  /* ---------- mærkets flugt op i navigationen ----------
     Start- og slutposition læses af to rigtige pladsholdere i DOM'en, så
     rejsen rammer rigtigt på alle bredder uden hårdkodede tal. Kun transform
     ændres; intet layout røres undervejs. */
  var heroMark = document.getElementById('heroMark');
  var navMark = document.getElementById('navMark');
  var navWord = document.getElementById('navWord');
  var flyver = null, maal = null;

  function maalOp() {
    if (!heroMark || !navMark) return null;
    var h = heroMark.getBoundingClientRect();
    var n = navMark.getBoundingClientRect();
    if (!h.width || !n.width) return null;
    return {
      hx: h.left, hy: h.top + window.scrollY, hw: h.width,
      nx: n.left, ny: n.top, nw: n.width
    };
  }

  if (heroMark && navMark && !reduced) {
    maal = maalOp();
    if (maal && maal.hy > maal.ny + 20) {
      flyver = heroMark.querySelector('img').cloneNode(true);
      flyver.setAttribute('class', 'fly-mark');
      flyver.setAttribute('aria-hidden', 'true');
      document.body.appendChild(flyver);
      rod.classList.add('flyv');
    }
  }

  function tegnMaerke() {
    if (!flyver || !maal) return;
    var afstand = maal.hy - maal.ny;
    var p = spaend(window.scrollY / afstand, 0, 1);
    var x = maal.hx + (maal.nx - maal.hx) * p;
    // Naturlig position er der maerket ville staa hvis det bare fulgte siden.
    // Der imellem og dokken interpoleres, saa det glider paa plads og staar stille.
    var naturlig = maal.hy - window.scrollY;
    var y = naturlig + (maal.ny - naturlig) * p;
    var k = 1 + (maal.nw / maal.hw - 1) * p;
    flyver.style.width = maal.hw + 'px';
    flyver.style.height = maal.hw + 'px';
    flyver.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) scale(' + k.toFixed(4) + ')';
    if (navWord) navWord.classList.toggle('vis', p > 0.72);
  }

  /* ---------- arbejdssporet ---------- */
  var scene = document.getElementById('arbScene');
  var spor = document.getElementById('arbSpor');
  var arbTal = document.getElementById('arbTal');
  var arbBar = document.getElementById('arbBar');
  var kort = spor ? spor.querySelectorAll('.arb-kort').length : 0;
  var drev = false, rest = 0;

  function opsaetSpor() {
    if (!scene || !spor) return;
    var kan = window.innerWidth >= 961 && !reduced;
    rod.classList.toggle('arb-drev', kan);
    drev = kan;
    if (!kan) {
      scene.style.removeProperty('--scene');
      spor.style.removeProperty('--x');
      return;
    }
    // Maales foerst efter klassen er sat — sporet er foerst max-content der.
    var pad = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pad')) || 24;
    rest = Math.max(0, spor.scrollWidth + pad - window.innerWidth);
    scene.style.setProperty('--scene', (window.innerHeight + rest) + 'px');
  }

  function tegnSpor() {
    if (!drev || !scene || !spor) return;
    var r = scene.getBoundingClientRect();
    var loeb = r.height - window.innerHeight;
    var p = loeb > 0 ? spaend(-r.top / loeb, 0, 1) : 0;
    spor.style.setProperty('--x', (-p * rest).toFixed(1) + 'px');
    if (arbBar) arbBar.style.setProperty('--p', Math.max(0.04, p).toFixed(3));
    if (arbTal) {
      var i = Math.min(kort, Math.floor(p * kort) + 1);
      arbTal.textContent = (i < 10 ? '0' + i : i) + ' / ' + kort;
    }
  }

  /* ---------- ét scroll-kald til begge ---------- */
  var venter = false;
  function paaScroll() {
    if (venter) return;
    venter = true;
    requestAnimationFrame(function () {
      venter = false;
      tegnMaerke();
      tegnSpor();
    });
  }

  opsaetSpor();
  tegnMaerke();
  tegnSpor();
  window.addEventListener('scroll', paaScroll, { passive: true });
  window.addEventListener('resize', function () {
    maal = maalOp();
    opsaetSpor();
    tegnMaerke();
    tegnSpor();
  });
  // Skrifter og billeder skifter maal efter foerste maaling.
  window.addEventListener('load', function () {
    maal = maalOp();
    opsaetSpor();
    tegnMaerke();
    tegnSpor();
  });

  /* ---------- medie-felternes indløb ---------- */
  var baand = Array.prototype.slice.call(document.querySelectorAll('.baand'));
  if (baand.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      baand.forEach(function (b) { b.classList.add('vis'); });
    } else {
      var io = new IntersectionObserver(function (poster) {
        poster.forEach(function (p) {
          if (!p.isIntersecting) return;
          var i = baand.indexOf(p.target);
          p.target.style.setProperty('--d', (i * 0.07) + 's');
          p.target.classList.add('vis');
          io.unobserve(p.target);
        });
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      baand.forEach(function (b) { io.observe(b); });

      // Sikkerhedsnet: ved hurtig scroll kan observeren springe et bånd over.
      // Et farveløst felt er værre end en manglende animation.
      setTimeout(function () {
        baand.forEach(function (b) { b.classList.add('vis'); });
      }, 2500);
    }
  }

  /* ---------- afsnit toner ind ---------- */
  var anim = Array.prototype.slice.call(document.querySelectorAll('[data-anim]'));
  if (anim.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      anim.forEach(function (e) { e.classList.add('ind'); });
    } else {
      var io2 = new IntersectionObserver(function (poster) {
        poster.forEach(function (p) {
          if (!p.isIntersecting) return;
          p.target.classList.add('ind');
          io2.unobserve(p.target);
        });
      }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
      anim.forEach(function (e) { io2.observe(e); });
      setTimeout(function () { anim.forEach(function (e) { e.classList.add('ind'); }); }, 3000);
    }
  }

  /* ---------- signaturforklaring peger på sit bånd ---------- */
  var legKnapper = Array.prototype.slice.call(document.querySelectorAll('.legende button'));
  legKnapper.forEach(function (knap) {
    knap.addEventListener('click', function () {
      var mal = document.getElementById(knap.dataset.maal);
      if (!mal) return;
      legKnapper.forEach(function (k) { k.classList.toggle('frem', k.dataset.maal === knap.dataset.maal); });
      document.querySelectorAll('.baand').forEach(function (b) { b.classList.toggle('peget', b === mal); });
      mal.classList.add('vis');
      mal.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' });
    });
  });

  /* ---------- referencefilter ---------- */
  var chips = document.querySelectorAll('.chip');
  var raekker = document.querySelectorAll('#spec-body tr');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.dataset.f;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-on', on);
        c.setAttribute('aria-pressed', String(on));
      });
      raekker.forEach(function (r) {
        r.hidden = !(f === 'alle' || r.dataset.medie === f);
      });
    });
  });

  /* ---------- formular (demo — sender ikke) ---------- */
  var form = document.getElementById('form');
  if (!form) return;

  var kvit = document.getElementById('kvittering');

  var regler = {
    navn: function (v) { return v.trim().length >= 2 ? '' : 'Skriv dit navn, så vi ved hvem vi ringer til.'; },
    tlf: function (v) {
      var cifre = v.replace(/\D/g, '');
      return cifre.length >= 8 ? '' : 'Skriv et telefonnummer med mindst 8 cifre.';
    },
    mail: function (v) {
      if (!v.trim()) return '';
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Tjek e-mailen — der mangler noget i adressen.';
    },
    besked: function (v) { return v.trim().length >= 5 ? '' : 'Skriv kort hvad opgaven går ud på.'; }
  };

  // Fejlteksten kobles til feltet, så en skærmlæser hører hvad der er galt,
  // ikke bare at noget er galt.
  Object.keys(regler).forEach(function (navn) {
    var ud = form.querySelector('.fejl[data-for="' + navn + '"]');
    if (ud) ud.id = 'fejl-' + navn;
  });

  function vis(navn) {
    var felt = form.elements[navn];
    if (!felt) return true;
    var besked = regler[navn](felt.value);
    var ud = form.querySelector('.fejl[data-for="' + navn + '"]');
    if (ud) ud.textContent = besked;
    felt.closest('.felt').classList.toggle('har-fejl', !!besked);
    felt.setAttribute('aria-invalid', besked ? 'true' : 'false');
    if (besked) felt.setAttribute('aria-describedby', 'fejl-' + navn);
    else felt.removeAttribute('aria-describedby');
    return !besked;
  }

  Object.keys(regler).forEach(function (navn) {
    var felt = form.elements[navn];
    if (!felt) return;
    felt.addEventListener('blur', function () { vis(navn); });
    felt.addEventListener('input', function () {
      if (felt.closest('.felt').classList.contains('har-fejl')) vis(navn);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = Object.keys(regler).map(vis).every(Boolean);
    if (!ok) {
      var foerste = form.querySelector('.har-fejl input, .har-fejl textarea');
      if (foerste) foerste.focus();
      return;
    }
    form.querySelector('.btn').hidden = true;
    form.querySelector('.form-note').hidden = true;
    kvit.hidden = false;
    kvit.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
  });
})();
