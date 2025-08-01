import Link from 'next/link';
import { Button } from './ui/button';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
        <path d="M16.75 13.96c.25.13.41.2.52.34.11.14.15.33.1.52-.05.19-.24.38-.45.53-.21.15-.47.24-.76.24-.29 0-.6-.09-.92-.28-.32-.19-.7-.48-1.14-.85s-.83-.79-1.18-1.21c-.35-.42-.62-.9-.79-1.4-.17-.5-.25-1.03-.25-1.55 0-.52.08-1.02.24-1.48.16-.46.42-.88.75-1.22.33-.34.7-.59 1.1-.75.4-.16.8-.24 1.19-.24h.02c.3 0 .58.05.82.15.24.1.45.27.6.5.15.23.22.49.22.78 0 .14-.02.28-.05.42-.03.14-.08.28-.14.42l-.24.53-.43.94c-.11.24-.22.45-.33.63-.11.18-.21.34-.29.47-.08.13-.15.25-.19.33-.04.08-.06.15-.06.2s.03.12.09.18c.06.06.14.12.24.19.1.07.24.17.42.29.18.12.38.25.6.4.22.15.46.3.72.45.26.15.5.28.7.38m3.22-4.2c0-1.23-.44-2.34-1.32-3.23s-2-1.32-3.23-1.32c-1.23 0-2.34.44-3.23 1.32s-1.32 2-1.32 3.23c0 1.35.51 2.62 1.5 3.7l-1.63 4.85 5.02-1.59c1.03.87 2.22 1.34 3.46 1.34h.02c1.23 0 2.34-.44 3.23-1.32s1.32-2 1.32-3.23m-4.5-8.5c2.31 0 4.4.88 5.96 2.44s2.44 3.65 2.44 5.96-1 4.4-2.44 5.96-3.65 2.44-5.96 2.44h-.02c-1.43 0-2.83-.34-4.11-.99l-6.23 1.96 2.01-6.04c-.74-1.31-1.12-2.76-1.12-4.25 0-2.31.88-4.4 2.44-5.96s3.65-2.44 5.96-2.44z"/>
    </svg>
);

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
          <WhatsAppIcon />
        </Link>
      </Button>
    </div>
  );
}
