/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#2f6eff',
          700: '#0033ff',
        },
        'secondary': {
          500: '#888883',
          700: '#888883',
        },
        'danger': {
          500: '#f83b3b',
          700: '#c11414',
        },
        'info': {
          500: '#FF6363',
          700: '#FF6363',
        }
      },
    },
  },
  plugins: [],
}

