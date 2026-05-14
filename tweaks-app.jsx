// Tweaks app for KT VVS front page

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoHeight": 70,
  "photoWidth": 40,
  "heroPadLeft": 160,
  "heroPadRight": 140,
  "headlineWidth": 46,
  "videoLooped": false
}/*EDITMODE-END*/;

function KtTweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Reflect tweaks onto the root as CSS custom properties.
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--logo-h', t.logoHeight + 'px');
    r.style.setProperty('--photo-w', t.photoWidth + '%');
    r.style.setProperty('--hero-pad-l', t.heroPadLeft + 'px');
    r.style.setProperty('--hero-pad-r', t.heroPadRight + 'px');
    document.querySelectorAll('.hero-headline, .hero-bottom')
      .forEach(el => { el.style.maxWidth = t.headlineWidth + '%'; });
  }, [t.logoHeight, t.photoWidth, t.heroPadLeft, t.heroPadRight, t.headlineWidth]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Logo" />
      <TweakSlider label="Logo height" value={t.logoHeight} min={36} max={96} step={2} unit="px"
                   onChange={(v) => setTweak('logoHeight', v)} />

      <TweakSection label="Hero layout" />
      <TweakSlider label="Photo width" value={t.photoWidth} min={26} max={50} step={1} unit="%"
                   onChange={(v) => setTweak('photoWidth', v)} />
      <TweakSlider label="Text shift left" value={t.heroPadLeft} min={16} max={140} step={2} unit="px"
                   onChange={(v) => setTweak('heroPadLeft', v)} />
      <TweakSlider label="Right padding" value={t.heroPadRight} min={20} max={160} step={2} unit="px"
                   onChange={(v) => setTweak('heroPadRight', v)} />
      <TweakSlider label="Text column" value={t.headlineWidth} min={48} max={72} step={1} unit="%"
                   onChange={(v) => setTweak('headlineWidth', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<KtTweaksApp />);
