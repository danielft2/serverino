import { Text, TouchableOpacity, View } from 'react-native';
import { Phone, MessagesSquare } from 'lucide-react-native';
import * as Linking from 'expo-linking';

import { Option } from '@components/Option';
import { useFontsize } from '@hooks/shared';

interface ProfessionalTalkProps {
   numberPhone: string;
}

export function ProfessionalTalk({ numberPhone }: ProfessionalTalkProps) {
   const { getFontsize } = useFontsize();

   // const talkWithProfessional = async () =>
   //    await Linking.openURL(`whatsapp://send?text=Olá&phone=+55${numberPhone}`);

   return (
      <View className="w-full flex-1 flex-row items-end space-x-2 base:mb-3 base:px-3 sm:px-4 md:mb-4">
         <View className="flex-1">
            <Option.Root isBackground>
               <Option.Container>
                  <Option.Icon>
                     <MessagesSquare
                        size={getFontsize(20)}
                        className="text-green-400"
                     />
                  </Option.Icon>
                  <Text
                     className="font-heading_md text-white"
                     style={{ fontSize: getFontsize(11) }}
                  >
                     Whatsapp
                  </Text>
               </Option.Container>
            </Option.Root>
         </View>
         <View className="flex-1">
            <Option.Root isBackground>
               <Option.Container>
                  <Option.Icon>
                     <Phone size={getFontsize(20)} className="text-gray-100" />
                  </Option.Icon>
                  <Text
                     className="font-heading_md text-white"
                     style={{ fontSize: getFontsize(11) }}
                  >
                     Telefone
                  </Text>
               </Option.Container>
            </Option.Root>
         </View>
      </View>
   );
}
