import React from "react";
import Image from "next/image";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
} from "@once-ui-system/core";

import { home, about, person, baseURL, routes } from "@/resources";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* UNDER CONSTRUCTION IMAGE */}
      <RevealFx translateY="16" delay={0.6}>
        <Flex horizontal="center" paddingY="16">
        <Image
          src="https://media.giphy.com/media/UoLt6Tm8wlSnWGfSFs/giphy.gif"
          alt="Under Construction"
          width={480}
          height={270}
          style={{ width: "100%", maxWidth: "480px", height: "auto", borderRadius: "12px" }}
/>
        </Flex>
      </RevealFx>

      {/* TEXTO PARA ESPAÇO DE PROJETOS */}
      <RevealFx translateY="16" delay={0.7}>
        <Flex horizontal="center" paddingBottom="24" paddingX="12">
          <Text variant="heading-default-l" wrap="balance" align="center">
            Algo incrível está sendo preparado. Em breve, você verá aqui o que tenho construído com paixão e propósito.
          </Text>
        </Flex>
      </RevealFx>

      {/* WRITE-UPS */}
      {routes["/blog"] && (
        <Column gap="l" paddingBottom="48">
          <Flex paddingLeft="l" paddingTop="24" horizontal="center">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Write-ups
            </Heading>
          </Flex>

          <Flex wrap gap="32" horizontal="center" paddingX="12">
            {[1, 2, 3].map((_, index) => (
              <Column
                key={index}
                padding="16"
                border="neutral-alpha-weak"
                radius="l"
                maxWidth={280}
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  textAlign: "left",
                }}
              >
                <Heading as="h3" variant="display-strong-xs" paddingBottom="8">
                  Coming Soon
                </Heading>
                <Text onBackground="neutral-weak">
                  This section is under development. Write-ups and security articles will be published soon.
                </Text>
              </Column>
            ))}
          </Flex>
        </Column>
      )}
    </Column>
  );
}
