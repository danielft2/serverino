import { ButtonBack } from '@components/ui/button-back';
import { Success } from '@components/ui/success';
import { View } from 'react-native';

interface ChangePasswordSuccessProps {
  onClose: () => void;
}

export function ChangePasswordSuccess({ onClose }: ChangePasswordSuccessProps) {
  return (
    <View>
      <ButtonBack onPress={onClose} />
      <Success.Root>
        <Success.Title>A sua senha foi alterada.</Success.Title>
        <Success.Description>
          Se sua conta estiver conectada em outros dispositivos ela sera
          deslogada.
        </Success.Description>
      </Success.Root>
    </View>
  );
}
