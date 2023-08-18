import { useState } from 'react';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { UserCog, Lock, FileBadge2, Briefcase } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { ChangePassword } from '@components/ChangePassword';

import { ProfileOptionCard } from './components/OptionCard';
import { OptionCardSignOut } from './components/OptionCardSignOut';

export function ProfileOptions() {
   const { navigate } = useNavigation();
   const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);

   return (
      <>
         <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
            <ProfileOptionCard
               index={1}
               label="Informações da Conta"
               icon={<UserCog size={RFValue(20)} className="text-white" />}
               onPress={() => navigate('account')}
            />
            <ProfileOptionCard
               index={2}
               label="Alterar Senha"
               icon={<Lock size={RFValue(20)} className="text-white" />}
               onPress={() => setIsOpenChangePassword(true)}
            />
            <ProfileOptionCard
               index={3}
               label="Torna-se Licenciado"
               icon={<FileBadge2 size={RFValue(20)} className="text-white" />}
            />
            <ProfileOptionCard
               index={4}
               label="Criar conta Profissional"
               icon={<Briefcase size={RFValue(20)} className="text-white" />}
            />
            <OptionCardSignOut />
         </ScrollView>
         <ChangePassword
            isOpen={isOpenChangePassword}
            onClose={() => setIsOpenChangePassword(false)}
         />
      </>
   );
}
