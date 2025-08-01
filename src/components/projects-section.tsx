"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast"
import { getAdjustedLayout } from '@/app/actions';
import ProjectCard from './project-card';
import { Wand2, Loader2 } from 'lucide-react';
import type { Project } from '@/types';

const initialProjects: Project[] = [
  {
    id: 'proj1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site built with React, Node.js, Express, and MongoDB. Includes product listings, cart functionality, and payment integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'E-commerce'],
  },
  {
    id: 'proj2',
    title: 'Task Management App',
    description: 'A collaborative task management tool inspired by Trello. Users can create boards, lists, and cards to organize their work.',
    imageUrl: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['React', 'Firebase', 'Real-time', 'Productivity'],
  },
  {
    id: 'proj3',
    title: 'Portfolio Website V1',
    description: 'My previous portfolio website, built with vanilla HTML, CSS, and JavaScript. A testament to my growth as a developer.',
    imageUrl: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'Design'],
  },
   {
    id: 'proj4',
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets using D3.js and React. Features interactive charts and graphs.',
    imageUrl: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['React', 'D3.js', 'Data-Viz', 'API'],
  },
];

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
    <section id="projects" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Here are some of the projects I'm proud of. Use the magic wand to re-order them based on your interests!</p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
                <Input
                    type="text"
                    placeholder="e.g., 'show me projects using real-time databases' or 'I like e-commerce'"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                    className="pr-12"
                    disabled={isLoading}
                />
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-accent hover:text-primary"
                    onClick={handleAdjustLayout}
                    disabled={isLoading}
                    aria-label="Adjust Layout"
                >
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Wand2 className="h-5 w-5" />}
                </Button>
            </div>
             <div className="flex justify-center mt-4">
                <Button onClick={handleReset} variant="link" disabled={isLoading}>Reset Order</Button>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
