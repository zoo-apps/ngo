import React from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Zoo Labs Foundation — Open Frontier AI & Wildlife Stewardship"
        description="Non-profit scientific research foundation (501c3) advancing open frontier AI models, bioacoustic telemetry, and direct wildlife conservation stewardship."
      />
      <Navbar />

      {/* ── Hero Section (styled like zoo.industries) ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          
          {/* Top Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '9999px', background: 'rgba(234, 1, 142, 0.1)', border: '1px solid rgba(234, 1, 142, 0.3)', marginBottom: '1.75rem' }}>
            <span style={{ fontSize: '0.875rem' }}>🐾</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ff55b2' }}>
              Zoo Labs Foundation · 501(c)(3) Public Charity (EIN: 88-3538992)
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.03em', color: '#fff', maxWidth: '1000px', margin: '0 auto' }}>
            Open Frontier AI.<br />
            <span style={{ background: 'linear-gradient(135deg, #01acf1 0%, #ea018e 50%, #fcf006 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Wildlife Stewardship.
            </span><br />
            Powered by Nature.
          </h1>

          {/* Subheading */}
          <p style={{ marginTop: '1.5rem', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '720px', margin: '1.5rem auto 0', lineHeight: 1.6 }}>
            Zoo Labs is an open science research institute building emotionally intelligent animal companions, bioacoustic sensor networks, and open foundation models to end wildlife extinction.
          </p>

          {/* Action CTAs */}
          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="https://zoolabs.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.875rem 2rem',
                borderRadius: '12px',
                background: '#ea018e',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.9375rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '0 10px 25px -5px rgba(234, 1, 142, 0.4)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>🚀 Launch Zoo App (zoolabs.io)</span>
            </a>

            <a
              href="https://zoolabs.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.875rem 2rem',
                borderRadius: '12px',
                background: '#01acf1',
                color: '#000',
                fontWeight: 800,
                fontSize: '0.9375rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '0 10px 25px -5px rgba(1, 172, 241, 0.4)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>🐋 Chat with Blue the Beluga</span>
            </a>

            <Link
              href="/donation"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.875rem 2rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.9375rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>💚 Donate to Conservation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature Strip (matching zoo.industries neo-brutalist feature badges) ── */}
      <section style={{ padding: '1rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.25rem 2rem' }}>
            {[
              { icon: '🔓', color: '#fcf006', title: 'FREE + OPEN SOURCE', desc: '100% open weights & bioacoustic data' },
              { icon: '💻', color: '#01acf1', title: 'RUNS LOCALLY ON LAPTOP', desc: 'Private AI training on your machine' },
              { icon: '📜', color: '#ea018e', title: '130+ OPEN PAPERS', desc: 'Peer-reviewed research and datasets' },
              { icon: '🌍', color: '#00a652', title: 'VERIFIED 501(C)(3)', desc: 'Tax-deductible wildlife sanctuary gifts' },
            ].map((f, i) => (
              <div key={f.title} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{f.icon}</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 900, letterSpacing: '0.05em', color: f.color, textTransform: 'uppercase' }}>
                    {f.title}
                  </span>
                  <span style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {f.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flagship App Banner: ZooLabs.io ── */}
      <section style={{ padding: '2rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(18, 18, 25, 0.9) 0%, rgba(30, 20, 40, 0.9) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: 'rgba(1, 172, 241, 0.15)', border: '1px solid rgba(1, 172, 241, 0.3)', width: 'fit-content' }}>
                <span>🎮</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#01acf1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Multiplayer AI Studio & Wildlife Game
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, lineHeight: 1.15, color: '#fff' }}>
                Meet Blue & Create in the Zoo Studio
              </h2>

              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                Step into <strong style={{ color: '#fff' }}>/vibe</strong> to collaborate live with human friends and 3D animal agents. Explore ocean acoustics, generate nature videos, synthesize bioacoustic music stems, and build your own wildlife knowledge base.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', paddingTop: '0.5rem' }}>
                {[
                  { title: '🐋 Blue the Beluga', desc: 'Emotionally intelligent 3D whale companion' },
                  { title: '🤝 /vibe Studio', desc: 'Real-time collaborative sandbox' },
                  { title: '🎬 Video & Stems', desc: 'High-definition nature media synthesis' },
                  { title: '🧊 3D Animals', desc: 'Interactive wildlife splats & models' },
                ].map((item) => (
                  <div key={item.title} style={{ padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff' }}>{item.title}</div>
                    <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '0.2rem' }}>{item.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
                <a
                  href="https://zoolabs.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.75rem',
                    borderRadius: '10px',
                    background: '#01acf1',
                    color: '#000',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>Open Zoo App ↗</span>
                </a>
                <a
                  href="https://zoolabs.io/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.75rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                  }}
                >
                  <span>Plans ($0 Free for Kids & Labs)</span>
                </a>
              </div>
            </div>

            {/* Visual Interactive Graphic */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0, 0, 0, 0.6)', borderRadius: '18px', padding: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#4ade80' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>LIVE 120kHz Ocean Telemetry</span>
                </div>
                <span style={{ fontSize: '0.6875rem', color: '#01acf1', fontFamily: 'monospace' }}>Cook Inlet · Beaufort Pod</span>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'rgba(1, 172, 241, 0.05)', border: '1px solid rgba(1, 172, 241, 0.15)' }}>
                <p style={{ fontSize: '0.875rem', color: '#fff', fontStyle: 'italic', margin: 0 }}>
                  "Whistles recorded at 18.4 kHz during maternal calf swimming exercises. Acoustic signatures tagged to Genesis Pod."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#fcf006', fontWeight: 700 }}>🎧 Hydrophone Array: ACTIVE</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: 900, color: '#fff' }}>130+</div>
                  <div style={{ fontSize: '0.625rem', color: 'rgba(255, 255, 255, 0.5)' }}>Papers & ZIPS</div>
                </div>
                <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: 900, color: '#00a652' }}>501(c)(3)</div>
                  <div style={{ fontSize: '0.625rem', color: 'rgba(255, 255, 255, 0.5)' }}>Public Charity</div>
                </div>
                <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: 900, color: '#ea018e' }}>100%</div>
                  <div style={{ fontSize: '0.625rem', color: 'rgba(255, 255, 255, 0.5)' }}>Open Source</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conservation Pillars (from zoo.industries narrative) ── */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: 'rgba(0, 166, 82, 0.15)', border: '1px solid rgba(0, 166, 82, 0.3)', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00a652', textTransform: 'uppercase' }}>
                Conservation in Action
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff' }}>
              How Zoo Labs Funds & Protects Wildlife
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '650px', margin: '0.75rem auto 0', lineHeight: 1.6 }}>
              Direct charitable contributions, physical hardware deployments, and bioacoustic tracking to safeguard endangered species.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'Habitat & Health',
                color: '#00a652',
                icon: '🌲',
                desc: 'Supporting physical habitat restoration, marine sanctuaries, and protected territory management accounting for endangered species safety.',
              },
              {
                title: 'Bioacoustic Anti-Poaching',
                color: '#01acf1',
                icon: '📡',
                desc: 'Deploying high-frequency 120kHz hydrophones and acoustic forest sensors that detect gunshots, boat engines, and wildlife distress calls.',
              },
              {
                title: 'Rescue & Reintegration',
                color: '#fcf006',
                icon: '🐾',
                desc: 'Funding wildlife rehabilitation clinics, orphan rescue centers, and GPS-tagged re-wilding programs in partnership with local rangers.',
              },
              {
                title: 'Open Science & Policy',
                color: '#ea018e',
                icon: '⚖️',
                desc: 'Providing open biodiversity datasets and peer-reviewed scientific telemetry to international bodies (IUCN, CITES) to enact protective laws.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: '2rem' }}>{pillar.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: pillar.color }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Research & Publications ── */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: 'rgba(252, 240, 6, 0.15)', border: '1px solid rgba(252, 240, 6, 0.3)', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fcf006', textTransform: 'uppercase' }}>
                  Peer-Reviewed Open Science
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                130+ Research Papers & Open ZIPS
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://papers.zoo.ngo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.625rem 1.25rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                }}
              >
                Browse All Papers (papers.zoo.ngo) ↗
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'Active Semantic Optimization (ASO) for Wildlife Telemetry',
                category: 'Bioacoustic AI',
                desc: 'Novel multimodal embeddings matching cetacean whistles and terrestrial vocalizations directly to behavioral contexts.',
                tag: 'ZenLM Bioacoustics',
              },
              {
                title: 'Zoo Gym: Distributed Reinforcement Learning for Conservation',
                category: 'Alignment & RL',
                desc: 'Decentralized RL framework achieving 99.8% cost reduction with LoRA and QLoRA fine-tuning recipes for ecological drones.',
                tag: 'Zoo Gym Framework',
              },
              {
                title: 'ZIP-001: Sovereign AI Agent Execution & Privacy Sandboxes',
                category: 'Architecture Standards',
                desc: 'Open standard for sandboxed local MicroVM agents with verifiable weights and zero telemetry leakage.',
                tag: 'ZIP Standard',
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#01acf1', textTransform: 'uppercase' }}>{p.category}</span>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#fff', marginTop: '0.5rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, marginTop: '0.5rem' }}>{p.desc}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', padding: '0.25rem 0.625rem', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Sanctuaries & Non-Profit Verification ── */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1.5rem' }}>
            Supporting Leading Conservation Organizations & Sanctuaries
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem 3rem' }}>
            {['WWF World Wildlife Fund', 'IUCN Red List', 'ZSL Zoological Society', 'Panthera', 'International Rhino Foundation'].map((partner) => (
              <span key={partner} style={{ fontSize: '0.875rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.7)' }}>
                {partner}
              </span>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '16px', background: 'rgba(0, 166, 82, 0.06)', border: '1px solid rgba(0, 166, 82, 0.2)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div style={{ textAlign: 'left', maxWidth: '600px' }}>
              <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#fff' }}>Make a Tax-Deductible Donation</div>
              <div style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.25rem' }}>
                Your donation directly funds ocean hydrophone arrays, GPS tracking collars, and wildlife orphanages.
              </div>
            </div>
            <Link
              href="/donation"
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '10px',
                background: '#00a652',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
              }}
            >
              Donate Now 💚
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
