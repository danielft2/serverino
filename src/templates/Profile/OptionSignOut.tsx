import { useState } from 'react';
import { View, Text } from 'react-native';
import { LogOut } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Dialog } from '@components/Dialog';
import { useAuth } from '@hooks/shared';

import { OptionCardProfile } from './OptionCardProfile';

export function OptionSignOut() {
   const [isOpenDialog, setIsOpenDialog] = useState(false);
   const { signOut } = useAuth();

   return (
      <>
         <View className="w-full pb-10">
            <OptionCardProfile
               index={5}
               label="Sair da Conta"
               icon={<LogOut size={RFValue(20)} className="text-red-500" />}
               onPress={() => setIsOpenDialog(true)}
            />
         </View>
         <Dialog.Root
            isOpen={isOpenDialog}
            onBackdropPress={() => setIsOpenDialog(false)}
         >
            <Dialog.Content>
               <Dialog.Header>
                  <Dialog.Title title="Sair da conta" />
                  <Dialog.Description>
                     Deseja realmente sair da conta?
                  </Dialog.Description>
               </Dialog.Header>
               <Dialog.Actions>
                  <Dialog.Action onPress={signOut}>
                     <Text
                        className="font-heading_md text-red-400"
                        style={{ fontSize: RFValue(12) }}
                     >
                        Sim, desejo
                     </Text>
                  </Dialog.Action>
                  <Dialog.Action onPress={() => setIsOpenDialog(false)}>
                     <Text
                        className="font-heading_md text-gray-100"
                        style={{ fontSize: RFValue(12) }}
                     >
                        Cancelar
                     </Text>
                  </Dialog.Action>
               </Dialog.Actions>
            </Dialog.Content>
         </Dialog.Root>
      </>
   );
}
