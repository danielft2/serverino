import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '@screens/public';
import { Welcome } from '@screens/public/Welcome';

const { Screen, Navigator } = createNativeStackNavigator();

export function SplashRoutes() {
   return (
      <Navigator
         screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            contentStyle: { backgroundColor: 'black' }
         }}
      >
         <Screen name="splash" component={Splash} />
         <Screen name="welcome" component={Welcome} />
      </Navigator>
   );
}
