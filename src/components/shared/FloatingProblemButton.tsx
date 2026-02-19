"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { MessageSquareText } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function FloatingProblemButton() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <div className="fixed bottom-6 right-6 z-40 lg:bottom-12 lg:right-12">
      <Button
        asChild
        className="bengali h-auto bg-primary px-4 py-3 text-base sm:px-6 sm:py-4 sm:text-lg font-bold text-white transition-none hover:bg-primary shadow-[4px_4px_0px_0px_#002B1F] border border-[#002B1F]"
      >
        <Link href="/contact" className="flex items-center gap-2 sm:gap-3">
          <MessageSquareText size={20} className="sm:w-6 sm:h-6" />
          <span>{locale === "bn" ? "সমস্যা জানান" : "Report Issue"}</span>
        </Link>
      </Button>
    </div>
  );
}
