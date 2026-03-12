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
  title: "For Mamiringui 💗",
  description: "Papiringui made something special for you...",
  openGraph: {
    title: "For Mamiringui 💗",
    description: "Papiringui made something special for you...",
    url: "https://secretitojiji.vercel.app",
    siteName: "For Mamiringui 💗",
    images: [
      {
        url: "https://secretitojiji.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "For Mamiringui 💗",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Mamiringui 💗",
    description: "Papiringui made something special for you...",
    images: ["https://secretitojiji.vercel.app/preview.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
