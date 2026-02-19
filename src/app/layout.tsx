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

export const metadata: Metadata = {
  title: "alamgirfortomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
  description:
    "মির্জা ফখরুল ইসলাম আলমগীর, ঠাকুরগাঁও-১ আসনের সংসদ সদস্যের অফিসিয়াল ওয়েবসাইট। বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ।",
  openGraph: {
    title: "alamgirfortomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
    description: "বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ।",
    locale: "bn_BD",
    type: "website",
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
