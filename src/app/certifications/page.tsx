import { Flex, Meta, Schema } from "@once-ui-system/core";
import CertificationsCarousel from "@/components/certifications/CertificationsCarousel";
import { baseURL, certifications, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: certifications.title,
    description: certifications.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certifications.title)}`,
    path: certifications.path,
  });
}

export default function Certifications() {
  return (
    <Flex maxWidth="l" horizontal="center">
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
