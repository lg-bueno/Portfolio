"use client";

import { Flex, Text, IconButton } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";
import { useEffect, useState } from "react";

// Hook para detectar tamanho da tela de forma segura
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}

export default function Footer() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
      className="mobile-padding"
    >
      <Flex
        className={`${styles.mobile} mobile-gap`}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
        style={{
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "space-between",
          textAlign: isMobile ? "center" : "left"
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong" className="text-mobile">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {" "}
            Powered by{" "}
            <a
              href="https://github.com/lg-bueno/portfolio.js"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--neutral-on-background-weak)",
                textDecoration: "none",
                borderBottom: "1px solid var(--neutral-alpha-weak)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderBottomColor = "var(--brand-on-background-strong)";
                  e.currentTarget.style.color = "var(--brand-on-background-strong)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderBottomColor = "var(--neutral-alpha-weak)";
                  e.currentTarget.style.color = "var(--neutral-on-background-weak)";
                }
              }}
            >
              Portfolio.js
            </a>
          </Text>
        </Text>
        <Flex gap="16" style={{ justifyContent: isMobile ? "center" : "flex-end" }}>
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                  className="mobile-reduce-animations"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
}
