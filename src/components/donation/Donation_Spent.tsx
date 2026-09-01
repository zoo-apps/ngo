import React, { useState } from 'react';

const ALLOCATION_AREAS = [
  {
    title: 'Sanctuary & Rescue Operations',
    desc: 'Direct veterinary care, anti-poaching operations, physical sanctuary habitat construction, and emergency rescue missions for endangered wildlife.',
    icon: '🐅',
    tag: 'Field Operations',
  },
  {
    title: 'Open Bioacoustic Sensor Mesh',
    desc: '120 kHz marine hydrophone nodes, edge micro-VM telemetry units, and open data infrastructure monitoring vocalizations across the Arctic, Pacific, and rainforests.',
    icon: '📡',
    tag: 'Neural Edge Hardware',
  },
  {
    title: 'Open Science & Academic Research',
    desc: 'Publishing open datasets, spectrogram models, and bioacoustic transformer architectures for global conservation biologists and universities.',
    icon: '🧬',
    tag: 'Frontier AI Science',
  },
];

export default function Donation_Spent() {
  const [selectedArea, setSelectedArea] = useState(0);

  return (
    <section className="bg-card py-16 md:py-24 border-b border-white/10">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="badge badge-online mb-3">100% Direct Allocation</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Where Your Support Goes
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed">
            Every contribution goes directly toward tangible wildlife protection, bioacoustic sensory deployments, and open-access conservation research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ALLOCATION_AREAS.map((area, idx) => {
            const isSel = selectedArea === idx;
            return (
              <div
                key={area.title}
                onClick={() => setSelectedArea(idx)}
                className={`card cursor-pointer transition-all ${
                  isSel ? 'border-strong' : ''
                }`}
                style={{
                  background: isSel ? 'var(--surface-card-emphasis)' : 'var(--surface-card)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{area.icon}</span>
                  <span className="badge badge-accent">{area.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{area.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-surface border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Tax-Deductible 501(c)(3) Giving</h4>
            <p className="text-sm text-secondary">
              Zoo Labs Foundation is a recognized 501(c)(3) non-profit public charity. All donations are tax-deductible to the fullest extent permitted by law.
            </p>
          </div>
          <a
            href="https://www.paypal.biz/zoongo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-8 py-3 rounded-full font-bold text-sm shrink-0"
          >
            Donate Today &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
