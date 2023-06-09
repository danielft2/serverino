import { SafeAreaView, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { Form } from '@components/Form';
import { FormControlled } from '@components/FormControlled';
import { useErrorMessageForm } from '@hooks';

export function PersonalData() {
   const { get } = useErrorMessageForm();

   return (
      <SafeAreaView className="space-y-4">
         <View>
            <Form.Label required>Nome completo</Form.Label>
            <FormControlled.Text name="nome" />
            <Form.ErrorMessage message={get('nome')} />
         </View>
         <View>
            <Form.Label required>Telefone</Form.Label>
            <FormControlled.TextMask
               name="telefone"
               keyboardType="name-phone-pad"
               maxLength={15}
               mask={Masks.BRL_PHONE}
            />
            <Form.ErrorMessage message={get('telefone')} />
         </View>
         <View>
            <Form.Label>Email</Form.Label>
            <FormControlled.Text name="email" />
         </View>
         <View>
            <Form.Label required>Senha</Form.Label>
            <FormControlled.Password
               isIconVisible
               name="password"
               maxLength={6}
               keyboardType="number-pad"
            />
            <Form.ErrorMessage message={get('password')} />
         </View>
         <View>
            <Form.Label required>Confirmar Senha</Form.Label>
            <FormControlled.Password
               name="password_confirmation"
               maxLength={6}
               keyboardType="number-pad"
            />
            <Form.ErrorMessage message={get('password_confirmation')} />
         </View>
      </SafeAreaView>
   );
}
