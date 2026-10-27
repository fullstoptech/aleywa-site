import { onMount, onCleanup } from 'solid-js';

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
// Smoothstep: gentle ease-in/out so the slide starts and settles softly.
const smoothstep = (v: number) => { const t = clamp01(v); return t * t * (3 - 2 * t); };

export default function Hero() {
  onMount(() => {
    const root = document.querySelector('[data-hero-root]') as HTMLElement | null;
    if (!root) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const layer = root.querySelector('.hero-layer') as HTMLElement | null;
    if (reduced || !layer || window.innerWidth < 1024) {
      const fb = root.querySelector('.hero-reduced-flow') as HTMLElement | null;
      if (fb && reduced) fb.style.display = 'block';
      return;
    }
    const restEls = Array.from(root.querySelectorAll<HTMLElement>('.hero-rest'));
    const focusEls = Array.from(root.querySelectorAll<HTMLElement>('.hero-focus'));
    const bandRest = root.querySelector<HTMLElement>('.hero-band-rest');
    const bandFocus = root.querySelector<HTMLElement>('.hero-band-focus');

    const targetForScroll = () => {
      const rect = root.getBoundingClientRect();
      const total = Math.max(1, root.offsetHeight - window.innerHeight);
      // No holds: the slide starts on the first pixel of scroll and finishes
      // exactly when the hero scroll space ends, so no dead scrolling.
      return clamp01(-rect.top / total);
    };

    const apply = (tRaw: number) => {
      // Linear progress so movement is immediate; the lerp below smooths it.
      const t = clamp01(tRaw);
      layer.style.transform = `translate3d(${-2700 * t}px, 0, 0)`;
      restEls.forEach((el) => { el.style.opacity = String(1 - t); });
      focusEls.forEach((el) => { el.style.opacity = String(t); });
      if (bandRest && bandFocus) {
        // Continuous crossfade through the middle of the slide.
        const bf = smoothstep((t - 0.35) / 0.3);
        bandRest.style.opacity = String(1 - bf);
        bandRest.style.transform = `translateY(${-8 * bf}px)`;
        bandRest.setAttribute('aria-hidden', bf > 0.5 ? 'true' : 'false');
        bandFocus.style.opacity = String(bf);
        bandFocus.style.transform = `translateY(${8 * (1 - bf)}px)`;
        bandFocus.setAttribute('aria-hidden', bf > 0.5 ? 'false' : 'true');
      }
    };

    // Lerp toward the scroll target each frame for a smooth, inertial slide.
    let current = targetForScroll();
    let raf = 0;
    let running = true;
    apply(current);
    const tick = () => {
      if (!running) return;
      const target = targetForScroll();
      const diff = target - current;
      if (Math.abs(diff) < 0.0005) {
        if (current !== target) { current = target; apply(current); }
      } else {
        current += diff * 0.12;
        apply(current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    onCleanup(() => { running = false; cancelAnimationFrame(raf); });
  });
  return <span hidden aria-hidden="true" />;
}
