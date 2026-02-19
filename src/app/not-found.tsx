"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-primary/10">404</h1>
          <div className="h-2 w-24 bg-primary mx-auto -mt-10" />
        </div>

        <h2 className="bengali text-3xl font-black text-black mb-4">
          পৃষ্ঠাটি পাওয়া যায়নি
        </h2>
        <p className="bengali text-lg text-neutral-600 mb-10">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি অথবা সরিয়ে
          ফেলা হয়েছে।
        </p>

        <Button
          asChild
          className="bengali h-auto bg-primary px-8 py-4 text-lg font-bold text-white transition-none hover:bg-primary/90 border-2 border-primary cursor-pointer"
        >
          <Link href="/">হোম পেজে ফিরে যান</Link>
        </Button>
      </div>
    </div>
  );
}
