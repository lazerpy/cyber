import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      {/* Background gradients and glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute left-1/2 bottom-0 w-1/2 h-48 bg-green-400/10 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 py-24">
        {/* Left: Headline, subtext, info cards */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white leading-tight">
            Stay Ahead of Threats.<br />
            <span className="text-green-400">Secure Every Line of Code.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Real-time cybersecurity intelligence designed for modern developers, startups, and agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Card 1 */}
            <div className="flex-1 min-w-[220px] bg-black/60 border border-green-400/30 rounded-2xl p-6 mb-2 sm:mb-0">
              <div className="text-2xl font-bold text-white mb-1">0 Threats Detected</div>
              <div className="text-sm text-green-300">Live Scan <span className="mx-1">•</span> Updated now</div>
            </div>
            {/* Card 2 */}
            <div className="flex-1 min-w-[220px] bg-black/60 border border-blue-400/30 rounded-2xl p-6">
              <div className="text-2xl font-bold text-white mb-1">120+ Companies</div>
              <div className="text-sm text-blue-300">Trust Our Protection</div>
            </div>
          </div>
        </div>
        {/* Right: Glowing shield icon in a card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative bg-black/60 border border-blue-400/30 rounded-3xl p-12 flex items-center justify-center shadow-2xl" style={{minWidth:'320px', minHeight:'320px'}}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <circle cx="60" cy="60" r="54" stroke="#2dd4bf" strokeWidth="4" fill="#0f172a"/>
              <path d="M60 32L90 48V64C90 90 60 104 60 104C60 104 30 90 30 64V48L60 32Z" stroke="#2dd4bf" strokeWidth="4" fill="#0f172a"/>
              <path d="M48 66L58 76L76 54" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{boxShadow:'0 0 80px 10px #2dd4bf55'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;