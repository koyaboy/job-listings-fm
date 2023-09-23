/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "light-grayish-cyan-bg": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-filter": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      boxShadow: {
        'custom': '0 12px 50px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}