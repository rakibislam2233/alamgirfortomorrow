"use client";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-32 px-4">
        <div className="text-center">
          <h1 className="bengali text-9xl font-black text-primary/10 mb-[-40px]">
            404
          </h1>
          <h2 className="bengali text-3xl md:text-5xl font-black text-black mb-6">
            পৃষ্ঠাটি পাওয়া যায়নি
          </h2>
          <p className="bengali text-lg text-neutral-600 mb-10 max-w-md mx-auto">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি বা এটি সরিয়ে
            ফেলা হয়েছে।
          </p>
          <Button
            asChild
            className="bengali bg-primary text-white h-14 px-8 text-lg font-bold hover:bg-primary"
          >
            <Link href="/">হোমে ফিরে যান</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
