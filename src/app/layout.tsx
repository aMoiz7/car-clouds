import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import the Lufga font via CDN
const lufgaLink = 'https://fonts.cdnfonts.com/css/lufga';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Valuation - Get Instant Free valuation for your car",
  description: "Get Instant Free valuation for your car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={lufgaLink} /> {/* Link to Lufga font */}
        <link rel="icon" href="/ballons.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "'Lufga', sans-serif" }} 
      >
        {children}
      </body>
    </html>
  );
}
