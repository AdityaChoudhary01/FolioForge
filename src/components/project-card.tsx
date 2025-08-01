import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border-transparent hover:border-primary bg-gradient-to-br from-card to-secondary/20 dark:to-secondary/10">
      <CardHeader>
        <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
            <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            data-ai-hint="technology ui"
            />
        </div>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border-accent/20">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        <Button variant="outline" asChild>
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        <Button asChild>
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
