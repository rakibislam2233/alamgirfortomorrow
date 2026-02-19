import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://alamgirfortomorrow.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alamgir For Tomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
    template: "%s | Alamgir For Tomorrow",
  },
  description:
    "মির্জা ফখরুল ইসলাম আলমগীর, ঠাকুরগাঁও-১ আসনের সংসদ সদস্যের অফিসিয়াল ওয়েবসাইট। বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ।",
  keywords: [
    "Alamgir For Tomorrow",
    "Mirza Fakhrul Islam Alamgir",
    "মির্জা ফখরুল ইসলাম আলমগীর",
    "BNP",
    "বাংলাদেশ জাতীয়তাবাদী দল",
    "Thakurgaon",
    "ঠাকুরগাঁও",
    "Bangladesh Politics",
    "Election 2024",
    "Democracy",
  ],
  authors: [{ name: "Mirza Fakhrul Islam Alamgir" }],
  creator: "Mirza Fakhrul Islam Alamgir",
  publisher: "Mirza Fakhrul Islam Alamgir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alamgir For Tomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
    description:
      "বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ। জনতাই শক্তি।",
    url: SITE_URL,
    siteName: "Alamgir For Tomorrow",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mirza Fakhrul Islam Alamgir - Alamgir For Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alamgir For Tomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
    description: "বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ।",
    creator: "@BNPSGOffice",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body
        className={`${inter.variable} ${hindSiliguri.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
