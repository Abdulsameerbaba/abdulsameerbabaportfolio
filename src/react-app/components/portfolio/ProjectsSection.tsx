import { ExternalLink, Shield, Scan } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'CyberGuard SIEM',
    description:
      'Prototype for monitoring and analyzing real-time security alerts from network hardware.',
    icon: Shield,
    link: '#',
  },
  {
    id: 2,
    title: 'Network & URL Threat Scanner',
    description:
      'Python tool to scan active hosts, open ports, and detect phishing links.',
    icon: Scan,
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="cyber-card p-8 group">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[#ff0033]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff0033]/20 transition-colors">
                <project.icon className="text-[#ff0033]" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 font-['Fredoka']">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Button */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-[#ff0033] hover:text-white transition-colors font-medium group/link"
              >
                <span>View Code</span>
                <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
