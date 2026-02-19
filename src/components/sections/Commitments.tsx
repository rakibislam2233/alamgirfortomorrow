import { SITE_DATA } from "@/lib/constants";

export function Commitments() {
  return (
    <section id="commitments" className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-20 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
              — আমাদের প্রতিশ্রুতি
            </span>
            <h2 className="bengali text-4xl font-black tracking-tight text-white md:text-6xl">
              আমার ৭টি অঙ্গীকার
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-neutral-800 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-800">
          {SITE_DATA.commitments.map((item, index) => (
            <div
              key={index}
              className="group bg-black p-8 sm:p-12 transition-none"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center border border-primary text-primary transition-none">
                <span className="text-2xl font-black">{index + 1}</span>
              </div>
              <h3 className="bengali mb-4 text-xl sm:text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="bengali text-sm sm:text-base leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
          <div className="bg-primary p-8 sm:p-12 flex flex-col justify-end">
            <h3 className="bengali text-2xl sm:text-3xl font-black text-white leading-tight">
              জনতাই শক্তি
              <br />
              ठाकুরগাঁও হবে অপরাজেয়
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
