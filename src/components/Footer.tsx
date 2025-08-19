"use client";

import { Flex, Text, Button } from "@once-ui-system/core";
import { person, social } from "@/resources/content";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <Flex
      as="footer"
      fillWidth
      horizontal="center"
      vertical="center"
      padding="l"
      className="footer-container"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
        background: "radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(240, 147, 251, 0.03) 0%, transparent 50%)",
        opacity: 0.4,
        pointerEvents: "none"
      }} />

      {/* Footer Content */}
      <Flex 
        horizontal="center" 
        vertical="center" 
        fillWidth
        className="footer-content"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Social Links - Centered */}
        <Flex horizontal="center" gap="m" className="footer-links">
          {social.map((socialItem) => (
            <Button
              key={socialItem.name}
              variant="tertiary"
              size="s"
              href={socialItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{
                borderRadius: "25px",
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                transform: "translateY(0)"
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              {socialItem.name}
            </Button>
          ))}
        </Flex>

        {/* Copyright - Centered */}
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          className="footer-copyright"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "500"
          }}
        >
          © {currentYear} {person.name}. {t('footer.copyright')}
        </Text>

        {/* Made with Love - Centered */}
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          className="footer-made-with"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "500"
          }}
        >
          {t('footer.madeWith')}
        </Text>
      </Flex>
    </Flex>
  );
}
