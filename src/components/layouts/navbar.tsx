import type { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Menu,
  IconButton,
  type BoxProps,
  type LinkProps,
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";

import ThemeToggleButton from "../theme-toggle-button";
import Logo from "../logo";

type LinkItemProps = PropsWithChildren<
  {
    href: string;
    path?: string;
    target?: string;
  } & Omit<LinkProps, "href">
>;

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

function LinkItem({
  href,
  path,
  target,
  children,
  ...linkProps
}: LinkItemProps) {
  const active = !isExternalHref(href) && path === href;

  const inactiveColor = "navLinkInactive";
  const activeBg = "grassTeal";
  const activeColor = "navLinkActiveText";

  return (
    <Link
      asChild
      p={2}
      borderRadius="md"
      bg={active ? activeBg : undefined}
      color={active ? activeColor : inactiveColor}
      {...linkProps}
    >
      {isExternalHref(href) || target === "_blank" ? (
        <a href={href} target={target} rel="noreferrer">
          {children}
        </a>
      ) : (
        <RouterLink to={href}>{children}</RouterLink>
      )}
    </Link>
  );
}

type NavBarProps = BoxProps & {
  path?: string;
};

export default function NavBar({ path = "/", ...boxProps }: NavBarProps) {
  const navBg = "navGlassBg";

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex={2}
      bg={navBg}
      borderBottomWidth="1px"
      css={{ backdropFilter: "blur(10px)" }}
      {...boxProps}
    >
      <Container
        display="flex"
        p={2}
        maxW="3xl"
        px={{ base: 4, md: 0 }}
        alignItems="center"
      >
        <Box flex="1">
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Box>

        <Stack
          flex="1"
          direction="row"
          justifyContent="center"
          display={{ base: "none", md: "flex" }}
          gap={2}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="https://uses.craftz.dog/" target="_blank">
            Uses
          </LinkItem>

          <LinkItem
            href="https://github.com/craftzdog/craftzdog-homepage"
            target="_blank"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box
          flex="1"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}
        >
          <ThemeToggleButton />

          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu.Root lazyMount id="navbar-menu">
              <Menu.Trigger asChild>
                <IconButton variant="outline" aria-label="Options">
                  <HiOutlineMenu />
                </IconButton>
              </Menu.Trigger>

              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="about" asChild>
                    <RouterLink to="/">About</RouterLink>
                  </Menu.Item>

                  <Menu.Item value="works" asChild>
                    <RouterLink to="/works">Works</RouterLink>
                  </Menu.Item>

                  <Menu.Item value="uses" asChild>
                    <a
                      href="https://uses.craftz.dog/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Uses
                    </a>
                  </Menu.Item>

                  <Menu.Item value="source" asChild>
                    <a
                      href="https://github.com/craftzdog/craftzdog-homepage"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Source
                    </a>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
