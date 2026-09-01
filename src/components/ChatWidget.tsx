import React, { useState, useRef, useEffect } from 'react'
import { Sparkles, X, ArrowUp, BookOpen } from 'lucide-react'
import { CORPUS } from '@/config/corpus'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT =
  'You are Zoo AI, the scientific research assistant for Zoo Labs Foundation Inc. (501(c)(3) non-profit). You answer questions about open-source Zen AI models, research papers at papers.zoo.ngo, Zoo Improvement Proposals at zips.zoo.ngo, thinking chains, Zoo Gym RL alignment, decentralized AI mining protocols, and tax-deductible conservation endowments. Be concise, authoritative, and helpful.'

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
      const res = await fetch('https://api.hanzo.ai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'zen',
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
            backgroundColor: 'rgba(18, 18, 22, 0.95)',
            backdropFilter: 'blur(32px) saturate(180%)',
            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
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
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
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
                      color: '#93C5FD',
                      fontWeight: 700,
                    }}
                  >
                    Zen 5
                  </span>
                </div>
                <p style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.5)' }}>501(c)(3) Research & Models</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
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
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
                color: '#93C5FD',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <BookOpen size={10} />
              <span>papers.zoo.ngo ↗</span>
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
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
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
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
                    borderRadius: msg.role === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                    padding: '9px 13px',
                    fontSize: '12px',
                    lineHeight: '1.55',
                    backgroundColor: msg.role === 'user' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.06)',
                    color: msg.role === 'user' ? '#000000' : 'rgba(255, 255, 255, 0.95)',
                    border: msg.role === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
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
                    borderRadius: '16px 16px 16px 2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
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
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.75)',
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
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
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
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !input.trim() ? 0.35 : 1,
                flexShrink: 0,
                border: 'none',
                boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)',
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
            height: '46px',
            padding: '0 16px 0 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(14, 14, 18, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFFFFF',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          aria-label={isOpen ? 'Close Zoo AI Copilot' : 'Open Zoo AI Copilot'}
        >
          <span style={{ fontSize: '18px' }}>🐬</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>
              {isOpen ? 'Close AI' : 'Zoo AI'}
            </span>
            <span style={{ fontSize: '9px', color: '#93C5FD', fontWeight: 600 }}>Zen 5 Models</span>
          </div>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#4ADE80',
              boxShadow: '0 0 6px #4ADE80',
            }}
          />
        </button>
      </div>
    </>
  )
}
