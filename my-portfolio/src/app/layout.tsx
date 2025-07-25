import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import '../styles/globals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mia Elena Ricci | Full-Stack Developer",
  description: "Software engineer specializing in Python, Django, React, Next.js, and TypeScript development",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${epilogue.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}