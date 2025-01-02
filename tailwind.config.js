/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white_color: "var(--white_color)",
        white_secondary_color: "var(--white_secondary_color)",
        white_FEFAF1: "var(--white_FEFAF1)",
        white_text_color: "var(--white_text_color)",
        gray_text_color: "var(--gray_text_color)",
        black_text_color: "var(--black_text_color)",
        black_color: "var(--black_color)",
        orange_color: "var(--orange_color)",
        green_color: "var(--green_color)",
        hover_color: "var(--hover_color)",
        ble_hover_color: "var(--ble_hover_color)",
        border_color: "var(--border_color)",
      },

      fontFamily: {
        Poppins: "var(--Poppins)",
        Inter: "var(--Inter)",
      },
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
