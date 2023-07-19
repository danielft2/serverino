import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Avatar } from '@components/Avatar';
import { useAuth } from '@hooks/shared';

export function AvatarProfile() {
   const { user } = useAuth();
   return (
      <View className="items-center space-y-2">
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
   );
}
