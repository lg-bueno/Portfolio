"use client";

import React from "react";
import { Column, Flex, Heading, Text, Button, IconButton, Avatar, Icon, RevealFx } from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import { useEffect, useState } from "react";

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

export default function About() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <Column maxWidth="m" className="mobile-padding">
      <Flex fillWidth mobileDirection="column" horizontal="center" className="mobile-gap">
        {about.avatar.display && (
          <Column
            className={`${styles.avatar} mobile-padding`}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
            style={{
              width: isMobile ? "100%" : "auto",
              position: isMobile ? "static" : "sticky"
            }}
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center" className="text-mobile">
              <Icon onBackground="accent-weak" name="globe" />
              Goiânia, Brasil
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8" horizontal="center">
                {person.languages.map((language) => (
                  <Text
                    key={language}
                    variant="body-default-xs"
                    onBackground="neutral-weak"
                    style={{
                      padding: "4px 8px",
                      borderRadius: "12px",
                      backgroundColor: "var(--neutral-alpha-weak)",
                      color: "var(--neutral-on-background-weak)",
                      fontSize: "12px"
                    }}
                  >
                    {language}
                  </Text>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={`${styles.blockAlign} mobile-padding`} flex={9} maxWidth={40} style={{ width: isMobile ? "100%" : "auto" }}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
            className="mobile-gap"
          >
            <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
              <Button
                href={about.path}
                variant="tertiary"
                size="s"
                prefixIcon="calendar"
                className="mobile-reduce-animations"
              >
                {about.label}
              </Button>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
              <Heading className={`${styles.textAlign} mobile-reduce-animations`} variant="display-strong-xl">
                {person.name}
              </Heading>
            </RevealFx>
            <RevealFx translateY="12" delay={0.4} fillWidth horizontal="start" paddingBottom="32">
              <Text
                className={`${styles.textAlign} text-mobile`}
                variant="display-default-xs"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>
            </RevealFx>
            {social.length > 0 && (
              <RevealFx translateY="16" delay={0.6} fillWidth horizontal="start">
                <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                  {social.map(
                    (item) =>
                      item.link && (
                          <React.Fragment key={item.name}>
                              <Button
                                  className="s-flex-hide mobile-reduce-animations"
                                  key={item.name}
                                  href={item.link}
                                  prefixIcon={item.icon}
                                  label={item.name}
                                  size="s"
                                  weight="default"
                                  variant="secondary"
                              />
                              <IconButton
                                  className="s-flex-show mobile-reduce-animations"
                                  size="l"
                                  key={`${item.name}-icon`}
                                  href={item.link}
                                  icon={item.icon}
                                  variant="secondary"
                              />
                          </React.Fragment>
                      ),
                  )}
                </Flex>
              </RevealFx>
            )}
          </Column>
          
          {about.intro.display && (
            <Column
              id={about.intro.title}
              fillWidth
              marginBottom="32"
              className="mobile-gap"
            >
              <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
                <Heading className={`${styles.textAlign} mobile-reduce-animations`} variant="display-strong-l">
                  {about.intro.title}
                </Heading>
              </RevealFx>
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
                <Text
                  className={`${styles.textAlign} text-mobile`}
                  variant="display-default-s"
                  onBackground="neutral-weak"
                >
                  {about.intro.description}
                </Text>
              </RevealFx>
            </Column>
          )}

          {about.work.display && (
            <Column
              id={about.work.title}
              fillWidth
              marginBottom="32"
              className="mobile-gap"
            >
              <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
                <Heading className={`${styles.textAlign} mobile-reduce-animations`} variant="display-strong-l">
                  {about.work.title}
                </Heading>
              </RevealFx>
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
                <Column gap="l">
                  {about.work.experiences.map((item, index) => (
                    <Flex
                      key={index}
                      fillWidth
                      gap="l"
                      padding="m"
                      style={{
                        border: "1px solid var(--neutral-alpha-weak)",
                        borderRadius: "12px",
                        backgroundColor: "var(--surface-background)",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "center" : "flex-start"
                      }}
                    >
                      <Column flex={1} gap="s" style={{ width: isMobile ? "100%" : "auto" }}>
                        <Heading as="h3" variant="heading-strong-m" className="text-mobile">
                          {item.role}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak" className="text-mobile">
                          {item.company}
                        </Text>
                        <Text variant="body-default-s" onBackground="neutral-weak" className="text-mobile">
                          {item.timeframe}
                        </Text>
                        <Column gap="s" style={{ marginTop: "8px" }}>
                          {item.achievements.map((achievement, achievementIndex) => (
                            <Text
                              key={achievementIndex}
                              variant="body-default-s"
                              onBackground="neutral-weak"
                              className="text-mobile"
                              style={{
                                lineHeight: "1.5",
                                color: "var(--neutral-on-background-weak)"
                              }}
                            >
                              {achievement}
                            </Text>
                          ))}
                        </Column>
                      </Column>
                    </Flex>
                  ))}
                </Column>
              </RevealFx>
            </Column>
          )}

          {about.studies.display && (
            <Column
              id={about.studies.title}
              fillWidth
              marginBottom="32"
              className="mobile-gap"
            >
              <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
                <Heading className={`${styles.textAlign} mobile-reduce-animations`} variant="display-strong-l">
                  {about.studies.title}
                </Heading>
              </RevealFx>
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
                <Column gap="l">
                  {about.studies.institutions.map((item, index) => (
                    <Flex
                      key={index}
                      fillWidth
                      gap="l"
                      padding="m"
                      style={{
                        border: "1px solid var(--neutral-alpha-weak)",
                        borderRadius: "12px",
                        backgroundColor: "var(--surface-background)",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "center" : "flex-start"
                      }}
                    >
                      <Column flex={1} gap="s" style={{ width: isMobile ? "100%" : "auto" }}>
                        <Heading as="h3" variant="heading-strong-m" className="text-mobile">
                          {item.name}
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak" className="text-mobile">
                          {item.description}
                        </Text>
                      </Column>
                    </Flex>
                  ))}
                </Column>
              </RevealFx>
            </Column>
          )}

          {about.technical.display && (
            <Column
              id={about.technical.title}
              fillWidth
              marginBottom="32"
              className="mobile-gap"
            >
              <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
                <Heading className={`${styles.textAlign} mobile-reduce-animations`} variant="display-strong-l">
                  {about.technical.title}
                </Heading>
              </RevealFx>
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
                <Column gap="l">
                  {about.technical.skills.map((category, index) => (
                    <Column key={index} gap="m">
                      <Heading as="h3" variant="heading-strong-m" className="text-mobile">
                        {category.title}
                      </Heading>
                      <Text variant="body-default-s" onBackground="neutral-weak" className="text-mobile">
                        {category.description}
                      </Text>
                    </Column>
                  ))}
                </Column>
              </RevealFx>
            </Column>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
