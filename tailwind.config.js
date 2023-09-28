/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0B1320',
        'cream': '#F8F8FF',
        'gold': '#FFD700',
        'green-blue': '#62B8AF',
        'dgreen-blue': '#16796F'
      },
    },
  },
  plugins: [],
}