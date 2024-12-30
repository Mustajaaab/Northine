/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
      keyframes: {
        fadeInSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseAnimate: {
          '0%': { opacity: '0.6', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.5)' }, 
        },
      },
      animation: {
        fadeInSlideDown: 'fadeInSlideDown 1s ease-out',
        pulseAnimate: 'pulseAnimate 2.5s ease-out infinite',
      },
      colors: {
        gradientStart: '#181E26',
        gradientEnd: '#121820',
        primaryOrange: '#f57000',
        yellow: '#fdcb22',
        dropdownBg: '#181E26',
      },
    },
  },
  plugins: [],
};
