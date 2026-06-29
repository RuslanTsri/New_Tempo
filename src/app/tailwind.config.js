/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      //ПАЛІТРА КОЛЬОРІВ З ФІГМИ
      colors: {
        brand: {
          orange: '#FF6D00',
          orangeDark: '#CA4402',
          orangeLight: '#FCAE0E',
          yellow: '#FFF958',
          light: '#F5F5F5',
          gray: '#C3C3C3'
        },
        surface: {
          bg: '#0A0A0A',
          card: '#1C1C1E',
          cardPressed: '#111111',
          border: '#262626',
        },
        status: {
          success: '#34d399',
          error: '#f87171',
          warning: '#facc15',
        },
        text: {
          main: '#F5F5F5',
          sub: '#A3A3A3',
          muted: '#717171',
        }
      },

      //СІМЕЙСТВА ШРИФТІВ
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'unbounded-bold': ['Unbounded-Bold', 'sans-serif'],
        'unbounded-black': ['Unbounded-Black', 'sans-serif'],
        'unbounded-medium': ['Unbounded-Medium', 'sans-serif'],
        'unbounded-light': ['Unbounded-Light', 'sans-serif'],
        'evolventa': ['Evolventa', 'sans-serif'],
        'evolventa-bold': ['Evolventa-Bold', 'sans-serif'],
      },

      //ТИПОГРАФІЧНА ШКАЛА (Розмір + Міжрядковий інтервал)
      fontSize: {
        'h1': ['32px', { lineHeight: '40px' }],
        'h2': ['24px', { lineHeight: '32px' }],
        'h3': ['20px', { lineHeight: '28px' }],
        'h4': ['16px', { lineHeight: '24px' }],
        'h5': ['12px',{ lineHeight: '20px' }],
        'h6': ['8px', { lineHeight: '16px' }],
        'body': ['14px', { lineHeight: '20px' }],
        'small': ['12px', { lineHeight: '16px' }],
        'caption': ['10px', { lineHeight: '14px' }],
      }
    },
  },
  plugins: [],
}