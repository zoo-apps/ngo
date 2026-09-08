import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Deep from '@/components/Deep';

/**
 * Blue, in the corner of every page.
 *
 * It used to be a second Blue: its own system prompt, its own transport with a
 * fallback host, its own turns and composer — 380 lines answering the same
 * question the room at zoolabs.io answers, and free to drift from it on every
 * one of them. Two Blues is two Blues to be wrong.
 *
 * So this is a door, and the room behind it is the room. The home page opens on
 * the same one full height; every other page reaches it here. Anything Blue
 * learns to do, it does in both places on the day it learns it.
 *
 * `open-chat-widget` still opens it, because that is the event the rest of the
 * site dispatches.
 */
export default function Ask() {
  const [open, setOpen] = useState(false);
  const [needed, setNeeded] = useState(true);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener('open-chat-widget', show);
    return () => window.removeEventListener('open-chat-widget', show);
  }, []);

  // A door to the room you are already standing in is not a door. The home page
  // opens on the room full height, so the disc waits until it has scrolled away
  // and then offers to bring it back.
  useEffect(() => {
    const room = document.querySelector('.deep-room');
    if (!room || typeof IntersectionObserver === 'undefined') return;
    const watch = new IntersectionObserver(([e]) => setNeeded(!e.isIntersecting), { threshold: 0.2 });
    watch.observe(room);
    return () => watch.disconnect();
  }, []);

  const disc: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-full)',
    background: 'var(--blue)',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <>
      {open && (
        <div
          role='dialog'
          aria-label='Talk to Blue'
          style={{
            position: 'fixed',
            bottom: 88,
            right: 'clamp(12px, 3vw, 24px)',
            width: 400,
            maxWidth: 'calc(100vw - 24px)',
            height: 620,
            maxHeight: 'calc(100vh - 120px)',
            overflow: 'hidden',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-2xl)',
            zIndex: 'var(--z-popover)' as unknown as number,
          }}
        >
          <Deep />
          <button
            onClick={() => setOpen(false)}
            aria-label='Close'
            style={{
              ...disc,
              position: 'absolute',
              top: 12,
              left: 12,
              width: 32,
              height: 32,
              background: 'rgb(0 0 0 / 0.45)',
            }}
          >
            <X size={18} />
          </button>
        </div>
      )}

      {(needed || open) && (
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close Blue' : 'Ask Blue'}
        aria-expanded={open}
        style={{
          ...disc,
          position: 'fixed',
          bottom: 'clamp(12px, 3vw, 24px)',
          right: 'clamp(12px, 3vw, 24px)',
          width: 56,
          height: 56,
          boxShadow: 'var(--shadow-xl)',
          zIndex: 'var(--z-popover)' as unknown as number,
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      )}
    </>
  );
}
