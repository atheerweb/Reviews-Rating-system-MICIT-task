/** @type {import('tailwindcss').Config} */
export default {
 content: [
  './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        opaque: 'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

