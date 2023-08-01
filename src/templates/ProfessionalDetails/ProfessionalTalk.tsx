import { Text, TouchableOpacity } from 'react-native';
import { ChevronRight, MessagesSquare } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Linking from 'expo-linking';

import { Option } from '@components/Option';

interface ProfessionalTalkProps {
   numberPhone: string;
}

export function ProfessionalTalk({ numberPhone }: ProfessionalTalkProps) {
   const talkWithProfessional = async () =>
      await Linking.openURL(`whatsapp://send?text=Olá&phone=+55${numberPhone}`);

   return (
      <TouchableOpacity
         className="w-full flex-1 justify-end px-4 base:mb-3 md:mb-4"
         onPress={talkWithProfessional}
      >
         <Option.Root isBackground>
            <Option.Container>
               <Option.Icon>
                  <MessagesSquare
                     size={RFValue(20)}
                     className="text-green-400"
                  />
               </Option.Icon>
               <Text
                  className="font-heading_md text-white"
                  style={{ fontSize: RFValue(11) }}
               >
                  Conversar com o profissional
               </Text>
            </Option.Container>
            <ChevronRight size={20} className="text-white" />
         </Option.Root>
      </TouchableOpacity>
   );
}
