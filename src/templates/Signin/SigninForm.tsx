import { TouchableOpacity, View, Text, Keyboard } from 'react-native';
import { FormProvider } from 'react-hook-form';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';

import { Button } from '@components/Button';
import { InputControlled } from '@components/FormControlled';
import { useSignin } from '@hooks/screens/Signin/useSignin';

export function SigninForm() {
   const { createSigninForm, getValues, isValid, handleSignin, isLoading } =
      useSignin();

   return (
      <View className="mt-12 w-full space-y-3">
         <FormProvider {...createSigninForm}>
            <View className="space-y-3">
               <View>
                  <InputControlled.TextMask
                     name="telefone"
                     placeholder="Telefone"
                     maxLength={15}
                     keyboardType="phone-pad"
                     mask={Masks.BRL_PHONE}
                  />
               </View>
               <View>
                  <InputControlled.Password
                     name="password"
                     placeholder="Senha"
                  />
               </View>
            </View>
         </FormProvider>
         <TouchableOpacity>
            <Text
               className="ml-1 font-heading_md text-green-700"
               style={{ fontSize: RFValue(11) }}
            >
               Esqueceu a senha?
            </Text>
         </TouchableOpacity>

         <View>
            <Button.Root
               variant="primary"
               disabled={!isValid}
               isLoading={isLoading}
               onPress={() => {
                  Keyboard.dismiss(), handleSignin(getValues());
               }}
            >
               <Button.Text>Entrar</Button.Text>
            </Button.Root>
         </View>
      </View>
   );
}
