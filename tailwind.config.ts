// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "gradient-move": "gradient-move 6s ease infinite",
        "fade-in": "fade-in 1s ease forwards",
      },
      fontFamily: {
        clash: ["font-clash", "sans-serif"],
      },
    },
  },
};
