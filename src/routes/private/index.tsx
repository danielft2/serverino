import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivateAccount, ProfessionalDetails } from '@screens/private';
import { TabRoutes } from './tabs';
import { useSession } from '@hooks/shared';

const { Screen, Navigator } = createNativeStackNavigator();

export function PrivateRoutes() {
   const { user } = useSession();
   return (
      <Navigator
         screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
         }}
      >
         {user.status_id === '1' ? (
            <Screen name="activate-account" component={ActivateAccount} />
         ) : (
            <>
               <Screen name="tabs" component={TabRoutes} />
               <Screen name="professional" component={ProfessionalDetails} />
            </>
         )}
      </Navigator>
   );
}
