import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Avatar } from '@components/Avatar';
import { useSession } from '@hooks/shared';
import Animated, { FadeIn } from 'react-native-reanimated';
import { UserIdentify } from '@components/UserIdentify';

export function AvatarProfile() {
   const { user } = useSession();
   return (
      <Animated.View
         className="items-center space-y-2"
         entering={FadeIn.duration(600)}
      >
         <Avatar.Root>
            <Avatar.Container
               source={user.link}
               size={110}
               border="border-white"
               isLoading
            >
               <Avatar.Fallback name={user.nome} size={18} />
            </Avatar.Container>
            <Avatar.ButtonEdit />
         </Avatar.Root>
         <UserIdentify name={user.nome} description="Conta usuário" />
      </Animated.View>
   );
}
