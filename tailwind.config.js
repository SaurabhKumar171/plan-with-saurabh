module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  