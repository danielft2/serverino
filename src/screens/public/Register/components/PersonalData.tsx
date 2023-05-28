import { SafeAreaView, View } from 'react-native';
import { Label } from '@components/Form/Label';
import { UnocontrolledPassword } from '@components/FormUncontrolled/UncontrolledPassword';
import { UnocontrolledText } from '@components/FormUncontrolled/UncontrolledText';
import { ErrorMessage } from '@components/Form/ErrorMessage';
import { useErrorMessageForm } from '@hooks';

export function PersonalData() {
   const { get } = useErrorMessageForm();

   return (
      <SafeAreaView className="space-y-4">
         <View>
            <Label>Nome completo</Label>
            <UnocontrolledText name="nome" />
            <ErrorMessage message={get('nome')} />
         </View>
         <View>
            <Label>Telefone</Label>
            <UnocontrolledText name="telefone" maxLength={11} />
            <ErrorMessage message={get('telefone')} />
         </View>
         <View>
            <Label>Email</Label>
            <UnocontrolledText name="email" />
         </View>
         <View>
            <Label>Senha</Label>
            <UnocontrolledPassword
               isIconVisible
               name="password"
               maxLength={6}
               keyboardType="number-pad"
            />
            <ErrorMessage message={get('password')} />
         </View>
         <View>
            <Label>Confirmar Senha</Label>
            <UnocontrolledPassword
               name="passwordConfirm"
               maxLength={6}
               keyboardType="number-pad"
            />
            <ErrorMessage message={get('passwordConfirm')} />
         </View>
      </SafeAreaView>
   );
}
