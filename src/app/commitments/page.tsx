import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { SITE_DATA } from "@/lib/constants";

export default function CommitmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-black py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <span className="bengali mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-primary italic">
            — আমাদের ইশতেহার
          </span>
          <h1 className="bengali text-6xl font-black leading-tight tracking-tighter md:text-8xl">
            আমার ৭টি অঙ্গীকার
          </h1>
          <p className="bengali mt-8 text-2xl font-medium text-neutral-400 max-w-2xl">
            সুস্থ, শক্তিশালী ও আধুনিক ঠাকুরগাঁও গড়ার লক্ষ্যে আমাদের সুনির্দিষ্ট
            পরিকল্পনা।
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {SITE_DATA.commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="group border border-black p-12 transition-none hover:bg-neutral-50"
              >
                <div className="mb-12 flex h-20 w-20 items-center justify-center border-2 border-primary text-4xl font-black text-primary">
                  {idx + 1}
                </div>
                <h2 className="bengali mb-8 text-4xl font-black tracking-tight">
                  {commitment.title}
                </h2>
                <p className="bengali text-2xl leading-relaxed text-neutral-600 font-light">
                  {commitment.description}
                </p>
                <div className="mt-12 h-1 w-20 bg-primary"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="bengali text-5xl font-black mb-8 italic">
            জনতাই শক্তি, ঠাকুরগাঁও হবে অপরাজেয়
          </h2>
          <p className="bengali text-xl opacity-80">
            আমাদের সাথে যুক্ত হয়ে নতুন দিনের পথ প্রশস্ত করুন।
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
