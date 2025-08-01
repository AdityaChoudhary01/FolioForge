import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <main className="flex-grow">
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
