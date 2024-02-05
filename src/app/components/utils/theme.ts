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
      150: "#000",
     
    },
  },
//   fonts: {
//     body: nextFont.style.fontFamily,
//     heading: nextFont.style.fontFamily,
//   },
});

export default theme;
