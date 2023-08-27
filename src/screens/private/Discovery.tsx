import { SafeAreaView, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Logo from '@assets/logo.svg';
import { DiscoveryIntro, DiscoverySearchBar } from '@templates/Discovery';

export function Discovery() {
   const statusBarHeigth = getStatusBarHeight();

   return (
      <SafeAreaView
         className="relative flex-1 px-3"
         style={{ paddingTop: statusBarHeigth }}
      >
         <Logo
            width={RFValue(110)}
            height={RFValue(40)}
            className="mb-3 mr-2 self-center"
         />
         <View className="flex-1">
            <DiscoverySearchBar />
            <DiscoveryIntro />
         </View>
      </SafeAreaView>
   );
}
