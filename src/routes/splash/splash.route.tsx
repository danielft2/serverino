import { useAuth } from '@hooks';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '@screens/public';
import { Welcome } from '@screens/public/Welcome';

import { PrivateRoutes } from '../private';
import { PublicRoutes } from '../public';

const { Screen, Navigator } = createNativeStackNavigator();

export function SplashRoutes() {
   const { token } = useAuth();

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
            component={token ? PrivateRoutes : PublicRoutes}
         />
      </Navigator>
   );
}
