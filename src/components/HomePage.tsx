"use client";

import { Column, Flex, Heading, Text, Button } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function HomePage() {
  const { t, language } = useLanguage();

  // Função para criar links com locale
  const createLocalizedLink = (path: string) => {
    return `/${language}${path}`;
  };

  return (
    <Column fillWidth gap="xl" paddingY="xl" style={{ minHeight: "100vh" }}>
      {/* Premium Hero Section */}
      <Column 
        fillWidth 
        horizontal="center" 
        gap="xl" 
        paddingY="xl"
        style={{
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 50%, rgba(240, 147, 251, 0.08) 100%)",
          borderRadius: "40px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Animated Background Effects */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(240, 147, 251, 0.1) 0%, transparent 50%)",
          opacity: 0.6,
          pointerEvents: "none",
          animation: "heroBackgroundShift 12s ease-in-out infinite"
        }} />

        {/* Floating Particles Effect */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 20%)",
          opacity: 0.3,
          pointerEvents: "none",
          animation: "heroParticleFloat 18s ease-in-out infinite"
        }} />

        {/* Hero Content */}
        <Column gap="xl" horizontal="center" style={{ position: "relative", zIndex: 1 }}>
          <Heading 
            as="h1" 
            variant="display-strong-xl" 
            align="center"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "900",
              lineHeight: "1.2",
              maxWidth: "900px"
            }}
          >
            {t('home.hero.headline')}
          </Heading>
          
          <Text 
            variant="body-default-xl" 
            align="center" 
            onBackground="neutral-weak"
            style={{ 
              maxWidth: "800px",
              lineHeight: "1.8",
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "500",
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          >
            {t('home.hero.subline')}
          </Text>

          {/* Premium Action Buttons */}
          <Flex horizontal="center" gap="l" wrap>
            <Link href={createLocalizedLink("/work")} style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                size="l"
                style={{
                  borderRadius: "30px",
                  padding: "16px 32px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4), 0 4px 15px rgba(0, 0, 0, 0.2)",
                  border: "2px solid rgba(102, 126, 234, 0.3)",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "translateY(0)"
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 20px 45px rgba(102, 126, 234, 0.5), 0 8px 20px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(102, 126, 234, 0.4), 0 4px 15px rgba(0, 0, 0, 0.2)";
                }}
              >
                {t('home.hero.viewWriteups')}
              </Button>
            </Link>

            <Link href={createLocalizedLink("/about")} style={{ textDecoration: "none" }}>
              <Button
                variant="secondary"
                size="l"
                style={{
                  borderRadius: "30px",
                  padding: "16px 32px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "translateY(0)"
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)";
                }}
              >
                {t('home.hero.aboutMe')}
              </Button>
            </Link>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
} 