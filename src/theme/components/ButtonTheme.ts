import { defineStyleConfig } from '@chakra-ui/react'

const buttonTheme = defineStyleConfig({
  baseStyle: {
    color: 'brand.white',
    fontWeight: 'semibold',
    borderRadius: '3xl',
  },
  sizes: {
    sm: {
      fontSize: 'md',
      px: 1.5,
      py: 1,
    },
    md: {
      fontSize: 'xl',
      lineHeight: 8,
      px: 10,
      py: 1,
    },
  },

  variants: {
    primary: {
      bg: 'brand.pineGreen',
      _hover: {
        bg: 'brand.pineGreenLight',
        _disabled: {
          color: 'brand.disabledText',
          bg: 'brand.disabledBackground',
          opacity: 1,
        },
      },
      _active: {
        bg: 'brand.pineGreen',
      },
      _disabled: {
        color: 'brand.disabledText',
        bg: 'brand.disabledBackground',
        opacity: 1,
      },
    },
    secondary: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'brand.pineGreen',
      _hover: {
        border: 'none',
        bg: 'brand.pineGreenLight',
        _disabled: {
          color: 'brand.disabledOutline',
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'brand.disabledOutline',
        },
      },
      _active: {
        border: 'none',
        bg: 'brand.pineGreen',
      },
      _disabled: {
        color: 'brand.disabledOutline',
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'brand.disabledOutline',
      },
    },
    tertiary: {
      bg: 'transparent',
      _hover: {
        textDecoration: 'underline'
      },
      _active: {
        textDecoration: 'none',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
})

export default buttonTheme;
