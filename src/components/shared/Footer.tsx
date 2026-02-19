"use client";
import { Link } from "@/i18n/routing";
import { Facebook, Twitter } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const links = [
    { name: t("Nav.home"), href: "/" },
    { name: t("Nav.about"), href: "/about" },
    { name: t("Nav.commitments"), href: "/commitments" },
    { name: t("Nav.volunteer"), href: "/volunteer" },
    { name: t("Nav.contact"), href: "/contact" },
  ];

  const social = {
    facebook: "https://www.facebook.com/MirzaAlamgir/",
    twitter: "https://x.com/BNPSGOffice",
  };

  return (
    <footer className="border-t border-primary bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter text-primary">
                {t("displayTitle")}
              </span>
              <span className="bengali text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
                {t("name")}
              </span>
            </Link>

            <p className="bengali max-w-md text-neutral-600 leading-relaxed mb-6">
              {t("Hero.tagline")}
            </p>
            <div className="bengali text-primary font-black text-2xl mb-8 italic">
              {t("Footer.thankYou")}
            </div>
          </div>

          <div>
            <h4 className="bengali text-lg font-bold mb-6 italic">
              {t("Footer.quickLinks")}
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as any}
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
              {t("Footer.contact")}
            </h4>
            <div className="space-y-4 bengali text-neutral-600">
              <p>{t("Contact.address")}</p>
              <p>{t("Contact.phone")}</p>
              <p>{t("Contact.email")}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-neutral-400">
            <p className="bengali text-sm text-neutral-500">
              © {new Date().getFullYear()} {t("name")}। {t("Footer.rights")}
            </p>
            <p className="text-xs">
              {t("Footer.developedBy")}{" "}
              <a
                href="https://www.facebook.com/rakibulislamrakib.tkg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline cursor-pointer"
              >
                Md Rakib Ali
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-none"
            >
              <Facebook size={20} />
            </a>
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-none"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
