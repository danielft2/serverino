import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FileEdit } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { Gradient } from '@components/Gradient';
import { AvatarProfile } from '@components/AvatarProfile';
import { ButtonBack } from '@components/ButtonBack';
import { Loading } from '@components/Loading';
import { AccountInformations, AccountUpdateModal } from '@templates/Account';
import { OptionCardProfile } from '@templates/Profile';
import { useLazy } from '@hooks/shared';

export function InformationsAccount() {
   const [isOpenModalUpdateInfor, setIsOpenModalUpdateInfor] = useState(false);

   const { navigate } = useNavigation();
   const { render } = useLazy();
   const statusBarHeigth = getStatusBarHeight();

   if (!render) return <Loading.Background loading={true} />;

   return (
      <>
         <SafeAreaView
            className="relative flex-1  bg-blue_dark-900 base:px-3 md:px-4"
            style={{ paddingTop: statusBarHeigth + 10 }}
         >
            <Gradient />
            <ButtonBack onPress={() => navigate('profile')} />
            <View className="flex-1 items-center">
               <AvatarProfile />
               <AccountInformations />
               <View className="w-full self-end">
                  <OptionCardProfile
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
