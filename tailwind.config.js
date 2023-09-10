/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#6C23E2',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

