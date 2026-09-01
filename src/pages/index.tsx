import React from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Link from 'next/link';
import Intro from '@/components/intro/Intro';
import Comment from '@/components/Comment';
import Principles from '@/components/Principles';

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Navbar />

      <Intro
        breadcrumbs="Zoo Labs Foundation Inc."
        title="Open Frontier AI & Wildlife Science"
        comment="Building the Zen family of frontier AI models, open bioacoustic telemetry arrays, and the ZooLabs.io collaborative multi-agent playground. 45+ open-source models from 600M to 480B parameters. 501(c)(3) tax-exempt public charity."
      />

      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)' }} />

      {/* Featured Banner: ZooLabs.io AI Playground */}
      <section style={{ padding: '4rem 1.5rem', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 10 }}>
              <div className="pill" style={{ alignSelf: 'flex-start', fontSize: '0.75rem' }}>
                <span>🐬</span>
                <span>FLAGSHIP AI PLAYGROUND · LIVE APP</span>
              </div>
              <h2 className="display-chrome" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                ZooLabs.io — Multi-Agent Sandbox & Creative Studio
              </h2>
              <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                Experience Blue the Beluga — our open-source emotionally intelligent animal companion. Collaborate with human friends and 24/7 autonomous agents in <strong style={{ color: '#fff' }}>/vibe</strong>, generate 4K wildlife cinema in <strong style={{ color: '#fff' }}>/video</strong>, compose bioacoustic stems in <strong style={{ color: '#fff' }}>/music</strong>, and design in <strong style={{ color: '#fff' }}>/3d</strong>.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', paddingTop: '0.5rem' }}>
                {[
                  { name: 'Ocean & Blue', icon: '🐬' },
                  { name: 'Vibe Pods', icon: '🤝' },
                  { name: 'Linear Work', icon: '💼' },
                  { name: 'Zoo Flow 4K', icon: '🎬' },
                ].map((item) => (
                  <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 0.75rem', borderRadius: '12px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.75rem' }}>
                    <span>{item.icon}</span>
                    <span style={{ fontWeight: 600, color: '#fff' }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', position: 'relative', zIndex: 10 }}>
              <a
                href="https://zoolabs.io"
                target="_blank"
                rel="noopener noreferrer"
                className="action"
                data-fill
                style={{ minHeight: '48px', padding: '0 2rem', fontSize: '0.875rem' }}
              >
                Launch ZooLabs.io ↗
              </a>
              <a
                href="https://zoolabs.io/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="action"
                style={{ minHeight: '48px', padding: '0 2rem', fontSize: '0.875rem' }}
              >
                View Plans ($0 Free & Pro)
              </a>
            </div>
          </div>
        </div>
      </section>

      <Comment />
      <Principles />

      {/* Products & Platforms */}
      <section id="products" style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h2 className="display-chrome" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800 }}>Open AI Ecosystem</h2>
            <p className="text-secondary" style={{ fontSize: '1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
              Open-source tools, bioacoustic models, and sandboxes built by Zoo Labs Foundation Inc.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: 'ZooLabs.io Playground',
                desc: 'Multi-agent browser sandbox with Blue the Beluga companion, 4K video generation, bioacoustics DAW, and Slack/Linear workboards.',
                href: 'https://zoolabs.io',
                badge: 'Live App',
                external: true,
              },
              {
                name: 'Zen AI Models',
                desc: '45+ open-source frontier models from 600M to 480B parameters. State-of-the-art SWE-bench coding and multimodal capabilities.',
                href: '/ai',
                badge: 'Open Source',
              },
              {
                name: 'Zoo Gym',
                desc: 'Distributed training platform. Training-Free GRPO with 99.8% cost reduction, LoRA, DPO, and QLoRA for any open weights.',
                href: '/ai#gym',
                badge: 'Framework',
              },
              {
                name: 'Autonomous Familiars',
                desc: 'Emotionally intelligent AI creatures with persistent memory, goals, and 24/7 background telemetry loops running in Hanzo Cloud.',
                href: 'https://zoolabs.io/mint',
                badge: 'MicroVM Bots',
                external: true,
              },
              {
                name: 'Bioacoustic Telemetry',
                desc: '120kHz underwater hydrophone and forest acoustic arrays providing real-time biometric signals for 1,500+ endangered species.',
                href: '/impact',
                badge: 'Sensors',
              },
              {
                name: '501(c)(3) Wildlife Fund',
                desc: 'Tax-deductible public endowments and research grants directly powering real-world anti-poaching sensor arrays.',
                href: '/donation',
                badge: 'Tax Deductible',
              },
            ].map((card) => (
              <div key={card.name} className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>{card.name}</h3>
                    <span className="pill" style={{ fontSize: '0.75rem' }}>
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-secondary" style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}>{card.desc}</p>
                </div>
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action"
                    style={{ minHeight: '36px', fontSize: '0.75rem', alignSelf: 'flex-start', padding: '0 1rem' }}
                  >
                    <span>Launch platform &rarr;</span>
                  </a>
                ) : (
                  <Link href={card.href} className="action" style={{ minHeight: '36px', fontSize: '0.75rem', alignSelf: 'flex-start', padding: '0 1rem' }}>
                    <span>Explore {card.name.split(' ')[0]} &rarr;</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Conservation Impact Section */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div className="pill" style={{ alignSelf: 'flex-start', fontSize: '0.75rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399', display: 'inline-block' }} />
                  <span>501(c)(3) Tax-Exempt Public Charity</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff' }}>Direct Wildlife Sanctuary Endowments</h3>
                <p className="text-secondary" style={{ fontSize: '0.875rem', maxWidth: '600px', lineHeight: 1.6 }}>
                  Every contribution directly supports our active anti-poaching hydrophone arrays, bioacoustic research sensors, and frontline animal rescue centers worldwide.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Link
                  href="/donation"
                  className="action"
                  data-fill
                  style={{ minHeight: '44px', padding: '0 1.5rem', fontSize: '0.875rem' }}
                >
                  Make a Direct Donation ↗
                </Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#34d399' }}>100% Allocation</div>
                <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>Direct to Conservation</h4>
                <p className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                  Non-profit contributions go straight to sanctuary maintenance, veterinary care, and sensor deployments.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#60a5fa' }}>120 kHz Mesh</div>
                <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>Open Bioacoustic Data</h4>
                <p className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                  Real-time audio telemetry made openly accessible to conservation biologists and academic researchers worldwide.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>Open Source</div>
                <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>Frontier Science Models</h4>
                <p className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                  All foundation models, training recipes, and datasets are released under Apache 2.0 / MIT licenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
