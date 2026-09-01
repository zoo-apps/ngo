import Link from 'next/link';

export default function Principles() {
  const principles = [
    { title: 'Open Science & Models', desc: 'We build frontier AI models and release weights openly for global conservation and research.' },
    { title: 'No Paywalls', desc: 'All research papers, benchmark datasets, and bioacoustic telemetry are freely accessible.' },
    { title: 'Formal Verification', desc: 'Critical models and mathematical constraints are verified with Lean 4 formal proofs.' },
    { title: 'Safe by Design', desc: 'Alignment and content safety tailored for wildlife sanctuaries, research institutions, and educational use.' },
    { title: '501(c)(3) Stewardship', desc: 'Tax-exempt public charity governed by scientists, bioacousticians, and conservation leaders.' },
  ];

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
            Foundation Charter
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            The Principles That Drive Us
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Advancing artificial intelligence in service of the living planet through open research, formal verification, and public stewardship.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {principles.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(24px)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    color: '#60A5FA',
                    fontSize: '11px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {idx + 1}
                </span>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  {p.title}
                </h3>
              </div>
              <p style={{ fontSize: '12px', color: '#A1A1AA', lineHeight: 1.5, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/donation"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all active:scale-95"
          >
            Support 501(c)(3) Research
          </Link>
          <a
            href="https://zoolabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10 transition-all"
          >
            🐬 Open ZooLabs.io Playground &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
