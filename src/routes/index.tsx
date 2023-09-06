import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SplashRoutes } from './splash/splash.route';
import { theme } from '../theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const navigationTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      background: theme.colors.blue_dark[900]
   }
};

export function Routes() {
   return (
      <NavigationContainer theme={navigationTheme}>
         <BottomSheetModalProvider>
            <SplashRoutes />
         </BottomSheetModalProvider>
      </NavigationContainer>
   );
}
