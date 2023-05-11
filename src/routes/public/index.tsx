import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signin, Welcome } from '@screens/public';
import { useEffect } from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

export function PublicRoutes() {
   const { addListener } = useNavigation();

   useEffect(() => {
      addListener('beforeRemove', (e) => e.preventDefault());
   }, [addListener]);

   return (
      <Navigator
         screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            animationDuration: 0,
            contentStyle: { backgroundColor: 'black' }
         }}
      >
         <Screen name="welcome" component={Welcome} />
         <Screen name="signin" component={Signin} />
      </Navigator>
   );
}
