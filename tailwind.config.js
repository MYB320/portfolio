/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      fontFamily: {
        Saira: 'Saira Extra Condensed',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
    bgSvg: {
      'blob-dark':
        '<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#171923"></rect><g transform="translate(919.5086572269072 -29.439891805541478)"><path d="M175.4 -75.6C233.8 0 292.3 101.2 263.1 169.1C233.8 237 116.9 271.5 23.4 258C-70.1 244.5 -140.3 183 -171 114.3C-201.8 45.5 -193.1 -30.5 -158 -92.6C-123 -154.7 -61.5 -202.8 -1.5 -202C58.5 -201.1 116.9 -151.2 175.4 -75.6" fill="svgcolor"></path></g></svg>',
      'blob-white':
        '<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#fff"></rect><g transform="translate(919.5086572269072 -29.439891805541478)"><path d="M175.4 -75.6C233.8 0 292.3 101.2 263.1 169.1C233.8 237 116.9 271.5 23.4 258C-70.1 244.5 -140.3 183 -171 114.3C-201.8 45.5 -193.1 -30.5 -158 -92.6C-123 -154.7 -61.5 -202.8 -1.5 -202C58.5 -201.1 116.9 -151.2 175.4 -75.6" fill="svgcolor"></path></g></svg>',
    },
  },
  plugins: [require('tailwindcss-bg-svg')],
}
