"use client";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Milestone } from "@/types";
import { useLocale, useTranslations } from "next-intl";

export function AboutPageClient() {
  const t = useTranslations("About");
  const locale = useLocale();
  const milestones = t.raw("milestones") as Milestone[];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section for About */}
      <section className="bg-primary py-16 sm:py-24 md:py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div>
            <span className="bengali mb-4 block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] opacity-70 italic">
              — {locale === "bn" ? "জীবন ও রাজনীতি" : "Life & Politics"}
            </span>
            <h1 className="bengali text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t("title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Extended Bio Section */}
      <section className="py-12 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-16 lg:gap-20 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="bengali mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-neutral-800">
                “{t("content")}”
              </p>

              <div className="space-y-12 sm:space-y-16">
                <div>
                  <h2 className="bengali mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight italic bg-neutral-100 inline-block px-2">
                    {locale === "bn"
                      ? "শৈশব ও শিক্ষা"
                      : "Early Life & Education"}
                  </h2>
                  <p className="bengali text-lg sm:text-xl leading-relaxed text-neutral-600">
                    {t("birth")}.{" "}
                    {locale === "bn"
                      ? "পিতার নাম মির্জা রুহুল আমিন।"
                      : "Father's name is Mirza Ruhul Amin."}{" "}
                    {t("education")}.
                  </p>
                </div>

                <div>
                  <h2 className="bengali mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight italic bg-neutral-100 inline-block px-2">
                    {locale === "bn" ? "পেশাগত জীবন" : "Professional Life"}
                  </h2>
                  <p className="bengali text-lg sm:text-xl leading-relaxed text-neutral-600">
                    {t("professional")}. {t("history")}
                  </p>
                </div>

                <div>
                  <h2 className="bengali mb-10 sm:mb-12 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight italic bg-neutral-100 inline-block px-2">
                    {locale === "bn"
                      ? "রাজনৈতিক যাত্রার মাইলফলক"
                      : "Political Milestones"}
                  </h2>
                  <div className="space-y-8 border-l-2 sm:border-l-4 border-primary pl-6 sm:pl-12">
                    {milestones.map((milestone, idx) => (
                      <div key={idx}>
                        <div className="text-2xl sm:text-3xl font-black text-primary">
                          {milestone.year}
                        </div>
                        <div className="bengali mt-2 text-xl sm:text-2xl font-bold text-black leading-tight">
                          {milestone.event}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8 bg-neutral-50 p-12 border border-primary">
                <h3 className="bengali text-xl sm:text-2xl font-black border-b border-primary pb-4 uppercase tracking-tighter italic">
                  {locale === "bn" ? "দ্রুত তথ্য" : "Quick Facts"}
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {locale === "bn" ? "বর্তমান পদ" : "Current Position"}
                    </div>
                    {/* Access 'party' from parent scope since it's common */}
                    <div className="bengali font-bold text-lg">
                      {useTranslations()("party")}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {locale === "bn"
                        ? "নির্বাচিত এলাকা"
                        : "Electoral Constituency"}
                    </div>
                    <div className="bengali font-bold text-lg">
                      {useTranslations()("constituency")}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {locale === "bn" ? "জন্ম" : "Birth"}
                    </div>
                    <div className="bengali font-bold text-lg">
                      {t("birth")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
