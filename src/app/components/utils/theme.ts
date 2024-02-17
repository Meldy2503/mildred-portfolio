import { extendTheme } from "@chakra-ui/react";
import { Mulish } from "@next/font/google";

const nextFont = Mulish({
  weight: ["700"],
  subsets: ["latin"],
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#fff",
      150: "#1e2434",
      200: "#999",
      250: "#ff5621",
      300: "#f6f6f6",
      350: "#e6e6e6",
      400: "#c0bfbf",
      450: "#333333",
      500: "rgba(0, 0, 0, 0.7)",
      550: "#ed4137",
    },
  },
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
});

export default theme;
