import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { SITE_DATA } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section for About */}
      <section className="bg-primary py-16 sm:py-24 md:py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <span className="bengali mb-4 block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] opacity-70 italic">
            — জীবন ও রাজনীতি
          </span>
          <h1 className="bengali text-4xl font-black leading-tight tracking-tighter sm:text-6xl md:text-8xl">
            {SITE_DATA.about.title}
          </h1>
        </div>
      </section>

      {/* Extended Bio Section */}
      <section className="py-12 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-16 lg:gap-20 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="bengali mb-12 text-xl sm:text-3xl font-light leading-relaxed text-neutral-800 md:text-4xl">
                “{SITE_DATA.about.content}”
              </p>

              <div className="space-y-12 sm:space-y-16">
                <div>
                  <h2 className="bengali mb-6 sm:mb-8 text-2xl sm:text-4xl font-black tracking-tight italic bg-neutral-100 inline-block px-2">
                    শৈশব ও শিক্ষা
                  </h2>
                  <p className="bengali text-lg sm:text-xl leading-relaxed text-neutral-600">
                    {SITE_DATA.about.fullBio?.birth}। পিতার নাম মির্জা রুহুল
                    আমিন। {SITE_DATA.about.fullBio?.education}।
                  </p>
                </div>

                <div>
                  <h2 className="bengali mb-6 sm:mb-8 text-2xl sm:text-4xl font-black tracking-tight italic bg-neutral-100 inline-block px-2">
                    পেশাগত জীবন
                  </h2>
                  <p className="bengali text-lg sm:text-xl leading-relaxed text-neutral-600">
                    {SITE_DATA.about.fullBio?.professional}।{" "}
                    {SITE_DATA.about.history}
                  </p>
                </div>

                <div>
                  <h2 className="bengali mb-10 sm:mb-12 text-2xl sm:text-4xl font-black tracking-tight italic bg-neutral-100 inline-block px-2">
                    রাজনৈতিক যাত্রার মাইলফলক
                  </h2>
                  <div className="space-y-8 border-l-2 sm:border-l-4 border-black pl-6 sm:pl-12">
                    {SITE_DATA.about.fullBio?.milestones.map(
                      (milestone, idx) => (
                        <div key={idx}>
                          <div className="text-2xl sm:text-3xl font-black text-primary">
                            {milestone.year}
                          </div>
                          <div className="bengali mt-2 text-xl sm:text-2xl font-bold text-black leading-tight">
                            {milestone.event}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8 bg-neutral-50 p-12 border border-black">
                <h3 className="bengali text-2xl font-black border-b border-black pb-4 uppercase tracking-tighter italic">
                  দ্রুত তথ্য
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      বর্তমান পদ
                    </div>
                    <div className="bengali font-bold text-lg">
                      {SITE_DATA.party}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      নির্বাচিত এলাকা
                    </div>
                    <div className="bengali font-bold text-lg">
                      {SITE_DATA.constituency}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      জন্ম
                    </div>
                    <div className="bengali font-bold text-lg">
                      {SITE_DATA.about.fullBio?.birth}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
