/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'readex': ['Readex Pro', 'sans-serif'],
        'sans': ['Readex Pro', 'system-ui', 'sans-serif'],
        'display': ['Anton', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fad5ff',
          300: '#f7b3ff',
          400: '#f280ff',
          500: '#e94dff',
          600: '#d61aff',
          700: '#b800e6',
          800: '#9500b8',
          900: '#7a0095',
        },
        // Project specific colors
        zakuza: {
          primary: '#2D5016',
          secondary: '#8B4513',
          accent: '#4A7C59'
        },
        zambo: {
          primary: '#DC2626',
          secondary: '#B91C1C',
          accent: '#EF4444'
        },
        mondy: {
          primary: '#FACC15',
          secondary: '#EAB308',
          accent: '#FDE047'
        },
        skyforce: {
          primary: '#B91C1C',
          secondary: '#DC2626',
          accent: '#EF4444'
        },
        alpha: {
          primary: '#EAB308',
          secondary: '#FACC15',
          accent: '#FDE047'
        },
        brezel: {
          primary: '#FF6B35',
          secondary: '#F7931E',
          accent: '#FFD23F'
        },
        palm: {
          primary: '#2D3748',
          secondary: '#4A5568',
          accent: '#ED8936'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'extra-wide': '0.15em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};