"use client";
import { useLanguage } from "@/context/LanguageContext";

export function Constituency() {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32 border-b border-primary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px border border-primary bg-primary">
          <div className="lg:col-span-1 bg-white p-12 flex flex-col justify-center">
            <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
              — {language === "bn" ? "নির্বাচনী এলাকা" : "Constituency"}
            </span>
            <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-5xl mb-8 leading-tight">
              {language === "bn"
                ? "ঠাকুরগাঁও-১ নির্বাচনী এলাকা"
                : "Thakurgaon-1 Constituency"}
            </h2>
            <div className="space-y-6 bengali text-lg text-neutral-600">
              <div className="flex justify-between border-b border-neutral-100 pb-4">
                <span>{language === "bn" ? "মোট ইউনিয়ন" : "Total Unions"}</span>
                <span className="font-bold text-black text-2xl">
                  {language === "bn" ? "২১টি" : "21"}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-4">
                <span>{language === "bn" ? "পৌরসভা" : "Municipality"}</span>
                <span className="font-bold text-black text-2xl">
                  {language === "bn" ? "১টি" : "1"}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-4">
                <span>{language === "bn" ? "মোট ভোটার" : "Total Voters"}</span>
                <span className="font-bold text-black text-2xl tracking-tighter">
                  {language === "bn" ? "৫,৫০,০০০+" : "5,50,000+"}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-neutral-100 min-h-[500px] relative border-l border-primary overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114510.87163016484!2d88.38466178336336!3d26.0820980590403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4e69d6756209b%3A0x6bba3a62f558a74e!2sThakurgaon!5e0!3m2!1sen!2sbd!4v1711200000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
