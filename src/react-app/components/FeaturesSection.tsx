import { Search, PenTool } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="pt-20 pb-1 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-2">
          {/* Research Column */}
          <div 
            className="border border-white/10 rounded-3xl p-12"
            style={{ backgroundColor: '#0B0C0D' }}
          >
            {/* Research Mockup */}
            <div className="mb-12">
              <img 
                src="https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/image.png_8395.png"
                alt="Research Interface"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Research Content */}
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm uppercase tracking-wider text-blue-400">Research</h3>
            </div>
            
            <h4 className="text-xl font-normal mb-4" style={{ fontFamily: 'Geist Mono, monospace' }}>
              Add contacts once, let our AI do the deep discovery work
            </h4>
            
            <p className="text-sm text-gray-400">
              Our AI automatically researches each prospect by analyzing their website, LinkedIn profile, and company information. Get comprehensive insights instantly without spending hours on manual research.
            </p>
          </div>

          {/* Writing Column */}
          <div 
            className="border border-white/10 rounded-3xl p-12"
            style={{ backgroundColor: '#0B0C0D' }}
          >
            {/* Writing Mockup */}
            <div className="mb-12">
              <img 
                src="https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/image.png_3077.png"
                alt="Writing Interface"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Writing Content */}
            <div className="flex items-center gap-3 mb-6">
              <PenTool className="w-5 h-5 text-orange-500" />
              <h3 className="text-sm uppercase tracking-wider text-orange-500">Writing</h3>
            </div>
            
            <h4 className="text-xl font-normal mb-4" style={{ fontFamily: 'Geist Mono, monospace' }}>
              Generate messages based on your assets and deep research
            </h4>
            
            <p className="text-sm text-gray-400">
              One click generates truly personalized messages based on your company materials and deep prospect research. Our RAG technology embeds your entire sales and marketing library to craft messages that feel human-written.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
