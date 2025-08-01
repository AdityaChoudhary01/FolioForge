import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <header className="py-24 md:py-32 bg-gradient-to-br from-background to-secondary/30" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:col-span-1">
            <div className="relative">
                <Image
                  src="https://placehold.co/300x300.png"
                  alt="Headshot"
                  width={240}
                  height={240}
                  className="rounded-full shadow-lg border-4 border-background"
                  data-ai-hint="professional headshot"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/50 ring-offset-4 ring-offset-background animate-pulse"></div>
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FolioForge
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
              Creative Developer & MERN Stack Specialist
            </p>
            <p className="max-w-xl mx-auto md:mx-0 mb-6 text-lg">
              Hi, I&apos;m a passionate developer specializing in the MERN stack. I build beautiful, functional, and user-centric web applications. Welcome to my creative space where I showcase my work and journey in the world of code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <nav className="mt-20 flex justify-center gap-8">
            <Link href="#projects" className="text-lg font-semibold text-foreground/80 hover:text-primary transition-all duration-300">Projects</Link>
            <Link href="#contact" className="text-lg font-semibold text-foreground/80 hover:text-primary transition-all duration-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
