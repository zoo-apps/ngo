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

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Featured Banner: ZooLabs.io AI Playground */}
      <section className="bg-gradient-to-b from-[#09090b] via-[#121214] to-[#09090b] py-16 border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-neutral-900/90 to-neutral-950 p-8 md:p-12 shadow-2xl shadow-blue-900/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold text-blue-300">
                <span>🐬</span>
                <span>FLAGSHIP AI PLAYGROUND · LIVE APP</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                ZooLabs.io — Multi-Agent Sandbox & Creative Studio
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Experience Blue the Beluga — our open-source emotionally intelligent animal companion. Collaborate with human friends and 24/7 autonomous agents in <strong className="text-white">/vibe</strong>, generate 4K wildlife cinema in <strong className="text-white">/video</strong>, compose bioacoustic stems in <strong className="text-white">/music</strong>, and design in <strong className="text-white">/3d</strong>.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { name: 'Ocean & Blue', icon: '🐬' },
                  { name: 'Vibe Pods', icon: '🤝' },
                  { name: 'Linear Work', icon: '💼' },
                  { name: 'Zoo Flow 4K', icon: '🎬' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-200">
                    <span>{item.icon}</span>
                    <span className="font-semibold">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://zoolabs.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm text-center shadow-xl shadow-blue-600/30 active:scale-95 transition-all"
              >
                Launch ZooLabs.io ↗
              </a>
              <a
                href="https://zoolabs.io/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-sm text-center border border-neutral-700 transition-colors"
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
      <section id="products" className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Open AI Ecosystem</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Open-source tools, bioacoustic models, and sandboxes built by Zoo Labs Foundation Inc.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'ZooLabs.io Playground',
                desc: 'Multi-agent browser sandbox with Blue the Beluga companion, 4K Veo video generation, bioacoustics DAW, and Slack/Linear workboards.',
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
              <div key={card.name} className="bg-[#121214] p-7 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{card.name}</h3>
                    <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <span>Launch platform &rarr;</span>
                  </a>
                ) : (
                  <Link href={card.href} className="text-white text-sm font-semibold hover:text-neutral-300 transition-colors">
                    Learn more &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zen Model Family */}
      <section className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">The Zen Model Family</h2>
              <p className="text-neutral-400 text-lg">Open-source frontier models from edge to cloud</p>
            </div>
            <Link href="/ai" className="text-sm font-semibold text-blue-400 hover:text-blue-300">
              View all 45+ models on HuggingFace &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Foundation', models: 'zen4-nano (0.6B) to zen4-ultra (480B MoE)', desc: 'General reasoning & agentic planning' },
              { name: 'Code', models: 'zen4-coder-flash to zen4-coder-pro', desc: '59.2% SWE-bench verified' },
              { name: 'Multimodal', models: 'zen-omni, zen-vl, zen-3d, zen-director', desc: 'Text, vision, bioacoustic audio, 4K video, 3D' },
              { name: 'Safety', models: 'zen-guard family', desc: 'Formal alignment & content safety' },
            ].map((card) => (
              <div key={card.name} className="bg-[#121214] border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-1.5">{card.name}</h3>
                <p className="text-xs text-blue-400 mb-3 font-mono">{card.models}</p>
                <p className="text-neutral-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Impact & 501(c)(3) Status */}
      <section className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="rounded-3xl border border-neutral-800 bg-[#121214] p-8 md:p-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                Non-Profit Transparency · EIN: 88-3538992
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Zoo Labs Foundation Inc. is a 501(c)(3) Public Charity
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                All donations and contributions to Zoo Labs Foundation Inc. are tax-deductible to the fullest extent permitted by law. Donations directly deploy physical acoustic monitoring hardware, solar telemetry stations, and open-source models to IUCN Red List protected reserves.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/donation"
                  className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
                >
                  Make a Tax-Deductible Donation
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-full border border-neutral-700 text-white font-semibold text-xs hover:border-neutral-500 transition-colors"
                >
                  Read 501(c)(3) Charter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
