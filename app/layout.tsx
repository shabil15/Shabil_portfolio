import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SpeedInsightsWrapper from "./components/SpeedInsightsWrapper";

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
  authors: [{ name: "Mohammed Shabil", url: "https://shabil.vercel.app" }],
  creator: "Mohammed Shabil",
  keywords: [
    "Mohammed Shabil",
    "Shabil",
    "Shabil developer",
    "mohammedshabil",
    "shabil portfolio",
    "shabil full stack developer",
    "Mohammed Shabil developer",
    "Mohammed Shabil portfolio",
    "freelance",
    "developer",
    "freelance developer",
    "full stack",
    "fullstack developer",
    "fullstack developer kerala",
    "fullstack developer Malappuram",
    "best kerala fullstack developer",
    "best fullstack developer in kerala",
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
    "software developer in india",
    "freelance software developer",
    "freelance full stack developer in kerala",
    "full stack developer in kerala",
    "best software developer in kerala",
    "portfolio",
    "full stack developer portfolio kerala",
    "web developer",
  ],
  colorScheme: "dark",
  alternates: {
    canonical: "https://shabil.vercel.app",
  },
  openGraph: {
    title: "Mohammed Shabil — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. Building scalable web applications with passion and precision.",
    url: "https://shabil.vercel.app",
    siteName: "Mohammed Shabil — Full Stack Developer",
    images: [
      {
        url: "https://shabil.vercel.app/og-image.png",
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
    site: "mohammedshabil",
    creator: "@shabilmohmd",
    images: [
      {
        url: "https://shabil.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Shabil — Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  verification: {
    google: "google7087fa961ea8ea6d",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shabil.vercel.app/#person",
      name: "Mohammed Shabil",
      alternateName: ["Shabil", "Shabil Mohammed"],
      url: "https://shabil.vercel.app",
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. Building scalable web applications with passion and precision.",
      email: "mohammedshabil15@gmail.com",
      image: "https://shabil.vercel.app/og-image.png",
      sameAs: [
        "https://github.com/shabil15",
        "https://www.linkedin.com/in/shabildev",
        "https://x.com/shabilmohmd",
        "https://instagram.com/ft.shabii",
        "https://medium.com/@mohammedshabil",
        "https://dev.to/mohammedshabil",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "REST APIs",
        "Full Stack Development",
        "MERN Stack",
        "Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://shabil.vercel.app/#website",
      url: "https://shabil.vercel.app",
      name: "Mohammed Shabil — Full Stack Developer",
      description:
        "Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies.",
      publisher: {
        "@id": "https://shabil.vercel.app/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://shabil.vercel.app/#profilepage",
      url: "https://shabil.vercel.app",
      name: "Mohammed Shabil — Full Stack Developer Portfolio",
      mainEntity: {
        "@id": "https://shabil.vercel.app/#person",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsightsWrapper />
      </body>
    </html>
  );
}
