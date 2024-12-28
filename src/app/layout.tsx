import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { Rethink_Sans } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingHeader } from "@/components/FloatingHeader";
import { Providers } from "@/utils/themeProvider";


const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Bora Alap - Product Design Lead",
  description:
    "I am Bora Alap, an Amsterdam-based Product Design Lead whose expertise extends into strategic leadership and front-end development. My responsibilities include crafting user journeys, strategically enhancing user experiences, and developing product strategies. I guide interaction design, oversee design reviews, mentor junior designers, and lead cross-functional teams to align product designs with corporate goals. My expertise includes creating native mobile applications and establishing comprehensive design systems. As a self-taught front-end developer proficient in React and React Native, I bring both user-centric and developer-centric perspectives to design challenges. This technical foundation complements my UX expertise, enabling me to deliver UI elements and design systems that effectively serve both end-users and business objectives.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en"  suppressHydrationWarning>
     
      <body 
        className={`${rethinkSans.variable} antialiased  overflow-x-hidden`}
      >
        <ReactLenis root>
        <Providers>
          <Header />
          <main className="md:rounded-b-4xl rounded-b-2xl w-screen overflow-x-hidden md:shadow-2xl shadow-2xl  bg-light-bg dark:bg-dark-bg ">{children}</main>
          <Footer />
          <FloatingHeader />
        </Providers>  
        </ReactLenis>
      </body>
    </html>
  );
}
