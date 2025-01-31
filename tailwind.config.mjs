/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(41, 63, 86)',
        secondary: 'rgb(124, 137, 151)',
        accent: 'rgb(0, 112, 201)',
        background: 'rgb(247, 248, 249)'
      }
    }
  },
  plugins: []
}