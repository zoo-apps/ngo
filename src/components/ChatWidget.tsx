import React, { useState, useRef, useEffect } from 'react'
import { Sparkles, X, ArrowUp, BookOpen } from 'lucide-react'
import { CORPUS } from '@/config/corpus'

// api.zoo.cloud, not api.hanzo.ai: the gateway sends no CORS headers and
// refuses anonymous callers, so a browser cannot reach it from a static site.
// The proxy holds the tenant credential and allows this origin.
const API = process.env.NEXT_PUBLIC_ZOO_API ?? 'https://api.zoo.cloud'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

// The facts are stated here rather than left to the model. Asked what the
// foundation publishes, a small model answered "50+ research papers annually",
// which is invented — and an invented number on a charity's own site is the
// thing this whole surface exists not to do. "Authoritative" was the wrong
// instruction to give a model that does not know.
const SYSTEM_PROMPT = [
  'You are Zoo AI, the assistant for Zoo Labs Foundation Inc., a 501(c)(3) non-profit research organisation (EIN 88-3538992).',
  `What the foundation has published, exactly: ${CORPUS.papers} papers at papers.zoo.ngo, and ${CORPUS.proposals} improvement proposals at zips.zoo.ngo. The open Zen models are at huggingface.co/zenlm. The code is at github.com/zooai. Blue, a beluga who answers questions about the ocean, is at zoolabs.io.`,
  'Never state a number, a date, a partner or a result that is not given above. If you do not know, say so and point to the page that would. A wrong figure on a charity page is worse than no figure.',
  'Be brief and plain. Two or three sentences unless asked for more.',
].join('\n\n')

const PRESETS = [
  { label: '📄 Papers', text: 'What research papers have Zoo Labs published?' },
  { label: '🧠 Zen Models', text: 'Tell me about the open Zen model family.' },
  { label: '⚡ Zoo Gym', text: 'How does Zoo Gym (Training-Free GRPO) work?' },
  { label: '🐋 Blue', text: 'What is Blue, and who is it for?' },
  { label: '⚡ ZIPs RFCs', text: 'What are Zoo Improvement Proposals (zips.zoo.ngo)?' },
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi — ask me about Zoo Labs: the ${CORPUS.papers} papers, the ${CORPUS.proposals} improvement proposals, the open Zen models, or how to help.`,
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading, isOpen])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMsg: Message = { role: 'user', content: text.trim() }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API}/v1/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // zen-free, not zen: both are served, but `zen` bills through to an
          // upstream that answers "Insufficient credits", which is a 402 the
          // visitor can do nothing about.
          model: 'zen-free',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...next.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error?.message ?? `${res.status} ${res.statusText}`)
      }

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content
      if (!reply) throw new Error('the model returned an empty reply')
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      // Say what went wrong. Answering on the model's behalf is how a charity
      // ends up publishing claims nobody wrote.
      const why = err instanceof Error ? err.message : String(err)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `I could not reach the model just now — ${why}. Nothing was made up in its place. The papers are at papers.zoo.ngo and the proposals at zips.zoo.ngo.` },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Floating Chat Popover */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '24px',
            width: 'clamp(320px, 92vw, 420px)',
            height: '560px',
            maxHeight: 'calc(100vh - 110px)',
            zIndex: 9999,
            backgroundColor: '#ffffff',
            
            
            border: '2px solid var(--ink)',
            borderRadius: 0,
            boxShadow: '6px 6px 0 0 var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '2px solid var(--ink)',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 0,
                  backgroundColor: '#ffffff',
                  border: '2px solid var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                }}
              >
                🐬
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#fff' }}>Zoo AI Copilot</span>
                  <span
                    style={{
                      fontSize: '9px',
                      padding: '2px 6px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(59, 130, 246, 0.15)',
                      color: 'var(--blue)',
                      fontWeight: 700,
                    }}
                  >
                    Zen
                  </span>
                </div>
                <p style={{ fontSize: '10px', color: 'rgba(0,0,0,0.6)' }}>501(c)(3) Research & Models</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: 0,
                backgroundColor: '#ffffff',
                border: '2px solid var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink)',
                cursor: 'pointer',
              }}
              aria-label="Close chat"
            >
              <X size={14} />
            </button>
          </div>

          {/* Quick links banner */}
          <div
            style={{
              padding: '6px 12px',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderBottom: '2px solid var(--ink)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflowX: 'auto',
              fontSize: '10px',
            }}
          >
            <a
              href="https://papers.zoo.ngo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--blue)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <BookOpen size={10} />
              <span>papers.zoo.ngo ↗</span>
            </a>
            <span style={{ color: 'rgba(0,0,0,0.3)' }}>·</span>
            <a
              href="https://zips.zoo.ngo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: '#86EFAC',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <Sparkles size={10} />
              <span>zips.zoo.ngo ↗</span>
            </a>
            <span style={{ color: 'rgba(0,0,0,0.3)' }}>·</span>
            <a
              href="https://zoolabs.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: '#FDE047',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <span>zoolabs.io ↗</span>
            </a>
          </div>

          {/* Message Thread */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    borderRadius: 0,
                    padding: '9px 13px',
                    fontSize: '12px',
                    lineHeight: '1.55',
                    backgroundColor: msg.role === 'user' ? 'var(--blue)' : '#ffffff',
                    color: msg.role === 'user' ? '#ffffff' : 'var(--ink)',
                    border: '2px solid var(--ink)',
                    boxShadow: msg.role === 'user' ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '8px 14px',
                    borderRadius: 0,
                    backgroundColor: '#ffffff',
                    border: '2px solid var(--ink)',
                    fontSize: '12px',
                    color: 'rgba(0,0,0,0.66)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ animation: 'pulse 1s infinite' }}>Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Preset Pills */}
          <div
            style={{
              padding: '6px 12px',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              borderTop: '2px solid var(--ink)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}
          >
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => sendMessage(p.text)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontSize: '10px',
                  fontWeight: 600,
                  backgroundColor: '#ffffff',
                  border: '2px solid var(--ink)',
                  color: 'var(--ink)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '10px 12px',
              borderTop: '2px solid var(--ink)',
              backgroundColor: 'rgba(10, 10, 12, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about papers, Zen models, ZIPs..."
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                border: '2px solid var(--ink)',
                borderRadius: 0,
                padding: '8px 12px',
                fontSize: '12px',
                color: '#fff',
                outline: 'none',
              }}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 0,
                backgroundColor: '#FFFFFF',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !input.trim() ? 0.35 : 1,
                flexShrink: 0,
                border: 'none',
                boxShadow: '3px 3px 0 0 var(--ink)',
              }}
              aria-label="Send message"
            >
              <ArrowUp size={14} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Bottom-Right Trigger */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9998,
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            height: '52px',
            padding: '0 16px 0 10px',
            border: '2px solid var(--ink)',
            background: '#ffffff',
            boxShadow: '6px 6px 0 0 var(--ink)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--ink)',
            cursor: 'pointer',
          }}
          aria-label={isOpen ? 'Close Zoo AI' : 'Ask Zoo AI'}
        >
          {/* The mark is the launcher. It is the one place the CMYK Venn
              appears on the page, so it reads as the thing to press. */}
          <img src="/zoo-color-logo.svg" alt="" width={34} height={34} />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {isOpen ? 'Close' : 'Ask Zoo'}
          </span>
        </button>
      </div>
    </>
  )
}
