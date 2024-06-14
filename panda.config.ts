import { defineConfig, definePreset } from "@pandacss/dev";

const preset = definePreset({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0070f3" },
        secondary: { value: "#f00" },
      },
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",
  importMap: "@styled-system",
  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx}"],
  presets: ["@pandacss/preset-panda", preset],

  // Files to exclude
  exclude: [],
  watch: true,

  // The output directory for your css system
  outdir: "styled-system",
});
