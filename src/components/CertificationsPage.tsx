"use client";

import { Column, Flex, Heading, Text, Button } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function CertificationsPage() {
  const { t, language } = useLanguage();

  // Função para criar links com locale
  const createLocalizedLink = (path: string) => {
    return `/${language}${path}`;
  };

  return (
    <Column fillWidth gap="xl" paddingY="xl" style={{ minHeight: "100vh" }}>
      {/* Premium Certifications Section */}
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

        {/* Content */}
        <Column gap="xl" horizontal="center" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
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
              lineHeight: "1.2"
            }}
          >
            {t('certifications.title')}
          </Heading>
          
          <Text 
            variant="body-default-xl" 
            align="center" 
            onBackground="neutral-weak"
            style={{ 
              lineHeight: "1.8",
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "500",
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          >
            {t('certifications.subtitle')}
          </Text>

          <Text 
            variant="body-default-l" 
            align="center" 
            onBackground="neutral-weak"
            style={{ 
              lineHeight: "1.8",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px"
            }}
          >
            {t('certifications.description')}
          </Text>

          {/* Sample Certifications */}
          <Column gap="l" style={{ width: "100%", maxWidth: "600px" }}>
            <Heading 
              as="h2" 
              variant="heading-strong-l" 
              align="center"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "700"
              }}
            >
              Certificações Profissionais
            </Heading>

            <Flex horizontal="center" gap="m" wrap>
              <Button
                variant="secondary"
                size="m"
                style={{
                  borderRadius: "20px",
                  padding: "12px 24px",
                  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)",
                  border: "1px solid rgba(102, 126, 234, 0.3)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {t('certifications.viewCert')}
              </Button>
              <Button
                variant="secondary"
                size="m"
                style={{
                  borderRadius: "20px",
                  padding: "12px 24px",
                  background: "linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.2) 100%)",
                  border: "1px solid rgba(240, 147, 251, 0.3)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {t('certifications.issuedBy')}
              </Button>
            </Flex>
          </Column>

          {/* Back to Home Button */}
          <Link href={createLocalizedLink("")} style={{ textDecoration: "none" }}>
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
              {t('navigation.home')}
            </Button>
          </Link>
        </Column>
      </Column>
    </Column>
  );
} 