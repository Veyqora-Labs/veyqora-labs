/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080B14",
        "canvas-subtle": "#0D111F",
        "canvas-card": "#121727",
        "primary-blue": "#0066FF",
        "primary-violet": "#7B3FF2",
        muted: "#A7AFBE",
        border: "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(0, 102, 255, 0.3)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-line': 'flowLine 3s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.8 },
        },
        flowLine: {
          '0%': { strokeDashoffset: 100 },
          '100%': { strokeDashoffset: 0 },
        },
      },
    },
  },
  plugins: [],
}
