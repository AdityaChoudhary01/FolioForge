
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Wind, Cog } from "lucide-react";
import { motion } from 'framer-motion';

const skills = {
  "Frontend": ["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Express.js", "Java", "Python"],
  "Databases": ["MongoDB", "SQL"],
  "Languages & Tools": ["Git & GitHub", "C", "C++", "OOPs"],
};

const icons: { [key: string]: React.ReactNode } = {
  "Frontend": <Code className="h-8 w-8 text-primary" />,
  "Backend": <Server className="h-8 w-8 text-accent" />,
  "Databases": <Database className="h-8 w-8 text-green-500" />,
  "Languages & Tools": <Cog className="h-8 w-8 text-blue-500" />,
}

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
};
  
const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
};

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
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, list]) => (
            <motion.div key={category} variants={cardVariants}>
                <Card className="bg-secondary/50 border-border/50 hover:border-primary transition-colors duration-300 h-full">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
