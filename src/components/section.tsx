import type { PropsWithChildren } from "react";
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import isPropValid from "@emotion/is-prop-valid";

type SectionProps = PropsWithChildren<{
  delay?: number;
}>;

const StyledDiv = chakra(
  motion.div,
  {},
  {
    shouldForwardProp: (prop: string) =>
      isValidMotionProp(prop) || isPropValid(prop),
  },
);

function Section({ children, delay = 0 }: SectionProps) {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
}

export default Section;
