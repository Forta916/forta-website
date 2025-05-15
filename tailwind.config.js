/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '80': '20rem', // 320px (half of the previous 40rem/640px)
      },
      height: {
        '64': '16rem', // Reduced height for the carousel items
      },
    },
  },
  plugins: [],
}
