/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        header: "80px", // Custom height for the header
        footer: "250px", // Custom height for the footer
        content: "calc(100% - 330px)", // Full viewport height minus header and footer
      },
    },
  },
  plugins: [require("daisyui")],
};
