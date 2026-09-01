import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { CORPUS } from '@/config/corpus';

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
          backgroundColor: '#ffffff',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '2px solid var(--ink)',
          boxShadow: '6px 6px 0 0 var(--ink)',
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
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '2px solid var(--ink)',
      }}
    >
      <div style={{ height: '100%', padding: '0 clamp(12px, 3vw, 32px)' }}>
        <div className="flex items-center justify-between" style={{ height: '100%' }}>
          {/* The wordmark carries the brand; the mark carries the AI and lives
              bottom right, in ChatWidget. Same lockup as zoo.industries and
              zoolabs.io — the org at full weight, what it does at light. */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <span
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}
              >
                Zoo&nbsp;<span style={{ fontWeight: 200 }}>Labs</span>
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav Pills */}
          <div
            className="hidden lg:flex items-center gap-1 p-0.5 rounded-full"
            style={{
              background: '#ffffff',
              border: '2px solid var(--ink)',
            }}
          >
            {/* Research */}
            <div className="relative" onMouseEnter={() => openDropdown('research')} onMouseLeave={closeDropdown}>
              <Link
                href="/research"
                className="flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Research
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="research">
                <div className="w-[340px]">
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mb-2">
                    Frontier Open Science
                  </p>
                  <div className="space-y-1.5 mb-2.5">
                    <a
                      href="https://papers.zoo.ngo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors block"
                    >
                      <p className="text-xs text-white font-semibold flex items-center justify-between">
                        <span>Research Papers ({CORPUS.papers})</span>
                        <span className="text-[10px] text-blue-400 font-mono">papers.zoo.ngo ↗</span>
                      </p>
                      <p className="text-[11px] text-zinc-400">TF-GRPO, ASO, Quasar Consensus</p>
                    </a>
                    <a
                      href="https://zips.zoo.ngo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors block"
                    >
                      <p className="text-xs text-white font-semibold flex items-center justify-between">
                        <span>Zoo Improvement Proposals</span>
                        <span className="text-[10px] text-emerald-400 font-mono">zips.zoo.ngo ↗</span>
                      </p>
                      <p className="text-[11px] text-zinc-400">Protocol RFCs & Agent standards</p>
                    </a>
                    <a
                      href="https://github.com/zoo-labs/chains"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors block"
                    >
                      <p className="text-xs text-white font-semibold flex items-center justify-between">
                        <span>Thinking Chains Datasets</span>
                        <span className="text-[10px] text-zinc-400 font-mono">chains ↗</span>
                      </p>
                      <p className="text-[11px] text-zinc-400">Verifiable multi-step reasoning traces</p>
                    </a>
                  </div>
                </div>
              </NavDropdown>
            </div>

            {/* Models */}
            <div className="relative" onMouseEnter={() => openDropdown('models')} onMouseLeave={closeDropdown}>
              <Link
                href="/ai"
                className="flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Models
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="models">
                <div className="w-[340px]">
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mb-2">
                    Open-Weights Zen Family
                  </p>
                  <div className="space-y-1.5 mb-2.5">
                    <a
                      href="https://huggingface.co/zenlm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors block"
                    >
                      <p className="text-xs text-white font-semibold flex items-center justify-between">
                        <span>Zen 5 Foundation Models</span>
                        <span className="text-[10px] font-mono" style={{ color: 'var(--blue)' }}>open weights</span>
                      </p>
                      <p className="text-[11px] text-zinc-400">MoE sparse architecture with open weights</p>
                    </a>
                    <a
                      href="https://huggingface.co/zenlm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors block"
                    >
                      <p className="text-xs text-white font-semibold flex items-center justify-between">
                        <span>Zen Code & Reasoning</span>
                        <span className="text-[10px] text-emerald-400 font-mono">SWE-bench</span>
                      </p>
                      <p className="text-[11px] text-zinc-400">Code synthesis and tool calling models</p>
                    </a>
                  </div>
                  <Link
                    href="/ai"
                    className="block w-full text-center text-xs text-zinc-300 hover:text-white py-1.5 border-t border-white/10 transition-colors"
                  >
                    View model benchmarks &rarr;
                  </Link>
                </div>
              </NavDropdown>
            </div>

            {/* Products / Platforms */}
            <div className="relative" onMouseEnter={() => openDropdown('products')} onMouseLeave={closeDropdown}>
              <Link
                href="/#products"
                className="flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Products
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="products">
                <div className="w-[380px]">
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mb-2">
                    Ecosystem Platforms
                  </p>
                  <div className="space-y-1.5 mb-2.5">
                    <a
                      href="https://zoolabs.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all block"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-blue-400 font-bold flex items-center gap-1.5">
                          <span>🐬</span>
                          <span>ZooLabs.io Studio</span>
                        </p>
                        <span className="text-[9px] bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded font-mono font-bold">
                          LIVE
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-300 mt-1">
                        Multi-agent Vibe sandbox, 4K video diffusion, DAW & 3D generator
                      </p>
                    </a>

                    <a
                      href="https://github.com/zooai/gym"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors block"
                    >
                      <p className="text-xs text-white font-semibold flex items-center justify-between">
                        <span>Zoo Gym (TF-GRPO)</span>
                        <span className="text-[10px] text-zinc-400 font-mono">gym ↗</span>
                      </p>
                      <p className="text-[11px] text-zinc-400">Training-free reinforcement learning framework</p>
                    </a>
                  </div>
                </div>
              </NavDropdown>
            </div>

            {/* Foundation */}
            <div className="relative" onMouseEnter={() => openDropdown('foundation')} onMouseLeave={closeDropdown}>
              <Link
                href="/about"
                className="flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Foundation
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <NavDropdown id="foundation">
                <div className="w-[300px]">
                  <div className="space-y-1 mb-2">
                    <Link href="/about" className="p-2 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">About Foundation</p>
                      <p className="text-[11px] text-zinc-400">501(c)(3) Non-Profit, EIN: 88-3538992</p>
                    </Link>
                    <Link href="/transparency" className="p-2 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">Transparency & Form 990</p>
                      <p className="text-[11px] text-zinc-400">Financial audits and disclosures</p>
                    </Link>
                    <Link href="/impact" className="p-2 rounded-lg hover:bg-white/5 transition-colors block">
                      <p className="text-xs text-white font-semibold">Sanctuary Endowments</p>
                      <p className="text-[11px] text-zinc-400">Frontline wildlife conservation</p>
                    </Link>
                  </div>
                  <Link
                    href="/donation"
                    className="block w-full text-center text-xs font-semibold text-emerald-400 hover:text-emerald-300 py-1.5 border-t border-white/10 transition-colors"
                  >
                    Tax-Deductible Donation &rarr;
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
              className="action px-3.5 py-1 text-xs"
              data-fill
              style={{ minHeight: '32px' }}
            >
              <span>🐬 Launch Studio ↗</span>
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
              backgroundColor: '#ffffff',
              borderColor: 'var(--ink)',
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
              background: 'var(--magenta)',
              color: '#ffffff',
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
