"use client";
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
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-red-500/10">ERR</h1>
          <div className="h-2 w-24 bg-red-500 mx-auto -mt-10" />
        </div>

        <h2 className="bengali text-3xl font-black text-black mb-4">
          কিছু একটা ভুল হয়েছে
        </h2>
        <p className="bengali text-lg text-neutral-600 mb-10">
          অনুগ্রহ করে আবার চেষ্টা করুন অথবা আমাদের টিমকে জানান।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="bengali h-auto bg-primary px-8 py-4 text-lg font-bold text-white transition-none hover:bg-primary/90 border-2 border-primary cursor-pointer"
          >
            আবার চেষ্টা করুন
          </Button>
          <Button
            asChild
            variant="outline"
            className="bengali h-auto border-2 border-primary px-8 py-4 text-lg font-bold text-primary hover:bg-primary/5 cursor-pointer"
          >
            <Link href="/">হোমে ফিরে যান</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
