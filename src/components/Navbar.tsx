import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

type DropdownId = 'products' | 'models' | 'research' | 'network' | 'tryzen' | null

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
        className="absolute left-1/2 -translate-x-1/2 mt-3 bg-background border border-border rounded-2xl shadow-2xl p-5 z-50"
        onMouseEnter={() => openDropdown(id)}
        onMouseLeave={closeDropdown}
      >
        {children}
      </div>
    ) : null
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-200 ${
        scrolled
          ? 'backdrop-blur-md bg-background/80 border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image alt="Zoo" src="/favicon/logo.svg" width={36} height={36} />
            <Image alt="Zoo" src="/zooLogo.svg" width={56} height={56} className="hidden sm:block" />
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
                <div className="w-[420px]">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Platform</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Link href="/ai" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Zoo AI</p>
                      <p className="text-xs text-muted-foreground">Desktop app, local inference</p>
                    </Link>
                    <Link href="/ai#gym" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Zoo Gym</p>
                      <p className="text-xs text-muted-foreground">Open-source training platform</p>
                    </Link>
                    <a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Zoo Chat</p>
                      <p className="text-xs text-muted-foreground">Chat with Zen models</p>
                    </a>
                    <Link href="/coin" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Zoo Network</p>
                      <p className="text-xs text-muted-foreground">Decentralized AI compute</p>
                    </Link>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Ecosystem</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/animals" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                        <p className="text-sm text-foreground font-medium">Zoo Agents</p>
                        <p className="text-xs text-muted-foreground">Autonomous AI animals</p>
                      </Link>
                      <a href="https://zoo.exchange" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                        <p className="text-sm text-foreground font-medium">Zoo Exchange</p>
                        <p className="text-xs text-muted-foreground">Trade $ZOO and $AI</p>
                      </a>
                      <Link href="/donation" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                        <p className="text-sm text-foreground font-medium">Zoo Fund</p>
                        <p className="text-xs text-muted-foreground">On-chain research grants</p>
                      </Link>
                      <Link href="/animals" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                        <p className="text-sm text-foreground font-medium">Collections</p>
                        <p className="text-xs text-muted-foreground">AI-generated NFT art</p>
                      </Link>
                    </div>
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
                    <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <p className="text-sm text-foreground font-medium">Safety</p>
                        <p className="text-xs text-muted-foreground">zen-guard content safety & alignment</p>
                      </div>
                      <span className="text-xs text-muted-foreground">3 models</span>
                    </a>
                  </div>
                  <Link href="/ai" className="block w-full text-center text-sm text-muted-foreground hover:text-foreground py-2 border-t border-border transition-colors">
                    View all models →
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
                      <p className="text-xs text-muted-foreground">7 research publications</p>
                    </Link>
                    <a href="https://zips.zoo.ngo" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">ZIPs</p>
                      <p className="text-xs text-muted-foreground">102 improvement proposals</p>
                    </a>
                    <Link href="/ai#gym" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Zoo Gym</p>
                      <p className="text-xs text-muted-foreground">Open-source training platform</p>
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

            {/* Network */}
            <div className="relative" onMouseEnter={() => openDropdown('network')} onMouseLeave={closeDropdown}>
              <Link href="/coin" className="text-[13px] font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors flex items-center gap-1">
                Network
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <NavDropdown id="network">
                <div className="w-[340px]">
                  <div className="space-y-1.5 mb-4">
                    <Link href="/coin" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Zoo Network</p>
                      <p className="text-xs text-muted-foreground">L2 AI specialization chain</p>
                    </Link>
                    <a href="https://zoo.exchange" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Zoo Exchange</p>
                      <p className="text-xs text-muted-foreground">Trade $ZOO and $AI tokens</p>
                    </a>
                    <a href="https://explore.lux.network" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Explorer</p>
                      <p className="text-xs text-muted-foreground">Browse transactions and blocks</p>
                    </a>
                    <a href="https://lux.market" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Market</p>
                      <p className="text-xs text-muted-foreground">NFTs, digital assets, collectibles</p>
                    </a>
                    <a href="https://wallet.lux.network" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors block">
                      <p className="text-sm text-foreground font-medium">Wallet</p>
                      <p className="text-xs text-muted-foreground">Non-custodial, post-quantum secure</p>
                    </a>
                  </div>
                  <a href="https://docs.lux.network" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm text-muted-foreground hover:text-foreground py-2 border-t border-border transition-colors">
                    Network docs →
                  </a>
                </div>
              </NavDropdown>
            </div>

          </div>

          {/* Right: CTAs */}
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
              href="https://github.com/zooai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>

            {/* Try Zen with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown('tryzen')}
              onMouseLeave={closeDropdown}
            >
              <a
                href="https://hanzo.bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background text-[13px] font-medium px-4 py-2 rounded-full hover:opacity-80 transition-all inline-flex items-center gap-1.5"
              >
                Try Zen
                <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <NavDropdown id="tryzen">
                <div className="w-[340px]">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Zen Models</p>
                  <div className="space-y-1.5 mb-4">
                    <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <p className="text-sm text-foreground font-medium">Zen4 Family</p>
                        <p className="text-xs text-muted-foreground">0.6B to 480B parameters</p>
                      </div>
                      <span className="text-xs text-muted-foreground">Open weights</span>
                    </a>
                    <a href="https://huggingface.co/zenlm/zen4-coder-flash" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <p className="text-sm text-foreground font-medium">Zen4 Coder</p>
                        <p className="text-xs text-muted-foreground">59.2% SWE-bench</p>
                      </div>
                      <span className="text-xs text-foreground">New</span>
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Apps</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Zoo AI Chat</p>
                      <p className="text-xs text-muted-foreground">Chat with Zen</p>
                    </a>
                    <a href="https://github.com/zooai/zoo" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-foreground font-medium">Desktop App</p>
                      <p className="text-xs text-muted-foreground">Local inference</p>
                    </a>
                  </div>
                  <a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-foreground text-background py-2 rounded-lg font-medium text-sm hover:opacity-80 transition-all">
                    Open Zoo AI
                  </a>
                </div>
              </NavDropdown>
            </div>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pt-2 pb-1">Products</p>
            <Link href="/ai" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Zoo AI</Link>
            <Link href="/ai#gym" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Zoo Gym</Link>
            <Link href="/animals" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Zoo Agents</Link>
            <a href="https://zoo.exchange" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Zoo Exchange</a>

            <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pt-4 pb-1">Models</p>
            <Link href="/ai" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Zen4 Family</Link>
            <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">HuggingFace</a>

            <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pt-4 pb-1">Research</p>
            <Link href="/research" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Papers</Link>
            <a href="https://zips.zoo.ngo" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">ZIPs</a>

            <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pt-4 pb-1">Network</p>
            <Link href="/coin" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Zoo Network</Link>
            <a href="https://zoo.exchange" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Exchange</a>
            <a href="https://explore.lux.network" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Explorer</a>
            <a href="https://lux.market" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm">Market</a>

            <div className="pt-4 px-3">
              <a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-foreground text-background py-3 rounded-full font-medium text-sm">
                Try Zen
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
