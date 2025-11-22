/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        primary: ['Museo Sans Rounded', 'sans-serif']
      },
      colors: {
        primary: {
          A50: '#e6f2ff',
          A75: '#96c8ff',
          A100: '#6bb2ff',
          A200: '#2b91ff',
          A300: '#007aff',
          A400: '#0055b3',
          A500: '#004a9c',
          A600: '#006BE1'
        },
        black: {
          N10: '#fafafa',
          N20: '#f6f6f6',
          N30: '#ededed',
          N40: '#e2e2e2',
          N50: '#c7c7c7',
          N60: '#b9b9b9',
          N70: '#aeaeae',
          N80: '#a0a0a0',
          N90: '#939393',
          N100: '#858585',
          N200: '#777777',
          N300: '#6a6a6a',
          N333: '#333333',
          N400: '#5f5f5f',
          N500: '#515151',
          N600: '#464646',
          N700: '#363636',
          N800: '#282828',
          N900: '#1d1d1d'
        },
        warning: {
          R50: '#FDE0E0',
          R300: '#ff5454'
        },
        success: {
          S50: '#e9f7ef',
          S75: '#a4ddbc',
          S100: '#7fcfa0',
          S200: '#48bb78',
          S300: '#22ad5c'
        },
        progress: {
          P50: '#fef5e7',
          P75: '#fbd79b',
          P100: '#f9c771',
          P200: '#f7ae34',
          P300: '#f59e0b'
        }
      },
      boxShadow: {
        base: '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
    }
  },
  plugins: []
}
