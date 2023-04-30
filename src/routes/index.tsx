import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SplashRoutes } from './splash/splash.route';

const Theme = {
   ...DefaultTheme,
   dark: true
};

export function Routes() {
   return (
      <NavigationContainer theme={Theme}>
         <SplashRoutes />
      </NavigationContainer>
   );
}
