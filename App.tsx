import 'react-native-gesture-handler';

import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from 'expo-system-ui';

import { AppProvider } from './src/context/AppProvider';
import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

SystemUI.setBackgroundColorAsync('black');
SplashScreen.hideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  return (
    <>
      {fontsLoaded ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppProvider>
            <StatusBar style="auto" backgroundColor="transparent" translucent />
            <Routes />
          </AppProvider>
        </GestureHandlerRootView>
      ) : null}
    </>
  );
}
