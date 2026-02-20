import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="pt-48 pb-20 px-6 bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/image.png_8260.png')" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #000000 0%, transparent 30%)' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="pt-12">
            <h1 className="text-5xl font-medium leading-tight tracking-tight mb-6 text-balance" style={{ fontFamily: "'Geist Mono', monospace" }}>
              Agent powered contextual outreach
            </h1>
          </div>
          
          <div className="space-y-6 pt-12">
            <p className="text-base text-gray-400 leading-relaxed">
              OutreachAI goes beyond basic AI with autonomous agents that research, generate, and deploy outreach automatically.
            </p>
            
            <div className="space-y-3">
              <button className="group flex items-center gap-2 text-white px-0 py-3 transition-all duration-300" style={{ borderRadius: 0 }}>
                <span className="font-medium tracking-wide" style={{ fontFamily: "'Geist Mono', monospace" }}>30 DAY FREE TRIAL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-emerald-400">
                Starts when agent goes live. No card. No risk. No rush.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
