'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Locale } from './language-toggle';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (pt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'pt',
  setLocale: () => {},
  t: (pt) => pt,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt');

  const t = useCallback(
    (pt: string, en: string) => (locale === 'pt' ? pt : en),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
