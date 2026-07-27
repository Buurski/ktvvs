/* =========================================================
   KT VVS — interaktioner
   Ét autoreret bevægelsesmoment: medie-felterne løber ind fra venstre,
   i flowets retning, én gang. Alt andet er tilstandsskift.
   ========================================================= */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Markerer at script kører. CSS må først skjule medie-felterne herefter,
  // så farven aldrig mangler på en side uden JS.
  document.documentElement.classList.add('js');

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
    });
    sheet.addEventListener('click', function (e) {
      if (e.target.closest('a')) lukSheet();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !sheet.hidden) { lukSheet(); burger.focus(); }
    });
  }

  /* ---------- medie-felternes indløb (det ene bevægelsesmoment) ---------- */
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

  function vis(navn) {
    var felt = form.elements[navn];
    if (!felt) return true;
    var besked = regler[navn](felt.value);
    var ud = form.querySelector('.fejl[data-for="' + navn + '"]');
    if (ud) ud.textContent = besked;
    felt.closest('.felt').classList.toggle('har-fejl', !!besked);
    felt.setAttribute('aria-invalid', besked ? 'true' : 'false');
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
