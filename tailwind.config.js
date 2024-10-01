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
    },
  },
  plugins: [],
}