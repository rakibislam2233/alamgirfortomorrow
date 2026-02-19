"use client";

import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

export function FloatingProblemButton() {
  return (
    <div className="fixed bottom-8 right-8 z-40 lg:bottom-12 lg:right-12">
      <Button
        asChild
        className="bengali h-auto bg-primary px-6 py-4 text-lg font-bold text-white transition-none hover:bg-primary"
      >
        <Link href="#report-problem" className="flex items-center gap-3">
          <MessageSquareText size={24} />
          <span>সমস্যা জানান</span>
        </Link>
      </Button>
    </div>
  );
}
