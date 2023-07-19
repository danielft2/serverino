import { SafeAreaView, View, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
   Briefcase,
   FileBadge2,
   Lock,
   LogOut,
   UserCog
} from 'lucide-react-native';

import { Gradient } from '@components/Gradient';
import { AvatarProfile } from '@components/AvatarProfile';
import { OptionCardProfile } from '@templates/Profile';
import { useNavigation } from '@react-navigation/native';

export function Profile() {
   const { navigate } = useNavigation();
   const statusBarHeigth = getStatusBarHeight();

   return (
      <SafeAreaView
         className="relative z-10 flex-1 items-center bg-blue_dark-900 px-4"
         style={{ paddingTop: statusBarHeigth + 40 }}
      >
         <Gradient />
         <AvatarProfile />
         <View className="mt-6 flex-grow">
            <ScrollView
               className="flex-grow"
               showsVerticalScrollIndicator={false}
            >
               <View className="mb-3 w-full border-b border-blue_dark-300">
                  <OptionCardProfile
                     label="Informações da Conta"
                     icon={<UserCog size={20} className="text-white" />}
                     onPress={() => navigate('account')}
                  />
                  <OptionCardProfile
                     label="Alterar Senha"
                     icon={<Lock size={20} className="text-white" />}
                  />
               </View>
               <View className="mb-3 w-full border-b border-blue_dark-300">
                  <OptionCardProfile
                     label="Torna-se Licenciado"
                     icon={<FileBadge2 size={20} className="text-white" />}
                  />
                  <OptionCardProfile
                     label="Criar conta Profissional"
                     icon={<Briefcase size={20} className="text-white" />}
                  />
               </View>
               <View className="w-full pb-10">
                  <OptionCardProfile
                     label="Sair da Conta"
                     icon={<LogOut size={20} className="text-red-500" />}
                  />
               </View>
            </ScrollView>
         </View>
      </SafeAreaView>
   );
}
