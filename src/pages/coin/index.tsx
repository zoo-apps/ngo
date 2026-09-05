import React from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Link from 'next/link';
import { Radio, Cpu, Globe, Activity, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { useCorpus } from '@/config/corpus';

export default function SensorMeshPage() {
  const corpus = useCorpus();
  return (
    <Layout>
      <Seo
        templateTitle="Decentralized Compute & Mining Network"
        description="Global decentralized GPU compute network powering Proof-of-Useful-Work AI mining, Zoo Gym RL alignment, and sovereign open intelligence."
      />
      <Navbar />

      <div className="bg-background text-foreground min-h-screen">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold mb-6">
            <Radio className="w-3.5 h-3.5" />
            <span>Distributed GPU Mesh &middot; Proof-of-Useful-Work</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Decentralized Compute & AI Mining Network
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A worldwide sovereign compute network connecting independent GPU clusters, edge nodes, and
            open-source researchers. Running Zoo Gym (Training-Free GRPO) to train and align frontier reasoning models.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://github.com/zooai/gym"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 text-black font-bold text-sm hover:bg-primary-400 transition-colors"
            >
              <Cpu className="w-4 h-4" />
              <span>Explore Zoo Gym (GRPO) ↗</span>
            </a>
            <a
              href="https://papers.zoo.ngo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              <span>Read PoUW Whitepapers ↗</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mesh Capabilities Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Proof-of-Useful-Work (PoUW)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deterministic gradient verification and Hamilton graph reductions allowing GPU miners to produce verifiable AI training steps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Zoo Gym Reinforcement Learning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Distributed training framework for Training-Free GRPO and Active Semantic Optimization (ASO) achieving 99.8% cost reductions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">100% Open Weights & Code</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All foundation model checkpoints, training recipes, and RFC standards are published freely under open MIT/Apache 2.0 licenses.
              </p>
            </div>
          </div>
        </div>

        {/* Live Network Telemetry Status */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold">Open Compute Network Status</h2>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                100% OPEN SOURCE
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">{corpus.papers}</div>
                <div className="text-xs text-muted-foreground mt-1">Published Research Papers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-400">{corpus.models}</div>
                <div className="text-xs text-muted-foreground mt-1">Zen Foundation Models</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">99.8%</div>
                <div className="text-xs text-muted-foreground mt-1">Training Compute Savings</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">501(c)(3)</div>
                <div className="text-xs text-muted-foreground mt-1">Tax-Exempt Public Charity</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}