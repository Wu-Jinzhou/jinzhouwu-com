import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jinzhou Wu",
  description: "Welcome to Jinzhou Wu's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal website of Jinzhou Wu, Cornell student exploring AI, technology, and philosophy." />
        <meta name="keywords" content="Jinzhou Wu, Cornell, AI, philosophy, technology, personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4E1F00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jinzhou Wu" />
        <meta property="og:title" content="Jinzhou Wu" />
        <meta property="og:description" content="Personal website of Jinzhou Wu, Cornell student exploring AI, technology, and philosophy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jinzhouwu.com/" />
        <meta property="og:image" content="https://jinzhouwu.com/images/portrait.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jinzhou Wu" />
        <meta name="twitter:description" content="Personal website of Jinzhou Wu, Cornell student exploring AI, technology, and philosophy." />
        <meta name="twitter:image" content="https://jinzhouwu.com/images/portrait.png" />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jinzhou Wu",
            "url": "https://jinzhouwu.com/",
            "image": "https://jinzhouwu.com/images/portrait.png",
            "sameAs": [
              "https://github.com/Wu-Jinzhou",
              "https://www.linkedin.com/in/jinzhouwu/",
              "https://www.instagram.com/29.watson/"
            ],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Cornell University",
              "url": "https://www.cornell.edu/"
            },
            "description": "Cornell student exploring AI, technology, and philosophy."
          }
        `}</script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
