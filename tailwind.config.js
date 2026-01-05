/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#FF3F77',
        'steel-blue-light': '#FF6B94',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
};
