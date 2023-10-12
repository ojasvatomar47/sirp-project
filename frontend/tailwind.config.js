/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B931FC",
        secondary: "#FF6AC2",
        tertiary: "#FFE5E5",
        button1: "#6499E9",
        button1hover: "#9EDDFF",
        button2: "#FBA1B7",
        button2hover: "#FFD1DA",
        button3: "#A076F9",
        button3hover: "#D7BBF5",
      },
      fontFamily: {
        alveria: ['Averia Sans Libre', 'cursive'],
        lora: ['Lora', 'serif'],
        metal: ['Metal', 'cursive'],
        freecursive: ['Freehand', 'cursive'],
        autour: ['Autour One', 'cursive'],
      }
    },
  },
  plugins: [],
}