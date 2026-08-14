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
        {/* The eyebrow is INK, not a gradient. It ran red-green-blue and read
            as red at this size — a single warm word above a black page, and the
            only saturated pixel on it. The mark in the header carries the
            colour; the type does not repeat it. */}
        <p className="text-sm md:text-base font-medium tracking-widest uppercase mb-8 text-neutral-400">
          {breadcrumbs}
        </p>
        <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8">
          {title}
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl lg:text-2xl max-w-3xl mb-6 leading-relaxed">
          {comment}
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-12">
          The non-profit open-source lab behind the Zen family of AI models.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <Link
            href="/ai"
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Explore Models
          </Link>
          <Link
            href="/research"
            className="border border-neutral-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:border-neutral-500 transition-colors"
          >
            Read Our Research
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
