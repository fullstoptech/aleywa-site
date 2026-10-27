import { createSignal, onMount, onCleanup, For, Show } from 'solid-js';
import wordmarkRaw from '../assets/wordmark.svg?raw';
import { NAV, EMAIL, isCurrent } from '../data/site';

export default function Header(props: { currentPath?: string }) {
  const currentPath = props.currentPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const [scrolled, setScrolled] = createSignal(false);
  const [open, setOpen] = createSignal(false);
  let menuBtn: HTMLButtonElement | undefined;
  let panel: HTMLDivElement | undefined;
  let closeBtn: HTMLButtonElement | undefined;

  const wmHtml = wordmarkRaw.replace('<svg ', '<svg role="img" aria-label="Aleywa Studios" style="height:32px;width:auto;display:block" ');

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    onCleanup(() => window.removeEventListener('scroll', onScroll));
  });

  const openMenu = () => {
    setOpen(true);
    requestAnimationFrame(() => closeBtn?.focus());
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = '';
    menuBtn?.focus();
  };
  const onKey = (e: KeyboardEvent) => {
    if (!open()) return;
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key === 'Tab' && panel) {
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>('a, button')).filter((el) => !el.hasAttribute('disabled'));
      if (!focusables.length) return;
      const first = focusables[0]; const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  onMount(() => {
    document.addEventListener('keydown', onKey);
    onCleanup(() => document.removeEventListener('keydown', onKey));
  });

  return (
    <>
      <header
        class="bg-paper sticky top-0 z-50 site-header"
        style={(scrolled() || open() ? 'border-bottom:1px solid var(--color-line);background:var(--color-paper);' : 'border-bottom:1px solid transparent;') + 'transition:background-color 300ms cubic-bezier(0.22,1,0.36,1),border-color 300ms cubic-bezier(0.22,1,0.36,1);'}
      >
        <div class="section-x">
          <div class="inner-x flex items-center justify-between h-16 lg:h-[88px] gap-4">
            <a href="/" aria-label="Aleywa Studios — home" class="min-h-[44px] inline-flex items-center" innerHTML={wmHtml} />
            <nav class="hidden lg:flex items-center gap-6" aria-label="Primary">
              <For each={NAV}>{(n) => (
                <a
                  href={n.href}
                  aria-current={isCurrent(currentPath, n.href) ? 'page' : undefined}
                  class="text-label min-h-[44px] inline-flex items-center gap-1 hover:text-[#7f1840]"
                  style="transition:color 250ms cubic-bezier(0.22,1,0.36,1),opacity 250ms cubic-bezier(0.22,1,0.36,1);"
                >
                  {isCurrent(currentPath, n.href) && <span aria-hidden="true" style="display:inline-block;width:10px;height:10px;background:var(--color-accent);flex:none;" />}
                  {n.label}
                </a>
              )}</For>
            </nav>
            <div class="flex items-center gap-2">
              <a href="/start-a-project" class="text-body font-medium min-h-[44px] inline-flex items-center">Start a project</a>
              <button
                ref={menuBtn}
                type="button"
                class="lg:hidden text-label min-h-[44px] inline-flex items-center px-2"
                aria-expanded={open()}
                aria-haspopup="true"
                onClick={() => (open() ? closeMenu() : openMenu())}
              >{open() ? 'Close' : 'Menu'}</button>
            </div>
          </div>
        </div>
      </header>
      <Show when={open()}>
        <div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          class="fixed inset-0 z-[60] bg-paper flex flex-col menu-panel"
          style="background:var(--color-paper);box-shadow:0 12px 28px -14px rgba(24,17,16,.35);"
        >
          <div class="section-x">
            <div class="inner-x flex items-center justify-between h-16">
              <a href="/" aria-label="Aleywa Studios — home" innerHTML={wmHtml} />
              <button ref={closeBtn} type="button" class="text-label min-h-[44px] px-2" onClick={closeMenu}>Close</button>
            </div>
          </div>
          <div class="section-x flex-1 overflow-y-auto">
            <div class="inner-x flex flex-col gap-12 py-8">
              <nav aria-label="Menu" class="flex flex-col gap-3">
                <For each={NAV}>{(n, i) => (
                  <a href={n.href} aria-current={isCurrent(currentPath, n.href) ? 'page' : undefined} class="flex flex-col gap-0 min-h-[44px] menu-link" style={`animation-delay:${60 + i() * 55}ms`}>
                    <span class="text-label text-ink-muted">{i() + 1}</span>
                    <span class="text-h2">{n.label}</span>
                  </a>
                )}</For>
              </nav>
              <div class="flex flex-col gap-4">
                <a href="/start-a-project" class="inline-flex items-center justify-center h-14 text-body font-medium w-full" style="background:var(--color-ink);color:var(--color-paper);">Start a project</a>
                <a href={`mailto:${EMAIL}`} class="text-body-lg">{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
}
