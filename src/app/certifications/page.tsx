import { Flex, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { CertificationsCarousel } from "@/components";
import { certifications, person, baseURL } from "@/resources";

export async function generateMetadata() {
  const title = `Certificações - ${person.name} | Cybersecurity & Full Stack Developer`;
  const description = `Certificações e qualificações de ${person.name} em cibersegurança, desenvolvimento e tecnologias. CrowdStrike, Bitdefender, HackTheBox e mais.`;
  const imageUrl = `${baseURL}/api/og/generate?title=${encodeURIComponent(title)}`;
  
  return {
    title,
    description,
    keywords: ['certificações', 'cybersecurity', 'crowdstrike', 'bitdefender', 'hackthebox', 'tryhackme', 'security certifications', 'full stack developer'],
    authors: [{ name: person.name }],
    creator: person.name,
    publisher: person.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: `${baseURL}/certifications`,
      siteName: `${person.name}'s Portfolio`,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: `${person.name} - Certificações`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@lg_bueno',
      creator: '@lg_bueno',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseURL}/certifications`,
    },
    other: {
      'theme-color': '#151515',
      'msapplication-TileColor': '#151515',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': `${person.name}'s Portfolio`,
    },
  };
}

export default function Certifications() {
  return (
    <Flex maxWidth="l" horizontal="center" className="mobile-padding">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={certifications.title}
        description={certifications.description}
        path={certifications.path}
        image={`/api/og/generate?title=${encodeURIComponent(certifications.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${certifications.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <CertificationsCarousel />
    </Flex>
  );
}
