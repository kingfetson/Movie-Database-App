# Movie-Database-App
npx create-react-app movie-database
cd movie-database
npm install axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Edit tailwind.config.js:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
