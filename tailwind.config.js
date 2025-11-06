/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border|from|via|to)-(blue|slate|white|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#cdd9ea',
          300: '#a5bdd8',
          400: '#6f93be',
          500: '#476ea6',
          600: '#2e5186',
          700: '#1f3d6e',
          800: '#0f2a56',
          900: '#0a1f40',
        },
        accent: {
          50: '#eaf7f6',
          100: '#d5efed',
          200: '#a9dfda',
          300: '#7ccfc8',
          400: '#34b3aa',
          500: '#0fa39a',
          600: '#0d9488',
          700: '#0a7a70',
          800: '#085f58',
          900: '#054542',
        },
        neutral: {
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
        success: '#16a34a',
        warning: '#f59e0b',
        error: '#dc2626',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 12px -2px rgba(15, 42, 86, 0.08), 0 2px 6px -1px rgba(15, 42, 86, 0.04)',
        subtle: '0 1px 3px 0 rgba(15, 42, 86, 0.05)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
