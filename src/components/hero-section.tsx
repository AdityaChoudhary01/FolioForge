import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <header className="relative py-24 md:py-32 lg:py-48 min-h-screen flex items-center justify-center overflow-hidden" id="about">
       <div className="absolute top-0 left-0 w-full h-full bg-background/80 backdrop-blur-sm z-10"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
       <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="block text-foreground/80">Hi, I'm</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FolioForge</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
              Creative Developer & MERN Stack Specialist
            </p>
            <p className="max-w-xl mx-auto md:mx-0 mb-8 text-lg text-foreground/80">
              I build beautiful, functional, and user-centric web applications. Welcome to my creative space where I showcase my work and journey in the world of code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#projects">
                  My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Headshot"
                  width={320}
                  height={320}
                  className="rounded-full shadow-2xl border-4 border-secondary"
                  data-ai-hint="professional developer"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/50 ring-offset-4 ring-offset-background animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
