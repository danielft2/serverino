import { View, Text } from 'react-native';
import { LogOut } from 'lucide-react-native';
import { OptionCardProfile } from './OptionCardProfile';
import { Dialog } from '@components/Dialog';
import { RFValue } from 'react-native-responsive-fontsize';
import { useState } from 'react';
import { useAuth } from '@hooks/shared';

export function OptionSignOut() {
   const [isOpenDialog, setIsOpenDialog] = useState(false);
   const { signOut } = useAuth();

   return (
      <>
         <View className="w-full pb-10">
            <OptionCardProfile
               label="Sair da Conta"
               icon={<LogOut size={20} className="text-red-500" />}
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
                        style={{ fontSize: RFValue(13) }}
                     >
                        Sim, desejo
                     </Text>
                  </Dialog.Action>
                  <Dialog.Action onPress={() => setIsOpenDialog(false)}>
                     <Text
                        className="font-heading_md text-gray-100"
                        style={{ fontSize: RFValue(13) }}
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
