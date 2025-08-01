import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
