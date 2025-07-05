/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'olive-dark': '#556B2F',
        'beige-gold': '#F5DEB3',
      },
    },
  },
  plugins: [],
}