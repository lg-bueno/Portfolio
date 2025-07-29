import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
      className="mobile-padding"
    >
      <Flex
        className={`${styles.mobile} mobile-gap`}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
        style={{
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          alignItems: window.innerWidth <= 768 ? "center" : "space-between",
          textAlign: window.innerWidth <= 768 ? "center" : "left"
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong" className="text-mobile">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            / Build your portfolio with{" "}
            <SmartLink
              href="https://once-ui.com/products/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16" style={{ justifyContent: window.innerWidth <= 768 ? "center" : "flex-end" }}>
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                  className="mobile-reduce-animations"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
