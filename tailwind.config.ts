import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#802E00',
        'primary-dark': '#571F00',
        border: '#E4E4E4',
        'gray-1': '#6A6A6A',
        'surface-2': '#FFC9AD',
        'surface-1': '#FFEDE4',
        'surface-0': '#FDF6F6',
      },
    },
  },
  plugins: [],
};
export default config;
