import Link from 'next/link';

function Intro({breadcrumbs, title, comment}: {
    breadcrumbs: string;
    title: string;
    comment?: string;
  }) {
  return (
    <section className="relative overflow-hidden">
      {/* Pure black to dark gradient - NO color tint */}
      <div className="absolute inset-0 bg-[#09090b]" />
      {/* Subtle white radial for depth - monochrome only */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)'}} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            {breadcrumbs}
          </span>
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
            501(c)(3) Non-Profit · EIN 88-3538992
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8">
          {title}
        </h1>

        <p className="text-neutral-300 text-lg md:text-xl lg:text-2xl max-w-3xl mb-6 leading-relaxed">
          {comment}
        </p>

        <p className="text-neutral-400 text-base md:text-lg mb-10 max-w-3xl">
          Zoo Labs Foundation Inc. is a 501(c)(3) non-profit scientific research organization advancing open frontier AI, bioacoustic telemetry, and computational conservation biology for 1,500+ endangered species.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="https://zoolabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
          >
            <span>🐬 Open ZooLabs.io Playground</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>

          <Link
            href="/ai"
            className="bg-white text-black px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Explore Zen Models
          </Link>

          <Link
            href="/research"
            className="border border-neutral-700 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:border-neutral-500 transition-colors"
          >
            Read Our Research
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
