/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweatherfont': ['Merriweather', 'serif'],
        'opensansfont': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // variants: {
  //   extend: {
  //     animation: ['group-hover'], // Add this line to enable group-hover for animations
  //     textColor: ['group-hover'], 
  //   },
  // },
  plugins: [require('@tailwindcss/typography'),
  ],
}



