import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WPS Winslett Property Services | Premium Janitorial & Property Management in Murrieta",
  description: "Professional commercial janitorial, facility maintenance, and property services in Murrieta, Temecula, and Inland Empire. Licensed, insured, and locally owned.",
  keywords: "janitorial services Murrieta, commercial cleaning Temecula, property management Inland Empire, facility maintenance, floor care, move-in cleaning",
  openGraph: {
    title: "WPS Winslett Property Services",
    description: "Premium property and janitorial services in Murrieta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-body text-gray-800 antialiased">{children}</body>
    </html>
  );
}