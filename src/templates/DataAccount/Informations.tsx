import { ScrollView, View } from 'react-native';
import { Mail, MapPin, Phone, UserCircle2 } from 'lucide-react-native';

import { hideEmail, hidePhone } from '@utils';
import { useSession } from '@hooks/shared';

import { InformationRow } from './InformationRow';

export function Informations() {
   const { user } = useSession();

   return (
      <View className="mt-5 w-full flex-grow border-t border-blue_dark-400">
         <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
            <View className="divide-y-[1px] divide-blue_dark-400">
               <InformationRow
                  index={1}
                  subtitle="Nome"
                  description={user.nome}
                  icon={<UserCircle2 size={20} className="text-white" />}
               />
               <InformationRow
                  index={2}
                  subtitle="E-mail"
                  description={hideEmail(user.email)}
                  icon={<Mail size={20} className="text-white" />}
               />
               <InformationRow
                  index={3}
                  subtitle="Telefone"
                  description={hidePhone(user.telefone)}
                  icon={<Phone size={20} className="text-white" />}
               />
               <InformationRow
                  index={4}
                  subtitle="Endereço"
                  description={`${user.cidade.nome}-${user.cidade.uf.nome}`}
                  icon={<MapPin size={20} className="text-white" />}
               />
            </View>
         </ScrollView>
      </View>
   );
}
