import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orangecard: 'hsl(31, 77%, 52%)',
        cyancard: 'hsl(184, 100%, 22%)',
        darkcyancard: 'hsl(179, 100%, 13%)',
        bgheadbtn: 'hsl(0, 0%, 95%)',
        primary: 'hsla(0, 0%, 100%, 0.75)',
      },
      
        
      
    },
  },
 
  plugins: [],
}
export default config
