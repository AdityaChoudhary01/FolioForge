
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.8,
        },
    },
};

export default function HeroSection() {
  return (
    <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 lg:pb-48 flex items-center justify-center overflow-hidden min-h-[calc(100vh-5rem)]" id="about">
       <div className="absolute top-0 left-0 w-full h-full bg-background/80 backdrop-blur-sm z-10"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
       <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
             <motion.div className="flex justify-center lg:hidden mb-8" variants={imageVariants} initial="hidden" animate="visible">
                <div 
                  className="relative w-48 h-52 flex items-center justify-center"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                    <div className="absolute inset-0 bg-primary animate-pulse"></div>
                    <img
                      src="/profile.jpg"
                      alt="Headshot of Aditya Choudhary"
                      width={184}
                      height={200}
                      className="object-cover"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                      data-ai-hint="person headshot"
                    />
                </div>
              </motion.div>
            <motion.h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4" variants={itemVariants}>
              <span className="block text-foreground/80">Hi, I'm</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aditya Choudhary</span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-8" variants={itemVariants}>
              Passionate Full Stack Developer
            </motion.p>
            <motion.p className="max-w-xl mx-auto lg:mx-0 mb-4 text-base md:text-lg text-foreground/80" variants={itemVariants}>
              I love building beautiful, performant web applications and exploring new technologies. I also have a strong foundation in Data Structures and Algorithms (DSA) using Java, which helps me write efficient and scalable code.
            </motion.p>
            <motion.p className="max-w-xl mx-auto lg:mx-0 mb-8 text-base md:text-lg text-foreground/80" variants={itemVariants}>
              When I'm not coding, you’ll find me reading, hiking, or experimenting with creative projects!
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start" variants={itemVariants}>
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
            </motion.div>
          </motion.div>
          <motion.div className="hidden lg:flex justify-center" variants={imageVariants} initial="hidden" animate="visible">
            <div 
              className="relative w-80 h-[350px] flex items-center justify-center"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
                <div className="absolute inset-0 bg-primary animate-pulse"></div>
                <img
                  src="/profile.jpg"
                  alt="Headshot of Aditya Choudhary"
                  width={312}
                  height={342}
                  className="object-cover"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  data-ai-hint="person headshot"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
