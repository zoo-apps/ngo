import React from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Link from 'next/link';
import { Radio, Cpu, Globe, Activity, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function SensorMeshPage() {
  return (
    <Layout>
      <Seo
        templateTitle="Bioacoustic Sensor Mesh & Telemetry Network"
        description="Global edge sensor network powering real-time bioacoustic classification, anti-poaching telemetry, and wildlife preservation."
      />
      <Navbar />

      <div className="bg-background text-foreground min-h-screen">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold mb-6">
            <Radio className="w-3.5 h-3.5" />
            <span>Real-Time Edge Sensor Mesh &middot; 120 kHz Hydrophones</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Bioacoustic Sensor Mesh & Distributed Telemetry
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A worldwide sovereign telemetry network connecting marine hydrophones, terrestrial acoustic sensors, and
            edge neural processors. Running Zen4-Bioacoustic models locally to detect and classify species in real-time.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/donation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 text-black font-bold text-sm hover:bg-primary-400 transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span>Sponsor a Sanctuary Sensor Node</span>
            </Link>
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              <span>View Live Node Telemetry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mesh Capabilities Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">120 kHz Acoustic Arrays</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ultra-broadband hydrophone nodes capturing full-spectrum cetacean clicks, whistles, and pulse trains in
                the Arctic and Pacific.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">On-Device Neural Inference</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Solar-powered micro-nodes execute quantised Zen4-Bioacoustic edge models with sub-20ms inference latency
                directly in the field.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">100% Open Scientific Data</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All raw telemetry, spectrograms, and species classifications are published openly for global conservation
                and academic researchers.
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
                <h2 className="text-xl font-bold">Active Sensor Mesh Status</h2>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                100% OPERATIONAL
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">342</div>
                <div className="text-xs text-muted-foreground mt-1">Active Hardware Nodes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-400">847+</div>
                <div className="text-xs text-muted-foreground mt-1">Monitored Species</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">2.4M Ha</div>
                <div className="text-xs text-muted-foreground mt-1">Protected Sanctuary Range</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">&lt; 15 ms</div>
                <div className="text-xs text-muted-foreground mt-1">Edge Neural Latency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}