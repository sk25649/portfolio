import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siwan Kim",
  description: "Builder. Shipping things at the intersection of AI and useful tools.",
  openGraph: {
    title: "Siwan Kim",
    description: "Builder. Shipping things at the intersection of AI and useful tools.",
    url: "https://siwan.io",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mono.variable}>{children}</body>
    </html>
  );
}
