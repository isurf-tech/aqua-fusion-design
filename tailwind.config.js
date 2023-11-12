/** @type {import('tailwindcss').Config} */

const colors = {
  brand: {
    darkest: "#015266",
    dark: "#0F7E99",
    medium: "#29ACCC",
    light: "#D0E1E5",
    lightest: "#EDF5F7",
  },
  neutral: {
    darkest: "#363A3C",
    dark: "#72818F",
    medium: "#C5CED6",
    light: "#F0F4F7",
    lightest: "#FFFFFF",
  },
  feedback: {
    danger: {
      darkest: "#9C0013",
      dark: "#C23127",
      medium: "#E55C53",
      light: "#FFCFCC",
      lightest: "#FFE7E7",
    },
    warning: {
      darkest: "#5C3D02",
      dark: "#8A5C03",
      medium: "#CC9952",
      light: "#F5DCC4",
      lightest: "#FFF2E7",
    },
    info: {
      darkest: "#00407A",
      dark: "#2556B8",
      medium: "#6699FF",
      light: "#D0DFFC",
      lightest: "#F0F5FF",
    },
    success: {
      darkest: "#004738",
      dark: "#028468",
      medium: "#14A384",
      light: "#74C2B1",
      lightest: "#E9F7F4",
    },
  },
}

module.exports = {
  content: [
    "./lib/**/*.{html,js,ts,tsx}",
    "./stories/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        base: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.2rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: 0,
        0: 0,
        1: "1px",
        2: "2px",
        3: "",
        4: "4px",
        5: "",
        6: "",
        7: "",
        8: "8px",
      },
      borderColor: colors,
      colors,
      textColor: colors,
      fontSize: {
        "3xs": "0.625rem",  // 10px
        "2xs": "0.75rem",   // 12px
        xs: "0.875rem",     // 14px
        sm: "1rem",         // 16px
        md: "1.25rem",      // 20px
        lg: "1.5rem",       // 24px
        xl: "2rem",         // 32px
        "2xl": "2.5rem",    // 40px
        "3xl": "3rem",      // 48px
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      }
    },
  },
  plugins: [],
}

