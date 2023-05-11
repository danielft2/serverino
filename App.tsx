import 'react-native-gesture-handler';

import { StatusBar } from 'react-native';
import { Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from 'expo-system-ui';

import { AppProvider } from './src/context/AppProvider';
import { Routes } from './src/routes';

SystemUI.setBackgroundColorAsync('black');
SplashScreen.hideAsync();

export default function App() {
   const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Poppins_500Medium,
      Poppins_700Bold
   });

   return (
      <AppProvider>
         <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
         />
         <Routes />
      </AppProvider>
   );
}
