import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  cssVarsRoot: ":where(html)",
  globalCss: {
    "*": {
      transition: "none !important",
    },
    "html, body, #root": {
      minHeight: "100vh",
      bg: "appBg",
    },
    p: {
      fontWeight: "400",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "700",
      letterSpacing: "-0.02em",
    },
    "a, .chakra-link": {
      color: "appLink",
      textUnderlineOffset: "3px",
    },
  },
  preflight: true,

  theme: {
    tokens: {
      colors: {
        grassTeal: { value: "#88ccca" },
      },
      fonts: {
        body: { value: "'M PLUS Rounded 1c', system-ui, sans-serif" },
        heading: { value: "'M PLUS Rounded 1c', system-ui, sans-serif" },
      },
    },

    semanticTokens: {
      colors: {
        appBg: { value: { _light: "#f0e7db", _dark: "#202023" } },
        appLink: { value: { _light: "#3d7aed", _dark: "#ff63c3" } },

        navGlassBg: { value: { _light: "#ffffff40", _dark: "#20202380" } },
        heroGlassBg: {
          value: {
            _light: "rgba(255,255,255,0.5)",
            _dark: "rgba(255,255,255,0.12)",
          },
        },

        navLinkInactive: {
          value: { _light: "#1f2937", _dark: "rgba(255,255,255,0.92)" },
        },
        navLinkActiveText: { value: { _light: "#202023", _dark: "#202023" } },
      },
    },

    textStyles: {
      "page-title": {
        value: {
          fontSize: "34px",
          fontWeight: "700",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        },
      },

      "section-title": {
        value: {
          textDecoration: "underline",
          fontSize: "20px",
          textUnderlineOffset: "6px",
          textDecorationColor: "#525252",
          textDecorationThickness: "4px",
          mt: "3",
          mb: "4",
          fontWeight: "700",
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
