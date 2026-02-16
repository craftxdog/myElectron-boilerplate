import Layout from "@/components/layouts/article";
import { Box, Container } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <Box
          textAlign="center"
          borderRadius="lg"
          mb={6}
          p={3}
          bg="heroGlassBg"
          css={{ backdropFilter: "blur(10px)" }}
        >
          {" "}
          Hello, I&apos;m an indie app developer based in Nicaragua!
        </Box>
      </Container>
    </Layout>
  );
}
