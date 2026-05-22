import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { Rethink_Sans } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/utils/themeProvider";
import { Analytics } from "@vercel/analytics/next"


const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Bora Alap - Product Design & Design Engineering",
  description:
    "Bora Alap is an Amsterdam-based product designer and design engineer focused on product strategy, native mobile UX, design systems, AI products, and front-end implementation.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en"  suppressHydrationWarning>
      <body 
        className={`${rethinkSans.variable} antialiased  `}
        >
        <ReactLenis root>
        <Providers>
          <Header />
          <main tabIndex={-1} className="bg-white dark:bg-black">{children}</main>
          <Footer />
        </Providers>  
        </ReactLenis>
          <Analytics/>
      </body>
    </html>
  );
}
