import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="py-6 bg-card border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} FolioForge. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
