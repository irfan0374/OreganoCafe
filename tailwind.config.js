const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      green:"#365314"
    }
  },
  daisyui: {
    themes: ["cmyk"],
  },
  plugins: [
    require('daisyui'),
  ],
});

