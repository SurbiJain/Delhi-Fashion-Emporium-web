/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-heading1": 'rgb(52, 63, 82)',
       "gray-description":  'rgb(96, 105, 123)',
      },
    },
  },
  plugins: [],
}

