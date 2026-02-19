"use client";

import alamgirImg from "@/assets/images/alamgir.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 hidden lg:block -skew-x-12 translate-x-1/2" />

      <div className="w-full container mx-auto flex min-h-[calc(100vh-80px)] flex-col lg:flex-row items-stretch">
        {/* Content Side */}
        <div className="flex flex-1 flex-col justify-center px-4 py-16 lg:py-0 z-10">
          <div className="max-w-xl">
            <span className="bengali text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">
              {language === "bn"
                ? "বাংলাদেশ জাতীয়তাবাদী দল — বিএনপি"
                : "Bangladesh Nationalist Party — BNP"}
            </span>
            <h1 className="bengali mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl">
              {t.name}
            </h1>
            <div className="h-2 w-24 bg-primary mb-8" />
            <p className="bengali mb-6 text-xl font-bold leading-relaxed text-primary sm:text-2xl md:text-3xl max-w-md">
              {t.hero.tagline}
            </p>
            <p className="bengali mb-10 text-base font-medium leading-relaxed text-neutral-500 sm:text-lg md:text-xl">
              {t.hero.subline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bengali h-auto bg-primary px-8 py-5 text-lg font-bold text-white transition-none hover:bg-primary/90 sm:w-auto sm:px-10 sm:py-6 sm:text-xl border-2 border-primary"
              >
                <Link href="/contact">{t.hero.cta}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bengali h-auto border-2 border-primary px-8 py-5 text-lg font-bold text-primary hover:bg-primary/5 sm:w-auto sm:px-10 sm:py-6 sm:text-xl"
              >
                <Link href="/about">
                  {language === "bn" ? "আরও জানুন" : "Learn More"}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative flex-1 min-h-[500px] lg:min-h-full flex items-center justify-center lg:justify-end px-4">
          <div className="relative w-full max-w-[500px] aspect-4/5 lg:aspect-3/4">
            {/* Decorative Frames */}
            <div className="absolute -inset-4 border-2 border-primary/20 -z-10 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-primary/5 -z-10 translate-x-8 translate-y-8" />

            <div className="relative w-full h-full border-4 border-primary shadow-[20px_20px_0px_0px_rgba(0,106,78,1)] overflow-hidden group">
              <Image
                src={alamgirImg}
                alt={t.name}
                fill
                priority
                className="object-cover transition-none"
              />

              {/* Image Overlay Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary p-6 text-white translate-y-full transition-none group-hover:translate-y-0 duration-300">
                <p className="bengali text-sm font-bold tracking-widest uppercase opacity-80 mb-1">
                  {t.party}
                </p>
                <p className="bengali text-2xl font-black">{t.name}</p>
              </div>
            </div>

            {/* Floating Stats or Info */}
            <div className="absolute -left-12 bottom-20 bg-white border-2 border-primary p-6 hidden md:block shadow-[8px_8px_0px_0px_rgba(0,106,78,1)]">
              <p className="bengali text-primary text-3xl font-black leading-none mb-1">
                {language === "bn" ? "ঠাকুরগাঁও-১" : "Thakurgaon-1"}
              </p>
              <p className="bengali text-xs font-bold text-neutral-500 tracking-wider">
                {language === "bn" ? "নির্বাচনী এলাকা" : "CONSTITUENCY"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
