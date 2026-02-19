import { Button } from "@/components/ui/button";
import { SITE_DATA } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full border-b border-black md:min-h-screen">
      <div className="flex h-full flex-col px-4 md:flex-row md:px-0">
        <div className="flex flex-1 flex-col justify-center py-20 md:pl-20">
          <div className="max-w-xl">
            <h1 className="bengali mb-8 text-5xl font-black leading-[1.1] tracking-tighter text-black md:text-8xl">
              {SITE_DATA.name}
            </h1>
            <p className="bengali mb-6 text-xl font-bold leading-relaxed text-primary md:text-3xl">
              {SITE_DATA.hero.tagline}
            </p>
            <p className="bengali mb-12 text-lg font-medium leading-relaxed text-neutral-500 md:text-xl">
              {SITE_DATA.hero.subline}
            </p>

            <Button
              asChild
              className="bengali h-auto bg-primary px-10 py-6 text-xl font-bold text-white transition-none hover:bg-primary"
            >
              <Link href="#report-problem">{SITE_DATA.hero.cta}</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[50vh] flex-1 bg-neutral-100 md:h-full border-l border-black">
          {/* Placeholder for MP Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
            <span className="bengali font-bold text-primary/40 uppercase tracking-[.5em]">
              Mirza Fakhrul Islam Alamgir
            </span>
          </div>
          {/* 
            Once the user provides the image, they can use:
            <Image 
              src="/mp-image.jpg" 
              alt={SITE_DATA.name} 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-grayscale duration-500"
              priority
            /> 
          */}
        </div>
      </div>
    </section>
  );
}
