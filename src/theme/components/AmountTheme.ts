import { defineStyleConfig } from '@chakra-ui/react'

const AmountTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: 'none',
  },
  sizes: {
    sm: {
      fontSize: 'xs',
    },
    md: {
      fontSize: '2xl',
    },
  },
  variants: {
    active: {
      color: 'widgetPrimaryText',
    },
    disabled: {
      color: 'widgetSecondaryText',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'active',
  },
});

export default AmountTheme;
