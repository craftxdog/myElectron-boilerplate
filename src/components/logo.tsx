import { Link as NextLink } from "react-router-dom";
import { Text, Link } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link asChild _hover={{ textDecoration: "none" }}>
      <NextLink to="/">
        <Text
          color="navLinkInactive"
          fontFamily="heading"
          fontWeight="bold"
          ml={3}
        >
          Erwing Ulloa Silva
        </Text>
      </NextLink>
    </Link>
  );
};

export default Logo;
