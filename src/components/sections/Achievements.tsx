"use client";
import { useLocale, useTranslations } from "next-intl";

export function Achievements() {
  const locale = useLocale();
  const t = useTranslations();

  const achievementsList = t.raw("achievements");
  const nationalContributions = t.raw("contributions.national");
  const localContributions = t.raw("contributions.local");

  return (
    <section
      id="achievements"
      className="bg-white py-24 md:py-32 border-b border-primary"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-20">
          <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
            —{" "}
            {locale === "bn"
              ? "ঠাকুরগাঁও ও জাতীয় পর্যায়ে"
              : "At Local & National Levels"}
          </span>
          <h2 className="bengali text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            {locale === "bn" ? "কাজ ও অবদান" : "Work & Contributions"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Initiatives Card */}
          <div className="p-6 sm:p-12 border border-primary bg-neutral-50">
            <h3 className="bengali text-xl sm:text-2xl font-black mb-10 border-b border-primary pb-4 text-primary italic">
              {locale === "bn"
                ? "গত ১৫ মাসে সাম্প্রতিক উদ্যোগ"
                : "Recent Initiatives (Last 15 Months)"}
            </h3>
            <div className="space-y-8">
              {achievementsList
                .filter(
                  (a: any) =>
                    a.year === "২০২৪" ||
                    a.year === "২০২৫" ||
                    a.year === "2024" ||
                    a.year === "2025",
                )
                .map((item: any, idx: number) => (
                  <div key={idx} className="group">
                    <h4 className="bengali text-lg sm:text-xl font-bold mb-2 flex items-start gap-3">
                      <span className="text-primary">{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="bengali text-neutral-600 leading-relaxed pl-7 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* BNP Era Projects Card */}
          <div className="p-6 sm:p-12 border border-primary bg-neutral-50">
            <h3 className="bengali text-xl sm:text-2xl font-black mb-10 border-b border-primary pb-4 text-primary italic">
              {locale === "bn"
                ? "বিএনপি শাসনামলে বড় প্রকল্প (২০০১–২০০৬)"
                : "Major Projects in BNP Era (2001–2006)"}
            </h3>
            <div className="space-y-8">
              {achievementsList
                .filter(
                  (a: any) =>
                    a.year === "২০০১-২০০৬" ||
                    a.year === "2001-2006" ||
                    a.year === "২০০৫" ||
                    a.year === "2005" ||
                    a.year === "১৯৯১-২০০৬" ||
                    a.year === "1991-2006" ||
                    a.title.includes("ESDO"),
                )
                .map((item: any, idx: number) => (
                  <div key={idx} className="group">
                    <h4 className="bengali text-lg sm:text-xl font-bold mb-2 flex items-start gap-3">
                      <span className="text-primary">{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="bengali text-neutral-600 leading-relaxed pl-7 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* National Contributions Card */}
          <div className="p-6 sm:p-12 border border-primary bg-neutral-50">
            <h3 className="bengali text-xl sm:text-2xl font-black mb-10 border-b border-primary pb-4 text-primary italic">
              {locale === "bn"
                ? "জাতীয় অবদান (২০০১–২০০৬)"
                : "National Contributions (2001–2006)"}
            </h3>
            <div className="space-y-8">
              {nationalContributions.map((item: any, idx: number) => (
                <div key={idx} className="group">
                  <h4 className="bengali text-lg sm:text-xl font-bold mb-2 flex items-start gap-3">
                    <span className="text-primary">→</span>
                    {item.title}
                  </h4>
                  <p className="bengali text-neutral-600 leading-relaxed pl-7 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Local Work List Card */}
          <div className="p-6 sm:p-12 border border-primary bg-neutral-50">
            <h3 className="bengali text-xl sm:text-2xl font-black mb-10 border-b border-primary pb-4 text-primary italic">
              {locale === "bn"
                ? "ঠাকুরগাঁওয়ে বিএনপির কাজ (১৯৯১–২০০৬)"
                : "BNP Initiatives in Thakurgaon (1991–2006)"}
            </h3>
            <div className="space-y-6">
              {localContributions.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex font-bold items-start gap-4 text-sm sm:text-base"
                >
                  <span className="text-primary text-xl">●</span>
                  <div className="bengali">
                    <span className="text-black">{item.title}:</span>{" "}
                    <span className="text-neutral-500 font-medium">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
              <p className="bengali text-neutral-600 pt-4 italic font-medium text-sm sm:text-base">
                {locale === "bn"
                  ? "ঠাকুরগাঁওয়ের সব বেসরকারি স্কুল ও কলেজ এমপিওভুক্ত হওয়ায় অর্থনীতি বদলে যায়। তিনি ব্যপক সামাজিক উন্নয়ন মূলক কাজে ফান্ডিং এর ব্যবস্থা করেন।"
                  : "The inclusion of all private schools and colleges in Thakurgaon in the MPO significantly transformed the economy. He organized funding for widespread social development projects."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
