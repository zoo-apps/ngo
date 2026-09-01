import Link from 'next/link';

export default function Comment() {
  const stats = [
    {
      metric: '130+',
      label: 'Published Research Papers',
      desc: 'Peer-reviewed preprints and formal proofs covering TF-GRPO, ASO, and post-quantum consensus.',
      link: 'Explore Papers',
      href: 'https://papers.zoo.ngo',
      external: true,
    },
    {
      metric: '45+',
      label: 'Open-Weights Zen Models',
      desc: 'Frontier foundation models from 600M to 2T+ MoDE parameters with verifiable open weights.',
      link: 'Zen Model Suite',
      href: '/ai',
    },
    {
      metric: '100% Open',
      label: 'Decentralized Compute & Gym',
      desc: 'Open AI mining protocols, Proof-of-Useful-Work (PoUW), and Zoo Gym reinforcement learning.',
      link: 'Zoo Gym (GRPO)',
      href: 'https://github.com/zooai/gym',
      external: true,
    },
    {
      metric: '501(c)(3)',
      label: 'Tax-Exempt Scientific Charity',
      desc: 'Direct tax-deductible donor endowments supporting frontline sanctuaries and open science.',
      link: 'Donations & 990',
      href: '/donation',
    },
  ];

  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                    lineHeight: 1,
                  }}
                >
                  {item.metric}
                </span>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#E4E4E7', marginTop: '8px' }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: '12px', color: '#A1A1AA', marginTop: '6px', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>

              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#3B82F6',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{item.link}</span>
                  <span>&rarr;</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#3B82F6',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{item.link}</span>
                  <span>&rarr;</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
