/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.html",
        "./src/**/*.{js,jsx,ts,tsx,clj,cljs}"
    ],
    safelist: [
        'bg-gradient-to-r',
        'bg-gradient-to-l',
        'bg-gradient-to-t',
        'bg-gradient-to-b',
        'from-cyan-500',
        'to-blue-500',
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

