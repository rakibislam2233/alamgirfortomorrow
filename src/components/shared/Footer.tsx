"use client";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_DATA } from "@/lib/constants";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { language, t } = useLanguage();

  const navLinksEn = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "7 Pledges", href: "/commitments" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
  ];
  const navLinksBn = [
    { name: "হোম", href: "/" },
    { name: "আমার সম্পর্কে", href: "/about" },
    { name: "৭টি অঙ্গীকার", href: "/commitments" },
    { name: "স্বেচ্ছাসেবক", href: "/volunteer" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  const links = language === "bn" ? navLinksBn : navLinksEn;

  return (
    <footer className="border-t border-primary bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter text-primary">
                {t.displayTitle}
              </span>
              <span className="bengali text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
                {t.name}
              </span>
            </Link>

            <p className="bengali max-w-md text-neutral-600 leading-relaxed mb-6">
              {t.hero.tagline}
            </p>
            <div className="bengali text-primary font-black text-2xl mb-8 italic">
              {language === "bn"
                ? "ধন্যবাদ, ঠাকুরগাঁওবাসী।"
                : "Thank you, residents of Thakurgaon."}
            </div>
          </div>

          <div>
            <h4 className="bengali text-lg font-bold mb-6 italic">
              {language === "bn" ? "লিংকসমূহ" : "Quick Links"}
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="bengali text-neutral-600 hover:text-primary transition-none"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="bengali text-lg font-bold mb-6 italic">
              {language === "bn" ? "যোগাযোগ" : "Contact"}
            </h4>
            <div className="space-y-4 bengali text-neutral-600">
              <p>{t.contact.address}</p>
              <p>{t.contact.phone}</p>
              <p>{t.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="bengali text-sm text-neutral-500">
            © {new Date().getFullYear()} {t.name}।{" "}
            {language === "bn"
              ? "সর্বস্বত্ব সংরক্ষিত।"
              : "All Rights Reserved."}
          </p>
          <div className="flex gap-6">
            <a
              href={SITE_DATA.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-none"
            >
              <Facebook size={20} />
            </a>
            <a
              href={SITE_DATA.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-none"
            >
              <Twitter size={20} />
            </a>
            <a
              href={SITE_DATA.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-none"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
