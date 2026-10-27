import { onMount, onCleanup } from 'solid-js';

// How many screen pixels the strip moves per pixel scrolled (1 = in step with the scroll).
const SPEED = 1.25;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
// Smoothstep: gentle ease-in/out so the slide starts and settles softly.
const smoothstep = (v: number) => { const t = clamp01(v); return t * t * (3 - 2 * t); };

export default function Hero() {
  onMount(() => {
    const root = document.querySelector('[data-hero-root]') as HTMLElement | null;
    if (!root) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const layer = root.querySelector('.hero-layer') as HTMLElement | null;
    if (reduced || !layer) {
      const fb = root.querySelector('.hero-reduced-flow') as HTMLElement | null;
      if (fb && reduced) fb.style.display = 'block';
      return;
    }
    const restEls = Array.from(root.querySelectorAll<HTMLElement>('.hero-rest'));
    const focusEls = Array.from(root.querySelectorAll<HTMLElement>('.hero-focus'));
    const bandRest = root.querySelector<HTMLElement>('.hero-band-rest');
    const bandFocus = root.querySelector<HTMLElement>('.hero-band-focus');

    const pin = root.firstElementChild as HTMLElement;
    const stage = root.querySelector<HTMLElement>('.hero-stage');
    if (!pin || !stage) return;

    const frame = stage.parentElement as HTMLElement;
    const header = document.querySelector<HTMLElement>('.site-header');
    const hint = root.querySelector<HTMLElement>('[data-hero-hint]');
    // The slide replaces the hand-swipe strip used when it is off.
    frame.style.overflowX = 'hidden';
    frame.scrollLeft = 0;
    if (hint) hint.textContent = 'Scroll along the word.';

    // The strip slides until its right edge (the end of the last image) meets
    // the right edge of the screen, and the hero stays pinned for exactly the
    // scroll that takes (the travel divided by SPEED): no empty page after the
    // last image, and the stack releases the moment it arrives. Measured, so it
    // holds at any viewport size.
    let travelPx = 1;
    let scrollSpan = 1;
    let travelLocal = 0;
    let stuckAt = 0;
    const measure = () => {
      if (window.innerWidth >= 1024) {
        pin.style.top = '';
        pin.style.removeProperty('--hero-top');
      } else {
        // Phone: the whole hero pins right under the header.
        pin.style.top = `${header?.offsetHeight ?? 0}px`;
        pin.style.setProperty('--hero-top', pin.style.top);
      }
      stuckAt = parseFloat(getComputedStyle(pin).top) || 0;
      const scale = stage.getBoundingClientRect().width / stage.offsetWidth;
      travelPx = Math.max(1, layer.getBoundingClientRect().width - frame.clientWidth);
      travelLocal = travelPx / scale;
      scrollSpan = travelPx / SPEED;
      root.style.height = `${pin.offsetHeight + scrollSpan}px`;
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);

    const targetForScroll = () => {
      // The pin engages once the root reaches its sticky offset.
      return clamp01((stuckAt - root.getBoundingClientRect().top) / scrollSpan);
    };

    const apply = (tRaw: number) => {
      // Linear progress so movement is immediate; the lerp below smooths it.
      const t = clamp01(tRaw);
      layer.style.transform = `translate3d(${-travelLocal * t}px, 0, 0)`;
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
    onCleanup(() => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    });
  });
  return <span hidden aria-hidden="true" />;
}
