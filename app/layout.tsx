import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mohammed Shabil — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. Building scalable web applications with passion and precision.",
  generator: "Next.js",
  applicationName: "Mohammed Shabil",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "full stack",
    "fullstack developer",
    "MERN stack",
    "react",
    "node.js",
    "mongodb",
    "frontend developer",
    "backend developer",
    "javascript developer",
    "typescript",
    "creative",
    "creative developer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "full stack developer portfolio",
    "web developer",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Mohammed Shabil — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. Building scalable web applications with passion and precision.",
    url: "https://www.mohammedshabil.com/",
    siteName: "www.mohammedshabil.com",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Mohammed Shabil — Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Shabil — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. Building scalable web applications with passion and precision.",
    creator: "mohammedshabil",
    creatorId: "0000000000000000000",
    images: [
      "",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
