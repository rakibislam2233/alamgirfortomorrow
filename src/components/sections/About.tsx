import { Button } from "@/components/ui/button";
import { SITE_DATA } from "@/lib/constants";
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 md:py-32 border-b border-black"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-20">
          <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
            — জীবন ও রাজনীতি
          </span>
          <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-6xl mb-6">
            {SITE_DATA.about.title}
          </h2>
          <p className="bengali text-xl font-bold text-neutral-500 italic">
            {SITE_DATA.about.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="space-y-12 lg:w-3/5">
            <p className="bengali text-2xl leading-relaxed text-neutral-800 md:text-3xl font-light">
              “{SITE_DATA.about.content}”
            </p>
            <p className="bengali text-lg leading-relaxed text-neutral-500 italic">
              {SITE_DATA.about.history}
            </p>

            <div className="h-[2px] w-40 bg-black"></div>

            <Button
              asChild
              className="bengali h-14 bg-primary text-lg font-bold w-full sm:w-auto"
            >
              <Link href="/about">আরও পড়ুন →</Link>
            </Button>
          </div>

          <div className="lg:w-2/5">
            <div className="border border-black p-8 sm:p-12 bg-neutral-50 space-y-8">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  জন্ম
                </div>
                <div className="bengali font-black text-xl sm:text-2xl">
                  {SITE_DATA.about.fullBio?.birth}
                </div>
              </div>
              <div className="h-px bg-neutral-200"></div>
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  শিক্ষা
                </div>
                <div className="bengali font-black text-xl sm:text-2xl">
                  {SITE_DATA.about.fullBio?.education}
                </div>
              </div>
              <div className="h-px bg-neutral-200"></div>
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  বর্তমান পদ
                </div>
                <div className="bengali font-black text-xl sm:text-2xl">
                  {SITE_DATA.party}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
