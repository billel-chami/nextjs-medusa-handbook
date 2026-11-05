"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "ar" | "fr";
export type Direction = "ltr" | "rtl";

interface LocaleContextType {
  readonly locale: Locale;
  readonly dir: Direction;
  readonly toggleLocale: () => void;
  readonly setLocale: (loc: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  dir: "ltr",
  toggleLocale: () => {},
  setLocale: () => {},
});

export function LocaleProvider({ children }: { readonly children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const dir: Direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    // Check saved preference or default to en
    const saved = localStorage.getItem("octera_locale") as Locale | null;
    if (saved === "ar" || saved === "en" || saved === "fr") {
      setLocaleState(saved);
      document.documentElement.setAttribute("lang", saved);
      document.documentElement.setAttribute("dir", saved === "ar" ? "rtl" : "ltr");
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    const nextDir = nextLocale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("octera_locale", nextLocale);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", nextLocale);
      document.documentElement.setAttribute("dir", nextDir);
    }
  };

  const toggleLocale = () => {
    const cycle: Record<Locale, Locale> = {
      en: "fr",
      fr: "ar",
      ar: "en",
    };
    setLocale(cycle[locale]);
  };

  return (
    <LocaleContext.Provider value={{ locale, dir, toggleLocale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
