import type { Metadata } from "next";
import Script from "next/script";
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mia Elena | AI Engineer",
  description: "AI engineer in NYC. Building agentic systems, RAG pipelines, and production-grade LLM workflows with LangChain and LangGraph.",
  keywords: ["AI Engineer", "LangChain", "LangGraph", "RAG", "Agentic AI", "NYC"],
  authors: [{ name: "Mia Elena" }],
  icons: {
    icon: [
      { url: '/ai-favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "Mia Elena | AI Engineer",
    description: "Building agentic AI and retrieval systems in NYC.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mia Elena | AI Engineer",
    description: "Building agentic AI and retrieval systems in NYC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} antialiased`}>
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
