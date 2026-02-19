"use client";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { useTranslations } from "next-intl";

export function CommitmentsPageClient() {
  const t = useTranslations("CommitmentsPage");
  const items = useTranslations("Commitments").raw("items");

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#002B1F] py-16 sm:py-24 md:py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div>
            <span className="bengali mb-4 block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-primary italic">
              — {t("manifesto")}
            </span>
            <h1 className="bengali text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {useTranslations("Commitments")("title")}
            </h1>
            <p className="bengali mt-6 sm:mt-8 text-lg sm:text-2xl font-medium text-neutral-400 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {items.map((commitment: any, idx: number) => (
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
            {t("bannerTitle")}
          </h2>
          <p className="bengali text-lg sm:text-xl opacity-80">
            {t("bannerSubtitle")}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
