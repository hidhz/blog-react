/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx}", "./src/**/*{js, jsx}"],
    theme: {
   /* fontSize: {
    }, */
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
        colors: {
            primary: "#0ea5e9",
            dark: "#0f172a",
            secondary: "#475569",
            secondary2: "#64748b",
            oren: "#f97316"
        }
    },
    screens: {
        '2xl': '1320px',
    }
  },
  plugins: [
     require("daisyui")
  ],
  daisyui: {
    themes: false,
  },
}
