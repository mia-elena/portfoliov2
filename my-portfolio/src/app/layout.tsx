import type { Metadata } from "next";
import Script from "next/script";
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mia Elena | Software Engineer",
  description: "Software engineer. I build things for the web.",
  icons: {
    icon: [
      { url: '/images/ghibli-nav.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/ghibli-nav.png', sizes: '16x16', type: 'image/png' },
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
      <body className={`${inter.variable} antialiased font-sans`}>
        {/* Umami Analytics - Add your website ID after creating account at https://cloud.umami.is */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            async
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}

        {children}
        <Analytics />
      </body>
    </html>
  );
}
