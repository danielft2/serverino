import { useState } from 'react';
import { View, Text } from 'react-native';
import { LogOut } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Dialog } from '@components/ui/dialog';
import { useAuth, useFontsize } from '@hooks';

import { ProfileOptionCard } from './option-card';

export function OptionCardSignOut() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { signOut } = useAuth();
  const { getFontsize } = useFontsize();

  return (
    <>
      <View className="w-full pb-10">
        <ProfileOptionCard
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
                style={{ fontSize: getFontsize(12) }}
              >
                Sim, desejo
              </Text>
            </Dialog.Action>
            <Dialog.Action onPress={() => setIsOpenDialog(false)}>
              <Text
                className="font-heading_md text-gray-100"
                style={{ fontSize: getFontsize(12) }}
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
