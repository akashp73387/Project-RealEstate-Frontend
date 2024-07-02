 /** @type {import('tailwindcss').Config} */
export default {
    content: [
      
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      // eslint-disable-next-line no-undef
      require('@tailwindcss/line-clamp'),
    ],
  }