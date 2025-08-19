"use client";

import { Column, Flex, Heading, Text, Button, Badge, Avatar } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { person, social } from "@/resources";
import Link from "next/link";

export default function AboutPage() {
  const { t, language } = useLanguage();

  // Função para criar links com locale
  const createLocalizedLink = (path: string) => {
    return `/${language}${path}`;
  };

  return (
    <Column fillWidth gap="xl" paddingY="xl" style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <Column 
        fillWidth 
        horizontal="center" 
        gap="l" 
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
        <Column gap="l" horizontal="center" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <Avatar 
            src={person.avatar} 
            size="xl" 
            style={{
              border: "4px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)"
            }}
          />
          
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
            {t('about.name')}
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
            {t('about.role')}
          </Text>

          {/* Social Links */}
          <Flex horizontal="center" gap="m" wrap>
            {social.map((item) => (
              <Button
                key={item.name}
                href={item.link}
                variant="secondary"
                size="s"
                prefixIcon={item.icon}
                style={{
                  borderRadius: "20px",
                  padding: "8px 16px",
                  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)",
                  border: "1px solid rgba(102, 126, 234, 0.3)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {item.name}
              </Button>
            ))}
          </Flex>
        </Column>
      </Column>

      {/* Introduction Section */}
      <Column 
        fillWidth 
        horizontal="center" 
        gap="l" 
        paddingY="xl"
        style={{
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)"
        }}
      >
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
          {t('about.introduction.title')}
        </Heading>
        
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
          {t('about.introduction.description')}
        </Text>
      </Column>

      {/* Work Experience Section */}
      <Column 
        fillWidth 
        horizontal="center" 
        gap="l" 
        paddingY="xl"
        style={{
          background: "linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%)",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)"
        }}
      >
        <Heading 
          as="h2" 
          variant="heading-strong-l" 
          align="center"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "700"
          }}
        >
          {t('about.workExperience.title')}
        </Heading>

        <Column gap="l" style={{ width: "100%", maxWidth: "700px" }}>
          {/* Current Job */}
          <Column 
            gap="m" 
            padding="l"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Flex horizontal="space-between" vertical="center" wrap>
              <Heading 
                as="h3" 
                variant="heading-strong-m"
                style={{
                  color: "#ffffff",
                  fontWeight: "700"
                }}
              >
                {t('about.workExperience.currentJob.title')}
              </Heading>
              <Badge
                style={{
                  background: "linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(139, 195, 74, 0.2) 100%)",
                  border: "1px solid rgba(76, 175, 80, 0.3)"
                }}
              >
                {t('about.workExperience.currentJob.period')}
              </Badge>
            </Flex>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: "600"
              }}
            >
              {t('about.workExperience.currentJob.company')}
            </Text>
            <Column gap="s">
              <Text 
                variant="body-default-s" 
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.6"
                }}
              >
                {t('about.workExperience.currentJob.description1')}
              </Text>
              <Text 
                variant="body-default-s" 
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.6"
                }}
              >
                {t('about.workExperience.currentJob.description2')}
              </Text>
              <Text 
                variant="body-default-s" 
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.6"
                }}
              >
                {t('about.workExperience.currentJob.description3')}
              </Text>
            </Column>
          </Column>

          {/* Backend Intern */}
          <Column 
            gap="m" 
            padding="l"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Flex horizontal="space-between" vertical="center" wrap>
              <Heading 
                as="h3" 
                variant="heading-strong-m"
                style={{
                  color: "#ffffff",
                  fontWeight: "700"
                }}
              >
                {t('about.workExperience.backendIntern.title')}
              </Heading>
              <Badge
                style={{
                  background: "linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(139, 195, 74, 0.2) 100%)",
                  border: "1px solid rgba(76, 175, 80, 0.3)"
                }}
              >
                {t('about.workExperience.backendIntern.period')}
              </Badge>
            </Flex>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: "600"
              }}
            >
              {t('about.workExperience.backendIntern.company')}
            </Text>
            <Column gap="s">
              <Text 
                variant="body-default-s" 
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.6"
                }}
              >
                {t('about.workExperience.backendIntern.description1')}
              </Text>
              <Text 
                variant="body-default-s" 
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.6"
                }}
              >
                {t('about.workExperience.backendIntern.description2')}
              </Text>
            </Column>
          </Column>

          {/* Frontend Intern */}
          <Column 
            gap="m" 
            padding="l"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Flex horizontal="space-between" vertical="center" wrap>
              <Heading 
                as="h3" 
                variant="heading-strong-m"
                style={{
                  color: "#ffffff",
                  fontWeight: "700"
                }}
              >
                {t('about.workExperience.frontendIntern.title')}
              </Heading>
              <Badge
                style={{
                  background: "linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(139, 195, 74, 0.2) 100%)",
                  border: "1px solid rgba(76, 175, 80, 0.3)"
                }}
              >
                {t('about.workExperience.frontendIntern.period')}
              </Badge>
            </Flex>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: "600"
              }}
            >
              {t('about.workExperience.frontendIntern.company')}
            </Text>
            <Column gap="s">
              <Text 
                variant="body-default-s" 
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.6"
                }}
              >
                {t('about.workExperience.frontendIntern.description1')}
              </Text>
              <Text 
                variant="body-default-s" 
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.6"
                }}
              >
                {t('about.workExperience.frontendIntern.description2')}
              </Text>
            </Column>
          </Column>
        </Column>
      </Column>

      {/* Academic Background Section */}
      <Column 
        fillWidth 
        horizontal="center" 
        gap="l" 
        paddingY="xl"
        style={{
          background: "linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(255, 152, 0, 0.05) 100%)",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)"
        }}
      >
        <Heading 
          as="h2" 
          variant="heading-strong-l" 
          align="center"
          style={{
            background: "linear-gradient(135deg, #ffc107 0%, #ff9800 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "700"
          }}
        >
          {t('about.academicBackground.title')}
        </Heading>

        <Column gap="l" style={{ width: "100%", maxWidth: "600px" }}>
          {/* Postgraduate */}
          <Column 
            gap="m" 
            padding="l"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Heading 
              as="h3" 
              variant="heading-strong-m"
              style={{
                color: "#ffffff",
                fontWeight: "700"
              }}
            >
              {t('about.academicBackground.postgrad.institution')}
            </Heading>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: "600"
              }}
            >
              {t('about.academicBackground.postgrad.degree')}
            </Text>
          </Column>

          {/* Bachelor */}
          <Column 
            gap="m" 
            padding="l"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Heading 
              as="h3" 
              variant="heading-strong-m"
              style={{
                color: "#ffffff",
                fontWeight: "700"
              }}
            >
              {t('about.academicBackground.bachelor.institution')}
            </Heading>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: "600"
              }}
            >
              {t('about.academicBackground.bachelor.degree')}
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Technical Skills Section */}
      <Column 
        fillWidth 
        horizontal="center" 
        gap="l" 
        paddingY="xl"
        style={{
          background: "linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(139, 195, 74, 0.05) 100%)",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)"
        }}
      >
        <Heading 
          as="h2" 
          variant="heading-strong-l" 
          align="center"
          style={{
            background: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "700"
          }}
        >
          {t('about.technicalSkills.title')}
        </Heading>

        <Column gap="l" style={{ width: "100%", maxWidth: "800px" }}>
          {/* Development */}
          <Column gap="m">
            <Heading 
              as="h3" 
              variant="heading-strong-m"
              style={{
                color: "#ffffff",
                fontWeight: "700"
              }}
            >
              {t('about.technicalSkills.development.title')}
            </Heading>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6"
              }}
            >
              {t('about.technicalSkills.development.python')}, {t('about.technicalSkills.development.javascript')}, {t('about.technicalSkills.development.cpp')}, {t('about.technicalSkills.development.bash')}, {t('about.technicalSkills.development.react')}, {t('about.technicalSkills.development.nodejs')}, {t('about.technicalSkills.development.sql')}, {t('about.technicalSkills.development.git')}.
            </Text>
          </Column>

          {/* Security */}
          <Column gap="m">
            <Heading 
              as="h3" 
              variant="heading-strong-m"
              style={{
                color: "#ffffff",
                fontWeight: "700"
              }}
            >
              {t('about.technicalSkills.security.title')}
            </Heading>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6"
              }}
            >
              {t('about.technicalSkills.security.pentesting')}, {t('about.technicalSkills.security.malware')}, {t('about.technicalSkills.security.forensics')}, {t('about.technicalSkills.security.vulnerability')}, {t('about.technicalSkills.security.ctfs')}.
            </Text>
          </Column>

          {/* Tools */}
          <Column gap="m">
            <Heading 
              as="h3" 
              variant="heading-strong-m"
              style={{
                color: "#ffffff",
                fontWeight: "700"
              }}
            >
              {t('about.technicalSkills.tools.title')}
            </Heading>
            <Text 
              variant="body-default-m" 
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6"
              }}
            >
              {t('about.technicalSkills.tools.kali')}, {t('about.technicalSkills.tools.windowsServer')}, {t('about.technicalSkills.tools.ubuntu')}, {t('about.technicalSkills.tools.nmap')}, {t('about.technicalSkills.tools.burpSuite')}, {t('about.technicalSkills.tools.wireshark')}, {t('about.technicalSkills.tools.metasploit')}, {t('about.technicalSkills.tools.others')}.
            </Text>
          </Column>
        </Column>
      </Column>
    </Column>
  );
} 