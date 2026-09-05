import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { useCorpus, type Counts } from '@/config/corpus'

/**
 * Blue, in the corner of every page.
 *
 * Written the way the rest of this site is written — the classes globals.css
 * publishes, and inline styles reading design tokens for everything else. It
 * used to ask for a Tailwind that is not installed: `w-14 h-14 rounded-full
 * bg-[#0066FF] z-[9999]` on the launcher, which the browser answered with a
 * 36×26 transparent box at `z-index: auto`. The disc was never drawn. A class
 * with no rule behind it is not a weaker style, it is no style, and there is
 * nothing in a build that says so.
 *
 * Blue's colour is `--blue`, the palette's accessible one. The old literal was
 * #0066FF at 3.68:1 on white — below AA for the text it was carrying.
 */

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

const API_PRIMARY = 'https://api.hanzo.ai/v1/chat/public'
const API_FALLBACK = 'https://api.zoo.cloud/v1/chat/completions'

const prompt = (corpus: Counts) => [
  'You are Blue, the friendly beluga whale and AI research assistant for Zoo Labs Foundation Inc., a 501(c)(3) non-profit research organization (EIN 88-3538992).',
  `What the foundation has published, exactly: ${corpus.papers} papers at papers.zoo.ngo, and ${corpus.proposals} improvement proposals at zips.zoo.ngo. The open Zen models are at huggingface.co/zenlm. The code is at github.com/zooai.`,
  'Never invent papers, numbers, or dates. If you do not know, say so and point to papers.zoo.ngo or zips.zoo.ngo.',
  'Be concise, warm, helpful, and plain. 2 to 3 sentences unless asked for more details.',
].join('\n\n')

const ASKS = [
  { label: 'Find research papers', query: 'What research papers have Zoo Labs published?' },
  { label: 'Explore open models', query: 'Tell me about the open Zen model family.' },
  { label: 'Conservation research', query: 'What conservation research does Zoo Labs focus on?' },
  { label: 'Get involved', query: 'How can I support or donate to the Foundation?' },
]

const clock = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

const AVATAR = '/images/blue_avatar.png'

const face: React.CSSProperties = {
  borderRadius: 'var(--radius-full)',
  objectFit: 'cover',
  flexShrink: 0,
}

/** One turn. Blue speaks from the left over a tint, the reader from the right in fill. */
function Turn({ of }: { of: Message }) {
  const mine = of.role === 'user'
  const bubble: React.CSSProperties = {
    padding: 'var(--space-3) var(--space-4)',
    borderRadius: 'var(--radius-xl)',
    fontSize: 'var(--text-sm)',
    lineHeight: 'var(--leading-base)',
    whiteSpace: 'pre-wrap',
    background: mine ? 'var(--blue)' : 'var(--paper)',
    color: mine ? '#fff' : 'var(--text-primary)',
  }
  const when: React.CSSProperties = {
    fontSize: 'var(--text-xs)',
    color: 'var(--text-tertiary)',
    marginTop: 2,
    textAlign: mine ? 'right' : 'left',
  }

  return (
    <div style={{ display: 'flex', gap: 8, maxWidth: '90%', marginLeft: mine ? 'auto' : 0 }}>
      {!mine && <img src={AVATAR} alt='' width={28} height={28} style={{ ...face, marginTop: 2 }} />}
      <div style={{ minWidth: 0 }}>
        <div style={bubble}>{of.content}</div>
        <div style={when}>{of.timestamp}</div>
      </div>
    </div>
  )
}

