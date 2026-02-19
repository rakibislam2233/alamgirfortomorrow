"use client";
import { useLanguage } from "@/context/LanguageContext";

export function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-24 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-6xl font-serif opacity-30 block mb-8">“</span>
          <h2 className="bengali text-3xl md:text-5xl font-black leading-tight tracking-tight mb-8 italic">
            {t.hero.quote}
          </h2>
          <span className="text-6xl font-serif opacity-30 block mt-8">”</span>
        </div>
      </div>
    </section>
  );
}
