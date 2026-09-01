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
        title="Open Frontier AI & Research Foundation"
        comment="Building the Zen family of open frontier AI models, decentralized GPU compute & mining protocols, and the Zoo Gym RL alignment framework. 45+ open models with verifiable weights. 501(c)(3) tax-exempt public charity."
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
                Collaborate with human teammates and 24/7 autonomous agents in <strong style={{ color: '#fff' }}>/vibe</strong>, synthesize 4K cinematic scenes in <strong style={{ color: '#fff' }}>/video</strong>, compose AI audio stems in <strong style={{ color: '#fff' }}>/music</strong>, and generate 3D assets in <strong style={{ color: '#fff' }}>/3d</strong>.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', paddingTop: '0.5rem' }}>
                {[
                  { name: 'Vibe Pods', icon: '🤝' },
                  { name: 'Agent Sandbox', icon: '🤖' },
                  { name: 'Zoo Flow 4K', icon: '🎬' },
                  { name: '3D Metaverse', icon: '🧊' },
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
              Frontier models, training frameworks, and decentralized compute protocols built by Zoo Labs Foundation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: 'ZooLabs.io Playground',
                desc: 'Multi-agent browser sandbox with unified teammate and agent chat, 4K video generation, AI audio synthesis, and 3D metaverse tools.',
                href: 'https://zoolabs.io',
                badge: 'Live App',
                external: true,
              },
              {
                name: 'Zen AI Models',
                desc: '45+ open-source frontier models from 600M to 2T+ parameters. SOTA SWE-bench coding, tool calling, and multimodal vision.',
                href: '/ai',
                badge: 'Open Weights',
              },
              {
                name: 'Zoo Gym',
                desc: 'Distributed reinforcement learning framework. Training-Free GRPO with 99.8% cost reduction, LoRA, DPO, and QLoRA recipes.',
                href: '/ai#gym',
                badge: 'Framework',
              },
              {
                name: 'Decentralized Compute',
                desc: 'Open AI mining protocols, Proof-of-Useful-Work (PoUW) verification, and Quasar quantum-secure coordination for distributed GPU clusters.',
                href: 'https://papers.zoo.ngo',
                badge: 'Protocols',
                external: true,
              },
              {
                name: 'Zoo Improvement Proposals',
                desc: 'Formal RFC specifications for agent sandboxes, context compression, microVM execution, and verifiable reasoning chains.',
                href: 'https://zips.zoo.ngo',
                badge: 'Standards',
                external: true,
              },
              {
                name: '501(c)(3) Charitable Fund',
                desc: 'Tax-deductible donor endowments directly supporting frontline animal sanctuaries, habitat protection, and open science grants.',
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

      {/* Research at the Frontier (from papers.zoo.ngo and zoo-labs/papers) */}
      <section id="research" style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="pill" style={{ alignSelf: 'flex-start', fontSize: '0.75rem' }}>
                <span>📄</span>
                <span>OPEN SCIENCE & PEER-REVIEWED RESEARCH</span>
              </div>
              <h2 className="display-chrome" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
                130+ Papers & Zoo Improvement Proposals
              </h2>
              <p className="text-secondary" style={{ fontSize: '1rem', maxWidth: '650px', lineHeight: 1.6 }}>
                Investigating training-free reinforcement learning, post-quantum consensus, and decentralized AI compute.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://papers.zoo.ngo"
                target="_blank"
                rel="noopener noreferrer"
                className="action"
                data-fill
                style={{ minHeight: '44px', padding: '0 1.5rem', fontSize: '0.875rem' }}
              >
                Explore papers.zoo.ngo ↗
              </a>
              <a
                href="https://zips.zoo.ngo"
                target="_blank"
                rel="noopener noreferrer"
                className="action"
                style={{ minHeight: '44px', padding: '0 1.5rem', fontSize: '0.875rem' }}
              >
                View zips.zoo.ngo ↗
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                date: '2026',
                category: 'AI Training',
                title: 'Training-Free Adaptation via Active Semantic Optimization (ASO)',
                desc: 'Achieving state-of-the-art SWE-bench reasoning with zero weight retraining using TF-GRPO and BitDelta compression.',
                href: 'https://papers.zoo.ngo',
                tag: 'TF-GRPO',
              },
              {
                date: '2026',
                category: 'Decentralized AI',
                title: 'Proof-of-Useful-Work (PoUW) Mining Protocols for Distributed GPUs',
                desc: 'Verifiable AI training compute verification using Hamilton graph reduction and deterministic gradient checkpoints.',
                href: 'https://papers.zoo.ngo',
                tag: 'PoUW Protocol',
              },
              {
                date: '2026',
                category: 'Cryptography',
                title: 'Quasar: Dual-Certificate Quantum-Secure Consensus',
                desc: 'Post-quantum finality using BLS and Ringtail threshold signatures for resilient decentralized coordination.',
                href: 'https://papers.zoo.ngo',
                tag: 'Post-Quantum',
              },
              {
                date: '2026',
                category: 'Standards',
                title: 'ZIP-001: Standardized MicroVM AI Agent Interfaces',
                desc: 'Specification for sandboxed Linux microVM execution environments with persistent filesystem and tool calling.',
                href: 'https://zips.zoo.ngo',
                tag: 'ZIP Standard',
              },
            ].map((paper) => (
              <a
                key={paper.title}
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', color: '#93C5FD', fontWeight: 700, textTransform: 'uppercase' }}>
                      {paper.category} &middot; {paper.date}
                    </span>
                    <span className="pill" style={{ fontSize: '0.7rem' }}>
                      {paper.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                    {paper.title}
                  </h3>
                  <p className="text-secondary" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                    {paper.desc}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', fontWeight: 600, color: '#FFFFFF' }}>
                  <span>Read Paper / RFC</span>
                  <span>&rarr;</span>
                </div>
              </a>
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
                  <span>501(c)(3) Tax-Exempt Public Charity · EIN: 88-3538992</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff' }}>Direct Wildlife Sanctuary Endowments</h3>
                <p className="text-secondary" style={{ fontSize: '0.875rem', maxWidth: '600px', lineHeight: 1.6 }}>
                  Directly support animal rescue operations, wildlife reserve maintenance, and anti-poaching field equipment worldwide.
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
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399' }}>Direct Endowments</div>
                <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>Frontline Sanctuaries</h4>
                <p className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                  Tax-deductible charitable giving directly funds animal medical care, sanctuary feeds, and anti-poaching rangers.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#60a5fa' }}>Zoo Gym & Compute</div>
                <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>Open Mining Protocols</h4>
                <p className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                  Decentralized GPU training network allowing researchers to run verified RL without centralized cloud barriers.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>Open Science</div>
                <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>130+ Papers & ZIPs</h4>
                <p className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                  All foundation models, training recipes, and RFCs are released under open Apache 2.0 / MIT licenses.
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
