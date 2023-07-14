import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, Signin } from '@screens/public';
import { RegisterLazy } from '@templates/Register/RegisterLazy';

const { Screen, Navigator } = createNativeStackNavigator();

export function PublicRoutes() {
   const { addListener } = useNavigation();

   useEffect(() => {
      const subscribe = addListener('beforeRemove', (e) => e.preventDefault());
      return () => subscribe();
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
         <Screen name="register" component={RegisterLazy} />
      </Navigator>
   );
}
