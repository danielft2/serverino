import { useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Home, Search, UserCircle2 } from 'lucide-react-native';

import { Discovery, Feed, DataAccount, Profile } from '@screens/private';
import { theme } from '../../theme';

const { Screen, Navigator } = createBottomTabNavigator();

export function PrivateRoutes() {
   const { addListener } = useNavigation();

   useEffect(() => {
      addListener('beforeRemove', (e) => e.preventDefault());
   }, [addListener]);

   return (
      <Navigator
         screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.colors.green[300],
            tabBarInactiveTintColor: theme.colors.gray[200],
            tabBarStyle: {
               borderTopWidth: 0,
               backgroundColor: theme.colors.blue_dark[700],
               height: RFValue(55),
               position: 'absolute'
            }
         }}
         initialRouteName="feed"
      >
         <Screen
            name="discovery"
            component={Discovery}
            options={{
               tabBarIcon: ({ color }) => (
                  <Search color={color} size={RFValue(21)} />
               )
            }}
         />
         <Screen
            name="feed"
            component={Feed}
            options={{
               tabBarIcon: ({ color }) => (
                  <Home color={color} size={RFValue(21)} />
               )
            }}
         />
         <Screen
            name="profile"
            component={Profile}
            options={{
               tabBarIcon: ({ color }) => (
                  <UserCircle2 color={color} size={RFValue(21)} />
               )
            }}
         />
         <Screen
            name="account"
            component={DataAccount}
            options={{
               tabBarButton: () => null,
               tabBarStyle: {
                  display: 'none'
               }
            }}
         />
      </Navigator>
   );
}
