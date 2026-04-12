import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      <Seo
        templateTitle="About Zoo Labs Foundation"
        description="Open AI research foundation advancing frontier models, decentralized training, and formal verification"
      />
      <Navbar />

      <div className="bg-background text-foreground min-h-screen">
        {/* Hero */}
        <div className="relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 py-20 relative">
            <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
                Open AI Research for Everyone
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Zoo Labs Foundation is a 501(c)(3) nonprofit advancing open-source AI research,
                frontier model development, and decentralized science.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="py-20 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Advance open AI research by building frontier models, publishing research papers,
                and developing tools that make AI accessible to researchers worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <p className="text-4xl font-bold mb-2">45+</p>
                  <h3 className="text-xl font-bold mb-2">Open Models</h3>
                  <p className="text-gray-400">
                    Frontier models from 600M to 480B parameters, all open weights
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold mb-2">7</p>
                  <h3 className="text-xl font-bold mb-2">Peer-Reviewed Papers</h3>
                  <p className="text-gray-400">
                    Published research in HLLM, DSO, and formal verification
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold mb-2">102</p>
                  <h3 className="text-xl font-bold mb-2">ZIP Specifications</h3>
                  <p className="text-gray-400">
                    Community-governed improvement proposals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-20 bg-background border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Founded in 2021, Zoo Labs Foundation started with the belief that frontier AI
                  should be open, verifiable, and community-governed. Not locked behind corporate walls.
                </p>
                <p>
                  We built the Zen model family on Qwen3+ architecture: 45+ models spanning text,
                  code, vision, audio, video, and 3D generation. Every model has open weights on HuggingFace.
                </p>
                <p>
                  Our research spans Hamiltonian Large Language Models (HLLMs), decentralized semantic
                  optimization (DSO), and 15 formally verified proofs in Lean 4. We publish everything
                  open access.
                </p>
                <p>
                  Zoo Gym, our training platform, has enabled thousands of researchers to train and
                  fine-tune models at 99.8% lower cost through Training-Free GRPO.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-foreground">Open by Default</h3>
                <p className="text-gray-300">
                  Open weights, open papers, open code. Closed AI is a dead end for science.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-foreground">Formally Verified</h3>
                <p className="text-gray-300">
                  15 Lean 4 proofs. Every critical system machine-checked, not hand-waved.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-foreground">Community Governed</h3>
                <p className="text-gray-300">
                  102 ZIPs. Research direction decided by contributors, not executives.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-foreground">Safe by Design</h3>
                <p className="text-gray-300">
                  Zen-guard safety models. Alignment research integrated, not bolted on.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="py-20 bg-background border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Leadership</h2>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-12">
                <img
                  src="/leadership/antje-worring.png"
                  alt="Antje Worring"
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover bg-gray-900 border border-gray-800"
                />
                <h3 className="text-xl font-bold mb-2">Antje Worring</h3>
                <p className="text-gray-400 mb-2">Executive Director & Co-Founder</p>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Building safer AI for children since founding Zoo Labs Foundation in 2021.
                </p>
              </div>
              <Link
                href="/team"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Meet Our Full Team
              </Link>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">What We Do</h2>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Frontier Model Research</h3>
                  <p className="text-gray-300">
                    Developing the Zen family of open-source models. From 600M parameter edge models
                    to 480B parameter frontier systems, all with open weights on HuggingFace.
                  </p>
                </div>
                <div className="w-full md:w-64 h-64 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 font-mono text-sm">zen4-ultra 480B</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Training Infrastructure</h3>
                  <p className="text-gray-300">
                    Zoo Gym: open-source platform supporting 100+ models, 8 training methods,
                    and multi-GPU distributed training. 99.8% cost reduction via Training-Free GRPO.
                  </p>
                </div>
                <div className="w-full md:w-64 h-64 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 font-mono text-sm">Zoo Gym</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Decentralized AI Network</h3>
                  <p className="text-gray-300">
                    Zoo Network: decentralized AI compute with recursive self-learning.
                    Post-quantum secure consensus. FHE for private inference.
                  </p>
                </div>
                <div className="w-full md:w-64 h-64 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 font-mono text-sm">Zoo Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="py-20 bg-background border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Built on the Lux-Hanzo-Zoo stack. Post-quantum consensus, AI compute chain, and open research network.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background border border-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Lux Network</h3>
                <p className="text-gray-400">
                  Post-quantum L0 consensus with sub-second finality.
                </p>
              </div>
              <div className="bg-background border border-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Hanzo AI</h3>
                <p className="text-gray-400">
                  L1 AI compute chain. Mining, model serving, and infrastructure.
                </p>
              </div>
              <div className="bg-background border border-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Zoo Network</h3>
                <p className="text-gray-400">
                  Application layer for decentralized AI research and governance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 bg-background border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Advance Open AI Research
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Fund open-source models, contribute to ZIPs, or train models on Zoo Gym.
              Every contribution is tax-deductible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donation"
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors text-lg"
              >
                Support Our Research
              </Link>
              <Link
                href="/research"
                className="bg-transparent border-2 border-white text-foreground px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-colors text-lg"
              >
                Read Our Papers
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
