/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '24px',
        '24': '24px',
      },
      boxShadow: {
        'pakrt': '0 8px 30px rgb(0 0 0 / 0.04)',
        'pakrt-lg': '0 20px 40px rgb(0 0 0 / 0.06)',
      },
      colors: {
        wsm: {
          navy: '#0f2444',
          gold: '#cba135',
        }
      }
    },
  },
  plugins: [],
}
