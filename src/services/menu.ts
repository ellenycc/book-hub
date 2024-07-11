import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    // bg: "blue.50",
  },
  item: {
    color: "blue.900",
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
