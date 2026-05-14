/* =========================================================
   KT VVS — Demo site interactions
   ========================================================= */

/* Logo → scroll to top */
const logoLink = document.querySelector('.nav .logo');
if (logoLink) {
  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Sticky nav state */
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 24) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Reveal-on-scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* =========================================================
   SCROLL-LOCKED ANIMATION — Option B: velocity-driven autoplay
   ----------------------------------------------------------
   No seeking during scroll. Video plays / pauses via
   playbackRate + play(). Browser decoder renders frames
   naturally → zero jank. Speed scales with scroll velocity
   so fast scroll = fast video, slow scroll = slow video.
   Only seek on initial section entry (to reset to frame 0).
   ========================================================= */
const sa          = document.querySelector('.scrollanim');
const saStage     = document.querySelector('.scrollanim .stage-inner');
const saVideo     = document.getElementById('scroll-anim-video');
const saFill      = document.querySelector('.scrollanim .progress-track .fill');
const saReadout   = document.querySelector('.scrollanim .frame-readout b');
const saBlueprint = document.querySelector('.sa-svg .blueprint');
const saPhoto     = document.querySelector('.sa-svg .photo');
const saHeat      = document.querySelector('.sa-svg .heatflow');

function getSaProgress() {
  if (!sa) return 0;
  const r     = sa.getBoundingClientRect();
  const total = sa.offsetHeight - window.innerHeight;
  return total > 0 ? Math.min(Math.max(-r.top, 0), total) / total : 0;
}

function updatePlaceholder(p) {
  if (saBlueprint) {
    const draw = Math.min(p / 0.5, 1);
    saBlueprint.querySelectorAll('path, circle, rect').forEach((el) => {
      const len = el.getTotalLength ? el.getTotalLength() : 1000;
      el.style.strokeDasharray  = len;
      el.style.strokeDashoffset = len * (1 - draw);
    });
    saBlueprint.style.opacity = Math.max(0, 1 - Math.max(0, (p - 0.55) / 0.2)).toFixed(2);
  }
  if (saPhoto) saPhoto.style.opacity = Math.min(Math.max((p - 0.35) / 0.25, 0), 1).toFixed(2);
  if (saHeat)  saHeat.style.opacity  = Math.min(Math.max((p - 0.6)  / 0.3,  0), 1).toFixed(2);
}

/* =========================================================
   Non-linear playback rate — decoupled from scroll velocity.
   Video plays at its own pace; scroll just triggers start.

   Rate curve (fraction of video duration):
     0 – 15%   : 0.35× — "before" state lingers
     15 – 85%  : 1.0×  — transition plays through
     85 – 100% : 0.35× — "after" state arrives slowly

   Safety net: if user scrolls past the section before the
   video ends, we seek to 92% so the callout always fires.
   ========================================================= */
const SA_SLOW     = 0.6;
const SA_NORMAL   = 2.5;
const SA_ZONE     = 0.10;  // only end of video slows (no slow zone at start)
const SA_START_AT = 0.05;  // dwell on frame 0 until 5% section scroll

function saTargetRate() {
  if (!saVideo || !saVideo.duration) return SA_NORMAL;
  const pv = saVideo.currentTime / saVideo.duration;
  return pv > 1 - SA_ZONE ? SA_SLOW : SA_NORMAL;
}

/* rAF: UI + live rate correction */
function saRafLoop() {
  const p = getSaProgress();
  if (saFill)    saFill.style.width = (p * 100).toFixed(1) + '%';
  if (saReadout) saReadout.textContent = (p * 100).toFixed(0).padStart(3, '0') + '%';
  updatePlaceholder(p);
  if (saIsReady && !saVideo.paused && !saVideo.ended) {
    saVideo.playbackRate = saTargetRate();
  }
  requestAnimationFrame(saRafLoop);
}
requestAnimationFrame(saRafLoop);

/* Video load & reveal */
let saIsReady = false;
const saCallout = document.getElementById('sa-callout');

function saShowCallout() {
  if (saCallout) {
    saCallout.classList.add('visible');
    saCallout.removeAttribute('aria-hidden');
  }
}
function saHideCallout() {
  if (saCallout) {
    saCallout.classList.remove('visible');
    saCallout.setAttribute('aria-hidden', 'true');
  }
}

