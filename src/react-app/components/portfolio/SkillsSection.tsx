import { Code, Shield, Terminal, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'Java', 'SQL', 'JavaScript'],
    color: '#ff0033',
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: ['Network Security', 'Digital Forensics', 'Vulnerability Analysis', 'Threat Intelligence'],
    color: '#ff0033',
  },
  {
    title: 'Tools',
    icon: Terminal,
    skills: ['Linux', 'Git', 'Wireshark', 'VS Code'],
    color: '#ff0033',
  },
  {
    title: 'Web',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: '#ff0033',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="cyber-card p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#ff0033]/10 flex items-center justify-center group-hover:bg-[#ff0033]/20 transition-colors">
                  <category.icon className="text-[#ff0033]" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Fredoka']">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ff0033]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
