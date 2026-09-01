import Link from 'next/link';

function Intro({
  breadcrumbs,
  title,
  comment,
}: {
  breadcrumbs: string;
  title: string;
  comment?: string;
}) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '2rem 1.5rem 4rem 1.5rem' }}>
      <div className="glow-backdrop" />

      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
          <div className="pill" style={{ fontSize: '0.75rem' }}>
            <span>🐬</span>
            <span>{breadcrumbs}</span>
          </div>
          <div className="pill" style={{ fontSize: '0.75rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399', display: 'inline-block' }} />
            <span>501(c)(3) Non-Profit · EIN 88-3538992</span>
          </div>
        </div>

        <h1 className="display-chrome" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
          {title}
        </h1>

        {comment && (
          <p className="text-secondary" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6, maxWidth: '800px' }}>
            {comment}
          </p>
        )}

        <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '800px', opacity: 0.8 }}>
          Zoo Labs Foundation Inc. is a 501(c)(3) non-profit scientific research organization advancing open frontier AI, bioacoustic telemetry, and computational conservation biology for 1,500+ endangered species.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.5rem' }}>
          <a
            href="https://zoolabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="action"
            data-fill
            style={{ minHeight: '46px', padding: '0 1.75rem', fontSize: '0.875rem' }}
          >
            <span>🐬 Launch ZooLabs.io ↗</span>
          </a>

          <Link
            href="/ai"
            className="action"
            style={{ minHeight: '46px', padding: '0 1.5rem', fontSize: '0.875rem' }}
          >
            Explore Zen Models &rarr;
          </Link>

          <Link
            href="/research"
            className="action"
            style={{ minHeight: '46px', padding: '0 1.5rem', fontSize: '0.875rem' }}
          >
            Read Research
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
