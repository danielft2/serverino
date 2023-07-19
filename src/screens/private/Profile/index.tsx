import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
   Briefcase,
   FileBadge2,
   Lock,
   LogOut,
   UserCog
} from 'lucide-react-native';

import { Avatar } from '@components/Avatar';
import { Gradient } from '@components/LinearGradient';
import { OptionCardProfile } from '@templates/Profile';
import { useAuth } from '@hooks/shared';

export function Profile() {
   const { user } = useAuth();
   const statusBarHeigth = getStatusBarHeight();

   return (
      <SafeAreaView
         className="relative z-10 flex-1 items-center bg-blue_dark-900 px-4"
         style={{ paddingTop: statusBarHeigth + 40 }}
      >
         <Gradient />
         <View className="mb-6 items-center space-y-2">
            <Avatar.Root>
               <Avatar.Container
                  source={user.link}
                  size={110}
                  border="border-white"
               >
                  <Avatar.Fallback>
                     <Text
                        className="text-white"
                        style={{ fontSize: RFValue(12) }}
                     >
                        {user.nome.split('')[0].toUpperCase()}
                        {user.nome.split('')[1].toLocaleUpperCase()}
                     </Text>
                  </Avatar.Fallback>
               </Avatar.Container>
               <Avatar.ButtonEdit />
            </Avatar.Root>
            <View className="items-center">
               <Text
                  className="font-heading text-green-400"
                  style={{ fontSize: RFValue(13) }}
               >
                  Conta usuário
               </Text>
               <Text
                  className="-mt-2 font-heading text-white"
                  style={{ fontSize: RFValue(15) }}
               >
                  {user.nome}
               </Text>
            </View>
         </View>
         <View className="flex-grow">
            <ScrollView
               className="flex-grow"
               showsVerticalScrollIndicator={false}
            >
               <View className="mb-3 w-full border-b border-blue_dark-300">
                  <OptionCardProfile
                     label="Informações da Conta"
                     icon={<UserCog size={20} className="text-white" />}
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
