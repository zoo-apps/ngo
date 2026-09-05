import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LABS, SECTIONS, type Dest, type Section } from '@/config/registry';
import Away from '@/components/Away';

/**
 * The bar.
 *
 * It reads `registry.ts` for what the site contains and `--night` for what
 * colour it is, so it holds no destinations and no palette of its own. A
 * section draws a chevron when — and only when — it has a menu, which is why
 * nothing anywhere carries a flag saying whether to draw one.
 *
 * The bar wears `.night`, so the pill on the right is drawn white-on-nothing by
 * the same `.action` rule that draws a filled berry button on the paper. There
 * is no colour override in this file.
 */

/** The section whose pages we are on. Nothing else claims `/`, so home is the Foundation's. */
function currentOf(path: string): Section {
  const owns = (s: Section) => {
    const root = s.href.split('#')[0];
    return root.startsWith('/') && root !== '/' && path.startsWith(root);
  };
  return SECTIONS.find(owns) ?? SECTIONS[SECTIONS.length - 1];
}

function Wordmark({ size }: { size: number }) {
  return <span style={{ fontSize: size, fontWeight: 700, letterSpacing: '0.06em', lineHeight: 1 }}>ZOO</span>;
}

const entry: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 6,
  padding: '8px 10px',
  borderRadius: 'var(--radius-md)',
  color: 'var(--ink)',
};

/** One destination in a menu. Where it goes decides which element carries it. */
function Item({ to, onGo }: { to: Dest; onGo?: () => void }) {
  const body = (
    <span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-sm)', fontWeight: 500 }}>
        {to.label}
        {to.away && <Away />}
      </span>
      {to.note && (
        <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{to.note}</span>
      )}
    </span>
  );

  return to.away ? (
    <a href={to.href} target='_blank' rel='noopener noreferrer' style={entry} onClick={onGo}>
      {body}
    </a>
  ) : (
    <Link href={to.href} style={entry} onClick={onGo}>
      {body}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const current = currentOf(useRouter().pathname);

  return (
    <nav
      className='night select-none'
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, borderBottom: '1px solid var(--border)' }}
    >
      <div
        className='flex items-center justify-between'
        style={{ height: 'var(--nav-h)', padding: '0 clamp(16px, 3vw, 32px)' }}
      >
        <Link href='/' aria-label='Zoo Labs Foundation'>
          <Wordmark size={22} />
        </Link>

        <div className='hidden lg:flex items-center gap-1'>
          {SECTIONS.map((s) => {
            const here = s === current;
            return (
              <div key={s.label} className='section relative' style={{ paddingBottom: 10, marginBottom: -10 }}>
                <Link
                  href={s.href}
                  aria-current={here ? 'page' : undefined}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 10px',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: here ? '#ffffff' : 'var(--text-secondary)',
                    borderBottom: `1px solid ${here ? 'currentColor' : 'transparent'}`,
                  }}
                >
                  {s.label}
                  {s.items && <ChevronDown size={13} strokeWidth={2} aria-hidden />}
                </Link>

                {s.items && (
                  <div
                    className='menu absolute left-1/2'
                    style={{ transform: 'translateX(-50%)', marginTop: 10, padding: 6, width: 320 }}
                  >
                    {s.items.map((to) => (
                      <Item key={to.label} to={to} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className='flex items-center gap-2'>
          <a
            href={LABS.href}
            target='_blank'
            rel='noopener noreferrer'
            className='action'
            style={{ minHeight: 36, paddingInline: 'var(--space-4)', letterSpacing: '0.04em' }}
          >
            {LABS.label}
            <Away />
          </a>

          <button
            className='lg:hidden'
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            style={{ display: 'inline-flex', padding: 6 }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className='lg:hidden'
          style={{
            maxHeight: 'calc(100vh - var(--nav-h))',
            overflowY: 'auto',
            padding: '0 clamp(16px, 3vw, 32px) var(--space-6)',
            borderTop: '1px solid var(--border)',
          }}
        >
          {SECTIONS.map((s) => (
            <div key={s.label} style={{ paddingTop: 'var(--space-5)' }}>
              <Link href={s.href} onClick={() => setOpen(false)} style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                {s.label}
              </Link>
              {s.items && (
                <div style={{ paddingTop: 4 }}>
                  {s.items.map((to) => (
                    <Item key={to.label} to={to} onGo={() => setOpen(false)} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
