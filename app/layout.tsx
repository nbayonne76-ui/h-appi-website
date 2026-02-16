import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "H'appi - Chatbots Intelligents pour CX et Supply Chain",
  description: "Des chatbots intelligents qui évoluent avec votre entreprise. Transformez chaque interaction en opportunité de croissance.",
  keywords: ['chatbot', 'IA', 'customer experience', 'supply chain', 'SaaS', 'France'],
  authors: [{ name: "H'appi" }],
  openGraph: {
    title: "H'appi - Chatbots Intelligents",
    description: "Transformez votre expérience client avec l'IA",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
