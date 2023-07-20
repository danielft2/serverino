import { SafeAreaView, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FileEdit } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { Gradient } from '@components/Gradient';
import { AvatarProfile } from '@components/AvatarProfile';
import { ButtonBack } from '@components/ButtonBack';
import { Informations } from '@templates/DataAccount';
import { OptionCardProfile } from '@templates/Profile';

export function DataAccount() {
   const { navigate } = useNavigation();
   const statusBarHeigth = getStatusBarHeight();

   return (
      <SafeAreaView
         className="relative flex-1  bg-blue_dark-900 px-4"
         style={{ paddingTop: statusBarHeigth + 10 }}
      >
         <Gradient />
         <ButtonBack onPress={() => navigate('profile')} />
         <View className="flex-1 items-center">
            <AvatarProfile />
            <Informations />
            <View className="w-full self-end">
               <OptionCardProfile
                  label="Atualizar Dados"
                  icon={<FileEdit size={20} className="text-green-400" />}
               />
            </View>
         </View>
      </SafeAreaView>
   );
}
