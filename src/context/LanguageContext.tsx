"use client";

import { Language, SITE_DATA, SiteLanguageData } from "@/lib/constants";
import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: SiteLanguageData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("bn");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved && (saved === "bn" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    // Update document title and meta branding on client
    const siteTitle =
      language === "en" ? "Alamgir For Tomorrow" : "Alamgir For Tomorrow";
    const name =
      language === "en"
        ? "Mirza Fakhrul Islam Alamgir"
        : "মির্জা ফখরুল ইসলাম আলমগীর";
    document.title = `${siteTitle} | ${name}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        language === "en"
          ? "Official website of Mirza Fakhrul Islam Alamgir. Journey Towards Freedom: A New Era in Thakurgaon."
          : "মির্জা ফখরুল ইসলাম আলমগীর এর অফিসিয়াল ওয়েবসাইট। বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ।",
      );
    }

    // Set cookie for server-side detection
    document.cookie = `lang=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const t = SITE_DATA[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
