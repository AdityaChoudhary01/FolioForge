import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <header className="py-12 md:py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:col-span-1">
            <Image
              src="https://placehold.co/300x300.png"
              alt="Headshot"
              width={240}
              height={240}
              className="rounded-full shadow-lg"
              data-ai-hint="professional headshot"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-2">
              FolioForge
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Creative Developer & MERN Stack Specialist
            </p>
            <p className="max-w-xl mx-auto md:mx-0 mb-6">
              Hi, I&apos;m a passionate developer specializing in the MERN stack. I build beautiful, functional, and user-centric web applications. Welcome to my creative space where I showcase my work and journey in the world of code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <nav className="mt-12 flex justify-center gap-6">
            <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
