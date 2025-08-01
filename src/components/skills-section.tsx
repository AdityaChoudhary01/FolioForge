import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Wind } from "lucide-react";

const skills = {
  "Frontend": ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express.js", "Python", "Flask"],
  "Databases": ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  "DevOps & Tools": ["Docker", "Git", "Webpack", "Vite", "Jest"],
};

const icons: { [key: string]: React.ReactNode } = {
  "Frontend": <Code className="h-8 w-8 text-primary" />,
  "Backend": <Server className="h-8 w-8 text-accent" />,
  "Databases": <Database className="h-8 w-8 text-green-500" />,
  "DevOps & Tools": <Wind className="h-8 w-8 text-blue-500" />,
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">My Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
            A collection of technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, list]) => (
            <Card key={category} className="bg-secondary/50 border-border/50 hover:border-primary transition-colors duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                 {icons[category]}
                <CardTitle className="font-headline text-xl md:text-2xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {list.map(skill => (
                    <Badge key={skill} variant="outline" className="text-base md:text-lg py-1 px-3 border-border/80 text-muted-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
