import React from 'react'
import Link from 'next/link'
import { FaTelegram, FaTwitter, FaInstagram, FaDiscord, FaYoutube, FaGithub } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { ThemeSwitcher } from './ThemeSwitcher'
import { CORPUS } from '@/config/corpus';

interface LinkItem {
  label: string
  href: string
  external?: boolean
}

interface FooterColumn {
  title: string
  links: LinkItem[]
}

// Every destination below was requested and answered before it was listed.
// Nine did not: zoolabs.io/vibe, /video, /music and /mint advertised
// generation products that were removed for being simulated; zoo-labs/chains,
// zoo-labs/papers and zoo-labs/zips are 404 because the repositories live
// under `zooai`; and gym.zoo.ngo answers 525. A dead link in a footer is a
// small claim that something exists.
const COLUMNS: FooterColumn[] = [
  {
    title: 'Research',
    links: [
      { label: 'Documentation', href: 'https://docs.zoo.ngo', external: true },
      { label: `Papers (${CORPUS.papers})`, href: 'https://papers.zoo.ngo', external: true },
      { label: `Proposals (${CORPUS.proposals})`, href: 'https://zips.zoo.ngo', external: true },
      { label: 'Zen models (open weights)', href: 'https://huggingface.co/zenlm', external: true },
      { label: 'Zoo Gym', href: 'https://github.com/zooai/gym', external: true },
    ],
  },
  {
    title: 'Use it',
    links: [
      { label: 'Ask Blue', href: 'https://zoolabs.io', external: true },
      { label: 'Zoo Network', href: 'https://zoo.network', external: true },
      { label: 'Research notes', href: '/blog' },
      { label: 'What we have published', href: '/impact' },
    ],
  },
  {
    title: 'Source',
    links: [
      { label: 'zooai/papers', href: 'https://github.com/zooai/papers', external: true },
      { label: 'zooai/ZIPs', href: 'https://github.com/zooai/ZIPs', external: true },
      { label: 'zoo-apps/zoolabs.io', href: 'https://github.com/zoo-apps/zoolabs.io', external: true },
      { label: 'zoo-apps/zoo.ngo', href: 'https://github.com/zoo-apps/zoo.ngo', external: true },
      { label: 'Every repository', href: 'https://github.com/zooai', external: true },
    ],
  },
  {
    title: '501(c)(3) Foundation',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Donate (tax deductible)', href: '/donation' },
      { label: 'Transparency', href: '/transparency' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/terms' },
    ],
  },
]

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/zoo-labs', label: 'GitHub' },
  { icon: FaTwitter, href: 'https://twitter.com/zoo_labs', label: 'Twitter' },
  { icon: FaDiscord, href: 'https://discord.gg/AqrYhChx5b', label: 'Discord' },
  { icon: FaTelegram, href: 'https://t.me/zooofficial', label: 'Telegram' },
  { icon: FaInstagram, href: 'https://instagram.com/zoolabs.io', label: 'Instagram' },
  { icon: BsMedium, href: 'https://zoolabsofficial.medium.com', label: 'Medium' },
  { icon: FaYoutube, href: 'https://youtu.be/6yYuYtMWgOU', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '2px solid var(--ink)',
        color: 'var(--ink)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        {/* Link columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {COLUMNS.map((col) => (
            <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                }}
              >
                {col.title}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.8125rem',
                          color: 'rgba(0, 0, 0, 0.66)',
                          textDecoration: 'none',
                          transition: 'color 0.15s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0, 0, 0, 0.66)')}
                      >
                        <span>{link.label}</span>
                        {link.href.startsWith('http') && <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>↗</span>}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{
                          fontSize: '0.8125rem',
                          color: 'rgba(0, 0, 0, 0.66)',
                          textDecoration: 'none',
                          transition: 'color 0.15s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0, 0, 0, 0.66)')}
                      >
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '2px solid var(--ink)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(0, 0, 0, 0.72)', fontWeight: 500 }}>
              &copy; 2026 Zoo Labs Foundation Inc. &middot; 501(c)(3) Tax-Exempt Scientific Research Organization
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.55)', fontFamily: 'var(--font-mono)' }}>
              EIN: 88-3538992 &middot; Contributions are tax-deductible under Section 501(c)(3) of the Internal Revenue Code.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(0, 0, 0, 0.66)',
                    fontSize: '1rem',
                    transition: 'color 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0, 0, 0, 0.66)')}
                  aria-label={s.label}
                >
                  <s.icon />
                </a>
              ))}
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}
