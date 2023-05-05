import { extendTheme } from '@chakra-ui/react'
import withColorExtension from './colors';
import withFontsExtension from './fonts';
import withComponents from './components';

const overrides = {
  components: withComponents,
}
const customTheme = extendTheme(
  withFontsExtension,
  withColorExtension,
  overrides
);

export default customTheme;
