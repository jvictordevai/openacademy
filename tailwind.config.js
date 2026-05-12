/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,mdx,md,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'oklch(10% 0.02 260 / <alpha-value>)',
          900: 'oklch(14% 0.025 260 / <alpha-value>)',
          800: 'oklch(20% 0.03 260 / <alpha-value>)',
          700: 'oklch(30% 0.035 260 / <alpha-value>)',
          600: 'oklch(45% 0.03 260 / <alpha-value>)',
          400: 'oklch(70% 0.02 260 / <alpha-value>)',
          300: 'oklch(82% 0.015 260 / <alpha-value>)',
          200: 'oklch(92% 0.01 260 / <alpha-value>)',
          100: 'oklch(96% 0.005 260 / <alpha-value>)',
        },
        accent: {
          blue: 'oklch(72% 0.18 250 / <alpha-value>)',
          violet: 'oklch(70% 0.22 295 / <alpha-value>)',
          ember: 'oklch(78% 0.16 35 / <alpha-value>)',
          mint: 'oklch(82% 0.14 165 / <alpha-value>)',
          rose: 'oklch(74% 0.18 10 / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(28px)' },
        },
      },
    },
  },
  plugins: [],
};
