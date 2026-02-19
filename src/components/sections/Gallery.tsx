export function Gallery() {
  const items = [
    { title: "মসজিদ পরিদর্শন", category: "স্থাপত্য" },
    { title: "বন্যার্তদের সহায়তা", category: "ত্রাণ" },
    { title: "সেচ প্রকল্প উদ্বোধন", category: "কৃষি" },
    { title: "কারিগরি প্রশিক্ষণ", category: "শিক্ষা" },
    { title: "ওয়াই-ফাই জোন", category: "ডিজিটাল" },
    { title: "ফুটবল টুর্নামেন্ট", category: "ক্রীড়া" },
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-20">
          <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
            — কার্যক্রমের স্থিরচিত্র
          </span>
          <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-6xl">
            গ্যালারি
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black italic">
          {items.map((item, i) => (
            <div
              key={i}
              className="aspect-square bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-none"></div>
              <span className="bengali text-neutral-300 font-bold uppercase tracking-widest text-xs z-10 mb-2">
                {item.category}
              </span>
              <span className="bengali text-neutral-400 font-bold uppercase tracking-widest text-sm z-10">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
