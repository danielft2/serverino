import { useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Home, Search, UserCircle2 } from 'lucide-react-native';

import { Discovery, Feed, Account, Profile } from '@screens/private';
import { theme } from '../../theme';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
   const { addListener } = useNavigation();

   useEffect(() => {
      addListener('beforeRemove', (e) => e.preventDefault());
   }, [addListener]);

   return (
      <Navigator
         screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: theme.colors.green[300],
            tabBarInactiveTintColor: theme.colors.gray[200],
            tabBarStyle: {
               borderTopWidth: 0,
               backgroundColor: theme.colors.blue_dark[700],
               height: RFValue(55),
               paddingBottom: 8,
               paddingTop: 8,
               position: 'absolute'
            },
            tabBarLabelStyle: {
               fontSize: RFValue(9)
            }
         }}
         initialRouteName="feed"
      >
         <Screen
            name="feed"
            component={Feed}
            options={{
               tabBarIcon: ({ color }) => (
                  <Home color={color} size={RFValue(21)} />
               ),
               tabBarLabel: 'Início'
            }}
         />
         <Screen
            name="discovery"
            component={Discovery}
            options={{
               tabBarIcon: ({ color }) => (
                  <Search color={color} size={RFValue(21)} />
               ),
               tabBarLabel: 'Descobrir'
            }}
         />

         <Screen
            name="profile"
            component={Profile}
            options={{
               tabBarIcon: ({ color }) => (
                  <UserCircle2 color={color} size={RFValue(21)} />
               ),
               tabBarLabel: 'Perfil'
            }}
         />
         <Screen
            name="account"
            component={Account}
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
