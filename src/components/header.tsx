"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline">FolioForge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="outline" className="hidden md:inline-flex" asChild>
          <Link href="#contact">Hire Me</Link>
        </Button>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="mt-4" asChild>
                <Link href="#contact" onClick={() => setIsOpen(false)}>Hire Me</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
