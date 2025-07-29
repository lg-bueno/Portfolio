"use client";

import { useState, useEffect } from "react";
import { Column, Flex, Heading, Text, Media, Button } from "@once-ui-system/core";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHash";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string; // Agora é um hash que será usado na API
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
  const isMobile = width <= 768;
  
  const [currentCategory, setCurrentCategory] = useState("Endpoint & EDR");
  const [currentSubcategory, setCurrentSubcategory] = useState("Bitdefender");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    if (!isAutoPlaying || filteredCertifications.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === filteredCertifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredCertifications.length]);

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

  // Update subcategory when category changes (only if current subcategory is not valid)
  useEffect(() => {
    console.log('useEffect triggered - Category:', currentCategory, 'Subcategory:', currentSubcategory, 'Available:', subcategories);
    if (subcategories.length > 0 && subcategories[0] && !subcategories.includes(currentSubcategory)) {
      console.log('Fixing subcategory from', currentSubcategory, 'to', subcategories[0]);
      setCurrentSubcategory(subcategories[0]);
    }
  }, [currentCategory, subcategories, currentSubcategory]);

  // Debug logs
  console.log('Current Category:', currentCategory);
  console.log('Current Subcategory:', currentSubcategory);
  console.log('Available Subcategories:', subcategories);
  console.log('Filtered Certifications:', filteredCertifications.length);
  console.log('Filtered Certifications Details:', filteredCertifications.map(c => ({ title: c.title, subcategory: c.subcategory, image: c.image })));

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredCertifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredCertifications.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCert = filteredCertifications[safeCurrentIndex];

  // Debug current certification
  console.log('Current Certification:', currentCert?.title, 'Image:', currentCert?.image);

  // If no certifications, show empty state
  if (filteredCertifications.length === 0) {
    return (
      <Column gap="l" horizontal="center" paddingY="xl" className="mobile-padding">
        <Heading as="h2" variant="display-strong-s" align="center" className="mobile-reduce-animations">
          Certificações & Badges
        </Heading>
        
        <Flex horizontal="center">
          <Text variant="body-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: "600px" }} className="text-mobile">
            Credenciais e reconhecimentos em segurança da informação, pentesting e tecnologias de proteção
          </Text>
        </Flex>

        <Text variant="body-default-m" align="center" onBackground="neutral-weak" className="text-mobile">
          Nenhuma certificação encontrada para a categoria selecionada.
        </Text>
      </Column>
    );
  }

  // Safety check for currentCert
  if (!currentCert) {
    return (
      <Column gap="l" horizontal="center" paddingY="xl" className="mobile-padding">
        <Text variant="body-default-m" align="center" onBackground="neutral-weak" className="text-mobile">
          Carregando certificações...
        </Text>
      </Column>
    );
  }

  return (
    <Column fillWidth gap="xl" paddingY="xl" className="mobile-padding">
      <Heading as="h1" variant="display-strong-l" align="center" className="mobile-reduce-animations">
        Certificações & Badges
      </Heading>
      
      <Flex horizontal="center">
        <Text variant="body-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: "600px" }} className="text-mobile">
          Credenciais e reconhecimentos em segurança da informação, pentesting e tecnologias de proteção
        </Text>
      </Flex>

      {/* Category Tabs */}
      <Flex horizontal="center" gap="m" wrap className="mobile-gap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={currentCategory === category ? "primary" : "secondary"}
            size="m"
            onClick={() => setCurrentCategory(category)}
            className="mobile-reduce-animations"
            style={{
              borderRadius: "24px",
              padding: "8px 16px",
              fontSize: isMobile ? "14px" : "16px"
            }}
          >
            {category}
          </Button>
        ))}
      </Flex>

      {/* Subcategory Tabs - Show for all categories that have subcategories */}
      {subcategories.length > 0 && (
        <Flex horizontal="center" gap="s" wrap className="mobile-gap">
          {subcategories.map((subcategory) => (
            <Button
              key={subcategory}
              variant={currentSubcategory === subcategory ? "primary" : "tertiary"}
              size="s"
              onClick={() => {
                console.log('Clicking subcategory:', subcategory);
                setCurrentSubcategory(subcategory!);
              }}
              className="mobile-reduce-animations"
              style={{
                borderRadius: "16px",
                padding: "6px 12px",
                fontSize: isMobile ? "12px" : "14px"
              }}
            >
              {subcategory}
            </Button>
          ))}
        </Flex>
      )}

      {/* Carousel Container */}
      <Flex 
        fillWidth 
        maxWidth="l" 
        horizontal="center" 
        gap="l"
        style={{ position: "relative" }}
        className="mobile-gap"
      >
        {/* Previous Button */}
        <Button
          variant="secondary"
          size="l"
          prefixIcon="chevronLeft"
          onClick={prevSlide}
          className="mobile-reduce-animations"
          style={{
            position: isMobile ? "relative" : "absolute",
            left: isMobile ? "auto" : "-70px",
            top: isMobile ? "auto" : "50%",
            transform: isMobile ? "none" : "translateY(-50%)",
            zIndex: 10,
            minWidth: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--surface-elevated)",
            border: "2px solid var(--neutral-alpha-weak)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            marginBottom: isMobile ? "16px" : "0"
          }}
        />

        {/* Main Content */}
        <Column 
          fillWidth 
          maxWidth="l" 
          horizontal="center" 
          gap="xl"
          padding="xl"
          className="mobile-padding"
          style={{
            border: "1px solid var(--neutral-alpha-weak)",
            borderRadius: "20px",
            backgroundColor: "var(--surface-background)",
            minHeight: isMobile ? "400px" : "500px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          {/* Certification Image Container */}
          <Flex 
            horizontal="center" 
            paddingY="xl"
            style={{
              width: "100%",
              maxWidth: isMobile ? "300px" : "400px",
              height: isMobile ? "200px" : "280px",
              backgroundColor: "var(--surface-elevated)",
              borderRadius: "16px",
              border: "1px solid var(--neutral-alpha-weak)",
              padding: isMobile ? "16px" : "25px"
            }}
          >
            <Image
              src={`/api/images?hash=${currentCert.image}`}
              alt={currentCert.title}
              width={isMobile ? 268 : 350}
              height={isMobile ? 168 : 230}
              style={{
                width: "100%",
                height: isMobile ? "150px" : "200px",
                objectFit: "contain",
                borderRadius: "8px",
                maxWidth: "100%"
              }}
              onError={(e) => {
                console.error('Failed to load image:', currentCert.image);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', currentCert.image);
              }}
            />
            {!currentCert.image && (
              <Flex 
                horizontal="center" 
                vertical="center"
                style={{
                  width: "100%",
                  height: isMobile ? "150px" : "200px",
                  backgroundColor: "var(--neutral-alpha-weak)",
                  borderRadius: "8px",
                  color: "var(--neutral-on-background-weak)"
                }}
              >
                <Text variant="body-default-m" className="text-mobile">Imagem não disponível</Text>
              </Flex>
            )}
          </Flex>

          {/* Certification Details */}
          <Column gap="l" horizontal="center" style={{ textAlign: "center", maxWidth: "600px" }} className="mobile-gap">
            <Heading as="h2" variant="heading-strong-l" style={{ lineHeight: "1.3" }} className="text-mobile">
              {currentCert.title}
            </Heading>
            
            <Text 
              variant="body-default-l" 
              onBackground="neutral-weak"
              style={{ 
                lineHeight: "1.6",
                color: "var(--neutral-on-background-weak)"
              }}
              className="text-mobile"
            >
              {currentCert.description}
            </Text>
            
            <Flex gap="m" vertical="center" wrap style={{ justifyContent: "center" }} className="mobile-gap">
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontWeight: "500"
                }}
              >
                {currentCert.issuer}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                •
              </Text>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)"
                }}
              >
                {currentCert.date}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                •
              </Text>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)"
                }}
              >
                {currentCert.category}
              </Text>
            </Flex>
          </Column>
        </Column>

        {/* Next Button */}
        <Button
          variant="secondary"
          size="l"
          prefixIcon="chevronRight"
          onClick={nextSlide}
          className="mobile-reduce-animations"
          style={{
            position: isMobile ? "relative" : "absolute",
            right: isMobile ? "auto" : "-70px",
            top: isMobile ? "auto" : "50%",
            transform: isMobile ? "none" : "translateY(-50%)",
            zIndex: 10,
            minWidth: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--surface-elevated)",
            border: "2px solid var(--neutral-alpha-weak)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            marginTop: isMobile ? "16px" : "0"
          }}
        />
      </Flex>

      {/* Dots Indicator */}
      <Flex horizontal="center" gap="s" paddingY="l" className="mobile-gap">
        {filteredCertifications.map((_, index) => (
          <Button
            key={index}
            variant="tertiary"
            size="s"
            onClick={() => goToSlide(index)}
            className="mobile-reduce-animations"
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              padding: 0,
              backgroundColor: index === currentIndex 
                ? "var(--brand-on-background-strong)" 
                : "var(--neutral-alpha-weak)",
              transition: "all 0.3s ease",
              transform: index === currentIndex ? "scale(1.2)" : "scale(1)"
            }}
          />
        ))}
      </Flex>

      {/* Auto-play Toggle */}
      <Flex horizontal="center" paddingTop="m">
        <Button
          variant="tertiary"
          size="s"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          prefixIcon={isAutoPlaying ? "pause" : "play"}
          className="mobile-reduce-animations"
        >
          {isAutoPlaying ? "Pausar" : "Reproduzir"}
        </Button>
      </Flex>
    </Column>
  );
}