import { AnimatePresence, motion } from "framer-motion";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <ClientOnly fallback={<Skeleton boxSize="10" rounded="md" />}>
      {(() => {
        const colorMode = resolvedTheme === "dark" ? "dark" : "light";
        const nextMode = colorMode === "light" ? "dark" : "light";

        const toggle = () => setTheme(nextMode);

        return (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={colorMode}
              style={{ display: "inline-block" }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconButton
                aria-label="Toggle theme"
                onClick={toggle}
                size="sm"
                variant="solid"
                colorPalette={colorMode === "light" ? "purple" : "orange"}
                rounded="md"
              >
                {colorMode === "light" ? <LuMoon /> : <LuSun />}
              </IconButton>
            </motion.div>
          </AnimatePresence>
        );
      })()}
    </ClientOnly>
  );
}
