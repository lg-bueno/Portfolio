"use client";

import { Column, Flex, Heading, Text, Media } from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
  };
  content: string;
}

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  const router = useRouter();
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

  const displayedProjects = range
    ? posts.slice(range[0] - 1, range[1] ?? posts.length)
    : posts;

  // Função para formatar a data
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
      <Column fillWidth gap="m" marginBottom="40" paddingX="l" maxWidth="l" horizontal="center" className="mobile-padding">
        <Text className="text-mobile">Carregando write-ups...</Text>
      </Column>
    );
  }

  return (
    <Column fillWidth gap="m" marginBottom="40" paddingX="l" maxWidth="l" horizontal="center" className="mobile-padding">
      {displayedProjects.map((post, index) => (
        <Flex
          key={post.slug}
          fillWidth
          gap="l"
          paddingY="m"
          className="mobile-reduce-animations"
          style={{
            borderBottom: "1px solid var(--neutral-alpha-weak)",
            cursor: "pointer",
            flexDirection: window.innerWidth <= 768 ? "column" : "row",
            alignItems: window.innerWidth <= 768 ? "center" : "flex-start",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
            paddingBottom: window.innerWidth <= 768 ? "24px" : "16px",
          }}
          onClick={() => handleClick(post.slug)}
        >
          {/* Conteúdo Textual */}
          <Column flex={1} gap="s" style={{ width: window.innerWidth <= 768 ? "100%" : "auto" }}>
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
            
            <Flex gap="s" vertical="center" style={{ marginTop: "8px", justifyContent: window.innerWidth <= 768 ? "center" : "flex-start" }}>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontSize: "14px"
                }}
              >
                Added {formatDate(post.metadata.publishedAt)}
              </Text>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontSize: "14px"
                }}
              >
                •
              </Text>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                style={{ 
                  color: "var(--neutral-on-background-weak)",
                  fontSize: "14px"
                }}
              >
                5 min read
              </Text>
            </Flex>
          </Column>

          {/* Imagem de Capa */}
          <Flex 
            style={{ 
              width: window.innerWidth <= 768 ? "100%" : "200px", 
              height: window.innerWidth <= 768 ? "180px" : "120px",
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
              marginTop: window.innerWidth <= 768 ? "16px" : "0"
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
