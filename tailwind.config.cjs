module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "stars-zoom": "zoom 30s ease-in-out infinite",
        "stars-twinkle": "twinkle 2s ease-in-out infinite",
      },
      keyframes: {
        zoom: {
          "0%": { backgroundSize: "100%" },
          "50%": { backgroundSize: "120%" },
          "100%": { backgroundSize: "100%" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.9" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
}
