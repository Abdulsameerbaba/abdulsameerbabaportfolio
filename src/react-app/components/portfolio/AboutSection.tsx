import { Shield, GraduationCap, Award, BookOpen, School } from 'lucide-react';

const educationData = [
  {
    degree: 'B.E in Computer Science & Engineering',
    institution: 'Matrusri Engineering College',
    duration: '2023 – 2027',
    status: 'Pursuing',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Vignan Junior College',
    duration: '2021 – 2023',
    status: 'Completed',
    icon: BookOpen,
  },
  {
    degree: 'SSC',
    institution: 'Shadnagar English Medium High School',
    duration: '2021',
    status: 'Completed',
    icon: School,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden glow-border">
              <img
                src="https://s3.amazonaws.com/media-prod.butternut.ai/website_images/698e012a32671331c9a16226/639ae7ce-c783-462c-81d3-688d928cbc8e.webp"
                alt="Abdul Sameer Baba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I am a Computer Science & Engineering student at <span className="text-[#ff0033]">Matrusri Engineering College</span> (2023–2027). 
              Certified Cyber Criminologist passionate about cybercrime investigation, ethical hacking, and secure system design.
            </p>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="cyber-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="text-[#ff0033]" size={24} />
                  <h3 className="font-semibold text-white">Focus</h3>
                </div>
                <p className="text-gray-400 text-sm">Cybersecurity</p>
                <p className="text-gray-500 text-xs">Digital Forensics</p>
              </div>

              <div className="cyber-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-[#ff0033]" size={24} />
                  <h3 className="font-semibold text-white">Certified</h3>
                </div>
                <p className="text-gray-400 text-sm">Cyber Criminologist</p>
                <p className="text-gray-500 text-xs">Ethical Hacker</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-['Fredoka']">
            <span className="text-[#ff0033]">Education</span> Timeline
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {educationData.map((edu) => (
              <div key={edu.degree} className="cyber-card p-6 relative">
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  edu.status === 'Pursuing' 
                    ? 'bg-[#ff0033]/20 text-[#ff0033] border border-[#ff0033]/30' 
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {edu.status}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#ff0033]/10 flex items-center justify-center mb-4">
                  <edu.icon className="text-[#ff0033]" size={24} />
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-semibold text-white mb-2 pr-16">{edu.degree}</h4>
                <p className="text-[#ff0033] text-sm font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
