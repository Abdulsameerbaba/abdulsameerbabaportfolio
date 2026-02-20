import MatrixBackground from '@/react-app/components/portfolio/MatrixBackground';
import Navbar from '@/react-app/components/portfolio/Navbar';
import HeroSection from '@/react-app/components/portfolio/HeroSection';
import AboutSection from '@/react-app/components/portfolio/AboutSection';
import SkillsSection from '@/react-app/components/portfolio/SkillsSection';
import ProjectsSection from '@/react-app/components/portfolio/ProjectsSection';
import ContactSection from '@/react-app/components/portfolio/ContactSection';
import Footer from '@/react-app/components/portfolio/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
