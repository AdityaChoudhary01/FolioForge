# FolioForge

**FolioForge** is a dynamic, AI-enhanced portfolio web application designed for developers and creators to showcase their work, skills, and background with an interactive and personalized user experience.
## live demo👉https://folioforge.vercel.app/
## Features

- **Project Showcase**: Display featured projects with images, descriptions, technology tags, and live/demo links. Example projects include PeerNotez (collaborative student note sharing), YumRide (food delivery platform), QR Generator, Weather App, aktuwrld (study resources for AKTU), Wifi QR Code Generator, Portfolio Website, Expense Tracker, JAT Universal, and Chatty (real-time chat app).
- **Adaptive Layout**: Visitors can re-order projects using a magic wand button based on their interests/preferences (e.g., “show me projects using real-time databases” or “I like e-commerce”). This uses an AI agent to infer preferences and adapt the display.
- **About Section**: Introduces the portfolio owner with a bio, headshot, and contact details.
- **Contact Form**: Allows direct communication from visitors.
- **Resume Download**: Easy download of the owner's resume in PDF format.
- **Social Media Links**: Connect to professional profiles.
- **Responsive UI**: Built with modern web technologies for a smooth, mobile-friendly experience.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, MongoDB
- **AI & Utilities**: Custom AI flow for adaptive project layout, integration with REST APIs, Cloudinary for image hosting

## Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/AdityaChoudhary01/FolioForge.git
    cd FolioForge
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Run the development server**
    ```bash
    npm run dev
    ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

- `/src/components`: UI components (project cards, hero section, header, etc.)
- `/src/ai/flows`: AI logic for adaptive layouts
- `/src/app`: Application logic and actions
- `/docs`: Additional documentation and blueprints

## How the Adaptive Layout Works

- Users enter their project interests into an input box.
- An AI agent (see `/src/ai/flows/adaptive-layout.ts`) analyzes preferences and re-orders the project cards accordingly.
- Reset button restores original project order.

## Example Featured Projects

- **PeerNotez**: Collaborative note-sharing for students.
- **YumRide**: Innovative food delivery platform.
- **QR Generator**: Create custom QR codes.
- **Weather App**: Real-time weather information.
- **aktuwrld**: Resource hub for AKTU students.
- **Chatty**: Real-time MERN stack chat application.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Author:** Aditya Choudhary  
**Live Demo:** [peernotez.netlify.app](https://peernotez.netlify.app/) and other project demos linked in the UI.
