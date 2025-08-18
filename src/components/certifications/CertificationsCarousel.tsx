"use client";

import { useState, useEffect } from "react";
import { Column, Flex, Heading, Text, Media, Button } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHash";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  description: string;
  date: string;
  category: string;
  subcategory?: string;
}

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

const certifications: Certification[] = [
  // CATEGORIA 1: ENDPOINT & EDR - BITDEFENDER
  {
    id: "bitdefender-business",
    title: "Bitdefender Business",
    issuer: "Bitdefender",
    image: "bd_business",
    description: "Certificação em segurança de endpoint para ambientes empresariais.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-encryption",
    title: "Bitdefender Encryption",
    issuer: "Bitdefender",
    image: "bd_encryption",
    description: "Certificação em criptografia de disco completo para proteção de dados corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-comercial",
    title: "Bitdefender Comercial",
    issuer: "Bitdefender",
    image: "bd_comercial",
    description: "Certificação em fundamentos comerciais das soluções de segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-cybersecurity-essentials",
    title: "Bitdefender Cybersecurity Essentials",
    issuer: "Bitdefender",
    image: "bd_cybersecurity_essentials",
    description: "Certificação em fundamentos essenciais de cibersegurança e proteção da informação.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-premium",
    title: "Bitdefender Premium",
    issuer: "Bitdefender",
    image: "bd_premium",
    description: "Certificação em segurança de endpoint com recursos premium, incluindo análise de risco e proteção avançada.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-patch",
    title: "Bitdefender Patch",
    issuer: "Bitdefender",
    image: "bd_patch",
    description: "Certificação em gerenciamento automatizado de patches e atualizações de segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-partner",
    title: "Bitdefender Partner",
    issuer: "Bitdefender",
    image: "bd_partner",
    description: "Certificação técnica e comercial para parceiros da plataforma GravityZone.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-enterprise",
    title: "Bitdefender Enterprise",
    issuer: "Bitdefender",
    image: "bd_enterprise",
    description: "Certificação em segurança de endpoint para ambientes empresariais com recursos avançados de detecção e resposta.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },

  // CROWDSTRIKE
  {
    id: "crowdstrike-100",
    title: "FALCON 100: Falcon Platform Architecture Overview ",
    issuer: "CrowdStrike",
    image: "cs_100",
    description: "Certificação em arquitetura geral da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-101",
    title: "FALCON 101: Falcon Platform Essentials",
    issuer: "CrowdStrike",
    image: "cs_101",
    description: "Certificação nos conceitos essenciais da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-102",
    title: "FALCON 102: Falcon Platform Onboarding Configuration",
    issuer: "CrowdStrike",
    image: "cs_102",
    description: "Certificação em configuração de onboarding da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-104",
    title: "FALCON 104: Getting Started with the Endpoint Security Module",
    issuer: "CrowdStrike",
    image: "cs_104",
    description: "Certificação introdutória em segurança de endpoint com o módulo Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-105",
    title: "FALCON 105: Sensor Installation, Configuration and Troubleshooting",
    issuer: "CrowdStrike",
    image: "cs_105",
    description: "Certificação em instalação, configuração e troubleshooting de sensores Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-106",
    title: "FALCON 106: Customizing Dashboards in Falcon",
    issuer: "CrowdStrike",
    image: "cs_106",
    description: "Certificação em personalização de dashboards na plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-107",
    title: "FALCON 107: Falcon Firewall Management Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_107",
    description: "Certificação nos fundamentos de gerenciamento de firewall na plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-109",
    title: "FALCON 109: Using MITRE ATT&CK and Falcon Detection Methods to Understand Security Risk",
    issuer: "CrowdStrike",
    image: "cs_109",
    description: "Certificação em uso da MITRE ATT&CK e métodos de detecção da Falcon para análise de risco.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-114",
    title: "FALCON 114: Falcon Fusion SOAR Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_114",
    description: "Certificação nos fundamentos do Falcon Fusion SOAR.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-115",
    title: "FALCON 115: Create a Falcon Fusion SOAR Workflow",
    issuer: "CrowdStrike",
    image: "cs_115",
    description: "Certificação em criação de workflows automatizados com Falcon Fusion SOAR.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-120",
    title: "FALCON 120: Investigation Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_120",
    description: "Certificação nos fundamentos de investigação de incidentes em ambientes corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-121",
    title: "ITSEC 121: Vulnerability Management Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_121",
    description: "Certificação nos fundamentos da gestão de vulnerabilidades em ambientes corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-122",
    title: "ITSEC 122: Asset Management Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_122",
    description: "Certificação nos fundamentos de gestão de ativos de TI e segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-160",
    title: "FALCON 160: Falcon for Mobile",
    issuer: "CrowdStrike",
    image: "cs_160",
    description: "Certificação em proteção de dispositivos móveis com a solução Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  
  // PENETRATION TESTING - HACK THE BOX
  {
    id: "htb-academician",
    title: "Hack The Box - Academician",
    issuer: "Hack The Box",
    image: "htb_academician",
    description: "Introduction to Academy module completed",
    date: "2025",
    category: "Penetration Testing",
    subcategory: "Hack The Box"
  },
  {
    id: "htb-your-request-is-my-demand",
    title: "Hack The Box - Your Request Is My Demand",
    issuer: "Hack The Box",
    image: "htb_your_request",
    description: "Web Requests module completed",
    date: "2025",
    category: "Penetration Testing",
    subcategory: "Hack The Box"
  },

  // TRYHACKME
  {
    id: "thm-pre-security",
    title: "TryHackMe - Pre-Security",
    issuer: "TryHackMe",
    image: "thm_pre_security",
    description: "Completing the 'Pre-Security' learning path",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-networking-nerd",
    title: "TryHackMe - Networking Nerd",
    issuer: "TryHackMe",
    image: "thm_networking_nerd",
    description: "Completing the 'Network Fundamentals' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-world-wide-web",
    title: "TryHackMe - World Wide Web",
    issuer: "TryHackMe",
    image: "thm_world_wide_web",
    description: "Completing the 'How The Web Works' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-webbed",
    title: "TryHackMe - Webbed",
    issuer: "TryHackMe",
    image: "thm_webbed",
    description: "Understands how the world wide web works",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-cat-linux",
    title: "TryHackMe - cat linux.txt",
    issuer: "TryHackMe",
    image: "thm_cat_linux",
    description: "Being competent in Linux",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },

  //DESEC
  {
    id: "desec-network-analyst",
    title: "DESEC - Network Analyst",
    issuer: "DESEC",
    image: "desec_network_analyst",
    description: "Completing the 'Network Analyst' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "DESEC"
  },
  {
    id: "desec-pentest-fundamentals",
    title: "DESEC - Pentest Fundamentals",
    issuer: "DESEC",
    image: "desec_pentest_fundamentals",
    description: "Completing the 'Pentest Fundamentals' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "DESEC"
  },

  // NETWORK & CLOUD SECURITY - SOPHOS
  {
    id: "sophos-engineer",
    title: "Sophos Firewall Certified Engineer v21.0 (ET80)",
    issuer: "Sophos",
    image: "sophos_engineer",
    description: "Implementação e gerenciamento de firewalls Sophos",
    date: "2025",
    category: "Network & Cloud Security",
    subcategory: "Sophos"
  },

  // Segura
  {
    id: "segura-pam-core-access-control",
    title: "PAM Core Access Control",
    issuer: "Segura",
    image: "segura_pam_core",
    description: "Achieved the 'PAM Core Access Control' certification track",
    date: "2025",
    category: "Network & Cloud Security",
    subcategory: "Segura"
  },
];

export default function CertificationsCarousel() {
  const { width } = useWindowSize();
  const { t } = useLanguage();
  const isMobile = width <= 768;
  const isTablet = width <= 1024 && width > 768;
  
  const [currentCategory, setCurrentCategory] = useState("Endpoint & EDR");
  const [currentSubcategory, setCurrentSubcategory] = useState("Bitdefender");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Get unique categories
  const categories = Array.from(new Set(certifications.map(cert => cert.category)));
  
  // Get subcategories for current category
  const subcategories = Array.from(
    new Set(
      certifications
        .filter(cert => cert.category === currentCategory)
        .map(cert => cert.subcategory)
        .filter(Boolean)
    )
  );
  
  // Filter certifications by current category and subcategory
  const filteredCertifications = certifications.filter(
    cert => cert.category === currentCategory && 
    (cert.subcategory === currentSubcategory || !cert.subcategory)
  );

  // Ensure currentIndex is within bounds
  const safeCurrentIndex = Math.min(currentIndex, Math.max(0, filteredCertifications.length - 1));

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredCertifications.length <= 1 || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === filteredCertifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredCertifications.length, isHovering]);

  // Update currentIndex if it's out of bounds
  useEffect(() => {
    if (filteredCertifications.length > 0 && currentIndex >= filteredCertifications.length) {
      setCurrentIndex(0);
    }
  }, [filteredCertifications.length, currentIndex]);

  // Reset index when category or subcategory changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentCategory, currentSubcategory]);

  // Update subcategory when category changes
  useEffect(() => {
    if (subcategories.length > 0 && subcategories[0] && !subcategories.includes(currentSubcategory)) {
      setCurrentSubcategory(subcategories[0]);
    }
  }, [currentCategory, subcategories, currentSubcategory]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === filteredCertifications.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? filteredCertifications.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCert = filteredCertifications[safeCurrentIndex];

  // Get next and previous certifications for preview effect
  const getNextCert = (index: number) => {
    if (filteredCertifications.length === 0) return null;
    const nextIndex = (index + 1) % filteredCertifications.length;
    return filteredCertifications[nextIndex];
  };

  const getPrevCert = (index: number) => {
    if (filteredCertifications.length === 0) return null;
    const prevIndex = index === 0 ? filteredCertifications.length - 1 : index - 1;
    return filteredCertifications[prevIndex];
  };

  // If no certifications, show empty state
  if (filteredCertifications.length === 0) {
    return (
      <Column fillWidth gap="xl" paddingY="xl" style={{ minHeight: "100vh" }} className="certifications-container">
        <Heading as="h2" variant="display-strong-s" align="center">
          {t('certifications.subtitle')}
        </Heading>
        
        <Flex horizontal="center">
          <Text variant="body-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: "600px" }}>
            {t('certifications.description')}
          </Text>
        </Flex>

        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          {t('common.noData')}
        </Text>
      </Column>
    );
  }

  // Safety check for currentCert
  if (!currentCert) {
    return (
      <Column fillWidth gap="xl" paddingY="xl" style={{ minHeight: "100vh" }} className="certifications-container">
        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          {t('common.loading')}
        </Text>
      </Column>
    );
  }

  // Get preview certifications safely
  const nextCert = getNextCert(safeCurrentIndex);
  const prevCert = getPrevCert(safeCurrentIndex);

  return (
    <Column fillWidth gap="xl" paddingY="xl" style={{ minHeight: "100vh" }} className="certifications-container">
      {/* Header Section */}
      <Column gap="l" horizontal="center" className="certifications-header">
        <Heading 
          as="h1" 
          variant="display-strong-l" 
          align="center"
          className="certifications-title"
        >
          {t('certifications.subtitle')}
        </Heading>
        
        <Text 
          variant="body-default-l" 
          align="center" 
          onBackground="neutral-weak" 
          className="certifications-subtitle"
        >
          {t('certifications.description')}
        </Text>
      </Column>

      {/* Category Tabs */}
      <Flex horizontal="center" gap="m" wrap className="certifications-filters">
        {categories.map((category) => (
          <Button
            key={category}
            variant={currentCategory === category ? "primary" : "secondary"}
            size="m"
            onClick={() => setCurrentCategory(category)}
            style={{
              borderRadius: "30px",
              padding: "16px 28px",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "700",
              transition: "all 0.3s ease",
              boxShadow: currentCategory === category 
                ? "0 12px 35px rgba(102, 126, 234, 0.4)" 
                : "0 4px 15px rgba(0, 0, 0, 0.1)",
              transform: currentCategory === category ? "translateY(-2px)" : "translateY(0)",
              background: currentCategory === category 
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                : "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: currentCategory === category 
                ? "2px solid rgba(102, 126, 234, 0.3)" 
                : "1px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            {category}
          </Button>
        ))}
      </Flex>

      {/* Subcategory Tabs */}
      {subcategories.length > 0 && (
        <Flex horizontal="center" gap="s" wrap className="certifications-filters">
          {subcategories.map((subcategory) => (
            <Button
              key={subcategory}
              variant={currentSubcategory === subcategory ? "primary" : "tertiary"}
              size="s"
              onClick={() => setCurrentSubcategory(subcategory!)}
              style={{
                borderRadius: "25px",
                padding: "10px 20px",
                fontSize: isMobile ? "12px" : "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                background: currentSubcategory === subcategory 
                  ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" 
                  : "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(15px)",
                border: currentSubcategory === subcategory 
                  ? "2px solid rgba(240, 147, 251, 0.3)" 
                  : "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              {subcategory}
            </Button>
          ))}
        </Flex>
      )}

      {/* Enhanced Carousel Container with Infinite Effect */}
      <Flex 
        fillWidth 
        maxWidth="l" 
        horizontal="center" 
        style={{ position: "relative" }}
        className="certifications-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Previous Preview Card (Left) */}
        {!isMobile && filteredCertifications.length >= 2 && prevCert && (
          <div 
            className="preview-card"
            style={{
              left: isTablet ? "-150px" : "-200px",
              width: isTablet ? "140px" : "180px",
              height: isTablet ? "180px" : "240px"
            }}
          >
            <div style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}>
              <Image
                src={`/api/images?hash=${prevCert.image}`}
                alt={prevCert.title}
                width={isTablet ? 100 : 140}
                height={isTablet ? 130 : 180}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "15px",
                  filter: "grayscale(30%) brightness(0.8)"
                }}
              />
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        {!isMobile && filteredCertifications.length > 1 && (
          <Button
            variant="secondary"
            size="l"
            prefixIcon="chevronLeft"
            onClick={prevSlide}
            className="certifications-nav-button"
            style={{
              left: isTablet ? "-60px" : "-80px"
            }}
          />
        )}

        {/* Main Content Card */}
        <Column 
          fillWidth 
          maxWidth="l" 
          horizontal="center" 
          gap="xl"
          padding="xl"
          className="certifications-card"
          style={{
            transform: isHovering ? "scale(1.02)" : "scale(1)",
            position: "relative"
          }}
        >
          {/* Background Effects */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: "radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(240, 147, 251, 0.1) 0%, transparent 50%)",
            opacity: 0.6,
            pointerEvents: "none"
          }} />

          {/* Certification Image */}
          <Flex 
            horizontal="center" 
            paddingY="l"
            className="certifications-image-container"
          >
            <Image
              src={`/api/images?hash=${currentCert.image}`}
              alt={currentCert.title}
              width={isMobile ? 280 : isTablet ? 320 : 352}
              height={isMobile ? 180 : isTablet ? 200 : 240}
              className="certifications-image"
              onError={(e) => {
                console.error('Failed to load image:', currentCert.image);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {!currentCert.image && (
              <Flex 
                horizontal="center" 
                vertical="center"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  borderRadius: "15px",
                  color: "var(--neutral-on-background-weak)",
                  border: "2px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <Text variant="body-default-m">Imagem não disponível</Text>
              </Flex>
            )}
          </Flex>

          {/* Certification Details */}
          <Column gap="l" horizontal="center" className="certifications-details">
            <Heading 
              as="h2" 
              variant="heading-strong-l" 
              style={{ 
                lineHeight: "1.3",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "800",
                fontSize: isMobile ? "1.6rem" : isTablet ? "1.8rem" : "2rem"
              }}
            >
              {currentCert.title}
            </Heading>
            
            <Text 
              variant="body-default-l" 
              onBackground="neutral-weak"
              style={{ 
                lineHeight: "1.8",
                color: "var(--neutral-on-background-weak)",
                maxWidth: "600px",
                fontWeight: "500"
              }}
            >
              {currentCert.description}
            </Text>
            
            {/* Metadata Tags */}
            <Flex gap="m" vertical="center" wrap style={{ justifyContent: "center" }} className="certifications-metadata">
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontWeight: "700",
                  padding: "8px 16px",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(15px)"
                }}
              >
                {currentCert.issuer}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">•</Text>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontWeight: "600"
                }}
              >
                {currentCert.date}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">•</Text>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontWeight: "600"
                }}
              >
                {currentCert.category}
              </Text>
            </Flex>
          </Column>

          {/* Counter Inside Card - At the bottom */}
          {filteredCertifications.length > 1 && (
            <Flex 
              horizontal="center" 
              gap="s" 
              paddingY="m" 
              className="certifications-dots"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "15px",
                padding: "6px 12px",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginTop: "auto"
              }}
            >
              {filteredCertifications.map((_, index) => (
                <Button
                  key={index}
                  variant="tertiary"
                  size="s"
                  onClick={() => goToSlide(index)}
                  className={`certifications-dot ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    width: isMobile ? "6px" : "8px",
                    height: isMobile ? "6px" : "8px",
                    borderRadius: "50%",
                    padding: 0,
                    backgroundColor: index === currentIndex 
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                      : "rgba(255, 255, 255, 0.5)",
                    transition: "all 0.3s ease",
                    transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    cursor: "pointer",
                    margin: "0 1px"
                  }}
                />
              ))}
            </Flex>
          )}
        </Column>

        {/* Next Preview Card (Right) */}
        {!isMobile && filteredCertifications.length >= 2 && nextCert && (
          <div 
            className="preview-card"
            style={{
              right: isTablet ? "-150px" : "-200px",
              width: isTablet ? "140px" : "180px",
              height: isTablet ? "180px" : "240px"
            }}
          >
            <div style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}>
              <Image
                src={`/api/images?hash=${nextCert.image}`}
                alt={nextCert.title}
                width={isTablet ? 100 : 140}
                height={isTablet ? 130 : 180}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "15px",
                  filter: "grayscale(30%) brightness(0.8)"
                }}
              />
            </div>
          </div>
        )}

        {/* Next Button */}
        {!isMobile && filteredCertifications.length > 1 && (
          <Button
            variant="secondary"
            size="l"
            prefixIcon="chevronRight"
            onClick={nextSlide}
            className="certifications-nav-button"
            style={{
              right: isTablet ? "-60px" : "-80px"
            }}
          />
        )}
      </Flex>

      {/* Mobile Navigation */}
      {isMobile && filteredCertifications.length > 1 && (
        <Flex horizontal="center" gap="m" paddingY="l" className="certifications-navigation">
          <Button
            variant="secondary"
            size="m"
            prefixIcon="chevronLeft"
            onClick={prevSlide}
            className="certifications-nav-button"
            style={{
              minWidth: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(15px)"
            }}
          />
          <Button
            variant="secondary"
            size="m"
            prefixIcon="chevronRight"
            onClick={nextSlide}
            className="certifications-nav-button"
            style={{
              minWidth: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(15px)"
            }}
          />
        </Flex>
      )}

      {/* Auto-play Toggle */}
      <Flex horizontal="center" paddingTop="m" paddingBottom="l" className="certifications-autoplay">
        <Button
          variant="tertiary"
          size="s"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          prefixIcon={isAutoPlaying ? "pause" : "play"}
          style={{
            borderRadius: "25px",
            padding: isMobile ? "6px 12px" : "8px 16px",
            fontSize: isMobile ? "12px" : "14px",
            fontWeight: "600",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(15px)",
            minWidth: isMobile ? "80px" : "100px"
          }}
        >
          {isAutoPlaying ? "Pausar" : "Reproduzir"}
        </Button>
      </Flex>
    </Column>
  );
}