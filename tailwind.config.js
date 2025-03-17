/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode via class strategy
  content: [
    "./src/**/*.{html,ts,scss}", // Scan all Angular HTML, TypeScript, and SCSS files
    "./node_modules/@ionic/angular/**/*.js", // Include Ionic components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