export default function ChatWidget() {
  const corpus = useCorpus()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi! I'm Blue, the Zoo Labs research assistant. I can help you find papers, learn about our open models, or get involved with the Foundation.",
      // Set when the component mounts, not when the file was written — the old
      // literal greeted every visitor at 3:04 PM for the life of the build.
      timestamp: '',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scroll = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages((prev) => prev.map((m) => (m.timestamp ? m : { ...m, timestamp: clock() })))
    const show = () => setOpen(true)
    window.addEventListener('open-chat-widget', show)
    return () => window.removeEventListener('open-chat-widget', show)
  }, [])

  useEffect(() => {
    if (scroll.current) scroll.current.scrollTop = scroll.current.scrollHeight
  }, [messages, loading, open])

  const send = async (text: string) => {
    if (!text.trim() || loading) return

    const said: Message = { id: String(Date.now()), role: 'user', content: text.trim(), timestamp: clock() }
    const said_so_far = [...messages, said]
    setMessages(said_so_far)
    setInput('')
    setLoading(true)

    const body = {
      messages: [
        { role: 'system', content: prompt(corpus) },
        ...said_so_far.map((m) => ({ role: m.role, content: m.content })),
      ],
    }
    const answer = (id: string, content: string): Message => ({ id, role: 'assistant', content, timestamp: clock() })
    const id = String(Date.now() + 1)

    try {
      let reply = ''
      try {
        const res = await fetch(API_PRIMARY, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        if (res.ok) reply = (await res.json()).choices?.[0]?.message?.content || ''
      } catch (e) {
        console.warn('Primary chat failed, trying fallback', e)
      }

      if (!reply) {
        const res = await fetch(API_FALLBACK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: 'zen-free', ...body }),
        })
        if (!res.ok) {
          const said = await res.json().catch(() => null)
          throw new Error(said?.error?.message ?? `${res.status} ${res.statusText}`)
        }
        reply = (await res.json()).choices?.[0]?.message?.content || ''
      }

      setMessages((prev) => [
        ...prev,
        answer(
          id,
          reply || 'Zoo Labs Foundation publishes open models at huggingface.co/zenlm and papers at papers.zoo.ngo.',
        ),
      ])
    } catch (err) {
      const why = err instanceof Error ? err.message : String(err)
      setMessages((prev) => [
        ...prev,
        answer(id, `I could not reach the server right now (${why}). The papers are at papers.zoo.ngo and models at huggingface.co/zenlm.`),
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 88,
            right: 'clamp(12px, 3vw, 24px)',
            width: 380,
            maxWidth: 'calc(100vw - 24px)',
            height: 580,
            maxHeight: 'calc(100vh - 120px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-2xl)',
            zIndex: 'var(--z-popover)' as unknown as number,
          }}
          role='dialog'
          aria-label='Chat with Blue'
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-3)',
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--blue)',
              color: '#fff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', minWidth: 0 }}>
              <img src={AVATAR} alt='' width={44} height={44} style={face} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-bold)', lineHeight: 1.2 }}>Blue</div>
                <div style={{ fontSize: 'var(--text-xs)', opacity: 0.85 }}>Your AI research assistant</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label='Close chat'
              style={{
                display: 'inline-flex',
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-full)',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div
            ref={scroll}
            style={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              padding: 'var(--space-4)',
            }}
          >
            {messages.map((m) => (
              <Turn key={m.id} of={m} />
            ))}

            {loading && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <img src={AVATAR} alt='' width={28} height={28} style={face} />
                <div
                  style={{
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--paper)',
                    color: 'var(--text-tertiary)',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  Blue is thinking…
                </div>
              </div>
            )}

            <div>
              <p className='eyebrow' style={{ marginBottom: 'var(--space-2)' }}>
                Ask about
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)' }}>
                {ASKS.map((a) => (
                  <button
                    key={a.label}
                    onClick={() => send(a.query)}
                    style={{
                      padding: 'var(--space-2)',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--blue)',
                      color: 'var(--blue)',
                      background: '#fff',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--weight-medium)',
                      cursor: 'pointer',
                    }}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: 'var(--space-3)', borderTop: '1px solid var(--border)' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: '6px 6px 6px var(--space-4)',
                border: '1px solid var(--border-control)',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask about papers, Zen models, Blue…'
                disabled={loading}
                aria-label='Message Blue'
                style={{
                  flex: 1,
                  minWidth: 0,
                  border: 0,
                  outline: 'none',
                  background: 'transparent',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-primary)',
                }}
              />
              <button
                type='submit'
                disabled={!input.trim() || loading}
                aria-label='Send'
                style={{
                  display: 'inline-flex',
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--blue)',
                  color: '#fff',
                  opacity: !input.trim() || loading ? 0.4 : 1,
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <Send size={14} />
              </button>
            </form>
            <p style={{ marginTop: 6, textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
              Blue can make mistakes. Check important info.
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close Blue' : 'Ask Blue'}
        aria-expanded={open}
        style={{
          position: 'fixed',
          bottom: 'clamp(12px, 3vw, 24px)',
          right: 'clamp(12px, 3vw, 24px)',
          display: 'inline-flex',
          width: 56,
          height: 56,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-full)',
          background: 'var(--blue)',
          color: '#fff',
          boxShadow: 'var(--shadow-xl)',
          cursor: 'pointer',
          zIndex: 'var(--z-popover)' as unknown as number,
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  )
}
