import React from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Link from 'next/link';

const papers = [
  {
    title: 'HLLM with Training-Free GRPO',
    desc: '99.8% cost reduction in AI training ($18 vs $10,000+). 82.7% AIME24 accuracy via Hamiltonian invariant optimization.',
    file: 'hllm-training-free-grpo.pdf',
    year: '2025',
  },
  {
    title: 'Experience Ledger & Decentralized Semantic Optimization',
    desc: 'Byzantine-robust curation protocol. IPFS/Arweave storage, 7680-dim embeddings. $3,726 annual cost vs $50K+ for fine-tuning.',
    file: 'experience-ledger-dso.pdf',
    year: '2025',
  },
  {
    title: 'Zoo Network Architecture',
    desc: 'L2 AI specialization layer with HLLM integration, federated learning, and experience ledger on the Lux-Hanzo-Zoo stack.',
    file: 'zoo-network-architecture.pdf',
    year: '2025',
  },
  {
    title: 'Gym Training Platform',
    desc: '100+ model support, 8 training methods, educational democratization. 2.5 years of open-source evolution.',
    file: 'gym-training-platform.pdf',
    year: '2025',
  },
  {
    title: 'Zoo Tokenomics',
    desc: '100% airdrop model, validator requirements, contribute-to-access economics, DAO governance. 2T total supply.',
    file: 'zoo-tokenomics.pdf',
    year: '2025',
  },
  {
    title: 'Zoo Foundation Mission',
    desc: 'Conservation AI, educational AI, frontier AI research. 87K users, 420K models trained, 142 countries.',
    file: 'zoo-foundation-mission.pdf',
    year: '2024',
  },
  {
    title: 'ZIP-002: Zen-Reranker',
    desc: 'Native 7680-dimensional embeddings, BitDelta compression (31.87x), Byzantine aggregation. 94.7% Recall@5.',
    file: 'zip-002-zen-reranker.pdf',
    year: '2025',
  },
]

const proofs = [
  { name: 'DSO.lean', desc: 'Decentralized Semantic Optimization convergence and safety' },
  { name: 'ExperienceLedger.lean', desc: 'Experience ledger Byzantine fault tolerance' },
  { name: 'Personalization.lean', desc: 'Personalization mechanism privacy guarantees' },
  { name: 'Embedding.lean', desc: 'Embedding space metric properties' },
  { name: 'Gym.lean', desc: 'Gym training platform verification' },
  { name: 'ZIP.lean', desc: 'ZIP proposal mechanism correctness' },
  { name: 'AgentNFT.lean', desc: 'Agent NFT ownership and transfer proofs' },
  { name: 'Contribution.lean', desc: 'Contribution tracking integrity' },
  { name: 'Compensation.lean', desc: 'Reward distribution fairness' },
  { name: 'Treasury.lean', desc: 'Treasury management invariants' },
  { name: 'AMM.lean', desc: 'Automated Market Maker solvency' },
  { name: 'Staking.lean', desc: 'Staking mechanism security' },
  { name: 'Bridge.lean', desc: 'Cross-chain bridge safety' },
  { name: 'Token.lean', desc: 'Token contract properties' },
  { name: 'Wave.tla', desc: 'TLA+ protocol wave specification' },
]

export default function Research() {
  return (
    <Layout>
      <Seo
        templateTitle="Research"
        description="Open AI research: 7 papers, 102 ZIPs, 15 formal proofs, and the Zen family of frontier models."
      />
      <Navbar />

      <div className="bg-background text-foreground">
        {/* Hero */}
        <div className="container mx-auto px-4 pt-24 pb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Zoo Labs Foundation</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Research</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Open AI research advancing frontier models, decentralized training, and formal verification.
            Everything we publish is open access.
          </p>
        </div>

        {/* Stats */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">7</p>
                <p className="text-sm text-muted-foreground mt-1">Papers</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">102</p>
                <p className="text-sm text-muted-foreground mt-1">ZIP Specifications</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">15</p>
                <p className="text-sm text-muted-foreground mt-1">Formal Proofs</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">45+</p>
                <p className="text-sm text-muted-foreground mt-1">Open Models</p>
              </div>
            </div>
          </div>
        </div>

        {/* Papers */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Papers</h2>
            <div className="space-y-4">
              {papers.map((paper) => (
                <div key={paper.title} className="bg-background border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{paper.title}</h3>
                      <p className="text-sm text-muted-foreground">{paper.desc}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs text-muted-foreground">{paper.year}</span>
                      <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">PDF</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formal Proofs */}
        <div id="proofs" className="border-t border-border">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Formal Proofs</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Every critical system is formally verified in Lean 4 and TLA+. No hand-waving — machine-checked proofs of correctness.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {proofs.map((proof) => (
                <div key={proof.name} className="border border-border rounded-lg p-4 hover:border-foreground/20 transition-colors">
                  <p className="text-sm font-mono text-foreground mb-1">{proof.name}</p>
                  <p className="text-xs text-muted-foreground">{proof.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ZIPs */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zoo Improvement Proposals</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              102 specifications governing everything from model architecture to tokenomics to governance.
              Community-driven, publicly reviewed, formally specified.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { id: 'ZIP-0000', title: 'Zoo Ecosystem Architecture & Framework' },
                { id: 'ZIP-0001', title: 'Hamiltonian Large Language Models (HLLMs)' },
                { id: 'ZIP-0003', title: 'Eco-1: z-JEPA Hyper-Modal MoE Architecture' },
                { id: 'ZIP-0005', title: 'Post-Quantum Security for DeFi & NFTs' },
                { id: 'ZIP-0006', title: 'User-Owned AI Models (NFT-Based Ownership)' },
                { id: 'ZIP-0007', title: 'BitDelta + DeltaSoup Personalized AI' },
                { id: 'ZIP-0009', title: 'Unified BitDelta Architecture' },
                { id: 'ZIP-0010', title: 'Zoo Launch Models (Eco-1, Coder-1, Nano-1)' },
              ].map((zip) => (
                <div key={zip.id} className="border border-border rounded-lg p-4 hover:border-foreground/20 transition-colors flex items-start gap-3">
                  <span className="text-xs font-mono text-muted-foreground shrink-0 mt-0.5">{zip.id}</span>
                  <p className="text-sm text-foreground">{zip.title}</p>
                </div>
              ))}
            </div>
            <a
              href="https://zips.zoo.ngo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-muted-foreground hover:text-foreground border border-border px-4 py-2 rounded-lg transition-colors"
            >
              View all 102 ZIPs →
            </a>
          </div>
        </div>

        {/* ResearchDAO */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ResearchDAO</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Decentralized research funding. Smart contract-governed grants with on-chain transparency.
                No gatekeepers, no bureaucracy.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">$8.4M</p>
                  <p className="text-sm text-muted-foreground">Total Funded</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">342</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">14 days</p>
                  <p className="text-sm text-muted-foreground">Avg. Funding Time</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/donation" className="text-sm border border-border text-foreground px-5 py-2.5 rounded-full hover:bg-card transition-colors">
                  Apply for Funding
                </Link>
                <a href="https://github.com/zooai" target="_blank" rel="noopener noreferrer" className="text-sm border border-border text-muted-foreground px-5 py-2.5 rounded-full hover:bg-card hover:text-foreground transition-colors">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Open AI Research</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every donation funds open-source models, research papers, and formally verified systems.
              501(c)(3) tax-deductible.
            </p>
            <Link href="/donation" className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Support Our Research
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
