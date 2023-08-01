import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfessionalDetails } from '@screens/private';
import { TabRoutes } from './tabs';

const { Screen, Navigator } = createNativeStackNavigator();

export function PrivateRoutes() {
   return (
      <Navigator
         screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
         }}
      >
         <Screen name="tabs" component={TabRoutes} />
         <Screen name="professional" component={ProfessionalDetails} />
      </Navigator>
   );
}
