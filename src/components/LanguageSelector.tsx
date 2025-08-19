"use client";

import { useState, useEffect, useRef } from "react";
import { Flex, Button, Text } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";

const languageNames = {
  pt: "🇧🇷 Português",
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
  ja: "🇯🇵 日本語",
  ru: "🇷🇺 Русский",
  fr: "🇫🇷 Français",
  de: "🇩🇪 Deutsch",
  ko: "🇰🇷 한국어"
};

const languageCodes = {
  pt: "PT",
  en: "EN",
  es: "ES",
  ja: "JA",
  ru: "RU",
  fr: "FR",
  de: "DE",
  ko: "KO"
};

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as any);
    setIsOpen(false);
    console.log(`Idioma alterado para: ${languageNames[newLanguage as keyof typeof languageNames]}`);
  };

  return (
    <Flex vertical="center" style={{ position: "relative" }} ref={dropdownRef}>
      <Button
        variant="tertiary"
        size="s"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: "20px",
          padding: "6px 12px",
          fontSize: "12px",
          fontWeight: "600",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          minWidth: "80px"
        }}
      >
        {languageCodes[language as keyof typeof languageCodes]}
      </Button>
      
      {isOpen && (
        <Flex
          vertical="start"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "8px",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            padding: "8px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            minWidth: "140px"
          }}
        >
          {Object.entries(languageNames).map(([code, name]) => (
            <Button
              key={code}
              variant="tertiary"
              size="s"
              onClick={() => handleLanguageChange(code)}
              style={{
                borderRadius: "12px",
                padding: "8px 12px",
                fontSize: "12px",
                fontWeight: "500",
                background: code === language 
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                  : "transparent",
                border: "none",
                width: "100%",
                justifyContent: "flex-start",
                transition: "all 0.2s ease",
                marginBottom: "4px"
              }}
            >
              <Text
                style={{
                  color: code === language ? "#ffffff" : "rgba(255, 255, 255, 0.8)",
                  fontSize: "12px",
                  fontWeight: code === language ? "600" : "500"
                }}
              >
                {name}
              </Text>
            </Button>
          ))}
        </Flex>
      )}
    </Flex>
  );
} 