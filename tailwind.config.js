/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Таны компонентууд хаана байгааг зааж өгнө
  ],
  theme: {
    extend: {
      colors: {
        "joke": "#9500ff"
      }
    },
  },
  plugins: [],
}
