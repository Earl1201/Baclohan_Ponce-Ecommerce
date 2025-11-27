/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "node_modules/preline/dist/*.js", // Make sure Preline classes are included
  ],
  safelist: [
  'bg-blue-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-green-700',
  'bg-red-500',
  'bg-red-700',
  'bg-slate-700',
  'text-white',
  'shadow',
  'rounded'
],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [], // Do NOT add Preline plugin, just import it in JS
}
