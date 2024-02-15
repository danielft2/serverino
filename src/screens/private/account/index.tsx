import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FileEdit } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { Gradient } from '@components/ui/gradient';
import { AvatarProfile } from '@components/avatar-profile';
import { ButtonBack } from '@components/ui/button-back';
import { Loading } from '@components/ui/loading';
import { useLazy } from '@hooks';
import { AccountInformations } from './components/account-informations';
import { AccountUpdateModal } from './components/account-update-modal';
import { ProfileOptionCard } from '../profile/components';

export function Account() {
  const [isOpenModalUpdateInfor, setIsOpenModalUpdateInfor] = useState(false);

  const { navigate } = useNavigation();
  const { render } = useLazy();
  const statusBarHeigth = getStatusBarHeight();

  if (!render) return <Loading.Background loading={true} />;

  return (
    <>
      <SafeAreaView
        className="relative flex-1 bg-blue_dark-900 base:px-3 md:px-4"
        style={{ paddingTop: statusBarHeigth + 10 }}
      >
        <Gradient />
        <ButtonBack onPress={() => navigate('profile')} />
        <View className="flex-1 items-center">
          <AvatarProfile />
          <AccountInformations />
          <View className="w-full self-end">
            <ProfileOptionCard
              index={6}
              label="Atualizar Dados"
              icon={<FileEdit size={20} className="text-green-400" />}
              onPress={() => setIsOpenModalUpdateInfor(true)}
            />
          </View>
        </View>
      </SafeAreaView>
      <AccountUpdateModal
        isOpen={isOpenModalUpdateInfor}
        onClose={() => setIsOpenModalUpdateInfor(false)}
      />
    </>
  );
}
