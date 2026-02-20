export default function ContactSection() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
        style={{ 
          backgroundImage: 'url(https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/bg-img-3.png)'
        }}
      />
      {/* Gradient overlay for fade effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, transparent 20%, transparent 80%, #000000 100%)'
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium mb-6" style={{ fontFamily: 'Geist Mono, monospace' }}>
          Ready to transform your outreach?
        </h2>
        <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
          Schedule a demo with our team to see how OutreachAI can help you send truly personalized messages at scale.
        </p>
        <button 
          className="text-sm text-black bg-white hover:bg-gray-200 transition-colors px-8 py-3 rounded-lg font-medium"
        >
          Schedule a demo
        </button>
      </div>
    </section>
  );
}
