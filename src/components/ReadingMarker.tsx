import { createSignal, onMount, onCleanup } from 'solid-js';

export default function ReadingMarker() {
  const [progress, setProgress] = createSignal(0);
  onMount(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const article = document.querySelector('article');
      if (!article) { setProgress(0); return; }
      const rect = article.getBoundingClientRect();
      const total = Math.max(1, article.offsetHeight - window.innerHeight);
      const done = Math.min(total, Math.max(0, -rect.top));
      setProgress(total > 0 ? done / total : 0);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onCleanup(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); });
  });
  return (
    <div class="fixed top-0 left-0 right-0 z-[50] h-[10px] pointer-events-none" aria-hidden="true">
      <div class="relative mx-4 h-full">
        <div class="absolute left-0 right-0 top-[4px] h-px" style="background:var(--color-line);" />
        <div
          class="absolute top-0"
          style={`left:0;transform:translateX(${progress() * 100}vw) translateX(-${progress() * 100}%);width:10px;height:10px;background:var(--color-accent);`}
        />
        <div class="absolute left-0 top-[4px] h-px" style={`width:${progress() * 100}%;background:var(--color-ink);`} />
      </div>
    </div>
  );
}
