import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" textAlign="center" opacity={0.4} fontSize="sm" py={4}>
      &copy; {new Date().getFullYear()} Erwing Ulloa. All Rights Reserved.
    </Box>
  );
}

export default Footer;
