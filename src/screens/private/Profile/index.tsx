import { SafeAreaView, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Gradient } from '@components/Gradient';
import { AvatarProfile } from '@components/AvatarProfile';
import { OptionsProfile } from '@templates/Profile';

export function Profile() {
   const statusBarHeigth = getStatusBarHeight();

   return (
      <SafeAreaView
         className="relative z-10 flex-1 items-center bg-blue_dark-900 px-4"
         style={{ paddingTop: statusBarHeigth + 40 }}
      >
         <Gradient />
         <AvatarProfile />
         <View className="mt-6 flex-grow">
            <OptionsProfile />
         </View>
      </SafeAreaView>
   );
}
