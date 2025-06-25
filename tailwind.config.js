module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      extra: '6rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo-500
          light: '#a5b4fc',  // Indigo-300
          dark: '#4338ca',   // Indigo-700
        },
        accent: {
          DEFAULT: '#f472b6', // Pink-400
        },
        background: {
          light: '#f8fafc', // Slate-50
          dark: '#18181b',  // Zinc-900
        },
        border: '#e5e7eb', // Gray-200
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgba(60,60,100,0.08)',
        'modal': '0 8px 32px 0 rgba(60,60,100,0.18)',
      },
      width: {
        160: '40rem',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
