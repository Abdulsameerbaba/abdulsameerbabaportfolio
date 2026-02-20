import { TrendingUp, Bot, Database } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Legacy platforms',
    description: 'force AI onto systems never built to handle or support it.',
    color: 'text-red-400'
  },
  {
    icon: Bot,
    title: '"AI Platforms"',
    description: 'use primitive prompt stuffing, not true AI intelligence.',
    color: 'text-orange-400'
  },
  {
    icon: Database,
    title: 'Data focused tools',
    description: 'apply basic \'if-then\' logic, not contextual understanding.',
    color: 'text-blue-400'
  }
];

export default function Statement() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-20 text-center">
          Most AI sales tech is just glorified templating.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
            >
              <feature.icon className={`w-8 h-8 mb-6 ${feature.color} group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
              <h3 className={`text-xl font-bold mb-3 ${feature.color}`}>{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
