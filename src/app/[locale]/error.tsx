"use client";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="grow flex items-center justify-center py-32 px-4">
        <div className="text-center">
          <h1 className="bengali text-9xl font-black text-primary/10 mb-[-40px]">
            Error
          </h1>
          <h2 className="bengali text-3xl md:text-5xl font-black text-black mb-6">
            কিছু একটা ভুল হয়েছে
          </h2>
          <p className="bengali text-lg text-neutral-600 mb-10 max-w-md mx-auto">
            দুঃখিত, অ্যাপ্লিকেশনটি লোড করার সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে
            আবার চেষ্টা করুন।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => reset()}
              className="bengali bg-primary text-white h-14 px-8 text-lg font-bold hover:bg-primary"
            >
              আবার চেষ্টা করুন
            </Button>
            <Button
              asChild
              variant="outline"
              className="bengali border-primary text-primary h-14 px-8 text-lg font-bold"
            >
              <Link href="/">হোমে ফিরে যান</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
