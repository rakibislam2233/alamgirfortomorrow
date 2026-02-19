"use client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks =
    language === "bn"
      ? [
          { name: "হোম", href: "/" },
          { name: "আমার সম্পর্কে", href: "/about" },
          { name: "৭টি অঙ্গীকার", href: "/commitments" },
          { name: "স্বেচ্ছাসেবক", href: "/volunteer" },
          { name: "যোগাযোগ", href: "/contact" },
        ]
      : [
          { name: "Home", href: "/" },
          { name: "About Me", href: "/about" },
          { name: "7 Pledges", href: "/commitments" },
          { name: "Volunteer", href: "/volunteer" },
          { name: "Contact", href: "/contact" },
        ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-primary bg-white">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-primary sm:text-2xl">
                {t.displayTitle}
              </span>
              <span className="bengali text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 sm:text-[10px] sm:tracking-[0.3em]">
                {t.name}
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bengali text-[14px] font-medium text-neutral-600 transition-none hover:text-primary lg:text-[15px]"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-2 border border-primary px-2 py-1">
              <button
                onClick={() => setLanguage("bn")}
                className={`text-xs font-bold px-2 py-1 ${language === "bn" ? "bg-primary text-white" : "text-primary"}`}
              >
                BN
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-bold px-2 py-1 ${language === "en" ? "bg-primary text-white" : "text-primary"}`}
              >
                EN
              </button>
            </div>

            <Button
              asChild
              className="bengali bg-primary text-white hover:bg-primary"
            >
              <Link href="/contact">{t.hero.cta}</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
              className="flex items-center gap-1 border border-primary px-2 py-1 text-[10px] font-bold text-primary"
            >
              <Globe size={14} />
              {language === "bn" ? "EN" : "বাংলা"}
            </button>
            <Button
              variant="outline"
              className="h-10 w-10 border-primary p-0"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Menu</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-60 flex flex-col bg-white p-6 md:hidden">
          <div className="flex items-center justify-between mb-12">
            <span className="text-xl font-black tracking-tighter text-primary">
              {t.displayTitle}
            </span>
            <Button
              variant="outline"
              className="h-10 w-10 border-primary p-0"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </Button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="bengali text-3xl font-black tracking-tight text-primary border-b border-neutral-100 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bengali h-16 bg-primary text-xl font-bold text-white mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/contact">{t.hero.cta}</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
