import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sébastien Duez - Développeur Front-end React & Graphiste",
  description: "Portfolio de Sébastien Duez, développeur front-end spécialisé en React, Next.js et TypeScript. Découvrez mes projets et compétences en développement web moderne.",
  keywords: ["développeur", "react", "nextjs", "typescript", "frontend", "graphiste", "portfolio"],
  authors: [{ name: "Sébastien Duez" }],
  creator: "Sébastien Duez",
  openGraph: {
    title: "Sébastien Duez - Développeur Front-end React",
    description: "Portfolio professionnel - Développeur React & Graphiste publicitaire",
    url: "https://sriver-portfolio.vercel.app",
    siteName: "Portfolio Sébastien Duez",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sébastien Duez - Développeur Front-end React",
    description: "Portfolio professionnel - Développeur React & Graphiste publicitaire",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://sriver-portfolio.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
