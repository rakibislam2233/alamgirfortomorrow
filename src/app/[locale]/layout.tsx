import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Hind_Siliguri, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? {
        default: "Alamgir For Tomorrow | Mirza Fakhrul Islam Alamgir",
        template: "%s | Alamgir For Tomorrow",
      }
    : {
        default: "Alamgir For Tomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
        template: "%s | Alamgir For Tomorrow",
      };

  const description = isEn
    ? "Official website of Mirza Fakhrul Islam Alamgir, Member of Parliament, Thakurgaon-1. Journey Towards Freedom: A New Era in Thakurgaon."
    : "মির্জা ফখরুল ইসলাম আলমগীর, ঠাকুরগাঁও-১ আসনের সংসদ সদস্যের অফিসিয়াল ওয়েবসাইট। বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ।";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      "Alamgir For Tomorrow",
      "Mirza Fakhrul Islam Alamgir",
      "মির্জা ফখরুল ইসলাম আলমগীর",
      "BNP",
      "Bangladesh Nationalist Party",
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
      title: isEn
        ? "Alamgir For Tomorrow | Mirza Fakhrul Islam Alamgir"
        : "Alamgir For Tomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
      description,
      url: SITE_URL,
      siteName: "Alamgir For Tomorrow",
      locale: isEn ? "en_US" : "bn_BD",
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
      title: isEn
        ? "Alamgir For Tomorrow | Mirza Fakhrul Islam Alamgir"
        : "Alamgir For Tomorrow | মির্জা ফখরুল ইসলাম আলমগীর",
      description,
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
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${hindSiliguri.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
