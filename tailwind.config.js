/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'apex-black': '#12141a',
        'apex-blue': '#0a90ff',
        'apex-green': '#2bb673',
        'apex-border': '#1f2229',
        'apex-card': '#1c1f26',
        'apex-card-elevated': '#23262f',
        'apex-muted': '#7a8089',
      },
      animation: {
        'glow-pulse': 'glow-pulse 0.6s ease-out',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(10,144,255,0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(10,144,255,0.35)' },
          '100%': { boxShadow: '0 0 0 0 rgba(10,144,255,0)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
