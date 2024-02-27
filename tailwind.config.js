/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: 
    [
      {
        mytheme: {
                "primary": "#01511E",
                "secondary": "#3EC1D3",
                "accent": "#E55B3F",
                "neutral": "#030706",
                "base-100": "#374151",
                "info": "#ffe4e6",
                "success": "#9ADE7B",
                "warning": "#920209",
                "error": "#ff8596",
          },
        },
    ],
  },
}

