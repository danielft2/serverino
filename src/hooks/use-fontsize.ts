import { useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../theme';

export function useFontsize() {
  const { width } = useWindowDimensions();

  function getFontsize(fontsizeBase: number, sizeAddition = 1) {
    if (width >= parseInt(theme.screens.md)) return RFValue(fontsizeBase);
    else if (width >= parseInt(theme.screens.base))
      return RFValue(fontsizeBase + sizeAddition);
  }

  return {
    getFontsize
  };
}
