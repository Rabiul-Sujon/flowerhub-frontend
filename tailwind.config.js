/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        marigold: '#E8A33D',
        rose: '#8C2F39',
        leaf: '#3F5A3A',
        paper: '#EDE4CE',
        ink: '#2A2620',
        trust: '#2B5F63',
      },
      fontFamily: {
        display: ['"Tiro Bangla"', 'serif'],
        body: ['"Hind Siliguri"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
