import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#ff0033]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
          <Shield size={20} className="text-[#ff0033]" />
          <p className="text-gray-400">
            © 2026 Abdul Sameer Baba | Cybersecurity Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
