import { UserX, FileText, Network } from 'lucide-react';

const problems = [
  {
    icon: UserX,
    title: 'Legacy platforms',
    highlight: 'Legacy platforms',
    description: 'force AI onto systems never built to handle or support it.'
  },
  {
    icon: FileText,
    title: '"AI Platforms"',
    highlight: '"AI Platforms"',
    description: 'use primitive prompt stuffing, not true AI intelligence.'
  },
  {
    icon: Network,
    title: 'Data focused tools',
    highlight: 'Data focused tools',
    description: 'apply basic \'if-then\' logic, not contextual understanding.'
  }
];

export default function ProblemsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="border border-white/10 rounded-3xl p-12 lg:p-16"
          style={{
            backgroundImage: 'url(https://019b1f8b-a240-79e9-a7a5-1d25f99c1a61.mochausercontent.com/image.png_8260.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h2 
            className="text-4xl lg:text-5xl font-normal mb-16 max-w-3xl"
            style={{ fontFamily: 'Geist Mono, monospace' }}
          >
            Most AI sales tech is just glorified templating.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <problem.icon className="w-6 h-6 mb-6 text-white" strokeWidth={1.5} />
                <p className="text-sm text-gray-300">
                  <span className="text-emerald-500">{problem.highlight}</span>{' '}
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
