import { onMount, onCleanup } from 'solid-js';

export default function Hero() {
  onMount(() => {
    const root = document.querySelector('[data-hero-root]') as HTMLElement | null;
    if (!root) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const layer = root.querySelector('.hero-layer') as HTMLElement | null;
    if (reduced || !layer || window.innerWidth < 1024) {
      // No-JS / reduced-motion fallback panel in normal flow
      const fb = root.querySelector('.hero-reduced-flow') as HTMLElement | null;
      if (fb && reduced) fb.style.display = 'block';
      return;
    }
    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = root.getBoundingClientRect();
      const total = Math.max(1, root.offsetHeight - window.innerHeight);
      const raw = Math.min(1, Math.max(0, -rect.top / total));
      // 0-20% rest hold, 20-80% slide, 80-100% focus hold
      let t = 0;
      if (raw <= 0.2) t = 0;
      else if (raw >= 0.8) t = 1;
      else t = (raw - 0.2) / 0.6;
      const x = -2700 * t;
      layer.style.transform = `translateX(${x}px)`;
      const restEls = root.querySelectorAll('.hero-rest');
      const focusEls = root.querySelectorAll('.hero-focus');
      restEls.forEach((el) => { (el as HTMLElement).style.opacity = String(1 - t); });
      focusEls.forEach((el) => { (el as HTMLElement).style.opacity = String(t); });
      const bandRest = root.querySelector('.hero-band-rest') as HTMLElement | null;
      const bandFocus = root.querySelector('.hero-band-focus') as HTMLElement | null;
      if (bandRest && bandFocus) {
        const bf = t > 0.5;
        bandRest.style.opacity = bf ? '0' : '1';
        bandRest.style.transform = bf ? 'translateY(-6px)' : 'translateY(0)';
        bandFocus.hidden = false;
        bandFocus.style.opacity = bf ? '1' : '0';
        bandFocus.style.transform = bf ? 'translateY(0)' : 'translateY(6px)';
        bandRest.style.transition = 'opacity 180ms cubic-bezier(0.2,0.7,0.2,1), transform 180ms cubic-bezier(0.2,0.7,0.2,1)';
        bandFocus.style.transition = 'opacity 180ms cubic-bezier(0.2,0.7,0.2,1), transform 180ms cubic-bezier(0.2,0.7,0.2,1)';
        bandFocus.style.position = 'absolute';
      }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onCleanup(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); });
  });
  return <span hidden aria-hidden="true" />;
}
