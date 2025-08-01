import Link from 'next/link';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFAB() {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in working with you."; // Optional pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button asChild
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageSquare className="h-8 w-8 text-white" />
        </Link>
      </Button>
    </div>
  );
}
