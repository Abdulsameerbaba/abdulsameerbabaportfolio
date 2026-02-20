import { Award } from "lucide-react";

const CERTS = [
  "Certified Cyber Criminologist",
  "Cisco Certified Ethical Hacker (CEH)",
  "CCNA : Introduction to Networks",
  "Cisco Certified Introduction to Cybersecurity"
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">

        <h2 className="section-title text-center">Certifications</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">

          {CERTS.map((cert, i) => (
            <div key={i} className="cyber-card p-6 flex items-center gap-4">

              <Award className="text-[#ff0033]" size={20}/>
              <p className="text-white font-semibold">{cert}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
