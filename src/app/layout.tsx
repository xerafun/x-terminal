import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { terminalConfig } from "@/terminal.config";

const hackFont = localFont({
  src: "../../public/fonts/Hack-NF.woff2",
  display: "block",
  variable: "--font-hack",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://terminal.xerafun.com"),
  title: {
    default: "X-Terminal | XeraFun Web Terminal",
    template: "%s | XeraFun Terminal",
  },
  description:
    "Interactive web terminal and developer portal of XeraFun (xerafun.com). Explore projects, tools, and commands in a Unix-like shell.",
  keywords: [
    "XeraFun",
    "xerafun.com",
    "terminal.xerafun.com",
    "X-Terminal",
    "web terminal",
    "developer portfolio",
    "interactive shell",
    "nextjs",
  ],
  authors: [{ name: terminalConfig.name, url: "https://xerafun.com" }],
  creator: terminalConfig.name,
  publisher: "XeraFun",
  applicationName: "X-Terminal",
  alternates: {
    canonical: "https://terminal.xerafun.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terminal.xerafun.com",
    siteName: "XeraFun",
    title: "X-Terminal | XeraFun Web Terminal",
    description:
      "Interactive web terminal and developer portal of XeraFun (xerafun.com).",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "X-Terminal Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "X-Terminal | XeraFun Web Terminal",
    description:
      "Interactive web terminal and developer portal of XeraFun (xerafun.com).",
    creator: "@XERA_AI",
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://terminal.xerafun.com/#website",
      "url": "https://terminal.xerafun.com",
      "name": "X-Terminal",
      "description": "Interactive Web Terminal of XeraFun",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://xerafun.com/#website",
        "url": "https://xerafun.com",
        "name": "XeraFun",
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://terminal.xerafun.com/#webapp",
      "name": "X-Terminal",
      "url": "https://terminal.xerafun.com",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Any",
      "description":
        "Interactive web terminal for exploring developer projects under XeraFun (xerafun.com).",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://xerafun.com",
        "name": "XeraFun",
      },
      "author": {
        "@type": "Person",
        "name": terminalConfig.name,
        "url": "https://xerafun.com",
      },
      "featureList": [
        "Interactive Unix-like terminal",
        "Developer project showcase",
        "Tab completion and command history",
        "Live weather and quotes",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={hackFont.variable}>{children}</body>
    </html>
  );
}
