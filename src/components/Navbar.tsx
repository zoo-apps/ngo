import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
        className="absolute left-1/2 -translate-x-1/2 mt-3 bg-background border border-border rounded-2xl shadow-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-150"
        onMouseEnter={() => openDropdown(id)}
        onMouseLeave={closeDropdown}
      >
        {children}
      </div>
    ) : null
  )

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[999]"
      style={{
        height: 60,
        background: 'rgba(9,9,11,0.85)',
        backdropFilter: 'blur(20px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ height: '100%', padding: '0 clamp(16px, 4vw, 64px)' }}>
        <div className="flex items-center justify-between" style={{ height: '100%' }}>
          {/* Left: Logo + 501(c)(3) Tag */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image alt="Zoo" src="/favicon/logo.svg" width={32} height={32} />
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-foreground leading-none">ZOO LABS</span>
              <span className="text-[9px] text-emerald-400 font-semibold tracking-wider">FOUNDATION 501(C)(3)</span>
            </div>
          </Link>

          {/* Center: Nav (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {/* Products */}
            <div className="relative" onMouseEnter={() => openDropdown('products')} onMouseLeave={closeDropdown}>
              <Link href="/#products" className="text-[13px] font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors flex items-center gap-1">
                Products
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <NavDropdown id="products">
                <div className="w-[440px]">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">AI Platforms & Tools</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <a href="https://zoolabs.io" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all col-span-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-blue-400 font-bold flex items-center gap-1.5">
                          <span>🐬</span>
                          <span>ZooLabs.io AI Playground</span>
                        </p>
                        <span className="text-[10px] bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full font-mono font-bold">LIVE</span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-1">Multi-agent vibe sandbox, 4K video diffusion, bioacoustics DAW & 3D generator</p>
                    </a>

                    <Link href="/ai" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Zoo AI</p>
                      <p className="text-xs text-muted-foreground">Desktop app, local inference</p>
                    </Link>
                    <Link href="/ai#gym" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Zoo Gym</p>
                      <p className="text-xs text-muted-foreground">Open-source training platform</p>
                    </Link>
                    <Link href="/animals" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Animal Familiars</p>
                      <p className="text-xs text-muted-foreground">Autonomous AI conservation bots</p>
                    </Link>
                    <Link href="/impact" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Bioacoustic Sensors</p>
                      <p className="text-xs text-muted-foreground">120kHz sanctuary telemetry</p>
                    </Link>
                  </div>
                </div>
              </NavDropdown>
            </div>

            {/* Models */}
            <div className="relative" onMouseEnter={() => openDropdown('models')} onMouseLeave={closeDropdown}>
              <Link href="/ai" className="text-[13px] font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors flex items-center gap-1">
                Models
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <NavDropdown id="models">
                <div className="w-[380px]">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Zen Model Family</p>
                  <div className="space-y-1.5 mb-4">
                    <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <p className="text-sm text-foreground font-medium">Foundation</p>
                        <p className="text-xs text-muted-foreground">zen4-nano (0.6B) to zen4-ultra (480B MoE)</p>
                      </div>
                      <span className="text-xs text-muted-foreground">18 models</span>
                    </a>
                    <a href="https://huggingface.co/zenlm/zen4-coder-flash" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <p className="text-sm text-foreground font-medium">Code</p>
                        <p className="text-xs text-muted-foreground">zen4-coder-flash to zen4-coder-pro</p>
                      </div>
                      <span className="text-xs text-foreground">59.2% SWE-bench</span>
                    </a>
                    <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <p className="text-sm text-foreground font-medium">Multimodal</p>
                        <p className="text-xs text-muted-foreground">Vision, audio, video, 3D generation</p>
                      </div>
                      <span className="text-xs text-muted-foreground">12 models</span>
                    </a>
                  </div>
                  <Link href="/ai" className="block w-full text-center text-sm text-muted-foreground hover:text-foreground py-2 border-t border-border transition-colors">
                    View all 45+ open models →
                  </Link>
                </div>
              </NavDropdown>
            </div>

            {/* Research */}
            <div className="relative" onMouseEnter={() => openDropdown('research')} onMouseLeave={closeDropdown}>
              <Link href="/research" className="text-[13px] font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors flex items-center gap-1">
                Research
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <NavDropdown id="research">
                <div className="w-[340px]">
                  <div className="space-y-1.5 mb-4">
                    <Link href="/research" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Papers</p>
                      <p className="text-xs text-muted-foreground">7 peer-reviewed AI publications</p>
                    </Link>
                    <Link href="/ai#gym" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Zoo Gym</p>
                      <p className="text-xs text-muted-foreground">Training-free GRPO & LoRA</p>
                    </Link>
                    <Link href="/research" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Formal Proofs</p>
                      <p className="text-xs text-muted-foreground">15 Lean 4 verified proofs</p>
                    </Link>
                  </div>
                  <a href="https://github.com/zooai" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm text-muted-foreground hover:text-foreground py-2 border-t border-border transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </NavDropdown>
            </div>

            {/* Foundation */}
            <div className="relative" onMouseEnter={() => openDropdown('foundation')} onMouseLeave={closeDropdown}>
              <Link href="/about" className="text-[13px] font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors flex items-center gap-1">
                Foundation
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <NavDropdown id="foundation">
                <div className="w-[320px]">
                  <div className="space-y-1.5 mb-4">
                    <Link href="/about" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">About 501(c)(3)</p>
                      <p className="text-xs text-muted-foreground">Mission, EIN 88-3538992</p>
                    </Link>
                    <Link href="/impact" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Conservation Impact</p>
                      <p className="text-xs text-muted-foreground">Protected wildlife habitats</p>
                    </Link>
                    <Link href="/transparency" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Transparency & 990</p>
                      <p className="text-xs text-muted-foreground">Public financial disclosures</p>
                    </Link>
                  </div>
                  <Link href="/donation" className="block w-full text-center text-sm font-semibold text-blue-400 hover:text-blue-300 py-2 border-t border-border transition-colors">
                    Tax-Deductible Donation →
                  </Link>
                </div>
              </NavDropdown>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                )}
              </button>
            )}

            <Link
              href="/donation"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border transition-colors hidden sm:inline-block"
            >
              Donate (501c3)
            </Link>

            <a
              href="https://zoolabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
            >
              <span>🐬 Launch ZooLabs.io</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            top: 60,
            left: 0,
            right: 0,
            height: 'calc(100dvh - 60px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--color-bg, #0a0a0a)',
          }}
        >
          <div className="px-4 py-4 space-y-4" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <a
              href="https://zoolabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md"
            >
              <span>🐬 Launch ZooLabs.io AI Playground</span>
            </a>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/ai" onClick={() => setMobileOpen(false)} className="p-2.5 rounded-lg bg-accent/50 text-foreground font-medium">
                Zen Models
              </Link>
              <Link href="/ai#gym" onClick={() => setMobileOpen(false)} className="p-2.5 rounded-lg bg-accent/50 text-foreground font-medium">
                Zoo Gym
              </Link>
              <Link href="/research" onClick={() => setMobileOpen(false)} className="p-2.5 rounded-lg bg-accent/50 text-foreground font-medium">
                Research Papers
              </Link>
              <Link href="/donation" onClick={() => setMobileOpen(false)} className="p-2.5 rounded-lg bg-accent/50 text-foreground font-medium">
                501(c)(3) Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
