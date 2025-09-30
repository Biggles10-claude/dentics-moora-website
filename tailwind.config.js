/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dental-blue': '#1e40af',
        'dental-teal': '#0d9488',
        'warm-gray': '#78716c',
      },
    },
  },
  plugins: [],
}