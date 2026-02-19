"use client";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function VolunteerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-neutral-100 py-16 sm:py-24 md:py-32 border-b border-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className="bengali mb-4 block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-primary italic">
            — {language === "bn" ? "টিম মির্জা ফখরুল" : "Team Mirza Fakhrul"}
          </span>
          <h1 className="bengali text-4xl font-black leading-tight tracking-tighter sm:text-6xl md:text-8xl mb-8">
            {language === "bn"
              ? "স্বেচ্ছাসেবক হিসেবে যুক্ত হোন"
              : "Join as a Volunteer"}
          </h1>
          <p className="bengali text-lg sm:text-2xl font-medium text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {language === "bn"
              ? "সাধারণ মানুষের অংশগ্রহণেই গড়ে উঠবে একটি শক্তিশালী ও আধুনিক ঠাকুরগাঁও। আমাদের ক্যাম্পেইনে স্বেচ্ছাসেবী হিসেবে কাজ করতে নিচের ফর্মটি পূরণ করুন।"
              : "A strong and modern Thakurgaon will be built with the participation of ordinary people. Fill out the form below to volunteer for our campaign."}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto border border-primary p-6 sm:p-12 md:p-20 bg-white">
            {isSubmitted ? (
              <div className="text-center py-10 sm:py-20">
                <h2 className="bengali text-3xl sm:text-4xl font-black mb-6">
                  {language === "bn" ? "ধন্যবাদ!" : "Thank You!"}
                </h2>
                <p className="bengali text-lg sm:text-xl text-neutral-600">
                  {language === "bn"
                    ? "আপনার তথ্য সফলভাবে জমা হয়েছে। আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।"
                    : "Your information has been successfully submitted. Our team will contact you soon."}
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 sm:mt-12 bengali h-12 sm:h-14 px-8 sm:px-10 bg-primary text-white"
                >
                  {language === "bn"
                    ? "আরেকজন সদস্য যুক্ত করুন"
                    : "Add another member"}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
                className="space-y-8 sm:space-y-10"
              >
                <div className="space-y-3 sm:space-y-4">
                  <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                    {language === "bn" ? "আপনার পূর্ণ নাম" : "Your Full Name"}
                  </label>
                  <Input
                    required
                    className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={language === "bn" ? "নাম লিখুন" : "Enter name"}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                  <div className="space-y-3 sm:space-y-4">
                    <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                      {language === "bn" ? "ফোন নম্বর" : "Phone Number"}
                    </label>
                    <Input
                      required
                      type="tel"
                      className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                      placeholder="০১৭০০-০০০০০০"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                      {language === "bn"
                        ? "ইমেইল (ঐচ্ছিক)"
                        : "Email (Optional)"}
                    </label>
                    <Input
                      type="email"
                      className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                    {language === "bn"
                      ? "স্থায়ী ঠিকানা (গ্রাম/পাড়া ও ইউনিয়ন)"
                      : "Permanent Address"}
                  </label>
                  <Input
                    required
                    className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={
                      language === "bn"
                        ? "বিস্তারিত ঠিকানা"
                        : "Detailed address"
                    }
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                    {language === "bn" ? "পেশা" : "Profession"}
                  </label>
                  <Input
                    required
                    className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={
                      language === "bn"
                        ? "যেমন: ছাত্র, শিক্ষক, ব্যবসায়ী..."
                        : "e.g., Student, Teacher, Entrepreneur"
                    }
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                    {language === "bn"
                      ? "আপনি কেন আমাদের সাথে কাজ করতে চান?"
                      : "Why do you want to work with us?"}
                  </label>
                  <Textarea
                    required
                    className="min-h-[120px] sm:min-h-[150px] border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={
                      language === "bn"
                        ? "আপনার মতামত লিখুন..."
                        : "Write your thoughts..."
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="bengali w-full h-16 sm:h-20 bg-primary text-xl sm:text-2xl font-black text-white"
                >
                  {language === "bn" ? "টিমে যোগ দিন →" : "Join the Team →"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
