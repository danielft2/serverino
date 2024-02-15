import { View } from 'react-native';

import { InputControlled } from '@components/input-controlled';
import { useErrorMessageForm } from '@hooks';

import { InputLabel } from '@components/ui/Input/input-label';
import { InputErrorMessage } from '@components/ui/Input/input-error-message';

export function ChangePasswordForm() {
  const { get } = useErrorMessageForm();

  return (
    <View className="w-full space-y-3">
      <View>
        <InputLabel>Nova Senha</InputLabel>
        <InputControlled.Password name="password" />
        <InputErrorMessage message={get('password')} />
      </View>
      <View>
        <InputLabel>Confirmar Senha</InputLabel>
        <InputControlled.Password
          name="password_confirmation"
          isVisibleIcon={false}
        />
        <InputErrorMessage message={get('password_confirmation')} />
      </View>
    </View>
  );
}
