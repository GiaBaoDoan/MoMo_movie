/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkTheme: "rgba(216 45 139)",
        blackTheme: "rgba(82, 82, 82, 1)",
      },
      fontFamily: {
        montserrat: "Montserrat",
        popins: "Poppins",
        "open-sans": "Space Grotesk",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        30: "30px",
        40: "40px",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      spacing: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        15: "15px",
        20: "20px",
        30: "30px",
        40: "40px",
        100: "100px",
      },
    },
  },
  plugins: [daisyui],
};
