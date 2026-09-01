import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

type DropdownId = 'products' | 'models' | 'research' | 'foundation' | null

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownId>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const openDropdown = (id: DropdownId) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setActiveDropdown(id)
  }

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const NavDropdown = ({ id, children }: { id: DropdownId; children: React.ReactNode }) => (
    activeDropdown === id ? (
      <div
        className="absolute left-1/2 -translate-x-1/2 mt-2 rounded-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150 text-xs"
        style={{
          backgroundColor: 'rgba(12, 12, 16, 0.98)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.9), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        }}
        onMouseEnter={() => openDropdown(id)}
        onMouseLeave={closeDropdown}
      >
        {children}
      </div>
    ) : null
  )

  return (
    <nav
      className="fixed top-0 left-0 right-0 text-xs font-sans select-none"
      style={{
        height: 48,
        zIndex: 999,
        backgroundColor: 'rgba(10, 10, 12, 0.88)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid var(--border, rgba(255, 255, 255, 0.08))',
      }}
    >
      <div style={{ height: '100%', padding: '0 clamp(12px, 3vw, 32px)' }}>
        <div className="flex items-center justify-between" style={{ height: '100%' }}>
          {/* Left: Unified ZOO Wordmark + 501(c)(3) Foundation Tag */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-white hover:opacity-80 transition-opacity">
                ZOO
              </span>
            </Link>

            <span className="text-zinc-600">/</span>

            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="truncate max-w-[140px] sm:max-w-none">501(c)(3) Foundation</span>
            </span>
          </div>

          {/* Center: Desktop Nav Pills */}
          <div
            className="hidden lg:flex items-center gap-1 p-0.5 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Products */}
            <div className="relative" onMouseEnter={() => openDropdown('products')} onMouseLeave={closeDropdown}>
              <Link
                href="/#products"
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Products
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="products">
                <div className="w-[420px]">
                  <p className="text-[11px] text-zinc-400 uppercase font-bold tracking-wider mb-2.5">
                    AI Platforms & Tools
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <a
                      href="https://zoolabs.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all col-span-2 block"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-blue-400 font-bold flex items-center gap-1.5">
                          <span>🐬</span>
                          <span>ZooLabs.io AI Studio</span>
                        </p>
                        <span className="text-[10px] bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full font-mono font-bold">
                          LIVE
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-1">
                        Multi-agent vibe sandbox, 4K video diffusion, bioacoustics DAW & 3D generator
                      </p>
                    </a>

                    <Link href="/ai" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                      <p className="text-xs text-white font-semibold">Zoo AI</p>
                      <p className="text-[11px] text-zinc-400">Desktop app, local inference</p>
                    </Link>
                    <Link href="/ai#gym" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                      <p className="text-xs text-white font-semibold">Zoo Gym</p>
                      <p className="text-[11px] text-zinc-400">Open-source training platform</p>
                    </Link>
                    <Link href="/animals" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                      <p className="text-xs text-white font-semibold">Animal Familiars</p>
                      <p className="text-[11px] text-zinc-400">Autonomous AI conservation bots</p>
                    </Link>
                    <Link href="/impact" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                      <p className="text-xs text-white font-semibold">Bioacoustic Sensors</p>
                      <p className="text-[11px] text-zinc-400">120kHz sanctuary telemetry</p>
                    </Link>
                  </div>
                </div>
              </NavDropdown>
            </div>

            {/* Models */}
            <div className="relative" onMouseEnter={() => openDropdown('models')} onMouseLeave={closeDropdown}>
              <Link
                href="/ai"
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Models
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="models">
                <div className="w-[360px]">
                  <p className="text-[11px] text-zinc-400 uppercase font-bold tracking-wider mb-2.5">
                    Zen Model Family
                  </p>
                  <div className="space-y-1.5 mb-3">
                    <a
                      href="https://huggingface.co/zenlm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div>
                        <p className="text-xs text-white font-semibold">Foundation</p>
                        <p className="text-[11px] text-zinc-400">zen4-nano (0.6B) to zen4-ultra (480B MoE)</p>
                      </div>
                      <span className="text-[11px] text-zinc-400">18 models</span>
                    </a>
                    <a
                      href="https://huggingface.co/zenlm/zen4-coder-flash"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div>
                        <p className="text-xs text-white font-semibold">Code</p>
                        <p className="text-[11px] text-zinc-400">zen4-coder-flash to zen4-coder-pro</p>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-mono">59.2% SWE</span>
                    </a>
                    <a
                      href="https://huggingface.co/zenlm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div>
                        <p className="text-xs text-white font-semibold">Multimodal</p>
                        <p className="text-[11px] text-zinc-400">Vision, audio, video, 3D generation</p>
                      </div>
                      <span className="text-[11px] text-zinc-400">12 models</span>
                    </a>
                  </div>
                  <Link
                    href="/ai"
                    className="block w-full text-center text-xs text-zinc-300 hover:text-white py-2 border-t border-white/10 transition-colors"
                  >
                    View all 45+ open models →
                  </Link>
                </div>
              </NavDropdown>
            </div>

            {/* Research */}
            <div className="relative" onMouseEnter={() => openDropdown('research')} onMouseLeave={closeDropdown}>
              <Link
                href="/research"
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Research
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="research">
                <div className="w-[320px]">
                  <div className="space-y-1.5 mb-3">
                    <Link href="/research" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">Papers</p>
                      <p className="text-[11px] text-zinc-400">7 peer-reviewed AI publications</p>
                    </Link>
                    <Link href="/ai#gym" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">Zoo Gym</p>
                      <p className="text-[11px] text-zinc-400">Training-free GRPO & LoRA</p>
                    </Link>
                    <Link href="/research" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">Formal Proofs</p>
                      <p className="text-[11px] text-zinc-400">15 Lean 4 verified proofs</p>
                    </Link>
                  </div>
                  <a
                    href="https://github.com/zooai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-xs text-zinc-300 hover:text-white py-2 border-t border-white/10 transition-colors"
                  >
                    View on GitHub →
                  </a>
                </div>
              </NavDropdown>
            </div>

            {/* Foundation */}
            <div className="relative" onMouseEnter={() => openDropdown('foundation')} onMouseLeave={closeDropdown}>
              <Link
                href="/about"
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Foundation
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="foundation">
                <div className="w-[300px]">
                  <div className="space-y-1.5 mb-3">
                    <Link href="/about" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">About 501(c)(3)</p>
                      <p className="text-[11px] text-zinc-400">Mission, EIN 88-3538992</p>
                    </Link>
                    <Link href="/impact" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">Conservation Impact</p>
                      <p className="text-[11px] text-zinc-400">Protected wildlife habitats</p>
                    </Link>
                    <Link href="/transparency" className="p-2.5 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">Transparency & 990</p>
                      <p className="text-[11px] text-zinc-400">Public financial disclosures</p>
                    </Link>
                  </div>
                  <Link
                    href="/donation"
                    className="block w-full text-center text-xs font-semibold text-blue-400 hover:text-blue-300 py-2 border-t border-white/10 transition-colors"
                  >
                    Tax-Deductible Donation →
                  </Link>
                </div>
              </NavDropdown>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Link
              href="/donation"
              className="action px-3 py-1 text-xs hidden sm:inline-flex"
              style={{ minHeight: '32px' }}
            >
              Donate
            </Link>

            <a
              href="https://zoolabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="action px-3 py-1 text-xs"
              data-fill
              style={{ minHeight: '32px' }}
            >
              <span>🐬 Launch Studio</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay and Menu */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md"
            style={{ top: 48, zIndex: 998 }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="lg:hidden fixed left-0 right-0 p-4 border-b space-y-3 text-xs"
            style={{
              top: 48,
              zIndex: 999,
              backgroundColor: '#0a0a0c',
              borderColor: 'rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.95)',
            }}
          >
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/#products"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-white font-semibold"
            >
              <span>🛠️</span>
              <span>Products</span>
            </Link>
            <Link
              href="/ai"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-white font-semibold"
            >
              <span>🧠</span>
              <span>Zen Models</span>
            </Link>
            <Link
              href="/research"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-white font-semibold"
            >
              <span>📄</span>
              <span>Research</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-white font-semibold"
            >
              <span>🏛️</span>
              <span>Foundation</span>
            </Link>
            <Link
              href="/impact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-white font-semibold"
            >
              <span>🌿</span>
              <span>Impact</span>
            </Link>
            <Link
              href="/donation"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 font-semibold"
            >
              <span>💚</span>
              <span>Donate (501c3)</span>
            </Link>
          </div>

          <a
            href="https://zoolabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-bold"
            style={{
              background: '#FFFFFF',
              color: '#000000',
            }}
          >
            <span>🐬 Launch ZooLabs.io Studio ↗</span>
          </a>
        </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
