import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: 'var(--color-primary)',
          on: 'var(--color-on-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          on: 'var(--color-on-secondary)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          bright: 'var(--color-surface-bright)',
          dim: 'var(--color-surface-dim)',
          on: {
            DEFAULT: 'var(--color-on-surface)',
            variant: 'var(--color-on-surface-variant)',
          },
        },
        outline: {
          DEFAULT: 'var(--color-outline)',
          variant: 'var(--color-outline-variant)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          on: 'var(--color-on-success)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          on: 'var(--color-on-error)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          on: 'var(--color-on-warning)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          on: 'var(--color-on-info)',
        },
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },
      backgroundImage: {
        'banner-ps': "url('/images/bg_ps.jpg')",
        'table-ps': "url('/images/bg_table_ps.jpg')",
      },
      boxShadow: {
        'blurred-banner': '0 0 20px 20px rgb(91 93 27 / 81%)',
      },
    },
  },
  plugins: [],
} satisfies Config
