"use client";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function VolunteerPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations("VolunteerPage");

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-neutral-100 py-16 sm:py-24 md:py-32 border-b border-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div>
            <span className="bengali mb-4 block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-primary italic">
              — {t("label")}
            </span>
            <h1 className="bengali text-4xl font-black leading-[1.05] tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl mb-8">
              {t("title")}
            </h1>
            <p className="bengali text-lg sm:text-xl md:text-2xl font-medium text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto border border-primary p-6 sm:p-12 md:p-20 bg-white">
            {isSubmitted ? (
              <div className="text-center py-10 sm:py-20">
                <h2 className="bengali text-3xl sm:text-4xl font-black mb-6">
                  {t("thankYou")}
                </h2>
                <p className="bengali text-lg sm:text-xl text-neutral-600">
                  {t("successMessage")}
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 sm:mt-12 bengali h-12 sm:h-14 px-8 sm:px-10 bg-primary text-white"
                >
                  {t("addAnother")}
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
                    {t("form.name")}
                  </label>
                  <Input
                    required
                    className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                  <div className="space-y-3 sm:space-y-4">
                    <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                      {t("form.phone")}
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
                      {t("form.email")}
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
                    {t("form.address")}
                  </label>
                  <Input
                    required
                    className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={t("form.addressPlaceholder")}
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                    {t("form.profession")}
                  </label>
                  <Input
                    required
                    className="h-12 sm:h-16 border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={t("form.professionPlaceholder")}
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <label className="bengali text-base sm:text-lg font-bold block italic underline decoration-primary">
                    {t("form.reason")}
                  </label>
                  <Textarea
                    required
                    className="min-h-[120px] sm:min-h-[150px] border-primary text-lg sm:text-xl placeholder:text-neutral-300"
                    placeholder={t("form.reasonPlaceholder")}
                  />
                </div>

                <Button
                  type="submit"
                  className="bengali w-full h-16 bg-primary text-xl cursor-pointer font-black text-white transition-none hover:bg-primary/90"
                >
                  {t("form.submit")}
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
