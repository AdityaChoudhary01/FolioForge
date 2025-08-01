
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast"
import { getAdjustedLayout } from '@/app/actions';
import ProjectCard from './project-card';
import { Wand2, Loader2, RotateCcw } from 'lucide-react';
import type { Project } from '@/types';
import { motion } from 'framer-motion';

const initialProjects: Project[] = [
    {
        id: 'proj1',
        title: 'YumRide',
        description: 'YumRide is an innovative food delivery platform that connects users with their favorite local restaurants and delivers delicious meals right to their doorstep.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/yumride.png',
        githubUrl: '#',
        liveUrl: 'https://food-delivery-frontend-mo9e.onrender.com/',
        tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
        id: 'proj2',
        title: 'QR Generator',
        description: 'A QR code generator that allows users to create custom QR codes for various purposes. Users can input text, URLs, or contact information to generate QR codes that can be downloaded or shared.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/qr-generator.png',
        githubUrl: '#',
        liveUrl: 'https://adityachoudhary01.github.io/QrCodeGenerator/',
        tags: ['JavaScript', 'REST API', 'QRCode', 'Html', 'CSS'],
    },
    {
        id: 'proj3',
        title: 'Weather App',
        description: 'A dynamic weather application that enables users to check current weather conditions based on city or location input. It fetches real-time weather data from a REST API.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/weather-app.png',
        githubUrl: '#',
        liveUrl: 'https://adityachoudhary01.github.io/WeatherApp/',
        tags: ['JavaScript', 'Html', 'CSS', 'REST API'],
    },
    {
        id: 'proj4',
        title: 'aktuwrld',
        description: 'A study platform for students of AKTU that provides resources, notes, and previous year question papers for various courses and subjects.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/aktuwrld.png',
        githubUrl: '#',
        liveUrl: 'https://aktuwrld.netlify.app/',
        tags: ['JavaScript', 'Html', 'CSS'],
    },
    {
        id: 'proj5',
        title: 'Wifi Qr Code Generator',
        description: 'A wifi QR code generator that allows users to create QR codes for connecting to Wi-Fi networks by inputting network SSID, password, and encryption type.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/wifi-qr-code-generator.png',
        githubUrl: '#',
        liveUrl: 'https://adityachoudhary01.github.io/WifiQrCodeGenerator/',
        tags: ['JavaScript', 'Html', 'CSS', 'REST API'],
    },
    {
        id: 'proj6',
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects, skills, and contact information. Built with modern web technologies for an interactive experience.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/portfolio-website.png',
        githubUrl: '#',
        liveUrl: 'https://adityachoudharyportfolio.netlify.app/',
        tags: ['React', 'Tailwind CSS', 'JavaScript'],
    },
    {
        id: 'proj7',
        title: 'Expense Tracker',
        description: 'An expense tracking application that helps users manage their finances by recording income and expenses, with charts and graphs for visualization.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/expense-tracker.png',
        githubUrl: '#',
        liveUrl: 'https://khatabook-qcb9.onrender.com/',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
        id: 'proj8',
        title: 'JAT Universal',
        description: 'JAT Universal is a comprehensive platform offering a wide range of services, including e-commerce, logistics, and customer support.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/jat-universal.png',
        githubUrl: '#',
        liveUrl: 'https://jatuniversal-history.netlify.app/',
        tags: ['Html', 'CSS'],
    },
    {
        id: 'proj9',
        title: 'Chatty',
        description: 'A full-stack real-time chat application built with the MERN stack. It features user authentication with JWT, real-time messaging with Socket.io, and a modern UI.',
        imageUrl: 'https://adityachportfolio3.netlify.app/images/chatty.png',
        githubUrl: '#',
        liveUrl: 'https://chat-app-adityachoudhary.netlify.app/',
        tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Axios', 'React Hot Toast'],
    },
];

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
};
  
const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [preferences, setPreferences] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAdjustLayout = async () => {
    if (!preferences.trim()) {
      toast({
        variant: "destructive",
        title: "Input Required",
        description: "Please tell me what you're looking for in a project.",
      });
      return;
    }
    setIsLoading(true);
    const { sortedProjects, error } = await getAdjustedLayout(preferences, initialProjects);
    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "AI Error",
        description: error,
      });
    }

    if (sortedProjects) {
        setProjects(sortedProjects);
        toast({
            title: "Layout Adjusted!",
            description: "Projects have been re-ordered based on your preferences.",
        });
    }
  };
  
  const handleReset = () => {
    setProjects(initialProjects);
    setPreferences('');
    toast({
        title: "Layout Reset",
        description: "Project order has been reset to default.",
    });
  }

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">Here are some of the projects I'm proud of. Use the magic wand to re-order them based on your interests!</p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
                <Input
                    type="text"
                    placeholder="e.g., 'show me projects using real-time databases' or 'I like e-commerce'"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                    className="pr-24 h-12 text-sm sm:text-base bg-secondary/50"
                    disabled={isLoading}
                    onKeyDown={(e) => e.key === 'Enter' && handleAdjustLayout()}
                />
                <Button 
                    className="absolute right-14 top-1/2 -translate-y-1/2 h-9 w-9 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    onClick={handleAdjustLayout}
                    disabled={isLoading}
                    aria-label="Adjust Layout"
                >
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Wand2 className="h-5 w-5" />}
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9"
                    onClick={handleReset}
                    disabled={isLoading}
                    aria-label="Reset Order"
                >
                    <RotateCcw className="h-5 w-5" />
                </Button>
            </div>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(project => (
            <motion.div 
                key={project.id} 
                className="group"
                variants={cardVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
