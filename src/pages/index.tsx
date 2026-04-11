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
        breadcrumbs="Zoo Labs Foundation"
        title="Open AI Research"
        comment="Building the Zen family of frontier AI models. 45+ open-source models from 600M to 1T+ parameters. Formal verification. Community governed. Safe by design."
      />

      <div className="h-px bg-gradient-to-r from-transparent via-[#ED1C24] via-[33%] via-[#00A652] via-[66%] to-[#2E3192] opacity-30" />

      <Comment />

      <Principles />

      {/* Products */}
      <section id="products" className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Products</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Open-source tools for AI research, training, and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Zoo Agents', desc: 'AI-powered digital creatures. The original NFT animals, now autonomous agents with memory, goals, and on-chain identity.', href: '/animals' },
              { name: 'Zoo AI', desc: 'Desktop app for local AI inference. Run Zen models on your hardware — free, open-source, private by default.', href: '/ai' },
              { name: 'Zoo Gym', desc: 'Open-source training platform. Fine-tune any model with LoRA, GRPO, DPO, and 8 more methods.', href: '/ai#gym' },
              { name: 'Zoo Exchange', desc: 'Decentralized exchange for $ZOO and $AI tokens. Trade, stake, and participate in governance.', href: 'https://zoo.exchange' },
              { name: 'Zoo Fund', desc: 'On-chain research funding. Smart contract-governed grants for open AI research.', href: '/donation' },
              { name: 'Collections', desc: 'Curated NFT collections of AI-generated endangered species art. Each purchase funds conservation research.', href: '/animals' },
            ].map((card) => (
              <div key={card.name} className="bg-transparent p-6 rounded-xl border border-neutral-800/60 hover:border-neutral-700 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
                <p className="text-neutral-400 text-sm mb-4">{card.desc}</p>
                <Link href={card.href} className="text-white text-sm font-medium hover:text-neutral-400 transition-colors">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zen Models */}
      <section className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">The Zen Model Family</h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-12">Open-source frontier models from edge to cloud</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Foundation', models: 'zen4-nano (0.6B) to zen4-ultra (1T+)', desc: 'General purpose language models' },
              { name: 'Code', models: 'zen4-coder-flash to zen4-coder-pro', desc: '59.2% SWE-bench verified' },
              { name: 'Multimodal', models: 'zen-omni, zen-vl, zen-3d, zen-director', desc: 'Text, vision, audio, video, 3D' },
              { name: 'Safety', models: 'zen-guard family', desc: 'Content safety and alignment' },
            ].map((card) => (
              <div key={card.name} className="border border-neutral-800/60 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
                <p className="text-sm text-neutral-500 mb-3 font-mono">{card.models}</p>
                <p className="text-neutral-400">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/ai" className="inline-block border border-neutral-800/60 text-white px-6 py-3 rounded-full font-semibold hover:border-neutral-500 transition-colors">
              View All Models
            </Link>
          </div>
        </div>
      </section>

      {/* Zoo Gym */}
      <section id="gym" className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Zoo Gym</h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-4">Open-source AI training platform</p>
          <p className="text-neutral-400 max-w-3xl mb-12">
            Train, fine-tune, and align any model. LoRA, GRPO, DPO, QLoRA — 8 training methods, 100+ model support, multi-GPU distributed training.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Training-Free GRPO', desc: '99.8% cost reduction. $18 vs $10,000+' },
              { name: 'Decentralized Training', desc: 'DSO protocol for community-coordinated optimization' },
              { name: 'Formal Verification', desc: '15 Lean 4 proofs. Every critical system verified.' },
            ].map((card) => (
              <div key={card.name} className="border border-neutral-800/60 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{card.name}</h3>
                <p className="text-neutral-400">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="https://github.com/zooai" className="inline-block border border-neutral-800/60 text-white px-6 py-3 rounded-full font-semibold hover:border-neutral-500 transition-colors">
              Start Training
            </Link>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Research</h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-12">7 peer-reviewed papers. 102 ZIP specifications. 15 formal proofs.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'HLLM with Training-Free GRPO', desc: '99.8% cost reduction, 82.7% AIME24 accuracy' },
              { name: 'Experience Ledger & DSO', desc: 'Byzantine-robust decentralized semantic optimization' },
              { name: 'Zoo Network Architecture', desc: 'L2 AI specialization with federated learning' },
            ].map((card) => (
              <div key={card.name} className="border border-neutral-800/60 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-lg font-bold text-white mb-3">{card.name}</h3>
                <p className="text-neutral-400">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/research" className="inline-block border border-neutral-800/60 text-white px-6 py-3 rounded-full font-semibold hover:border-neutral-500 transition-colors">
              View All Papers
            </Link>
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Zoo Network</h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-4">Decentralized AI compute with recursive self-learning</p>
          <p className="text-neutral-400 max-w-3xl mb-12">
            Contribute GPU compute, earn $AI tokens. Agentic systems that recursively improve through the Experience Ledger. Post-quantum secure. FHE for private inference.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {['$ZOO', '$AI', 'Post-Quantum', 'FHE Privacy'].map((stat) => (
              <div key={stat} className="border border-neutral-800/60 rounded-lg p-4 text-center">
                <span className="text-white font-bold text-lg">{stat}</span>
              </div>
            ))}
          </div>
          <Link href="/coin" className="inline-block border border-neutral-800/60 text-white px-6 py-3 rounded-full font-semibold hover:border-neutral-500 transition-colors">
            Learn More
          </Link>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership</h2>
            <p className="text-xl text-neutral-400">Advancing open AI research since 2021</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Antje Worring', title: 'Executive Director & Co-Founder', desc: 'Building safer AI for children since founding Zoo Labs Foundation in 2021.', img: '/leadership/antje-worring.png' },
              { name: 'Zach Kelling', title: 'Co-Founder & CTO', desc: 'Technical founder. Leads architecture across Zen models, Gym, and Zoo Network.', img: '/leadership/zach-kelling.png' },
              { name: 'Woo Bin', title: 'VP Engineering', desc: 'Full-stack and AI engineer leading Zoo AI, Gym, and desktop app development.', img: '/leadership/woo-bin.png' },
              { name: 'Marcus White', title: 'VP Research', desc: 'Advancing Zen model capabilities. Applied AI research to production.', img: '/leadership/marcus-white.png' },
              { name: 'Dave Lorenzini', title: 'Chief Strategy Officer', desc: 'Decades of experience in immersive computing and AI strategy.', img: '/leadership/dave-lorenzini.jpg' },
              { name: 'Major "Dream" Williams', title: 'Chief Visionary Officer', desc: 'International collaboration to transform AI for social good.', img: '/leadership/major-williams.png' },
              { name: 'Danielle Savage', title: 'Chief Brand Officer', desc: "Elevating Zoo's global presence and research communications.", img: '/leadership/danielle-savage.png' },
              { name: 'Anastasia Zacharaoff', title: 'VP Engineering', desc: 'Building high-performing engineering teams and scalable AI systems.', img: '/leadership/anastasia-zacharaoff.png' },
              { name: 'Jackson Mori', title: 'VP Engineering', desc: 'Distributed systems, performance, reliability, and developer experience.', img: '/leadership/jackson-mori.png' },
            ].map((member) => (
              <div key={member.name} className="group bg-transparent p-6 rounded-xl border border-neutral-800/60 hover:border-neutral-700 transition-all">
                <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover bg-neutral-900 mb-4 group-hover:opacity-90 transition-opacity" />
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-neutral-500">{member.title}</p>
                <p className="text-sm text-neutral-400 mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/team" className="inline-block border border-neutral-800/60 text-white px-6 py-3 rounded-full font-semibold hover:border-neutral-500 transition-colors">
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="bg-transparent py-20 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Advance Open AI</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border border-neutral-800/60 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Support Research</h3>
              <p className="text-neutral-400 mb-4">Fund open-source AI models and safety research</p>
              <Link href="/donation" className="text-white font-medium hover:text-neutral-400 transition-colors">
                Donate &rarr;
              </Link>
            </div>
            <div className="border border-neutral-800/60 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Contribute</h3>
              <p className="text-neutral-400 mb-4">Train models, write ZIPs, submit formal proofs</p>
              <Link href="https://github.com/zooai" className="text-white font-medium hover:text-neutral-400 transition-colors">
                GitHub &rarr;
              </Link>
            </div>
            <div className="border border-neutral-800/60 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Govern</h3>
              <p className="text-neutral-400 mb-4">Vote on research direction through Zoo Improvement Proposals</p>
              <Link href="https://zips.zoo.ngo" className="text-white font-medium hover:text-neutral-400 transition-colors">
                ZIPs &rarr;
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donation"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-200 transition-colors text-center"
            >
              Support Our Research
            </Link>
            <Link
              href="https://github.com/zooai"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-900 transition-colors text-center"
            >
              Explore on GitHub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
