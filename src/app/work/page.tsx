import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import Projects from "@/components/work/Projects";
import { work, person } from "@/resources/content";

export async function generateMetadata() {
  const title = `Projetos e Trabalhos - ${person.name} | Cybersecurity & Full Stack Developer`;
  const description = `Explore os projetos e trabalhos de ${person.name}. Write-ups de CTFs, projetos de segurança, desenvolvimento web e soluções de cibersegurança.`;
  const imageUrl = `https://leandrobueno.dev/api/og/generate?title=${encodeURIComponent(title)}`;
  
  return {
    title,
    description,
    keywords: ['projetos', 'trabalhos', 'CTF write-ups', 'cybersecurity', 'full stack developer', 'security projects', 'web development', 'security researcher'],
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
      url: `https://leandrobueno.dev/work`,
      siteName: `${person.name}'s Portfolio`,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: `${person.name} - Projetos e Trabalhos`,
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
      canonical: `https://leandrobueno.dev/work`,
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

export default function Work() {
  return (
    <Column maxWidth="m" horizontal="center" className="mobile-padding">
      <Schema
        as="webPage"
        baseURL="https://leandrobueno.dev"
        title={work.title}
        description={work.description}
        path={work.path}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `https://leandrobueno.dev${work.path}`,
          image: `https://leandrobueno.dev${person.avatar}`,
        }}
      />
      <Column fillWidth maxWidth="l" paddingY="xl" paddingX="l" className="mobile-padding">
        <Projects />
      </Column>
    </Column>
  );
}
