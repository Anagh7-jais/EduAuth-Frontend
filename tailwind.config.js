/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        indigoCore: "#3A0CA3",
        electricBlue: "#4361EE",
        cyberPurple: "#7209B7",
        aquaHighlight: "#4CC9F0",
        textSoft: "#EAEAEA"
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 1px 1px, rgba(76, 201, 240, 0.2) 1px, transparent 0)"
      },
      boxShadow: {
        glass: "0 18px 45px rgba(0,0,0,0.55)",
        "neon-soft":
          "0 0 25px rgba(67,97,238,0.65), 0 0 55px rgba(114,9,183,0.5)"
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        "gradient-x": "gradient-x 12s ease infinite"
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: 0.8, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.03)" }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%"
          },
          "50%": {
            "background-position": "100% 50%"
          }
        }
      }
    }
  },
  plugins: []
};

