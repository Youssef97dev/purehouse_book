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
        primary: "var(--brown-100)",
        primary_9: "var(--brown-90)",
        primary_8: "var(--brown-80)",
        primary_7: "var(--brown-70)",
        primary_6: "var(--brown-60)",
        primary_5: "var(--brown-50)",
        primary_4: "var(--brown-40)",
        primary_3: "var(--brown-30)",
        primary_2: "var(--brown-20)",
        primary_1: "var(--brown-10)",

        primary_10: "var(--primary-10)",
        primary_11: "var(--primary-11)",
        primary_12: "var(--sidebar-bg)",
      },
      fontFamily: {
        garamond: ["CormorantGaramond", "serif"],
        mulish: ["Mulish", "serif"],
      },
    },
  },
  plugins: [],
};
