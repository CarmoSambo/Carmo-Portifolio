import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Language, Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  toggleLanguage: () => {},
  t: translations.pt,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return stored === "en" ? "en" : "pt";
  });

  const toggleLanguage = () => {
    setLanguage((l) => {
      const next = l === "pt" ? "en" : "pt";
      localStorage.setItem("language", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
