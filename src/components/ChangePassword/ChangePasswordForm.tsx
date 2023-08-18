import { View } from 'react-native';

import { Form } from '@components/Form';
import { InputControlled } from '@components/FormControlled';
import { useErrorMessageForm } from '@hooks/shared';

export function ChangePasswordForm() {
   const { get } = useErrorMessageForm();

   return (
      <View className="w-full space-y-3">
         <View>
            <Form.Label>Nova Senha</Form.Label>
            <InputControlled.Password name="password" />
            <Form.ErrorMessage message={get('password')} />
         </View>
         <View>
            <Form.Label>Confirmar Senha</Form.Label>
            <InputControlled.Password
               name="password_confirmation"
               isVisibleIcon={false}
            />
            <Form.ErrorMessage message={get('password_confirmation')} />
         </View>
      </View>
   );
}
