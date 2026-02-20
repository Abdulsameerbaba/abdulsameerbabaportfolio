import { Send, MessageCircle } from 'lucide-react';

export default function SendingRespondingSection() {
  return (
    <section className="pt-1 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-2">
          {/* Sending Column */}
          <div 
            className="border border-white/10 rounded-3xl p-12"
            style={{ backgroundColor: '#0B0C0D' }}
          >
            {/* Sending Mockup */}
            <div className="mb-12">
              <img 
                src="https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/image.png_0236.png"
                alt="Sending Interface"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Sending Content */}
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-green-400" />
              <h3 className="text-sm uppercase tracking-wider text-green-400">Sending</h3>
            </div>
            
            <h4 className="text-xl font-normal mb-4" style={{ fontFamily: 'Geist Mono, monospace' }}>
              Deploy across email, LinkedIn, calling and SMS
            </h4>
            
            <p className="text-sm text-gray-400">
              Intelligent orchestration that ensures the right message reaches the right person at the right time. Maintain hyper-personalization while scaling your outreach efforts beyond what your team could manually accomplish.
            </p>
          </div>

          {/* Responding Column */}
          <div 
            className="border border-white/10 rounded-3xl p-12"
            style={{ backgroundColor: '#0B0C0D' }}
          >
            {/* Responding Mockup */}
            <div className="mb-12">
              <img 
                src="https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/image.png_7943.png"
                alt="Responding Interface"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Responding Content */}
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm uppercase tracking-wider text-blue-400">Responding</h3>
            </div>
            
            <h4 className="text-xl font-normal mb-4" style={{ fontFamily: 'Geist Mono, monospace' }}>
              AI coaching that adapts to prospect behavior to land meetings
            </h4>
            
            <p className="text-sm text-gray-400">
              We don't stop at the initial outreach. Our AI coach analyzes your prospect response - or lack of - and suggests follow-up strategies based on what matters most to each prospect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
