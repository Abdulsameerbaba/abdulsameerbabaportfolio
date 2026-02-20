import { Search, Lightbulb, Sparkles, Send, Linkedin, Mail } from 'lucide-react';

const steps = [
  {
    number: 1,
    label: 'FIND',
    icon: Search,
    title: 'Automatically sources best-fit contacts',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    contacts: [
      { name: 'JAMES STRONG', role: 'VP SALES', company: 'JABRA.AI' },
      { name: 'SAM WILSON', role: 'CEO', company: 'SAASLAND.COM' },
      { name: 'KEVIN HUANG', role: 'FOUNDER', company: 'KEYMETRIX.COM' }
    ]
  },
  {
    number: 2,
    label: 'RESEARCH',
    icon: Lightbulb,
    title: 'Gathers intel you\'d usually spend hours collecting',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    insights: [
      { label: 'SITUATION', text: 'LOOKING TO SCALE AND MAKE MORE...' },
      { label: 'CHALLENGES', text: 'DOESN\'T HAVE ENOUGH TIME TO...' },
      { label: 'NEEDS', text: 'NEEDS STRATEGY ON BUILDING EX...' }
    ]
  },
  {
    number: 3,
    label: 'GENERATE',
    icon: Sparkles,
    title: 'Personalized messaging generated automatically',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
    messages: [
      { type: 'EMAIL', content: 'MESSAGING ABOUT WRITING...' },
      { type: 'PLAYBOOK', content: 'SALES TEAM TRAINING VALUE PROP' },
      { type: 'CASE STUDY', content: 'REFERENCE RELEVANT INDUSTRY' }
    ]
  },
  {
    number: 4,
    label: 'DEPLOY',
    icon: Send,
    title: 'Multi-channel orchestration with perfect timing',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/30',
    channels: [
      { icon: Mail, label: 'EMAIL', time: '9:30 AM' },
      { icon: Linkedin, label: 'LINKEDIN', time: '10:45 AM' }
    ]
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-15 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${step.borderColor}`}>
                <step.icon className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider">STEP {step.number}</span>
                <span className="text-xs opacity-60">—</span>
                <span className="text-sm font-semibold tracking-wider">{step.label}</span>
              </div>

              <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-6 h-64 overflow-hidden">
                {step.contacts && (
                  <div className="space-y-3">
                    {step.contacts.map((contact, i) => (
                      <div key={i} className="flex items-center gap-3 bg-black/40 rounded-lg p-3 border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold tracking-wide">{contact.name}</div>
                          <div className="text-xs text-gray-500">{contact.role}</div>
                        </div>
                        <div className="flex gap-1">
                          <Linkedin className="w-3 h-3 text-gray-500" />
                          <Mail className="w-3 h-3 text-gray-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {step.insights && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800" />
                      <div>
                        <div className="text-xs font-semibold">JAMES STRONG</div>
                        <div className="text-xs text-gray-500">VP SALES @ XYZ</div>
                      </div>
                      <span className="ml-auto px-2 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30">IDENTIFIED</span>
                    </div>
                    {step.insights.map((insight, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-xs font-semibold text-gray-400">{insight.label}</div>
                        <div className="text-xs text-gray-300">{insight.text}</div>
                      </div>
                    ))}
                  </div>
                )}

                {step.messages && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800" />
                      <div>
                        <div className="text-sm font-semibold">JAMES STRONG</div>
                        <div className="text-sm text-gray-500">VP SALES @ XYZ</div>
                      </div>
                      <span className="ml-auto px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">READY</span>
                    </div>
                    {step.messages.map((message, i) => (
                      <div key={i} className="bg-black/40 rounded p-2 border border-white/5">
                        <div className="text-xs font-semibold text-gray-400 mb-1">{message.type}</div>
                        <div className="text-xs text-gray-300">{message.content}</div>
                      </div>
                    ))}
                  </div>
                )}

                {step.channels && (
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-gray-400 mb-4">EMAIL</div>
                    <div className="bg-black/40 rounded-lg p-3 border border-white/5 mb-4">
                      <div className="text-xs text-gray-400">To James</div>
                      <div className="text-xs text-gray-300 mt-2">
                        I saw the recent announcement of Software Engineers at...
                      </div>
                    </div>
                    {step.channels.map((channel, i) => (
                      <div key={i} className="flex items-center gap-3 bg-black/40 rounded-lg p-3 border border-white/5">
                        <channel.icon className="w-4 h-4" />
                        <span className="text-xs font-semibold flex-1">{channel.label}</span>
                        <span className="text-xs text-gray-500">{channel.time}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-400">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
