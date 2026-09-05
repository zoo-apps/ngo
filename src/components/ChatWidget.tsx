import React, { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Paperclip, Send } from "lucide-react"
import { CORPUS } from "@/config/corpus"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: string
}

const API_PRIMARY = "https://api.hanzo.ai/v1/chat/public"
const API_FALLBACK = "https://api.zoo.cloud/v1/chat/completions"

const SYSTEM_PROMPT = [
  "You are Blue, the friendly beluga whale and AI research assistant for Zoo Labs Foundation Inc., a 501(c)(3) non-profit research organization (EIN 88-3538992).",
  `What the foundation has published, exactly: ${CORPUS.papers} papers at papers.zoo.ngo, and ${CORPUS.proposals} improvement proposals at zips.zoo.ngo. The open Zen models are at huggingface.co/zenlm. The code is at github.com/zooai.`,
  "Never invent papers, numbers, or dates. If you do not know, say so and point to papers.zoo.ngo or zips.zoo.ngo.",
  "Be concise, warm, helpful, and plain. 2 to 3 sentences unless asked for more details.",
].join("\n\n")

const QUICK_ACTIONS = [
  { label: "📄 Find research papers", query: "What research papers have Zoo Labs published?" },
  { label: "🤖 Explore open models", query: "Tell me about the open Zen model family." },
  { label: "🌊 Conservation research", query: "What conservation research does Zoo Labs focus on?" },
  { label: "💙 Get involved / Donate", query: "How can I support or donate to the Foundation?" },
]

function formatCurrentTime() {
  const d = new Date()
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Hi! I'm Blue, the Zoo Labs research assistant. I can help you find papers, learn about our open models, or get involved with the Foundation.",
      timestamp: "3:04 PM",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener("open-chat-widget", handleOpen)
    return () => window.removeEventListener("open-chat-widget", handleOpen)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading, isOpen])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
      timestamp: formatCurrentTime(),
    }

    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setInput("")
    setLoading(true)

    const assistantMsgId = (Date.now() + 1).toString()

    try {
      let reply = ""
      try {
        const res = await fetch(API_PRIMARY, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...nextMessages.map((m) => ({ role: m.role, content: m.content })),
            ],
          }),
        })

        if (res.ok) {
          const data = await res.json()
          reply = data.choices?.[0]?.message?.content || ""
        }
      } catch (e) {
        console.warn("Primary chat failed, trying fallback", e)
      }

      if (!reply) {
        const res = await fetch(API_FALLBACK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "zen-free",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...nextMessages.map((m) => ({ role: m.role, content: m.content })),
            ],
          }),
        })

        if (!res.ok) {
          const body = await res.json().catch(() => null)
          throw new Error(body?.error?.message ?? `${res.status} ${res.statusText}`)
        }

        const data = await res.json()
        reply = data.choices?.[0]?.message?.content || ""
      }

      if (!reply) {
        reply = "Zoo Labs Foundation publishes open models at huggingface.co/zenlm and papers at papers.zoo.ngo."
      }

      setMessages((prev) => [
        ...prev,
        {
          id: assistantMsgId,
          role: "assistant",
          content: reply,
          timestamp: formatCurrentTime(),
        },
      ])
    } catch (err) {
      const why = err instanceof Error ? err.message : String(err)
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMsgId,
          role: "assistant",
          content: `I could not reach the server right now (${why}). The papers are at papers.zoo.ngo and models at huggingface.co/zenlm.`,
          timestamp: formatCurrentTime(),
        },
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
      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 w-[380px] max-w-[calc(100vw-32px)] h-[580px] max-h-[calc(100vh-120px)] bg-white rounded-3xl shadow-2xl border border-zinc-200/80 overflow-hidden flex flex-col z-[9999] transition-all"
        >
          {/* Header */}
          <div className="bg-[#0066FF] px-4 py-3.5 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/90 shadow-sm shrink-0 bg-blue-400">
                <img
                  src="/images/blue_avatar.png"
                  alt="Blue"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#00E676] border-2 border-[#0066FF] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight text-white">Blue</h3>
                <p className="text-blue-100 text-xs">Your AI research assistant</p>
                <div className="flex items-center gap-1.5 text-blue-100 text-[11px] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E676]"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-white"
          >
            {messages.map((msg) => (
              <div key={msg.id}>
                {msg.role === "assistant" ? (
                  <div className="flex items-start gap-2.5 max-w-[90%]">
                    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-0.5 bg-blue-100 shadow-2xs">
                      <img
                        src="/images/blue_avatar.png"
                        alt="Blue"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="bg-zinc-100 text-zinc-900 rounded-2xl rounded-tl-xs px-4 py-3 text-[13px] leading-relaxed whitespace-pre-wrap">
                        {msg.content}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-1 pl-1">
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="ml-auto max-w-[85%]">
                    <div className="bg-[#0066FF] text-white rounded-2xl rounded-tr-xs px-4 py-3 text-[13px] leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </div>
                    <div className="text-[11px] text-zinc-400 text-right mt-1 pr-1">
                      {msg.timestamp} ✓
                    </div>
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2.5 max-w-[90%]">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-0.5 bg-blue-100">
                  <img
                    src="/images/blue_avatar.png"
                    alt="Blue"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-100 text-zinc-500 rounded-2xl rounded-tl-xs px-4 py-3 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-300"></span>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 px-0.5">
                QUICK ACTIONS
              </p>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => sendMessage(action.query)}
                    className="w-full py-2 px-2.5 rounded-full border border-[#0066FF] text-[#0066FF] bg-white hover:bg-blue-50/80 text-[11px] font-medium flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-2xs text-center"
                  >
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 pt-1 bg-white border-t border-zinc-100">
            <form
              onSubmit={handleSubmit}
              className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 flex items-center gap-2 focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about papers, Zen models, Blue, etc."
                className="text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none bg-transparent flex-1"
                disabled={loading}
              />
              <button
                type="button"
                className="text-zinc-400 hover:text-zinc-600 transition-colors p-1 cursor-pointer"
                title="Attach"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-7 h-7 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white flex items-center justify-center transition-all disabled:opacity-40 shrink-0 cursor-pointer shadow-xs"
                title="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-[10px] text-zinc-400 text-center mt-1.5">
              Blue can make mistakes. Check important info.
            </p>
          </div>
        </div>
      )}

      {/* Floating Circular Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#0066FF] hover:bg-blue-600 shadow-xl flex items-center justify-center text-white transition-all transform hover:scale-105 z-[9999] cursor-pointer"
        aria-label="Open Blue Chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </>
  )
}
