module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ' sans-serif'],
      },
      colors: {
        primary: '#6016FC',
      },
    },
  },
  plugins: [],
}
