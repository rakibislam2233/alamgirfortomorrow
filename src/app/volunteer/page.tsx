"use client";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function VolunteerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-neutral-100 py-32 border-b border-black">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className="bengali mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-primary italic">
            — টিম মির্জা ফখরুল
          </span>
          <h1 className="bengali text-6xl font-black leading-tight tracking-tighter md:text-8xl mb-8">
            স্বেচ্ছাসেবক হিসেবে <br />
            যুক্ত হোন
          </h1>
          <p className="bengali text-2xl font-medium text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            সাধারণ মানুষের অংশগ্রহণেই গড়ে উঠবে একটি শক্তিশালী ও আধুনিক
            ঠাকুরগাঁও। আমাদের ক্যাম্পেইনে স্বেচ্ছাসেবী হিসেবে কাজ করতে নিচের
            ফর্মটি পূরণ করুন।
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto border border-black p-12 md:p-20 bg-white">
            {isSubmitted ? (
              <div className="text-center py-20">
                <h2 className="bengali text-4xl font-black mb-6">ধন্যবাদ!</h2>
                <p className="bengali text-xl text-neutral-600">
                  আপনার তথ্য সফলভাবে জমা হয়েছে। আমাদের টিম খুব শীঘ্রই আপনার সাথে
                  যোগাযোগ করবে।
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-12 bengali h-14 px-10 bg-black text-white"
                >
                  আরেকজন সদস্য যুক্ত করুন
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
                className="space-y-10"
              >
                <div className="space-y-4">
                  <label className="bengali text-lg font-bold block italic underline">
                    আপনার পূর্ণ নাম
                  </label>
                  <Input
                    required
                    className="h-16 border-black text-xl"
                    placeholder="নাম লিখুন"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="bengali text-lg font-bold block italic underline">
                      ফোন নম্বর
                    </label>
                    <Input
                      required
                      type="tel"
                      className="h-16 border-black text-xl"
                      placeholder="০১৭০০-০০০০০০"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="bengali text-lg font-bold block italic underline">
                      ইমেইল (ঐচ্ছিক)
                    </label>
                    <Input
                      type="email"
                      className="h-16 border-black text-xl"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="bengali text-lg font-bold block italic underline">
                    স্থায়ী ঠিকানা (গ্রাম/পাড়া ও ইউনিয়ন)
                  </label>
                  <Input
                    required
                    className="h-16 border-black text-xl"
                    placeholder="বিস্তারিত ঠিকানা"
                  />
                </div>

                <div className="space-y-4">
                  <label className="bengali text-lg font-bold block italic underline">
                    পেশা
                  </label>
                  <Input
                    required
                    className="h-16 border-black text-xl"
                    placeholder="যেমন: ছাত্র, শিক্ষক, ব্যবসায়ী..."
                  />
                </div>

                <div className="space-y-4">
                  <label className="bengali text-lg font-bold block italic underline">
                    আপনি কেন আমাদের সাথে কাজ করতে চান?
                  </label>
                  <Textarea
                    required
                    className="min-h-[150px] border-black text-xl"
                    placeholder="আপনার মতামত লিখুন..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bengali w-full h-20 bg-primary text-2xl font-black text-white border-2 border-black"
                >
                  টিমে যোগ দিন →
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
