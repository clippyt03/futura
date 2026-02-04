/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'sans': ['Michroma', 'monospace'],
        'michroma': ['Michroma', 'monospace'],
      },
      colors: {
        purple: {
          500: '#9333EA',
          600: '#7928CA',
          700: '#6B21A8',
          800: '#581C87',
          900: '#3B0764',
        },
        pink: {
          400: '#F472B6',
          500: '#EC4899',
        },
        dark: {
          900: '#000000',
          800: '#0a0a0a',
          700: '#1a1a1a',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};