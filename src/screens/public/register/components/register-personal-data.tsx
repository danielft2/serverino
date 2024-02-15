import { SafeAreaView, View } from 'react-native';
import { Masks } from 'react-native-mask-input';

import { InputControlled } from '@components/input-controlled';
import { InputLabel } from '@components/ui/Input/input-label';
import { InputErrorMessage } from '@components/ui/Input/input-error-message';
import { useErrorMessageForm } from '@hooks';

export function RegisterPersonalData() {
  const { get } = useErrorMessageForm();

  return (
    <SafeAreaView className="space-y-4">
      <View>
        <InputLabel required>Nome completo</InputLabel>
        <InputControlled.Text name="nome" />
        <InputErrorMessage message={get('nome')} />
      </View>
      <View>
        <InputLabel required>Telefone</InputLabel>
        <InputControlled.TextMask
          name="telefone"
          keyboardType="name-phone-pad"
          maxLength={15}
          mask={Masks.BRL_PHONE}
        />
        <InputErrorMessage message={get('telefone')} />
      </View>
      <View>
        <InputLabel>Email</InputLabel>
        <InputControlled.Text name="email" />
      </View>
      <View>
        <InputLabel required>Senha</InputLabel>
        <InputControlled.Password name="password" />
        <InputErrorMessage message={get('password')} />
      </View>
      <View>
        <InputLabel required>Confirmar Senha</InputLabel>
        <InputControlled.Password
          name="password_confirmation"
          isVisibleIcon={false}
        />
        <InputErrorMessage message={get('password_confirmation')} />
      </View>
    </SafeAreaView>
  );
}
