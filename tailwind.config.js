/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ✅ your existing colors (UNCHANGED)
        "karnataka-red": "#b11226",
        "karnataka-yellow": "#f4c430",

        // ✅ ADDED for Stitch page (DO NOT remove)
        primary: "#7A1C1C",
        "deep-red": "#8B0000",
      },

      // ✅ ADDED font used by Stitch
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
