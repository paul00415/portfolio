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
      },
      animation: {
        moveRight: 'moveRight 2.5s ease-in-out  forwards',
      },
    },
  },
  plugins: [],
};
