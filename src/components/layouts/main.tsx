import * as React from "react";
import type { PropsWithChildren } from "react";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "./navbar";
import Footer from "./footer";

type MainProps = PropsWithChildren<{
  path?: string;
  title?: string;
}>;

export default function Main({
  children,
  path = "/",
  title = "Mr. Ulloa Silva",
}: MainProps) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Box as="main" pb={8}>
      <NavBar path={path} />

      <Container maxW="43rem" pt={14}>
        {children}
        <Box mt={10}>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
}
