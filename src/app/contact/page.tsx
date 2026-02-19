"use client";
import { Constituency } from "@/components/sections/Constituency";
import { Contact } from "@/components/sections/Contact";
import { ProblemForm } from "@/components/sections/ProblemForm";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary py-16 sm:py-24 md:py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div>
            <span className="bengali mb-4 block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] opacity-70 italic">
              — {language === "bn" ? "সরাসরি যোগাযোগ" : "Direct Contact"}
            </span>
            <h1 className="bengali text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {language === "bn"
                ? "আপনার প্রয়োজনে আমরা আছি"
                : "We're Here for You"}
            </h1>
          </div>
        </div>
      </section>

      <div className="border-b border-primary">
        <Contact />
      </div>

      <div className="border-b border-primary">
        <ProblemForm />
      </div>

      <Constituency />

      <Footer />
    </main>
  );
}
