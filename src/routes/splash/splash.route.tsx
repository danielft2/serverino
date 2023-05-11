import { useAuth } from '@hooks';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '@screens/public';

import { PrivateRoutes } from '../private';
import { PublicRoutes } from '../public';

const { Screen, Navigator } = createNativeStackNavigator();

export function SplashRoutes() {
   const { user } = useAuth();

   return (
      <Navigator
         screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            contentStyle: { backgroundColor: 'black' }
         }}
      >
         <Screen name="splash" component={Splash} />
         <Screen
            name="aplication"
            component={user ? PrivateRoutes : PublicRoutes}
         />
      </Navigator>
   );
}
