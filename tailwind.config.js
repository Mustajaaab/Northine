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
      },
      animation: {
        fadeInSlideDown: 'fadeInSlideDown 1s ease-out',
      },
      colors: {
        gradientStart: '#181E26',
        gradientEnd: '#121820',
        primaryOrange: '#f57000',
        yellow: '#fdcb22',
      },
      transitionProperty: {
        transform: "transform",
      },
    },
  },
  plugins: [],
}

