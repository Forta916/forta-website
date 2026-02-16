import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import SchemaOrg from "@/components/seo/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://forta-usa.com'),
  title: {
    default: "Forta - Official Hörmann Dealer in California",
    template: "%s | Forta - Official Hörmann Dealer",
  },
  description: "Forta is an official dealer of Hörmann products in California, offering high-quality garage doors, doors, and storage systems since 2008.",
  keywords: ["Hörmann", "garage doors", "front doors", "storage systems", "California", "official dealer"],
  authors: [{ name: "Forta" }],
  creator: "Forta",
  publisher: "Forta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forta-usa.com",
    siteName: "Forta - Hörmann Dealer",
    title: "Forta - Official Hörmann Dealer in California",
    description: "Forta is an official dealer of Hörmann products in California, offering high-quality garage doors, doors, and storage systems since 2008.",
    images: [
      {
        url: "/images/hero-image.avif",
        width: 1200,
        height: 630,
        alt: "Forta - Premium Hörmann Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forta - Official Hörmann Dealer in California",
    description: "Forta is an official dealer of Hörmann products in California, offering high-quality garage doors, doors, and storage systems since 2008.",
    images: ["/images/hero-image.avif"],
    creator: "@forta",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg type="Organization" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
