import type { Metadata, Viewport } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0D",
};

const description =
  "Siwan Kim is a dad of three in Los Angeles building AI products in public — FarmPosts, DocAPI, and US Kids Golf Status — training for a marathon, and posting the receipts on the road to $10K MRR.";

export const metadata: Metadata = {
  metadataBase: new URL("https://siwan.io"),
  title: "Siwan Kim",
  description,
  openGraph: {
    title: "Siwan Kim",
    description,
    url: "https://siwan.io",
    siteName: "Siwan Kim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@0xSiwan",
    site: "@0xSiwan",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://siwan.io",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
