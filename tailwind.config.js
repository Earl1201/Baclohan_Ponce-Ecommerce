/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "node_modules/preline/dist/*.js", // Make sure Preline classes are included
  ],
  safelist: ['bg-red-500', 'text-white'], // optional
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [], // Do NOT add Preline plugin, just import it in JS
}
