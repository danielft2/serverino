import { SafeAreaView, View } from 'react-native';
import { Masks } from 'react-native-mask-input';

import { Form } from '@components/Form';
import { InputControlled } from '@components/FormControlled';
import { useErrorMessageForm } from '@hooks/shared';

export function RegisterPersonalData() {
   const { get } = useErrorMessageForm();

   return (
      <SafeAreaView className="space-y-4">
         <View>
            <Form.Label required>Nome completo</Form.Label>
            <InputControlled.Text name="nome" />
            <Form.ErrorMessage message={get('nome')} />
         </View>
         <View>
            <Form.Label required>Telefone</Form.Label>
            <InputControlled.TextMask
               name="telefone"
               keyboardType="name-phone-pad"
               maxLength={15}
               mask={Masks.BRL_PHONE}
            />
            <Form.ErrorMessage message={get('telefone')} />
         </View>
         <View>
            <Form.Label>Email</Form.Label>
            <InputControlled.Text name="email" />
         </View>
         <View>
            <Form.Label required>Senha</Form.Label>
            <InputControlled.Password name="password" />
            <Form.ErrorMessage message={get('password')} />
         </View>
         <View>
            <Form.Label required>Confirmar Senha</Form.Label>
            <InputControlled.Password
               name="password_confirmation"
               isVisibleIcon={false}
            />
            <Form.ErrorMessage message={get('password_confirmation')} />
         </View>
      </SafeAreaView>
   );
}
