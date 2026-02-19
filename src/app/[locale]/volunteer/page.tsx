import { VolunteerPageClient } from "@/components/pages/VolunteerPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "স্বেচ্ছাসেবক হিসেবে যুক্ত হোন",
  description:
    "টিম মির্জা ফখরুল-এ স্বেচ্ছাসেবী হিসেবে যুক্ত হোন। ঠাকুরগাঁওয়ের উন্নয়নে এবং নতুন দিনের পথ প্রশস্ত করতে আপনার অংশগ্রহণ কাম্য।",
  alternates: {
    canonical: "/volunteer",
  },
};

export default function VolunteerPage() {
  return <VolunteerPageClient />;
}
