import { ButtonBack } from '@components/ui/button-back';
import { Success } from '@components/ui/success';
import { View } from 'react-native';

interface UpdateInformationsSuccessProps {
  onClose: () => void;
}

export function UpdateInformationsSuccess({
  onClose
}: UpdateInformationsSuccessProps) {
  return (
    <View>
      <ButtonBack onPress={onClose} />
      <Success.Root>
        <Success.Title>Os seus dados foram atualizados.</Success.Title>
        <Success.Description>
          Se você tiver alterado seu endereço o feed será atualizado baseado nas
          novas informações.
        </Success.Description>
      </Success.Root>
    </View>
  );
}
