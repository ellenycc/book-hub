import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { inputTheme } from "./services/input";

const config: ThemeConfig ={
  initialColorMode: 'light'
};

const theme = extendTheme({config,
  colors: {
    blue: {
      50: "#e4f0ff",
      100: "#bcd3f6",
      200: "#93b6eb", 
      300: "#6999e2",
      400: "#417cd9",
      500: "#2962c0",
      600: "#1e4c96",
      700: "#14366c",
      800: "#082143",
      900: "#000b1c"
    }
  },
  components: { Input: inputTheme}
});

export default theme;