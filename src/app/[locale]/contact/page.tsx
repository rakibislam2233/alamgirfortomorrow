import { ContactPageClient } from "@/components/pages/ContactPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description:
    "আমাদের অফিসের ঠিকানা ও যোগাযোগের মাধ্যম। আপনার যেকোনো প্রয়োজনে বা সমস্যায় সরাসরি আমাদের সাথে যোগাযোগ করুন।",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
