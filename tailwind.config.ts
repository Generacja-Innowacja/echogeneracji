import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      lightgray: '#E7E8EB',
      gray: '#B0B4BE',
      darkgray: '#B1B2BB',
      lightviolet: '#42419D',
      violet: '#1B193C',
      darkviolet: '#11102D',
    },
    extend: {},
  },
  plugins: [],
};

export default config;
