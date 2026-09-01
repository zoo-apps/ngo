import React from 'react';

function Header() {
  return (
    <section className="bg-background py-16 md:py-24 border-b border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="badge badge-warm">Direct Wildlife Impact</span>
              <span className="text-xs font-mono text-zinc-400">Zoo Labs 501(c)(3)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Support Wildlife Sanctuaries & Bioacoustic Research
            </h1>

            <p className="text-base md:text-lg text-secondary leading-relaxed">
              We fund frontline animal conservation, build open-source bioacoustic sensor networks, and protect endangered species across marine and terrestrial habitats worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.paypal.biz/zoongo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-6 py-3 rounded-full font-bold text-sm"
              >
                💵 Donate via PayPal
              </a>
              <a
                href="/donation/crypto"
                className="btn btn-secondary px-6 py-3 rounded-full font-bold text-sm"
              >
                ₿ Donate Crypto
              </a>
              <a
                href="/coin"
                className="btn btn-glass px-6 py-3 rounded-full font-bold text-sm"
              >
                📡 Sponsor Sensor Node &rarr;
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 w-full max-w-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/pygmy_flower.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
