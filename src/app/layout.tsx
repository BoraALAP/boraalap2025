import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Bora Alap — Product Design Lead & Design Engineer",
  description:
    "Designing systems. Shipping products. Bridging design and engineering. Amsterdam-based Product Design Lead with over a decade of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
