export default function MessagingSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="border border-white/10 rounded-3xl p-12 lg:p-16"
          style={{
            backgroundColor: '#0B0C0D'
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-normal mb-6">
              Send truly unique messaging at scale
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              Our Multi-Agent Pipeline goes beyond basic AI to help you deliver deeply researched, contextually personalized outreach to every prospect.
            </p>
            <button
              className="text-white px-0 py-2 border-b border-white hover:border-gray-400 transition-colors text-sm tracking-wide"
              style={{ 
                fontFamily: 'Geist Mono, monospace',
                borderRadius: 0
              }}
            >
              30 Day Free trial
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/image-mocha.png"
              alt="Messaging Agent Interface"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
