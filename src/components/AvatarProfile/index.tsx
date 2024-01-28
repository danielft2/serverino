import { useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Avatar } from '@components/Avatar';
import { UserIdentify } from '@components/UserIdentify';
import { useUpdateAvatar } from '@hooks/components';
import { useSessionStore } from '@store/session';

export function AvatarProfile() {
   const [isUpdateAvatar, setIsUpdateAvatar] = useState(false);
   const user = useSessionStore((state) => state.user);

   const onClose = () => setIsUpdateAvatar(false);

   const { handlePickerImage, isLoading } = useUpdateAvatar({ onClose });

   return (
      <>
         <Animated.View
            className="items-center space-y-2"
            entering={FadeIn.duration(600)}
         >
            <Avatar.Root>
               <Avatar.Container
                  source={user.link}
                  size={110}
                  border="white"
                  borderSize="md"
                  hasLoading
                  isLoading={isLoading}
               >
                  <Avatar.Fallback name={user.nome} size={18} />
               </Avatar.Container>
               <Avatar.ButtonEdit onPress={() => setIsUpdateAvatar(true)} />
            </Avatar.Root>
            <UserIdentify name={user.nome} description="Conta usuário" />
         </Animated.View>
         <Avatar.UpdateAvatar
            isOpen={isUpdateAvatar}
            onClose={() => setIsUpdateAvatar(false)}
            onUpdate={(type) => handlePickerImage(type)}
         />
      </>
   );
}
