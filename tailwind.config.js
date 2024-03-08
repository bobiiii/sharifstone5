/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gelasio': ["Gelasio", 'serif'],
      },
      backgroundImage: {
        'bg-img-hero': "url('/public/images/bg_S_white.png')",
      },
      screens: {
        'xs': '480px', // Small screens and up
      },
    },
  },
  plugins: [],
}

