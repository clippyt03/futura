/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'michroma': ['Michroma', 'monospace'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      colors: {
        neon: {
          purple: '#8A2BE2',
          blue: '#00BFFF',
          green: '#00FF7F',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
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