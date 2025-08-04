"use client";

import { Flex, Text, Button } from "@once-ui-system/core";
import { person, social } from "@/resources/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      horizontal="space-between"
      vertical="center"
      padding="l"
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
        horizontal="space-between" 
        vertical="center" 
        fillWidth
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Copyright */}
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "500"
          }}
        >
          © {currentYear} {person.name}. Todos os direitos reservados.
        </Text>

        {/* Social Links */}
        <Flex horizontal="center" gap="m">
          {social.map((socialItem) => (
            <Button
              key={socialItem.name}
              variant="tertiary"
              size="s"
              href={socialItem.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: "20px",
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: "translateY(0)"
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {socialItem.name}
            </Button>
          ))}
        </Flex>

        {/* Made with Love */}
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "500"
          }}
        >
          Feito com ❤️ e Next.js
        </Text>
      </Flex>
    </Flex>
  );
}
