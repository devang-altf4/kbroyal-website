/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf0',
          100: '#fefab7',
          200: '#fbf477',
          300: '#f7e838',
          400: '#edd213',
          500: '#d4af37',
          600: '#b8891d',
          700: '#936319',
          800: '#794c1c',
          900: '#673e1c',
          950: '#3c200c',
        },
        obsidian: {
          950: '#050508',
          900: '#0a0a0f',
          800: '#121218',
          700: '#1a1a24',
          600: '#262636',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px rgba(212, 175, 55, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
