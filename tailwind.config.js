module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      default: ['Arial', 'sans-serif'],
      kiwi: ['Kiwi Maru', 'sans-serif']
    },
    extend: {
      colors: {
        'natural-black': '#2c2c2c',
        shiny: '#78aeff',
        main: '#4C7ABE',
        sub: '#8FA2BE'
      },
      fontSize: {
        none: 0
      }
    }
  },
  plugins: []
}
