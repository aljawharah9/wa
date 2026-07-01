/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1D3557',
        teal: '#2EC4B6',
        purple: '#8B5CF6',
        success: '#22C55E',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Tajawal', 'Cairo', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(29, 53, 87, 0.12)',
        glow: '0 0 40px 0 rgba(139, 92, 246, 0.25)',
      },
      keyframes: {
        'pulse-arrow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-arrow': 'pulse-arrow 1.8s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
      },
    },
  },
  plugins: [],
}
