import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { CustomMDX, ScrollToHash } from "@/components";
import { Meta, Schema, AvatarGroup, Button, Column, Heading, HeadingNav, Icon, Row, Text } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";

export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts
    .filter(post => post !== null)
    .map((post) => ({
      slug: post!.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "work", "projects"])
    .filter(post => post !== null);
  let post = posts.find((post) => post!.slug === slugPath);

  if (!post) return {};

  const title = `${post!.metadata.title} - ${person.name}`;
  const description = post!.metadata.summary;
  const imageUrl = `${baseURL}/api/og/generate?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: ['cybersecurity', 'full stack developer', 'CTF', 'offensive security', 'defensive security', 'web development', 'security researcher'],
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
      type: 'article',
      locale: 'pt_BR',
      url: `${baseURL}/work/${post!.slug}`,
      siteName: `${person.name}'s Portfolio`,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: post!.metadata.title,
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
      canonical: `${baseURL}/work/${post!.slug}`,
    },
  };
}

export default async function Work({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "work", "projects"])
    .filter(post => post !== null);
  let post = posts.find((post) => post!.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post!.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m"/>
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
          <Schema
            as="article"
            baseURL={baseURL}
            path={`/work/${post!.slug}`}
            title={post!.metadata.title}
            description={post!.metadata.summary}
            datePublished={post!.metadata.publishedAt}
            dateModified={post!.metadata.publishedAt}
            image={post!.metadata.image || `/api/og/generate?title=${encodeURIComponent(post!.metadata.title)}`}
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Button data-border="rounded" href="/work" weight="default" variant="tertiary" size="s" prefixIcon="chevronLeft">
            Work
          </Button>
          <Heading variant="display-strong-s">{post!.metadata.title}</Heading>
          <Row gap="12" vertical="center">
            {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post!.metadata.publishedAt && formatDate(post!.metadata.publishedAt)}
            </Text>
          </Row>
          <Column as="article" fillWidth>
            <CustomMDX source={post!.content} />
          </Column>
          <ScrollToHash />
        </Column>
    </Row>
    <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
      <Row
        gap="12"
        paddingLeft="2"
        vertical="center"
        onBackground="neutral-medium"
        textVariant="label-default-s"
      >
        <Icon name="document" size="xs" />
        On this page
      </Row>
      <HeadingNav fitHeight/>
    </Column>
    </Row>
  );
}
