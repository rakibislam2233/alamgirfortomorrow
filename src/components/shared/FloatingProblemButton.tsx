"use client";

import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

export function FloatingProblemButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 lg:bottom-12 lg:right-12">
      <Button
        asChild
        className="bengali h-auto bg-primary px-4 py-3 text-base sm:px-6 sm:py-4 sm:text-lg font-bold text-white transition-none hover:bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black"
      >
        <Link href="/contact" className="flex items-center gap-2 sm:gap-3">
          <MessageSquareText size={20} className="sm:w-6 sm:h-6" />
          <span>সমস্যা জানান</span>
        </Link>
      </Button>
    </div>
  );
}
