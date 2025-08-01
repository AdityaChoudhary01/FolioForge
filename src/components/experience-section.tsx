import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "Jan 2021 - Present",
        description: "Led the development of a large-scale e-commerce platform using Next.js and TypeScript. Mentored junior developers and improved code quality by 30%.",
    },
    {
        role: "Full Stack Developer",
        company: "Creative Agency LLC",
        period: "Jun 2018 - Dec 2020",
        description: "Developed and maintained client websites using the MERN stack. Collaborated with designers to create responsive and engaging user interfaces.",
    },
    {
        role: "Junior Web Developer",
        company: "Startup Hub",
        period: "May 2017 - May 2018",
        description: "Assisted in building and deploying web applications. Gained foundational experience in HTML, CSS, JavaScript, and React.",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work Experience</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">My professional journey and key accomplishments.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/50"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-12">
                            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 mt-1.5">
                                <div className="w-8 h-8 rounded-full bg-secondary border-4 border-primary flex items-center justify-center">
                                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                                </div>
                            </div>
                            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} `}>
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <Card className="bg-secondary/30 border-border/50">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-headline text-primary">{exp.role}</CardTitle>
                                            <div className="flex justify-between items-baseline">
                                                <p className="font-semibold">{exp.company}</p>
                                                <p className="text-sm text-muted-foreground">{exp.period}</p>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base text-muted-foreground">{exp.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
