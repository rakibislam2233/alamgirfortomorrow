import { CommitmentsPageClient } from "@/components/pages/CommitmentsPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "৭টি অঙ্গীকার",
  description:
    "সুস্থ, শক্তিশালী ও আধুনিক ঠাকুরগাঁও গড়ার লক্ষ্যে মির্জা ফখরুল ইসলাম আলমগীরের সুনির্দিষ্ট ৭টি অঙ্গীকার বা প্রতিশ্রুতিসমূহ।",
  alternates: {
    canonical: "/commitments",
  },
};

export default function CommitmentsPage() {
  return <CommitmentsPageClient />;
}
