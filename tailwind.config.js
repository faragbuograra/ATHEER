/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecf4ff',
          100: '#dceaff',
          200: '#c0daff',
          300: '#00adef', // ATHEER Light Blue
          400: '#609bff',
          500: '#0055c2',
          600: '#0047a3',
          700: '#003a85',
          800: '#00326e',
          900: '#002654', // Corporate Navy Blue
        },
        accent: {
          500: '#f59e0b', // Orange/yellow accent
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
