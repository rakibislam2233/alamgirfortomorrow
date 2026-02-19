import { AboutPageClient } from "@/components/pages/AboutPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "জীবন ও রাজনীতি",
  description:
    "মির্জা ফখরুল ইসলাম আলমগীর - ছাত্র আন্দোলন থেকে জাতীয় নেতৃত্ব পর্যন্ত এক ধারাবাহিক সংগ্রাম ও জনসেবার যাত্রা এবং ঠাকুরগাঁওয়ের উন্নয়নে তাঁর অবদান।",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
