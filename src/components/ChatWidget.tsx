import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT =
  'You are Zoo AI, the research assistant for Zoo Labs Foundation — a 501(c)(3) non-profit building the Zen family of open-source AI models. Be helpful, concise, and knowledgeable about AI research, Zen models, Zoo Gym training platform, and the Zoo Network.'

const PRESETS = [
  { label: 'Models', text: 'Tell me about Zen models' },
  { label: 'Research', text: 'What research does Zoo do?' },
  { label: 'Gym', text: 'What is Zoo Gym?' },
  { label: 'Network', text: 'How does the Zoo Network work?' },
]

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

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
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer hz_widget_public',
        },
        body: JSON.stringify({
          model: 'zen4-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...next.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      })

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
      }

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.' },
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
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[480px] max-h-[70vh] bg-background border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <Image alt="" aria-hidden src="/favicon/logo.svg" width={20} height={20} className="w-5 h-5" />
              <div>
                <span className="text-sm font-semibold text-foreground">Zoo AI</span>
                <p className="text-xs text-muted-foreground">Powered by Zen models</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <p className="text-sm text-muted-foreground">Ask about Zoo research</p>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {PRESETS.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => sendMessage(p.text)}
                      className="text-xs text-muted-foreground border border-border rounded-lg px-3 py-2 hover:border-gray-500 hover:text-foreground transition-colors"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-foreground text-background'
                      : 'bg-accent text-gray-200'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-accent rounded-xl px-3 py-2 text-sm text-muted-foreground">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Zoo research..."
                className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder-gray-500 outline-none focus:border-gray-500 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-foreground text-background rounded-full p-2 hover:bg-gray-100 transition-colors disabled:opacity-40"
                aria-label="Send"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-foreground text-background shadow-lg hover:shadow-xl hover:scale-105 transition-all z-50 flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // The MARK, not a paw. The paw was drawn here in five primitives —
          // a second Zoo logo, invented locally, that looked nothing like the
          // one in the header two inches above it. This is the same file the
          // Navbar loads, so there is one mark and it cannot drift.
          <Image alt="" aria-hidden src="/favicon/logo.svg" width={36} height={36} className="w-9 h-9" />
        )}
      </button>
    </>
  )
}

export default ChatWidget
