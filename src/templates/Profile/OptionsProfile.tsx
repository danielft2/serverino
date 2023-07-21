import { ScrollView, View } from 'react-native';
import { UserCog, Lock, FileBadge2, Briefcase } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { OptionCardProfile } from './OptionCardProfile';
import { OptionSignOut } from './OptionSignOut';

export function OptionsProfile() {
   const { navigate } = useNavigation();

   return (
      <>
         <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
            <View className="mb-3 w-full border-b border-blue_dark-300">
               <OptionCardProfile
                  index={1}
                  label="Informações da Conta"
                  icon={<UserCog size={20} className="text-white" />}
                  onPress={() => navigate('account')}
               />
               <OptionCardProfile
                  index={2}
                  label="Alterar Senha"
                  icon={<Lock size={20} className="text-white" />}
               />
            </View>
            <View className="mb-3 w-full border-b border-blue_dark-300">
               <OptionCardProfile
                  index={3}
                  label="Torna-se Licenciado"
                  icon={<FileBadge2 size={20} className="text-white" />}
               />
               <OptionCardProfile
                  index={4}
                  label="Criar conta Profissional"
                  icon={<Briefcase size={20} className="text-white" />}
               />
            </View>
            <OptionSignOut />
         </ScrollView>
      </>
   );
}
