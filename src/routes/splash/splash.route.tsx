import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '@hooks';
import { Splash } from '@screens/public';

import { PublicRoutes } from '../public';
import { PrivateRoutes } from '../private';

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
