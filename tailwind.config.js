/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: "375px" },
      sm: { max: "640px" },
      // => @media (max-width: 640px and max-width: 767px) { ... }

      md: { min: "645px", max: "800px" },
      // => @media (max-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (max-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "border-yellow-white": "#02010100",
      },
      boxShadow: {
        "hover-shadow": "1px 1px 28px 0px rgb(0 0 0 / 12%)",
      },
    },
  },
  plugins: [],
};
