export default function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border">
              <img
                src="https://s3.amazonaws.com/media-prod.butternut.ai/website_images/portfolio/79b6c34a-c273-41d5-bf01-1d2010007368.webp"
                alt="Abdul Sameer Baba"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-full border border-[#ff0033]/30 animate-pulse" />
            <div className="absolute -top-8 -left-8 w-[calc(100%+32px)] h-[calc(100%+32px)] rounded-full border border-[#ff0033]/20" />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Abdul Sameer <span className="text-[#ff0033] glow-text">Baba</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-6 font-['Fredoka']">
              Cyber Criminologist • Computer Science Student
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Specializing in Ethical Hacking, Digital Forensics, and Threat Intelligence. 
              Seeking internship or placement opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll('#projects')}
                className="cyber-btn"
              >
                View Projects
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="cyber-btn-outline"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
