"use client";

import { Column, Flex, Heading, Text, Media } from "@once-ui-system/core";
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

export default function Projects() {
  const router = useRouter();
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
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
      <Column fillWidth gap="l" paddingY="xl" className="mobile-padding">
        <Text align="center" className="text-mobile">Carregando projetos...</Text>
      </Column>
    );
  }

  if (posts.length === 0) {
    return (
      <Column fillWidth gap="l" paddingY="xl" className="mobile-padding">
        <Text align="center" className="text-mobile">Nenhum projeto encontrado.</Text>
      </Column>
    );
  }

  return (
    <Column fillWidth gap="m" marginBottom="40" paddingX="l" maxWidth="l" horizontal="center" className="mobile-padding">
      {posts.map((post, index) => (
        <Flex
          key={post.slug}
          fillWidth
          gap="l"
          paddingY="m"
          className="mobile-reduce-animations"
          style={{
            borderBottom: "1px solid var(--neutral-alpha-weak)",
            cursor: "pointer",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
            paddingBottom: isMobile ? "24px" : "16px",
          }}
          onClick={() => handleClick(post.slug)}
        >
          {/* Conteúdo Textual */}
          <Column flex={1} gap="s" style={{ width: isMobile ? "100%" : "auto" }}>
            <Heading 
              as="h2" 
              variant="heading-strong-l" 
              style={{ 
                margin: 0,
                color: "var(--neutral-on-background-strong)",
                lineHeight: "1.3"
              }}
              className="text-mobile"
            >
              {post.metadata.title}
            </Heading>
            
            <Text 
              variant="body-default-m" 
              onBackground="neutral-weak"
              style={{ 
                margin: 0,
                lineHeight: "1.5",
                color: "var(--neutral-on-background-weak)"
              }}
              className="text-mobile"
            >
              {post.metadata.summary}
            </Text>
            
            <Flex gap="s" vertical="center" style={{ marginTop: "8px", justifyContent: isMobile ? "center" : "flex-start" }}>
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
              <Text variant="body-default-xs" onBackground="neutral-weak">•</Text>
              <Text 
                variant="body-default-xs" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontSize: "12px"
                }}
              >
                5 min read
              </Text>
            </Flex>
          </Column>

          {/* Imagem de Capa */}
          <Flex 
            style={{ 
              width: isMobile ? "100%" : "200px", 
              height: isMobile ? "180px" : "120px",
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
              marginTop: isMobile ? "16px" : "0"
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
        </Flex>
      ))}
    </Column>
  );
}
