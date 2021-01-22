module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwindcss'),
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ],
}
