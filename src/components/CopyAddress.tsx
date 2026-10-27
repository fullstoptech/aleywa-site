import { createSignal, onCleanup } from 'solid-js';
import { EMAIL } from '../data/site';

export default function CopyAddress(props: { on?: 'paper' | 'berry' }) {
  const on = props.on ?? 'berry';
  const [copied, setCopied] = createSignal(false);
  const [toast, setToast] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return; // Clipboard failure: keep label, no error UI
    }
    const isPhone = window.matchMedia('(max-width: 767px)').matches;
    if (isPhone) {
      setToast(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setToast(false), 2400);
    } else {
      setCopied(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setCopied(false), 2400);
    }
  };
  onCleanup(() => { if (timer) clearTimeout(timer); });

  const btnStyle = on === 'berry'
    ? 'background:transparent;color:var(--color-paper);border:1px solid var(--color-paper);width:224px;'
    : 'background:transparent;color:var(--color-ink);border:1px solid var(--color-ink);width:224px;';

  return (
    <span class="relative inline-flex">
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        class="inline-flex items-center justify-center px-6 h-14 text-body font-medium whitespace-nowrap"
        style={btnStyle + 'transition:opacity 120ms cubic-bezier(0.2,0.7,0.2,1);'}
      >{copied() ? 'Address copied.' : 'Copy address'}</button>
      {toast() && (
        <span
          role="status"
          class="fixed left-1/2 bottom-6 z-[70] px-4 py-3 text-body font-medium"
          style="transform:translateX(-50%);background:var(--color-raised);color:var(--color-ink);box-shadow:0 12px 28px -14px rgba(24,17,16,.35);transition:opacity 180ms cubic-bezier(0.2,0.7,0.2,1),transform 180ms cubic-bezier(0.2,0.7,0.2,1);"
        >Address copied.</span>
      )}
    </span>
  );
}
