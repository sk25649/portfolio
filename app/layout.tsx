import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={syne.variable}>{children}</body>
    </html>
  );
}
