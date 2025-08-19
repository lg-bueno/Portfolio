"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Column, Flex, Heading, Text, Media, Button } from "@once-ui-system/core";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHash";

interface Post {
  slug: string;
  metadata: {
    title: string;
    summary?: string;
    description?: string;
    publishedAt?: string;
    date?: string;
    images?: string[];
  };
}

export function RecentWriteups() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data.slice(0, 3)); // Mostrar apenas os 3 posts mais recentes
        } else {
          console.error('Failed to fetch posts:', response.status);
          setPosts([]);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Column gap="l" horizontal="center" paddingY="xl">
        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          Carregando posts recentes...
        </Text>
      </Column>
    );
  }

  if (posts.length === 0) {
    return (
      <Column gap="l" horizontal="center" paddingY="xl">
        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          Nenhum post encontrado.
        </Text>
      </Column>
    );
  }

  return (
    <Column gap="xl" horizontal="center" paddingY="xl" style={{ position: "relative", zIndex: 1 }}>
      {/* Premium Posts Grid */}
      <Flex 
        horizontal="center" 
        gap="xl" 
        wrap 
        style={{ 
          maxWidth: "1200px",
          width: "100%"
        }}
      >
        {posts.map((post, index) => (
          <Link 
            key={post.slug} 
            href={`/work/${post.slug}`} 
            style={{ textDecoration: "none", width: "100%", maxWidth: "380px" }}
          >
            <Column
              gap="l"
              padding="xl"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: "translateY(0)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.2)";
              }}
            >
              {/* Animated Background Effect */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                background: "radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(240, 147, 251, 0.05) 0%, transparent 50%)",
                opacity: 0.4,
                pointerEvents: "none"
              }} />

              {/* Premium Image Container */}
              {post.metadata.images && post.metadata.images.length > 0 && (
                <Flex 
                  horizontal="center" 
                  style={{
                    width: "100%",
                    height: "200px",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    overflow: "hidden",
                    position: "relative"
                  }}
                >
                  <Image
                    src={getImageUrl(post.metadata.images[0])}
                    alt={post.metadata.title}
                    width={360}
                    height={200}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </Flex>
              )}

              {/* Premium Content */}
              <Column gap="m" style={{ position: "relative", zIndex: 1 }}>
                <Heading 
                  as="h3" 
                  variant="heading-strong-m"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "700",
                    lineHeight: "1.3"
                  }}
                >
                  {post.metadata.title}
                </Heading>
                
                <Text 
                  variant="body-default-m" 
                  onBackground="neutral-weak"
                  style={{ 
                    lineHeight: "1.6",
                    color: "var(--neutral-on-background-weak)",
                    fontWeight: "500"
                  }}
                >
                  {post.metadata.summary || post.metadata.description || "Descrição não disponível"}
                </Text>

                {/* Premium Date Badge */}
                <Flex horizontal="start">
                  <Text 
                    variant="body-default-s" 
                    onBackground="neutral-weak"
                    style={{ 
                      padding: "6px 12px",
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      fontWeight: "600",
                      fontSize: "0.875rem"
                    }}
                  >
                    {new Date(post.metadata.publishedAt || post.metadata.date || Date.now()).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    })}
                  </Text>
                </Flex>
              </Column>
            </Column>
          </Link>
        ))}
      </Flex>

      {/* Premium View All Button */}
      <Flex horizontal="center" paddingTop="l">
        <Link href="/work" style={{ textDecoration: "none" }}>
          <Button
            variant="secondary"
            size="l"
            style={{
              borderRadius: "30px",
              padding: "14px 28px",
              fontSize: "1rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(15px)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: "translateY(0)"
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Ver Todos os Posts
          </Button>
        </Link>
      </Flex>
    </Column>
  );
} 