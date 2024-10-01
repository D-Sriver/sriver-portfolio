module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#faf0e6',
          200: '#f5e1c7',
          300: '#f0d2a8',
          400: '#ebc389',
          500: '#e6b46a',
          600: '#d1a25f',
          700: '#bd9054',
          800: '#a87e49',
          900: '#936c3e',
        },
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
        'golden-shine': {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        'golden-shine-once': {
          '0%': { left: '-100%', opacity: '0.7' },
          '100%': { left: '100%', opacity: '0' },
        },
        'border-shine': {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '100%' },
        },
        'border-flow': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'golden-shine-persistent': {
          '0%': { left: '-100%', opacity: '0' },
          '100%': { left: '70%', opacity: '0.3' },
        },
      },
      animation: {
        shine: 'shine 1s',
        'golden-shine': 'golden-shine 2s ease-in-out infinite',
        'golden-shine-once': 'golden-shine-once 1.5s ease-in-out forwards',
        'border-shine': 'border-shine 2s ease-in-out',
        'border-flow': 'border-flow 3s ease-in-out infinite',
        'golden-shine-persistent': 'golden-shine-persistent 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}