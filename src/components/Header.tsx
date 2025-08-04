"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Heading, Text, Button, Avatar, Badge, Column } from "@once-ui-system/core";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Header.module.scss";
import { person } from "@/resources/content";

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Função para criar links com locale
  const createLocalizedLink = (path: string) => {
    return `/${language}${path}`;
  };

  return (
    <Flex
      as="header"
      fillWidth
      horizontal="space-between"
      vertical="center"
      padding="l"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: isScrolled 
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)" 
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: isScrolled 
          ? "1px solid rgba(255, 255, 255, 0.2)" 
          : "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isScrolled 
          ? "0 8px 32px rgba(0, 0, 0, 0.1)" 
          : "none"
      }}
      className={styles.header}
    >
      {/* Logo Section */}
      <Flex horizontal="start" vertical="center" gap="m">
        <Link href={createLocalizedLink("")} style={{ textDecoration: "none" }}>
          <Flex horizontal="start" vertical="center" gap="m">
            <Avatar
              size="l"
              src={person.avatar}
              style={{
                border: "2px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            />
            <Column gap="xs" style={{ alignItems: "flex-start" }}>
              <Heading
                as="h1"
                variant="heading-strong-m"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "700",
                  margin: 0,
                  textAlign: "left"
                }}
              >
                {person.name}
              </Heading>
              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "500",
                  margin: 0,
                  textAlign: "left"
                }}
              >
                {t('header.portfolio')}
              </Text>
            </Column>
          </Flex>
        </Link>

        {/* Location and Time - Left Side */}
        <Flex horizontal="center" vertical="center" gap="m">
          <Column gap="xs" style={{ alignItems: "center" }}>
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              style={{
                fontWeight: "600",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textAlign: "center"
              }}
            >
              {formatTime(currentTime)}
            </Text>

            <Flex
              horizontal="center"
              vertical="center"
              gap="xs"
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <Text
                variant="body-default-xs"
                style={{
                  fontWeight: "600",
                  color: "#ffffff",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
                }}
              >
                📍 {t('header.location')}
              </Text>
            </Flex>
          </Column>
        </Flex>
      </Flex>

      {/* Navigation */}
      <Flex horizontal="center" gap="l" hide="s">
        <Link href={createLocalizedLink("")} style={{ textDecoration: "none" }}>
          <Button
            variant={pathname === `/${language}` ? "primary" : "tertiary"}
            size="s"
            style={{
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              background: pathname === `/${language}`
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                : "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: pathname === `/${language}`
                ? "2px solid rgba(102, 126, 234, 0.3)"
                : "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            {t('navigation.home')}
          </Button>
        </Link>
        <Link href={createLocalizedLink("/about")} style={{ textDecoration: "none" }}>
          <Button
            variant={pathname === `/${language}/about` ? "primary" : "tertiary"}
            size="s"
            style={{
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              background: pathname === `/${language}/about`
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                : "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: pathname === `/${language}/about`
                ? "2px solid rgba(102, 126, 234, 0.3)"
                : "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            {t('navigation.about')}
          </Button>
        </Link>
        <Link href={createLocalizedLink("/work")} style={{ textDecoration: "none" }}>
          <Button
            variant={pathname === `/${language}/work` ? "primary" : "tertiary"}
            size="s"
            style={{
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              background: pathname === `/${language}/work`
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                : "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: pathname === `/${language}/work`
                ? "2px solid rgba(102, 126, 234, 0.3)"
                : "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            {t('navigation.writeups')}
          </Button>
        </Link>
        <Link href={createLocalizedLink("/certifications")} style={{ textDecoration: "none" }}>
          <Button
            variant={pathname === `/${language}/certifications` ? "primary" : "tertiary"}
            size="s"
            style={{
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              background: pathname === `/${language}/certifications`
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                : "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: pathname === `/${language}/certifications`
                ? "2px solid rgba(102, 126, 234, 0.3)"
                : "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            {t('navigation.certifications')}
          </Button>
        </Link>
      </Flex>

      {/* Right Section - Theme Toggle and Language Selector */}
      <Flex horizontal="center" vertical="center" gap="m">
        <LanguageSelector />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
