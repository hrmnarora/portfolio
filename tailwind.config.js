// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blurFade: {
          '0%': {
            filter: 'blur(10px)',
            opacity: '0',
            transform: 'translateY(25px)', // Adjust the translation value as needed
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        blurFade: 'blurFade 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
