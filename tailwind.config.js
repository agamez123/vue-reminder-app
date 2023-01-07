/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      'nunito': ['Nunito','sans-serif']
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22d3ee",
                  
          "secondary": "#ccdeff",
                  
          "accent": "#a6f9a2",
                  
          "neutral": "#14181F",
                  
          "base-100": "#3A3F45",
                  
          "info": "#6389E9",
                  
          "success": "#1DB469",
                  
          "warning": "#E8AE26",
                  
          "error": "#E88D7D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
