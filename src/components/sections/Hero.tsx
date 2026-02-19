import { Button } from "@/components/ui/button";
import { SITE_DATA } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      <div className="w-full container mx-auto flex min-h-[calc(100vh-80px)] flex-col lg:flex-row">
        {/* Content Side */}
        <div className="flex flex-1 flex-col justify-center px-4 py-16 lg:py-0">
          <div className="max-w-xl">
            <h1 className="bengali mb-6 text-5xl font-black leading-[1.1] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl">
              {SITE_DATA.name}
            </h1>
            <p className="bengali mb-6 text-xl font-bold leading-relaxed text-primary sm:text-2xl md:text-3xl">
              {SITE_DATA.hero.tagline}
            </p>
            <p className="bengali mb-10 text-base font-medium leading-relaxed text-neutral-500 sm:text-lg md:text-xl">
              {SITE_DATA.hero.subline}
            </p>

            <Button
              asChild
              className="bengali h-auto w-full bg-primary px-8 py-5 text-lg font-bold text-white transition-none hover:bg-primary sm:w-auto sm:px-10 sm:py-6 sm:text-xl"
            >
              <Link href="/contact">{SITE_DATA.hero.cta}</Link>
            </Button>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative min-h-[400px] flex-1 border-t border-black bg-neutral-100 lg:min-h-full lg:border-l lg:border-t-0">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/5 p-8 text-center text-primary">
            <div className="mb-6 flex h-48 w-48 items-center justify-center border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,106,78,1)] sm:h-64 sm:w-64">
              <span className="text-6xl">👤</span>
            </div>
            <span className="bengali font-black uppercase tracking-[.3em] text-sm sm:text-base sm:tracking-[.5em]">
              Mirza Fakhrul Islam Alamgir
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
