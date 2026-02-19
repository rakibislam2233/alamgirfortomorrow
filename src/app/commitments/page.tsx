"use client";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { useLanguage } from "@/context/LanguageContext";
import { Achievement } from "@/lib/constants";

export default function CommitmentsPage() {
  const { language, t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#002B1F] py-16 sm:py-24 md:py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div>
            <span className="bengali mb-4 block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-primary italic">
              — {language === "bn" ? "আমাদের ইশতেহার" : "Our Manifesto"}
            </span>
            <h1 className="bengali text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {language === "bn" ? "আমার ৭টি অঙ্গীকার" : "My 7 Pledges"}
            </h1>
            <p className="bengali mt-6 sm:mt-8 text-lg sm:text-2xl font-medium text-neutral-400 max-w-2xl">
              {language === "bn"
                ? "সুস্থ, শক্তিশালী ও আধুনিক ঠাকুরগাঁও গড়ার লক্ষ্যে আমাদের সুনির্দিষ্ট পরিকল্পনা।"
                : "Our specific plans to build a healthy, strong, and modern Thakurgaon."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {t.commitments.map((commitment: Achievement, idx: number) => (
              <div
                key={idx}
                className="group border border-primary p-8 sm:p-12 transition-none hover:bg-neutral-50"
              >
                <div className="mb-8 sm:mb-12 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center border-2 border-primary text-3xl sm:text-4xl font-black text-primary">
                  {idx + 1}
                </div>
                <h2 className="bengali mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black">
                  {commitment.title}
                </h2>
                <p className="bengali text-lg sm:text-2xl leading-relaxed text-neutral-600 font-light">
                  {commitment.description}
                </p>
                <div className="mt-8 sm:mt-12 h-1 w-20 bg-primary"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 sm:py-24 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="bengali text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 italic">
            {language === "bn"
              ? "জনতাই শক্তি, ঠাকুরগাঁও হবে অপরাজেয়"
              : "People are the Power, Thakurgaon will be Unbeatable"}
          </h2>
          <p className="bengali text-lg sm:text-xl opacity-80">
            {language === "bn"
              ? "আমাদের সাথে যুক্ত হয়ে নতুন দিনের পথ প্রশস্ত করুন।"
              : "Join us and pave the way for a new day."}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
