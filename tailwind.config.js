module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'scroll': 'scroll 2s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite',
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateY(0)' },
            '30%': { transform: 'translateY(60px)' },
          }
        }
      },
    },
    plugins: [],
  }