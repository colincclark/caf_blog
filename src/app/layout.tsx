import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import Header from "@/components/Header/Header"
import "./globals.css";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
  fallback: ["Georgia", "Serif"],
  display: "swap",
  weight: ["300", "800"]
});

export const metadata: Metadata = {
  title: "C&F's blog",
  description: "We love travelling together and writing about our experiences here on our blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={merriweather.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />{/* 180x180 */}
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
