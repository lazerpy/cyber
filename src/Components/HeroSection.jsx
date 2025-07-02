import React from 'react';

// Sparkle SVG for visual interest
const SparkleSVG = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="animate-spin-slow">
    <g filter="url(#filter0_d_1_2)">
      <path d="M16 2L18.5 13.5L30 16L18.5 18.5L16 30L13.5 18.5L2 16L13.5 13.5L16 2Z" fill="#a7f3d0"/>
    </g>
    <defs>
      <filter id="filter0_d_1_2" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_1_2"/>
      </filter>
    </defs>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      {/* Background gradients and glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute left-1/2 bottom-0 w-1/2 h-48 bg-green-400/10 rounded-full blur-2xl" />
        {/* Sparkles */}
        <div className="absolute left-20 top-28 opacity-80"><SparkleSVG /></div>
        <div className="absolute right-32 top-24 opacity-60 scale-75"><SparkleSVG /></div>
        <div className="absolute left-1/2 bottom-24 opacity-70 scale-90"><SparkleSVG /></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 py-24">
        {/* Left: Headline, subtext, info cards */}
        <div className="flex-1 max-w-xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white leading-tight tracking-tight drop-shadow-lg">
            <span className="block text-2xl md:text-3xl font-light text-green-200 mb-2 animate-fade-in">Next-Gen Security</span>
            Stay Ahead of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-green-300 animate-fade-in">Threats</span>.<br />
            <span className="text-green-400 text-4xl md:text-6xl animate-fade-in">Secure Every Line of Code.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 animate-fade-in" style={{animationDelay:'0.2s', animationFillMode:'both'}}>Real-time <span className="text-green-300 font-semibold">cybersecurity intelligence</span> designed for modern developers, startups, and agencies.</p>
          <div className="flex gap-4 mb-10 animate-fade-in" style={{animationDelay:'0.4s', animationFillMode:'both'}}>
            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold text-lg shadow-lg hover:scale-105 hover:from-green-300 hover:to-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
              Get Started
            </button>
            <button className="px-7 py-3 rounded-full border-2 border-green-400 text-green-200 font-bold text-lg bg-black/40 hover:bg-green-400 hover:text-black transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400">
             Scan Now
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{animationDelay:'0.6s', animationFillMode:'both'}}>
            {/* Card 1 */}
            <div className="flex-1 min-w-[220px] bg-black/60 border border-green-400/30 rounded-2xl p-6 mb-2 sm:mb-0 shadow-xl hover:scale-105 transition-transform">
              <div className="text-2xl font-bold text-white mb-1">0 <span className="text-green-400">Threats</span> Detected</div>
              <div className="text-sm text-green-300">Live Scan <span className="mx-1">•</span> Updated now</div>
            </div>
            {/* Card 2 */}
            <div className="flex-1 min-w-[220px] bg-black/60 border border-blue-400/30 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform">
              <div className="text-2xl font-bold text-white mb-1">120+ <span className="text-blue-400">Companies</span></div>
              <div className="text-sm text-blue-300">Trust Our Protection</div>
            </div>
          </div>
        </div>
        {/* Right: Glowing shield icon in a card with floating animation */}
        <div className="flex-1 flex items-center justify-center animate-float">
          <div className="relative bg-black/60 border border-blue-400/30 rounded-3xl p-12 flex items-center justify-center shadow-2xl" style={{minWidth:'320px', minHeight:'320px'}}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg animate-pulse">
              <circle cx="60" cy="60" r="54" stroke="#2dd4bf" strokeWidth="4" fill="#0f172a"/>
              <path d="M60 32L90 48V64C90 90 60 104 60 104C60 104 30 90 30 64V48L60 32Z" stroke="#2dd4bf" strokeWidth="4" fill="#0f172a"/>
              <path d="M48 66L58 76L76 54" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{boxShadow:'0 0 80px 10px #2dd4bf55'}}></div>
            {/* Extra SVG for visual interest */}
            <div className="absolute -top-8 -right-8"><SparkleSVG /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;