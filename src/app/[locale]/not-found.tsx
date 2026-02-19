"use client";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="grow flex items-center justify-center py-32 px-4">
        <div className="text-center">
          <h1 className="bengali text-9xl font-black text-primary/10 mb-[-40px]">
            404
          </h1>
          <h2 className="bengali text-3xl md:text-5xl font-black text-black mb-6">
            {t("title")}
          </h2>
          <p className="bengali text-lg text-neutral-600 mb-10 max-w-md mx-auto">
            {t("description")}
          </p>
          <Button
            asChild
            className="bengali bg-primary text-white h-14 px-8 text-lg font-bold hover:bg-primary"
          >
            <Link href="/">{t("homeButton")}</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
