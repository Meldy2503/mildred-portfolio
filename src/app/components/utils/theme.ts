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
      150: "#171717",
      200: "#999",
      250: "#ed4137",
      300: "#f6f6f6",
      // 250: "#ffd37d",
      //  250: "#654cff",
     
    },
  },
//   fonts: {
//     body: nextFont.style.fontFamily,
//     heading: nextFont.style.fontFamily,
//   },
});

export default theme;
