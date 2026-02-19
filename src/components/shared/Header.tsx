"use client";

import { Button } from "@/components/ui/button";
import { SITE_DATA } from "@/lib/constants";
import Link from "next/link";

export function Header() {
  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "আমার সম্পর্কে", href: "/about" },
    { name: "৭টি অঙ্গীকার", href: "/commitments" },
    { name: "স্বেচ্ছাসেবক", href: "/volunteer" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white/95 backdrop-blur-none">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-primary">
              {SITE_DATA.displayTitle}
            </span>
            <span className="bengali text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
              {SITE_DATA.name}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bengali text-[15px] font-medium text-neutral-600 transition-none"
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="bengali bg-primary text-white hover:bg-primary"
          >
            <Link href="#report-problem">সমস্যা জানান</Link>
          </Button>
        </nav>

        {/* Mobile Menu Placeholder - keeping it simple for now */}
        <div className="md:hidden">
          <Button variant="outline" className="h-10 w-10 border-black p-0">
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
  );
}
