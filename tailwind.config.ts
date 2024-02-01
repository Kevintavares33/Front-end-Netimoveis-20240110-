module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        sun: "url('/sun.png')", 
      },
      boxShadow: {
        sm: "4px 0px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};