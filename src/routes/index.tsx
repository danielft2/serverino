import { NavigationContainer } from '@react-navigation/native';
import { SplashRoutes } from './splash/splash.route';

export function Routes() {
   return (
      <NavigationContainer>
         <SplashRoutes />
      </NavigationContainer>
   );
}
