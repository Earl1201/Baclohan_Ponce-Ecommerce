/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
     'node_modules/preline/dist/*.js',
"./pages/**/*.{js,ts,jsx,tsx,html}"
  ],
  safelist: ['bg-red-500', 'text-white'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
