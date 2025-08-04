"use client";

import { Column, Heading, Text, Button, Flex } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/utils/useWindowSize";

interface Post {
  slug: string;
  metadata: {
    title: string;
    summary?: string;
    description?: string;
    publishedAt?: string;
    readTime?: string;
  };
}

export default function Projects() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Evitar diferenças de hidratação usando valores padrão até o componente ser montado
  const isMobile = isMounted ? width <= 768 : false;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Failed to fetch posts');
          setPosts([]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Column
      fillWidth
      maxWidth="l"
      horizontal="center"
      gap="xl"
      padding="xl"
      className="mobile-padding"
      style={{
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-start",
        textAlign: isMobile ? "center" : "left"
      }}
    >
      <Column
        fillWidth
        maxWidth="m"
        gap="l"
        className="mobile-gap"
        style={{
          width: isMobile ? "100%" : "60%",
          height: isMobile ? "auto" : "100%",
          marginTop: isMobile ? "20px" : "0",
          paddingBottom: isMobile ? "20px" : "0"
        }}
      >
        <Heading variant="display-default-l" className="text-mobile">
          Work
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" className="text-mobile">
          A collection of my work and projects.
        </Text>
      </Column>

      <Column
        fillWidth
        maxWidth="m"
        gap="l"
        className="mobile-gap"
        style={{
          width: isMobile ? "100%" : "40%",
          height: isMobile ? "auto" : "100%"
        }}
      >
        {posts.map((post) => (
          <Button
            key={post.slug}
            href={`/work/${post.slug}`}
            variant="tertiary"
            size="l"
            className="mobile-reduce-animations"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px",
              borderRadius: "12px",
              border: "1px solid var(--neutral-alpha-weak)",
              backgroundColor: "var(--surface-elevated)",
              transition: "all 0.3s ease",
              textAlign: "left",
              width: "100%",
              marginBottom: "8px"
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
              }
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            <Column gap="s" style={{ alignItems: "flex-start" }}>
              <Text variant="body-default-m" style={{ fontWeight: "600", color: "var(--neutral-on-background-strong)" }}>
                {post.metadata.title}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak" style={{ lineHeight: "1.4" }}>
                {post.metadata.summary || post.metadata.description || "Descrição não disponível"}
              </Text>
              <Flex gap="s" vertical="center">
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {new Date(post.metadata.publishedAt || Date.now()).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}
                </Text>
                {post.metadata.readTime && (
                  <>
                    <Text variant="body-default-xs" onBackground="neutral-weak">•</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      {post.metadata.readTime}
                    </Text>
                  </>
                )}
              </Flex>
            </Column>
          </Button>
        ))}
      </Column>
    </Column>
  );
}
