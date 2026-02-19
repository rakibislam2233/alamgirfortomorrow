import { SITE_DATA } from "@/lib/constants";
import { Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
              — যোগাযোগ করুন
            </span>
            <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-6xl mb-8">
              অফিসের ঠিকানা ও <br />
              যোগাযোগের মাধ্যম
            </h2>
            <p className="bengali text-xl text-neutral-600 leading-relaxed max-w-lg">
              যেকোনো প্রয়োজনে আমাদের অফিসিয়াল মাধ্যমগুলোতে যোগাযোগ করুন অথবা
              সরাসরি আমাদের অফিসে চলে আসুন।
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-black text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    অফিস
                  </h4>
                  <p className="bengali text-neutral-600 italic leading-relaxed">
                    {SITE_DATA.contact.address}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-black text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    ফোনালাপ
                  </h4>
                  <p className="bengali text-neutral-600 italic">
                    {SITE_DATA.contact.phone}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-black text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    ইমেইল
                  </h4>
                  <p className="bengali text-neutral-600 italic">
                    {SITE_DATA.contact.email}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-black text-primary">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    সামাজিক যোগাযোগ
                  </h4>
                  <div className="flex gap-4">
                    <Facebook size={20} className="text-neutral-400" />
                    <Twitter size={20} className="text-neutral-400" />
                    <Youtube size={20} className="text-neutral-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
