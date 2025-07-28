"use client";

import { Column, Flex, Heading, Text, Media, Button, RevealFx } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Post {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
  };
}

export function RecentWriteups() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const data = await response.json();
          // Pegar apenas os 3 mais recentes
          setPosts(data.slice(0, 3));
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleClick = (slug: string) => {
    router.push(`/work/${slug}`);
  };

  if (loading) {
    return (
      <Column fillWidth gap="l" paddingY="xl">
        <Heading as="h2" variant="display-strong-s" align="center">
          Write-ups Recentes
        </Heading>
        <Text align="center">Carregando...</Text>
      </Column>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <Column fillWidth gap="l" paddingY="xl">
      <RevealFx translateY="16" delay={0.8}>
        <Heading as="h2" variant="display-strong-s" align="center" marginBottom="l">
          Write-ups Recentes
        </Heading>
      </RevealFx>

      <RevealFx translateY="16" delay={0.9}>
        <Column fillWidth gap="m" maxWidth="l" horizontal="center">
          {posts.map((post, index) => (
            <Flex
              key={post.slug}
              fillWidth
              gap="l"
              padding="m"
              style={{
                border: "1px solid var(--neutral-alpha-weak)",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: "var(--surface-background)",
              }}
              onClick={() => handleClick(post.slug)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Imagem de Capa */}
              <Flex 
                style={{ 
                  width: "120px", 
                  height: "80px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  flexShrink: 0
                }}
              >
                <Media
                  src={post.metadata.images[0] || "/images/default-cover.jpg"}
                  alt={post.metadata.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </Flex>

              {/* Conteúdo */}
              <Column flex={1} gap="s">
                <Heading 
                  as="h3" 
                  variant="heading-strong-m" 
                  style={{ 
                    margin: 0,
                    color: "var(--neutral-on-background-strong)",
                    lineHeight: "1.3"
                  }}
                >
                  {post.metadata.title}
                </Heading>
                
                <Text 
                  variant="body-default-s" 
                  onBackground="neutral-weak"
                  style={{ 
                    margin: 0,
                    lineHeight: "1.4",
                    color: "var(--neutral-on-background-weak)"
                  }}
                >
                  {post.metadata.summary}
                </Text>
                
                <Text 
                  variant="body-default-xs" 
                  onBackground="neutral-weak"
                  style={{ 
                    color: "var(--neutral-on-background-weak)",
                    fontSize: "12px"
                  }}
                >
                  {formatDate(post.metadata.publishedAt)}
                </Text>
              </Column>
            </Flex>
          ))}
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={1.0}>
        <Flex horizontal="center" paddingTop="m">
          <Button
            href="/work"
            variant="secondary"
            size="m"
            weight="default"
            arrowIcon
          >
            Ver Todos os Write-ups
          </Button>
        </Flex>
      </RevealFx>
    </Column>
  );
} 