import type { Metadata } from "next";
import { Inter, Epilogue, Licorice } from "next/font/google";
import Script from "next/script";
import '../styles/globals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-inter-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const licorice = Licorice({
  subsets: ["latin"],
  variable: "--font-licorice",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mia Elena | Full-Stack Developer",
  description: "Software engineer specializing in Python, Django, React, Next.js, and TypeScript development",
  icons: {
    icon: [
      { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
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
        className={`${inter.variable} ${interDisplay.variable} ${epilogue.variable} ${licorice.variable} antialiased font-sans`}
      >
        {/* Umami Analytics - Add your website ID after creating account at https://cloud.umami.is */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            async
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}