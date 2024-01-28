import { ScrollView, View } from 'react-native';
import { Mail, MapPin, Phone, UserCircle2 } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { hideEmail, hidePhone } from '@utils';

import { Information } from './components/Information';
import { useSessionStore } from '@store/session';

export function AccountInformations() {
   const user = useSessionStore((state) => state.user);

   return (
      <>
         <View className="mt-5 w-full flex-grow border-t border-blue_dark-400">
            <ScrollView
               className="flex-grow"
               showsVerticalScrollIndicator={false}
            >
               <View className="divide-y-[1px] divide-blue_dark-400">
                  <Information
                     index={1}
                     subtitle="Nome"
                     description={user.nome}
                     icon={
                        <UserCircle2
                           size={RFValue(20)}
                           className="text-white"
                        />
                     }
                  />
                  <Information
                     index={2}
                     subtitle="E-mail"
                     description={hideEmail(user.email)}
                     icon={<Mail size={RFValue(20)} className="text-white" />}
                  />
                  <Information
                     index={3}
                     subtitle="Telefone"
                     description={hidePhone(user.telefone)}
                     icon={<Phone size={RFValue(20)} className="text-white" />}
                  />
                  <Information
                     index={4}
                     subtitle="Endereço"
                     description={`${user.cidade.nome}-${user.cidade.uf.nome}`}
                     icon={<MapPin size={RFValue(20)} className="text-white" />}
                  />
               </View>
            </ScrollView>
         </View>
      </>
   );
}
