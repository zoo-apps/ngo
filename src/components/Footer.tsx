import Link from 'next/link'
import { FaTelegram, FaTwitter, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { ThemeSwitcher } from './ThemeSwitcher'

const COLUMNS = [
  {
    title: 'AI Platforms',
    links: [
      { label: 'ZooLabs.io AI Playground', href: 'https://zoolabs.io' },
      { label: 'Blue the Beluga', href: 'https://zoolabs.io' },
      { label: 'Zoo Flow 4K Video', href: 'https://zoolabs.io/video' },
      { label: 'Bioacoustics DAW', href: 'https://zoolabs.io/music' },
      { label: 'Multi-Agent Sandbox', href: 'https://zoolabs.io/vibe' },
    ],
  },
  {
    title: 'Open Models & Research',
    links: [
      { label: 'Zen Models (45+)', href: '/ai' },
      { label: 'Zoo Gym (GRPO)', href: '/ai#gym' },
      { label: 'Research Papers', href: '/research' },
      { label: 'Formal Proofs', href: '/research' },
      { label: 'Bioacoustic Datasets', href: '/impact' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com/zooai' },
      { label: 'Discord', href: 'https://discord.gg/AqrYhChx5b' },
      { label: 'Twitter', href: 'https://twitter.com/zoo_labs' },
      { label: 'Telegram', href: 'https://t.me/zooofficial' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: '501(c)(3) Foundation',
    links: [
      { label: 'About Zoo Labs Inc', href: '/about' },
      { label: 'Donate (Tax Deductible)', href: '/donation' },
      { label: 'Impact & Sanctuaries', href: '/impact' },
      { label: 'Transparency & 990', href: '/transparency' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/terms' },
    ],
  },
]

const SOCIALS = [
  { icon: FaTwitter, href: 'https://twitter.com/zoo_labs', label: 'Twitter' },
  { icon: FaTelegram, href: 'https://t.me/zooofficial', label: 'Telegram' },
  { icon: FaInstagram, href: 'https://instagram.com/zoolabs.io', label: 'Instagram' },
  { icon: FaDiscord, href: 'https://discord.gg/AqrYhChx5b', label: 'Discord' },
  { icon: BsMedium, href: 'https://zoolabsofficial.medium.com', label: 'Medium' },
  { icon: FaYoutube, href: 'https://youtu.be/6yYuYtMWgOU', label: 'YouTube' },
]

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs text-muted-foreground font-medium">
              &copy; 2026 Zoo Labs Foundation Inc. &middot; 501(c)(3) Tax-Exempt Scientific Research Organization
            </p>
            <p className="text-[11px] text-muted-foreground/70 font-mono">
              EIN: 88-3538992 &middot; Contributions are tax-deductible under Section 501(c)(3) of the Internal Revenue Code.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
