import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    color: 'blue.900'
  },
})

const customInput = definePartsStyle({
  field: {
      _dark: {
      background: '#ffffff'
    }
  }
})

export const inputTheme = defineMultiStyleConfig({ baseStyle, variants: { customInput} })