/* Scroll lock — prevent scrolling past section until callout has been seen */
let saLocked = false;
let saLockTimer = null;
function saBlockScroll(e) { e.preventDefault(); }
function saLockScroll(ms) {
  if (saLocked) {
    // Extend the lock if called again
    clearTimeout(saLockTimer);
  } else {
    saLocked = true;
    window.addEventListener('wheel',     saBlockScroll, { passive: false });
    window.addEventListener('touchmove', saBlockScroll, { passive: false });
  }
  saLockTimer = setTimeout(() => {
    saLocked = false;
    window.removeEventListener('wheel',     saBlockScroll);
    window.removeEventListener('touchmove', saBlockScroll);
  }, ms);
}
function saUnlockScroll() {
  if (!saLocked) return;
  clearTimeout(saLockTimer);
  saLocked = false;
  window.removeEventListener('wheel',     saBlockScroll);
  window.removeEventListener('touchmove', saBlockScroll);
}

if (saVideo) {
  const onReady = () => {
    if (saIsReady || saVideo.readyState < 1 || !saVideo.duration) return;
    saIsReady = true;
    saVideo.currentTime = 0;
    saVideo.style.opacity = '1';
    if (saStage) saStage.classList.add('has-video');
    // Prime the decoder so first frame renders instantly on play
    saVideo.play().then(() => saVideo.pause()).catch(() => {});
  };
  saVideo.addEventListener('loadedmetadata', onReady);
  saVideo.addEventListener('loadeddata',     onReady);
  saVideo.addEventListener('canplay',        onReady);
  saVideo.addEventListener('ended', () => {
    saVideo.pause();
    saShowCallout();
    // Release immediately — callout is visible, don't trap the user
    saUnlockScroll();
  });
  saVideo.load();
  window.addEventListener('touchstart', () => {
    saVideo.play().then(() => saVideo.pause()).catch(() => {});
  }, { passive: true, once: true });
}

/* Reset on re-entry from top */
if (sa && saVideo) {
  let saWasVisible = false;
  new IntersectionObserver((entries) => {
    const visible = entries[0].isIntersecting;
    if (visible && !saWasVisible && getSaProgress() < 0.05 && saIsReady) {
      saVideo.pause();
      saVideo.currentTime = 0;
      saHideCallout();
      saUnlockScroll();
    }
    saWasVisible = visible;
  }, { threshold: 0 }).observe(sa);
}

/* Scroll handler — starts the video, no velocity math */
window.addEventListener('scroll', () => {
  if (!saIsReady || !saVideo.duration) return;

  const p = getSaProgress();

  if (p <= SA_START_AT) {
    if (!saVideo.paused) saVideo.pause();
    return;
  }

  // Inside or past section: play if not done
  if (saVideo.paused && !saVideo.ended) {
    saVideo.playbackRate = saTargetRate();
    saVideo.play().catch(() => {});
  }

  // Safety net: user scrolled too fast → seek near end and lock scroll
  // so "ended" fires and callout is guaranteed to show
  if (p >= 0.98 && !saVideo.ended && saVideo.currentTime < saVideo.duration * 0.9) {
    saVideo.currentTime = saVideo.duration * 0.92;
    saVideo.playbackRate = SA_SLOW;
    if (saVideo.paused) saVideo.play().catch(() => {});
    // Brief lock — just long enough for ended to fire and callout to appear
    saLockScroll(700);
  }
}, { passive: true });

/* =========================================================
   REFERENCE FILTER
   ========================================================= */
const filterBtns = document.querySelectorAll('.refs-filter button');
const refItems = document.querySelectorAll('.ref');
filterBtns.forEach(b => b.addEventListener('click', () => {
  filterBtns.forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const cat = b.dataset.cat;
  refItems.forEach(r => {
    if (cat === 'all' || r.dataset.cat === cat) r.classList.remove('hidden');
    else r.classList.add('hidden');
  });
}));

/* =========================================================
   FORM
   ========================================================= */
document.querySelectorAll('.field .chips').forEach(group => {
  group.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });
});

const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('success');
  });
}

/* =========================================================
   MOBILE MENU
   ========================================================= */
const menuBtn = document.querySelector('.menu-btn');
const sheet = document.querySelector('.mobile-sheet');
if (menuBtn && sheet) {
  menuBtn.addEventListener('click', () => sheet.classList.add('open'));
  sheet.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.classList.contains('close')) {
      sheet.classList.remove('open');
    }
  });
}
