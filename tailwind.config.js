/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0.5' },
          '100%': { transform: 'translateX(0px)', opacity: '1' }, // move 200px to right
        },
        fade: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      clipPath: {
        polygon: 'polygon(100% 0, 100% 100%, 50% 100%, 75% 50%, 50% 0)',
      },
      animation: {
        moveRight: 'moveRight 2.5s ease-in-out  forwards',
        fade: 'fade 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
