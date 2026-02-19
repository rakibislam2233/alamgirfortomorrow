import { AboutPageClient } from "@/components/pages/AboutPageClient";
import { Metadata } from "next";

import { cookies } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "bn";
  const isEn = lang === "en";

  return {
    title: isEn ? "About Me" : "জীবন ও রাজনীতি",
    description: isEn
      ? "About Mirza Fakhrul Islam Alamgir - A journey of continuous struggle and service from the 1969 student movement to national leadership."
      : "মির্জা ফখরুল ইসলাম আলমগীর - ছাত্র আন্দোলন থেকে জাতীয় নেতৃত্ব পর্যন্ত এক ধারাবাহিক সংগ্রাম ও জনসেবার যাত্রা এবং ঠাকুরগাঁওয়ের উন্নয়নে তাঁর অবদান।",
    alternates: {
      canonical: "/about",
    },
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
