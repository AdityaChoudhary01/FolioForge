"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not be longer than 500 characters."
  }),
});

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">Have a question or want to work together? Drop me a line.</p>
        </div>
        <Card className="max-w-2xl mx-auto p-4 sm:p-8 bg-secondary/50 backdrop-blur-sm border-border/50">
         <CardContent className="p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12 bg-background/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="h-12 bg-background/50"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me how I can help you..."
                        className="resize-none min-h-[150px] bg-background/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="mr-2 h-5 w-5"/>
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
