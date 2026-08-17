/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f14',
        'bg-soft': '#0f161d',
        surface: '#131c25',
        accent: {
          DEFAULT: '#14b8a6',
          bright: '#2dd4bf',
          dim: '#0d9488',
        },
        muted: '#8a98a8',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
