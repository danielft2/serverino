import { SafeAreaView, View, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
   FileEdit,
   Mail,
   MapPin,
   Phone,
   UserCircle2
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { Gradient } from '@components/Gradient';
import { AvatarProfile } from '@components/AvatarProfile';
import { ButtonBack } from '@components/ButtonBack';
import { InformationRow } from '@templates/DataAccount';
import { OptionCardProfile } from '@templates/Profile';
import { hideEmail, hidePhone } from '@utils';
import { useAuth } from '@hooks/shared';

export function DataAccount() {
   const { user } = useAuth();
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
            <View className="mt-5 w-full flex-grow border-t border-blue_dark-400">
               <ScrollView
                  className="flex-grow"
                  showsVerticalScrollIndicator={false}
               >
                  <View className="divide-y-[1px] divide-blue_dark-400">
                     <View>
                        <InformationRow
                           subtitle="Nome"
                           description={user.nome}
                           icon={
                              <UserCircle2 size={20} className="text-white" />
                           }
                        />
                     </View>
                     <View>
                        <InformationRow
                           subtitle="E-mail"
                           description={hideEmail(user.email)}
                           icon={<Mail size={20} className="text-white" />}
                        />
                     </View>
                     <View>
                        <InformationRow
                           subtitle="Telefone"
                           description={hidePhone(user.telefone)}
                           icon={<Phone size={20} className="text-white" />}
                        />
                     </View>
                     <View>
                        <InformationRow
                           subtitle="Endereço"
                           description={`${user.cidade.nome}-${user.cidade.uf.nome}`}
                           icon={<MapPin size={20} className="text-white" />}
                        />
                     </View>
                  </View>
               </ScrollView>
            </View>
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
