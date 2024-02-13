// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// import { Poppins } from "@next/font/google";

// 2. Add your color modeRoboto config
// const config: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: true,
// };

// const nextFont = Poppins({
//   weight: ["400"],
//   subsets: ["latin"],
// });

// 3. extend the theme
const theme = extendTheme({
//   config,
  colors: {
    brand: {
      100: "#fff",
      150: "#1e2434",
      // 150: "#1c1c1c",

      200: "#999",
      //  250: "#ed4137",
         250: "#ff5621",
       //  250: "#ed2945",
        300: "#f6f6f6",
        350: "#e6e6e6",
        400: "#c0bfbf",
        450: "#333",
        // 250: "#ffd37d",
        //  250: "#654cff",
        //  250: "#f49c30",
        //  250: "#f87b62",
        //  250: "#fa6086",
        // 250: "#ff667d",
        // 250: "#e31d61",
     
    },
  },
//   fonts: {
//     body: nextFont.style.fontFamily,
//     heading: nextFont.style.fontFamily,
//   },
});

export default theme;
