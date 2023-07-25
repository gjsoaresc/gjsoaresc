/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-fg': 'rgba(8, 8, 8, 1)',
        'light-fg': 'rgba(35, 35, 35, 1)',
        opaque: 'rgb(17, 17, 17, 0.25)',
        brand: 'rgba(7, 141, 238, 1)',
      },
    },
  },
  plugins: [],
}
