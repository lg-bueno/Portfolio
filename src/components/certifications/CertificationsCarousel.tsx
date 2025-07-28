"use client";

import { useState, useEffect } from "react";
import { Column, Flex, Heading, Text, Media, Button } from "@once-ui-system/core";

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

const certifications: Certification[] = [
  // CATEGORIA 1: ENDPOINT & EDR - BITDEFENDER
  {
    id: "bitdefender-business",
    title: "Bitdefender Business",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_business.png",
    description: "Certificação em segurança de endpoint para ambientes empresariais.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-encryption",
    title: "Bitdefender Encryption",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_encryption.png",
    description: "Certificação em criptografia de disco completo para proteção de dados corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-comercial",
    title: "Bitdefender Comercial",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_comercial.png",
    description: "Certificação em fundamentos comerciais das soluções de segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-business",
    title: "Bitdefender Business",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_business.png",
    description: "Certificação em segurança de endpoint para pequenas e médias empresas.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-cybersecurity-essentials",
    title: "Bitdefender Cybersecurity Essentials",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_cybersecurity_essentials.png",
    description: "Certificação em fundamentos essenciais de cibersegurança e proteção da informação.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-premium",
    title: "Bitdefender Premium",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_premium.png",
    description: "Certificação em segurança de endpoint com recursos premium, incluindo análise de risco e proteção avançada.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-patch",
    title: "Bitdefender Patch",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_patch.png",
    description: "Certificação em gerenciamento automatizado de patches e atualizações de segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-partner",
    title: "Bitdefender Partner",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_partner.png",
    description: "Certificação técnica e comercial para parceiros da plataforma GravityZone.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-enterprise",
    title: "Bitdefender Enterprise",
    issuer: "Bitdefender",
    image: "/images/certifications/bitdefender/certificado_bitdefender_enterprise.png",
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
    image: "/images/certifications/crowdstrike/CrowdStrike_100.png",
    description: "Certificação em arquitetura geral da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-101",
    title: "FALCON 101: Falcon Platform Essentials",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_101.png",
    description: "Certificação nos conceitos essenciais da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-102",
    title: "FALCON 102: Falcon Platform Onboarding Configuration",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_102.png",
    description: "Certificação em configuração de onboarding da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-104",
    title: "FALCON 104: Getting Started with the Endpoint Security Module",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_104.png",
    description: "Certificação introdutória em segurança de endpoint com o módulo Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-105",
    title: "FALCON 105: Sensor Installation, Configuration and Troubleshooting",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_105.png",
    description: "Certificação em instalação, configuração e troubleshooting de sensores Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-106",
    title: "FALCON 106: Customizing Dashboards in Falcon",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_106.png",
    description: "Certificação em personalização de dashboards na plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-107",
    title: "FALCON 107: Falcon Firewall Management Fundamentals",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_107.png",
    description: "Certificação nos fundamentos de gerenciamento de firewall na plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-109",
    title: "FALCON 109: Using MITRE ATT&CK and Falcon Detection Methods to Understand Security Risk",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_109.png",
    description: "Certificação em uso da MITRE ATT&CK e métodos de detecção da Falcon para análise de risco.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-114",
    title: "FALCON 114: Falcon Fusion SOAR Fundamentals",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_114.png",
    description: "Certificação nos fundamentos do Falcon Fusion SOAR.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-115",
    title: "FALCON 115: Create a Falcon Fusion SOAR Workflow",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_115.png",
    description: "Certificação em criação de workflows automatizados com Falcon Fusion SOAR.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-120",
    title: "FALCON 120: Investigation Fundamentals",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_120.png",
    description: "Certificação nos fundamentos de investigação de incidentes em ambientes corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-121",
    title: "ITSEC 121: Vulnerability Management Fundamentals",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_121.png",
    description: "Certificação nos fundamentos da gestão de vulnerabilidades em ambientes corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-122",
    title: "ITSEC 122: Asset Management Fundamentals",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_122.png",
    description: "Certificação nos fundamentos de gestão de ativos de TI e segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-160",
    title: "FALCON 160: Falcon for Mobile",
    issuer: "CrowdStrike",
    image: "/images/certifications/crowdstrike/CrowdStrike_160.png",
    description: "Certificação em proteção de dispositivos móveis com a solução Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  
  // PENETRATION TESTING - HACK THE BOX
  {
    id: "htb-pro-hacker",
    title: "Hack The Box - Pro Hacker",
    issuer: "Hack The Box",
    image: "/images/certifications/htb-pro-hacker.png",
    description: "Badge de Pro Hacker com mais de 50 máquinas resolvidas",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "Hack The Box"
  },
  {
    id: "htb-oscp-prep",
    title: "Hack The Box - OSCP Preparation",
    issuer: "Hack The Box",
    image: "/images/certifications/htb-oscp-prep.png",
    description: "Preparação específica para certificação OSCP",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "Hack The Box"
  },
  {
    id: "htb-advanced",
    title: "Hack The Box - Advanced Penetration Testing",
    issuer: "Hack The Box",
    image: "/images/certifications/htb-advanced.png",
    description: "Técnicas avançadas de penetration testing",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "Hack The Box"
  },

  // TRYHACKME
  {
    id: "thm-offensive",
    title: "TryHackMe - Offensive Security",
    issuer: "TryHackMe",
    image: "/images/certifications/thm-offensive.png",
    description: "Certificação em técnicas ofensivas e análise de vulnerabilidades",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-web-pentest",
    title: "TryHackMe - Web Application Penetration Testing",
    issuer: "TryHackMe",
    image: "/images/certifications/thm-web-pentest.png",
    description: "Especialização em teste de penetração em aplicações web",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-network-pentest",
    title: "TryHackMe - Network Penetration Testing",
    issuer: "TryHackMe",
    image: "/images/certifications/thm-network-pentest.png",
    description: "Teste de penetração em redes e infraestrutura",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },

  // OFFENSIVE SECURITY
  {
    id: "oscp",
    title: "Offensive Security Certified Professional",
    issuer: "Offensive Security",
    image: "/images/certifications/oscp-cert.png",
    description: "Certificação prática em penetration testing e exploração",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "Offensive Security"
  },
  {
    id: "osce",
    title: "Offensive Security Certified Expert",
    issuer: "Offensive Security",
    image: "/images/certifications/osce-cert.png",
    description: "Certificação avançada em técnicas de exploração",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "Offensive Security"
  },

  // EC-COUNCIL
  {
    id: "ceh",
    title: "Certified Ethical Hacker",
    issuer: "EC-Council",
    image: "/images/certifications/ceh-cert.png",
    description: "Certificação em hacking ético e técnicas de teste de invasão",
    date: "2023",
    category: "Penetration Testing",
    subcategory: "EC-Council"
  },
  {
    id: "cpt",
    title: "Certified Penetration Testing Professional",
    issuer: "EC-Council",
    image: "/images/certifications/cpt-cert.png",
    description: "Profissional certificado em teste de penetração",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "EC-Council"
  },

  // NETWORK & CLOUD SECURITY - FORTINET
  {
    id: "fortinet-nse4",
    title: "Fortinet NSE 4 - Network Security Professional",
    issuer: "Fortinet",
    image: "/images/certifications/fortinet-nse4.png",
    description: "Configuração e administração de firewalls Fortinet",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "Fortinet"
  },
  {
    id: "fortinet-nse7",
    title: "Fortinet NSE 7 - Network Security Architect",
    issuer: "Fortinet",
    image: "/images/certifications/fortinet-nse7.png",
    description: "Arquitetura de segurança de rede avançada",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "Fortinet"
  },

  // SOPHOS
  {
    id: "sophos-engineer",
    title: "Sophos Certified Engineer",
    issuer: "Sophos",
    image: "/images/certifications/sophos-engineer.png",
    description: "Implementação e gerenciamento de soluções Sophos",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "Sophos"
  },
  {
    id: "sophos-architect",
    title: "Sophos Certified Architect",
    issuer: "Sophos",
    image: "/images/certifications/sophos-architect.png",
    description: "Arquitetura de soluções de segurança Sophos",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "Sophos"
  },

  // MICROSOFT
  {
    id: "microsoft-365-security",
    title: "Microsoft 365 Security Administrator",
    issuer: "Microsoft",
    image: "/images/certifications/microsoft-365-security.png",
    description: "Administração de segurança no Microsoft 365 e Azure AD",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "Microsoft"
  },
  {
    id: "microsoft-azure-security",
    title: "Microsoft Azure Security Engineer",
    issuer: "Microsoft",
    image: "/images/certifications/microsoft-azure-security.png",
    description: "Engenharia de segurança na plataforma Azure",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "Microsoft"
  },

  // AWS
  {
    id: "aws-security-specialty",
    title: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    image: "/images/certifications/aws-security-specialty.png",
    description: "Especialização em segurança de infraestrutura AWS",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "AWS"
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Solutions Architect - Security",
    issuer: "Amazon Web Services",
    image: "/images/certifications/aws-solutions-architect.png",
    description: "Arquitetura de soluções seguras na AWS",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "AWS"
  },

  // COMPTIA
  {
    id: "comptia-security-plus",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    image: "/images/certifications/comptia-security-plus.png",
    description: "Fundamentos de segurança da informação e criptografia",
    date: "2023",
    category: "Network & Cloud Security",
    subcategory: "CompTIA"
  },
  {
    id: "comptia-cysa",
    title: "CompTIA CySA+",
    issuer: "CompTIA",
    image: "/images/certifications/comptia-cysa.png",
    description: "Análise de segurança cibernética e resposta a incidentes",
    date: "2024",
    category: "Network & Cloud Security",
    subcategory: "CompTIA"
  }
];

export default function CertificationsCarousel() {
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
      <Column gap="l" horizontal="center" paddingY="xl">
        <Heading as="h2" variant="display-strong-s" align="center">
          Certificações & Badges
        </Heading>
        
        <Flex horizontal="center">
          <Text variant="body-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: "600px" }}>
            Credenciais e reconhecimentos em segurança da informação, pentesting e tecnologias de proteção
          </Text>
        </Flex>

        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          Nenhuma certificação encontrada para a categoria selecionada.
        </Text>
      </Column>
    );
  }

  // Safety check for currentCert
  if (!currentCert) {
    return (
      <Column gap="l" horizontal="center" paddingY="xl">
        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          Carregando certificações...
        </Text>
      </Column>
    );
  }

  return (
    <Column fillWidth gap="xl" paddingY="xl">
      <Heading as="h1" variant="display-strong-l" align="center">
        Certificações & Badges
      </Heading>
      
      <Flex horizontal="center">
        <Text variant="body-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: "600px" }}>
          Credenciais e reconhecimentos em segurança da informação, pentesting e tecnologias de proteção
        </Text>
      </Flex>

      {/* Category Tabs */}
      <Flex horizontal="center" gap="m" wrap>
        {categories.map((category) => (
          <Button
            key={category}
            variant={currentCategory === category ? "primary" : "secondary"}
            size="m"
            onClick={() => setCurrentCategory(category)}
            style={{
              borderRadius: "24px",
              padding: "8px 16px"
            }}
          >
            {category}
          </Button>
        ))}
      </Flex>

      {/* Subcategory Tabs - Show for all categories that have subcategories */}
      {subcategories.length > 0 && (
        <Flex horizontal="center" gap="s" wrap>
          {subcategories.map((subcategory) => (
            <Button
              key={subcategory}
              variant={currentSubcategory === subcategory ? "primary" : "tertiary"}
              size="s"
              onClick={() => {
                console.log('Clicking subcategory:', subcategory);
                setCurrentSubcategory(subcategory!);
              }}
              style={{
                borderRadius: "16px",
                padding: "6px 12px",
                fontSize: "14px"
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
      >
        {/* Previous Button */}
        <Button
          variant="secondary"
          size="l"
          prefixIcon="chevronLeft"
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "-70px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            minWidth: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--surface-elevated)",
            border: "2px solid var(--neutral-alpha-weak)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
          }}
        />

        {/* Main Content */}
        <Column 
          fillWidth 
          maxWidth="l" 
          horizontal="center" 
          gap="xl"
          padding="xl"
          style={{
            border: "1px solid var(--neutral-alpha-weak)",
            borderRadius: "20px",
            backgroundColor: "var(--surface-background)",
            minHeight: "500px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          {/* Certification Image Container */}
          <Flex 
            horizontal="center" 
            paddingY="xl"
            style={{
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "var(--surface-elevated)",
              borderRadius: "16px",
              border: "1px solid var(--neutral-alpha-weak)",
              padding: "25px"
            }}
          >
            <img
              src={currentCert.image}
              alt={currentCert.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
                maxWidth: "100%",
                minHeight: "120px"
              }}
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
                  height: "200px",
                  backgroundColor: "var(--neutral-alpha-weak)",
                  borderRadius: "8px",
                  color: "var(--neutral-on-background-weak)"
                }}
              >
                <Text variant="body-default-m">Imagem não disponível</Text>
              </Flex>
            )}
          </Flex>

          {/* Certification Details */}
          <Column gap="l" horizontal="center" style={{ textAlign: "center", maxWidth: "600px" }}>
            <Heading as="h2" variant="heading-strong-l" style={{ lineHeight: "1.3" }}>
              {currentCert.title}
            </Heading>
            
            <Text 
              variant="body-default-l" 
              onBackground="neutral-weak"
              style={{ 
                lineHeight: "1.6",
                color: "var(--neutral-on-background-weak)"
              }}
            >
              {currentCert.description}
            </Text>
            
            <Flex gap="m" vertical="center" wrap>
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
          style={{
            position: "absolute",
            right: "-70px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            minWidth: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--surface-elevated)",
            border: "2px solid var(--neutral-alpha-weak)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
          }}
        />
      </Flex>

      {/* Dots Indicator */}
      <Flex horizontal="center" gap="s" paddingY="l">
        {filteredCertifications.map((_, index) => (
          <Button
            key={index}
            variant="tertiary"
            size="s"
            onClick={() => goToSlide(index)}
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
        >
          {isAutoPlaying ? "Pausar" : "Reproduzir"}
        </Button>
      </Flex>
    </Column>
  );
}