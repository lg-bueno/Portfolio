"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ptTranslations from '@/translations/pt.json';
import enTranslations from '@/translations/en.json';
import esTranslations from '@/translations/es.json';
import jaTranslations from '@/translations/ja.json';
import ruTranslations from '@/translations/ru.json';
import frTranslations from '@/translations/fr.json';
import deTranslations from '@/translations/de.json';
import koTranslations from '@/translations/ko.json';

type Language = 'pt' | 'en' | 'es' | 'ja' | 'ru' | 'fr' | 'de' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Traduções dos arquivos JSON
const translationsData = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
  ja: jaTranslations,
  ru: ruTranslations,
  fr: frTranslations,
  de: deTranslations,
  ko: koTranslations
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translationsData[language] || translationsData.pt;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['pt', 'en', 'es', 'ja', 'ru', 'fr', 'de', 'ko'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 