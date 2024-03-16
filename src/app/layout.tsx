import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Providers from "./providers";
import "./globals.css";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
  fallback: ["Georgia", "Serif"],
  display: "swap",
  weight: ["300", "800"]
});

export const metadata: Metadata = {
  title: "C&F",
  description: "We love travelling together and writing about our experiences here on our blog",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />{/* 180x180 */}
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="bg-gray-100 h-screen">
        <Providers>
          <Header />
          <main className="lg:min-h-[calc(100vh-304px)] min-h-[calc(100vh-192px)]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
