import { SafeAreaView, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Gradient } from '@components/ui/gradient';
import { AvatarProfile } from '@components/avatar-profile';
import { ProfileOptions } from './components';

export function Profile() {
  return (
    <SafeAreaView
      className="relative z-10 flex-1 items-center bg-blue_dark-900 base:px-3 md:px-4"
      style={{ paddingTop: RFPercentage(10) }}
    >
      <Gradient />
      <AvatarProfile />
      <View className="mt-4 flex-1">
        <ProfileOptions />
      </View>
    </SafeAreaView>
  );
}
