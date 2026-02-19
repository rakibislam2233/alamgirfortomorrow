import { SITE_DATA } from "@/lib/constants";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-white py-24 md:py-32 border-b border-black"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-20">
          <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
            — ঠাকুরগাঁও ও জাতীয় পর্যায়ে
          </span>
          <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-6xl">
            কাজ ও অবদান
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Initiatives Card */}
          <div className="p-12 border border-black bg-neutral-50">
            <h3 className="bengali text-2xl font-black mb-10 border-b border-black pb-4 text-primary">
              গত ১৫ মাসে সাম্প্রতিক উদ্যোগ
            </h3>
            <div className="space-y-8">
              {SITE_DATA.achievements
                .filter((a) => a.year === "২০২৪" || a.year === "২০২৫")
                .map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="bengali text-xl font-bold mb-2 flex items-start gap-3">
                      <span className="text-primary">{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="bengali text-neutral-600 leading-relaxed pl-7">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* BNP Era Projects Card */}
          <div className="p-12 border border-black bg-neutral-50">
            <h3 className="bengali text-2xl font-black mb-10 border-b border-black pb-4 text-primary">
              বিএনপি শাসনামলে বড় প্রকল্প (২০০১–২০০৬)
            </h3>
            <div className="space-y-8">
              {SITE_DATA.achievements
                .filter(
                  (a) =>
                    a.year === "২০০৫" ||
                    a.year === "২০০১-২০০৬" ||
                    a.title.includes("ESDO"),
                )
                .map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="bengali text-xl font-bold mb-2 flex items-start gap-3">
                      <span className="text-primary">{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="bengali text-neutral-600 leading-relaxed pl-7">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* National Contributions Card */}
          <div className="p-12 border border-black bg-neutral-50">
            <h3 className="bengali text-2xl font-black mb-10 border-b border-black pb-4 text-primary">
              জাতীয় অবদান (২০০১–২০০৬)
            </h3>
            <div className="space-y-8">
              {SITE_DATA.contributions.national.map((item, idx) => (
                <div key={idx} className="group">
                  <h4 className="bengali text-xl font-bold mb-2 flex items-start gap-3">
                    <span className="text-primary">→</span>
                    {item.title}
                  </h4>
                  <p className="bengali text-neutral-600 leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Local Work List Card */}
          <div className="p-12 border border-black bg-neutral-50">
            <h3 className="bengali text-2xl font-black mb-10 border-b border-black pb-4 text-primary">
              ঠাকুরগাঁওয়ে বিএনপির কাজ (১৯৯১–২০০৬)
            </h3>
            <div className="space-y-6">
              {SITE_DATA.contributions.local.map((item, idx) => (
                <div key={idx} className="flex font-bold items-start gap-4">
                  <span className="text-primary text-xl">●</span>
                  <div className="bengali">
                    <span className="text-black">{item.title}:</span>{" "}
                    <span className="text-neutral-500 font-medium">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
              <p className="bengali text-neutral-600 pt-4 italic font-medium">
                ঠাকুরগাঁওয়ের সব বেসরকারি স্কুল ও কলেজ এমপিওভুক্ত হওয়ায় অর্থনীতি
                বদলে যায়। তিনি ব্যপক সামাজিক উন্নয়ন মূলক কাজে ফান্ডিং এর
                ব্যবস্থা করেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
