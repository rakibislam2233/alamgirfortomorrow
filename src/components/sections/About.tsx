"use client";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export function About() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      id="about"
      className="bg-white py-24 md:py-32 border-b border-primary"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-20">
          <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
            — {locale === "bn" ? "জীবন ও রাজনীতি" : "Life & Politics"}
          </span>
          <h2 className="bengali text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("About.title")}
          </h2>
          <p className="bengali text-xl font-bold text-neutral-500 italic">
            {t("About.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="space-y-12 lg:w-3/5">
            <p className="bengali text-xl leading-relaxed text-neutral-800 md:text-2xl lg:text-3xl font-light">
              “{t("About.content")}”
            </p>
            <p className="bengali text-lg leading-relaxed text-neutral-500 italic">
              {t("About.history")}
            </p>

            <div className="h-[2px] w-40 bg-primary"></div>

            <Button
              asChild
              className="bengali h-14 bg-primary text-lg font-bold w-full sm:w-auto"
            >
              <Link href="/about">
                {locale === "bn" ? "আরও পড়ুন →" : "Read More →"}
              </Link>
            </Button>
          </div>

          <div className="lg:w-2/5">
            <div className="border border-primary p-8 sm:p-12 bg-neutral-50 space-y-8">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  {locale === "bn" ? "জন্ম" : "Birth"}
                </div>
                <div className="bengali font-black text-xl sm:text-2xl">
                  {t("About.birth")}
                </div>
              </div>
              <div className="h-px bg-neutral-200"></div>
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  {locale === "bn" ? "শিক্ষা" : "Education"}
                </div>
                <div className="bengali font-black text-xl sm:text-2xl">
                  {t("About.education")}
                </div>
              </div>
              <div className="h-px bg-neutral-200"></div>
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  {locale === "bn" ? "বর্তমান পদ" : "Current Position"}
                </div>
                <div className="bengali font-black text-xl sm:text-2xl">
                  {t("party")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
