import { SafeAreaView, View } from 'react-native';
import { Label } from '@components/Form/Label';
import { ControlledPassword } from '@components/FormControlled/ControlledPassword';
import { ControlledText } from '@components/FormControlled/ControlledText';
import { ErrorMessage } from '@components/Form/ErrorMessage';
import { useErrorMessageForm } from '@hooks';

export function PersonalData() {
   const { get } = useErrorMessageForm();

   return (
      <SafeAreaView className="space-y-4">
         <View>
            <Label>Nome completo</Label>
            <ControlledText name="nome" />
            <ErrorMessage message={get('nome')} />
         </View>
         <View>
            <Label>Telefone</Label>
            <ControlledText name="telefone" maxLength={11} />
            <ErrorMessage message={get('telefone')} />
         </View>
         <View>
            <Label>Email</Label>
            <ControlledText name="email" />
         </View>
         <View>
            <Label>Senha</Label>
            <ControlledPassword
               isIconVisible
               name="password"
               maxLength={6}
               keyboardType="number-pad"
            />
            <ErrorMessage message={get('password')} />
         </View>
         <View>
            <Label>Confirmar Senha</Label>
            <ControlledPassword
               name="passwordConfirm"
               maxLength={6}
               keyboardType="number-pad"
            />
            <ErrorMessage message={get('passwordConfirm')} />
         </View>
      </SafeAreaView>
   );
}
