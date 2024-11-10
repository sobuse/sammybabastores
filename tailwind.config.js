// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'allbirds': {
          white: '#FFFFFF',
          cream: '#F5F5F4',
          beige: '#E7E5E4',
          stone: '#BCBAB8',
          gray: '#78716C',
          charcoal: '#44403C',
          brown: '#8B7355',
          'neutral-light': '#F8F7F7',
          'neutral-dark': '#1C1917'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}