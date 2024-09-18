/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        bgLogin: "url('/images/bglogin.jpg')",
      },
      boxShadow: {
        'discord': ' 0 1px 0 hsl(0 calc(1 * 0%) 0.8% / 0.2), 0 1.5px 0 hsl(240 calc(1 * 7.7%) 2.5% / 0.05), 0 2px 0 hsl(0 calc(1 * 0%) 0.8% / 0.05);',
      }
    },
  },
  plugins: [],
};
