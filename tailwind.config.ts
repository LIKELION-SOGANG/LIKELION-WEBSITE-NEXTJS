import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      Desktop: '1280px'
    },
    colors: {
      white: '#fffff',
      grey: 'f4f4f4',
      black: '#00000'
    },
    fontFamily:{
      
    }
    fontSize: {
      HeaderPC: ['1.25rem', { fontWeight: 700, lineHeight: 'normal' }],
      HeaderMobile: ['2rem', { fontWeight: 200, lineHeight: 'normal' }]
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
