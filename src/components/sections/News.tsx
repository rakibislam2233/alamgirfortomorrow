export function News() {
  const newsItems = [
    {
      date: "এপ্রিল ২০২৫",
      title: "ঠাকুরগাঁও কেন্দ্রীয় মসজিদ পুনর্নির্মাণ প্রকল্পের উদ্বোধন",
      category: "ধর্মীয় ও সামাজিক",
    },
    {
      date: "মার্চ ২০২৫",
      title: "ঠাকুরগাঁও শহরে বিনামূল্যে ওয়াই-ফাই জোন চালু",
      category: "ডিজিটাল সেবা",
    },
    {
      date: "জানুয়ারি ২০২৫",
      title: "জিয়া মেমোরিয়াল ফুটবল টুর্নামেন্টের সফল সমাপ্তি",
      category: "ক্রীড়া",
    },
    {
      date: "ডিসেম্বর ২০২৪",
      title: "ঠাকুরগাঁও বিএনপির দ্বিবার্ষিক সম্মেলন সম্পন্ন",
      category: "দলীয়",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
              — সর্বশেষ কার্যক্রম
            </span>
            <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-6xl">
              খবর ও বিবৃতি
            </h2>
          </div>
          <div className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2 text-black cursor-pointer">
            সব খবর দেখুন
          </div>
        </div>

        <div className="divide-y divide-black border-y border-black">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-12 items-center py-10 transition-none"
            >
              <div className="md:col-span-2 text-neutral-400 font-bold uppercase text-xs tracking-widest mb-4 md:mb-0">
                {item.date}
              </div>
              <div className="md:col-span-2 text-primary text-xs font-black uppercase tracking-widest mb-2 md:mb-0 italic leading-none">
                [{item.category}]
              </div>
              <div className="md:col-span-6">
                <h3 className="bengali text-2xl md:text-3xl font-bold text-black border-l-4 border-transparent pl-4 transition-none group-hover:border-primary">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <div className="h-10 w-10 border border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-none">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
