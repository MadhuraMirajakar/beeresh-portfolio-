/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#171a20',
          900: '#1d2129',
          850: '#232833',
          800: '#2a303c',
          700: '#363d4c',
          600: '#454d60',
        },
        charcoal: {
          900: '#23282f',
          800: '#2c323b',
          700: '#3a4250',
        },
        cyan: {
          accent: '#2fdcff',
          soft: '#8be9ff',
        },
        indigo: {
          accent: '#6c78fb',
        },
        slate: {
          hair: '#3d4553',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, rgba(23,26,32,1))',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(47,220,255,0.14), transparent 60%)',
      },
      boxShadow: {
        card: '0 4px 30px -8px rgba(0,0,0,0.45)',
        'cyan-glow': '0 0 0 1px rgba(47,220,255,0.28), 0 8px 44px -10px rgba(47,220,255,0.4)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
