"use client";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_DATA } from "@/lib/constants";
import { Facebook, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
              — {t.contactSection.label}
            </span>
            <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-6xl mb-8">
              {t.contactSection.title}
            </h2>
            <p className="bengali text-xl text-neutral-600 leading-relaxed max-w-lg">
              {t.contactSection.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-primary text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    {t.contactSection.officeLabel}
                  </h4>
                  <p className="bengali text-neutral-600 italic leading-relaxed">
                    {t.contact.address}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-primary text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    {t.contactSection.phoneLabel}
                  </h4>
                  <p className="bengali text-neutral-600 italic">
                    {t.contact.phone}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-primary text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    {t.contactSection.emailLabel}
                  </h4>
                  <p className="bengali text-neutral-600 italic">
                    {t.contact.email}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center border border-primary text-primary">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="bengali text-xl font-bold mb-2 italic">
                    {t.contactSection.socialLabel}
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href={SITE_DATA.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook
                        size={20}
                        className="text-neutral-400 hover:text-primary"
                      />
                    </a>
                    <a
                      href={SITE_DATA.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter
                        size={20}
                        className="text-neutral-400 hover:text-primary"
                      />
                    </a>
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
