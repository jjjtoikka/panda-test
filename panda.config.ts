import { defineConfig, definePreset } from '@pandacss/dev';
import pandaPreset from '@pandacss/preset-panda';

const preset = definePreset({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#0070f3' },
        secondary: { value: '#f00' }
      },
      spacing: {
        s: { value: '1rem' },
        m: { value: '2rem' }
      }
    }
  }
});

export default defineConfig({
  // Whether to use css reset
  // preflight: true,
  jsxFramework: 'react',
  importMap: '@styled-system',
  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],
  dependencies: ['./src/**/*.{ts,tsx}'],
  presets: [pandaPreset, preset],

  // Files to exclude
  exclude: [],
  watch: true,

  // The output directory for your css system
  outdir: 'styled-system'
});
