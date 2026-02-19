import { SITE_DATA } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter text-primary">
                {SITE_DATA.displayTitle}
              </span>
              <span className="bengali text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
                {SITE_DATA.name}
              </span>
            </Link>

            <p className="bengali max-w-md text-neutral-600 leading-relaxed mb-6">
              {SITE_DATA.hero.tagline}
            </p>
            <div className="bengali text-primary font-black text-2xl mb-8 italic">
              ধন্যবাদ, ঠাকুরগাঁওবাসী।
            </div>
          </div>

          <div>
            <h4 className="bengali text-lg font-bold mb-6 italic">লিংকসমূহ</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="bengali text-neutral-600">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/about" className="bengali text-neutral-600">
                  আমার সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/commitments" className="bengali text-neutral-600">
                  ৭টি অঙ্গীকার
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="bengali text-neutral-600">
                  স্বেচ্ছাসেবক
                </Link>
              </li>
              <li>
                <Link href="/contact" className="bengali text-neutral-600">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="bengali text-lg font-bold mb-6 italic">যোগাযোগ</h4>
            <div className="space-y-4 bengali text-neutral-600">
              <p>{SITE_DATA.contact.address}</p>
              <p>{SITE_DATA.contact.phone}</p>
              <p>{SITE_DATA.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="bengali text-sm text-neutral-500">
            © {new Date().getFullYear()} {SITE_DATA.name}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-6">
            {/* Social links placeholder */}
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
              Facebook
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
              Twitter
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
              Youtube
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
