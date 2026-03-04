import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siwan.io"),
  title: "Siwan Kim",
  description: "Builder. Shipping things at the intersection of AI and useful tools.",
  openGraph: {
    title: "Siwan Kim",
    description: "Builder. Shipping things at the intersection of AI and useful tools.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={syne.variable}>{children}</body>
    </html>
  );
}
