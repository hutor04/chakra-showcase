import {extendTheme} from '@chakra-ui/react'


const Theme = extendTheme({
  colors: {
    primary: {
      50:  '#adbec8',
      100: '#8da4b1',
      200: '#75909f',
      300: '#5d7d8e',
      400: '#516e7d',
      500: '#425a66',
      600: '#344751',
      700: '#23323a',
      800: '#121a1f',
      900: '#05080a',
    },
    brand: {
      pineGreen: '#01796E',
      pineGreenLight: '#4fa29a',
      disabledBackground: '#31484F',
      disabledOutline: '#4D6D70',
      widget: '#23323A', // primary.700
      background: '#030303',

      white: '#FFFFFF',
      primaryText: '#F2F2F2',
      secondaryText: '#8E9B9F',
      disabledText: '#7c9497',

      heritageOrange: '#FFA826',
      purple: '#6B30FF',
      blue: '#304FFE',
      pink: '#FF4A76',

      consulting: '#C2BDFF',
      publications: '#FFE5BE',
      marketplace: '#A3EDE3',

      success: '#94E5AB',
      error: '#CF6679',
      info: '#466C86',
    },
  },
  semanticTokens: {
    colors: {
      widgetBackground: {default: "papayawhip", _dark: "primary.700"},
      widgetPrimaryText: {default: "black", _dark: "brand.primaryText"},
      widgetSecondaryText: {default: "grey", _dark: "brand.secondaryText"},
    }
  }
});

export default Theme;
