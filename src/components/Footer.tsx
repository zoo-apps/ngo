import Link from 'next/link'
import { FaTelegram, FaTwitter, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { ThemeSwitcher } from './ThemeSwitcher'

const COLUMNS = [
  {
    title: 'Products',
    links: [
      { label: 'Zoo Agents', href: '/animals' },
      { label: 'Zoo AI', href: '/ai' },
      { label: 'Zoo Exchange', href: 'https://zoo.exchange' },
      { label: 'Zoo Fund', href: '/donation' },
      { label: 'Collections', href: '/animals' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'Zen Models', href: '/ai' },
      { label: 'Zoo Gym', href: '/ai#gym' },
      { label: 'Papers', href: '/research' },
      { label: 'ZIPs', href: 'https://zips.zoo.ngo' },
      { label: 'Formal Proofs', href: '/research#proofs' },
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
    title: 'Foundation',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/terms' },
      { label: 'Donate', href: '/donation' },
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
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; 2026 Zoo Labs Foundation Inc. 501(c)(3) &middot; EIN: 88-3538992
          </p>
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
