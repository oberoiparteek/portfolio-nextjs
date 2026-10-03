import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Parteek Kumar | Senior Frontend Engineer | Portfolio",
  description: "Senior Frontend Engineer with 7+ years of experience building scalable web applications and developer tools using React, TypeScript, Next.js, and GraphQL. Open source contributor and published researcher.",
  keywords: ["Senior Frontend Engineer", "UI Engineer", "React Developer", "Next.js", "TypeScript", "GraphQL", "Web Developer", "Portfolio", "Parteek Kumar", "Cvent", "Ciena"],
  authors: [{ name: "Parteek Kumar" }],
  openGraph: {
    title: "Parteek Kumar | Senior Frontend Engineer | Portfolio",
    description: "Senior Frontend Engineer with 7+ years of experience building scalable web applications with React, TypeScript, Next.js, and GraphQL. Open source contributor and published researcher.",
    url: "https://portfolio-nextjs-eight-cyan.vercel.app",
    siteName: "Parteek Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Parteek Kumar Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parteek Kumar | Senior Frontend Engineer | Portfolio",
    description: "Senior Frontend Engineer with 7+ years of experience building scalable web applications with React, TypeScript, Next.js, and GraphQL.",
    creator: "@oberoi_parteek",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Cursor from "@/components/Cursor";
import { ThemeProvider } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
