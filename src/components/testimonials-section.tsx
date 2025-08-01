import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
    avatar: "https://placehold.co/100x100.png",
    testimonial: "FolioForge is an exceptional developer. Their attention to detail and commitment to quality are second to none. They delivered our project on time and exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "John Smith",
    title: "Project Manager, Creative Solutions",
    avatar: "https://placehold.co/100x100.png",
    testimonial: "Working with FolioForge was a pleasure. Their technical skills, particularly with React and Next.js, are top-notch. They are a great communicator and a true team player.",
    rating: 5,
  },
  {
    name: "Emily White",
    title: "Lead Designer, DesignCo",
    avatar: "https://placehold.co/100x100.png",
    testimonial: "The collaboration on the UI/UX was fantastic. FolioForge has a keen eye for design and was able to translate our vision into a pixel-perfect, responsive reality. A true professional.",
    rating: 5,
  },
   {
    name: "Michael Brown",
    title: "CTO, StartupX",
    avatar: "https://placehold.co/100x100.png",
    testimonial: "Their full-stack expertise was invaluable. They architected a scalable and robust backend that has performed flawlessly under load. I would not hesitate to work with them again.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What Others Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Hear from clients and collaborators who have experienced my work firsthand.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full bg-secondary/50 backdrop-blur-sm border-border/50 p-6 flex flex-col justify-between">
                    <CardContent className="p-0 flex-grow">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-6">"{testimonial.testimonial}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-auto">
                        <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-primary">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
