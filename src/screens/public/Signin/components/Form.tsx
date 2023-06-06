import { TouchableOpacity, View, Text, Keyboard } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { FormProvider } from 'react-hook-form';
import { Masks } from 'react-native-mask-input';

import { Button } from '@components/Button';
import { FormControlled } from '@components/FormControlled';

import { useSignin } from '../hooks/useSignin';

export function Form() {
   const { createSigninForm, getValues, isValid, handleSignin, isLoading } =
      useSignin();

   return (
      <View className="w-full space-y-3  mt-12">
         <FormProvider {...createSigninForm}>
            <View className="space-y-3">
               <View>
                  <FormControlled.TextMask
                     name="telefone"
                     placeholder="Telefone"
                     maxLength={15}
                     keyboardType="phone-pad"
                     mask={Masks.BRL_PHONE}
                     isLogin
                  />
               </View>
               <View>
                  <FormControlled.Password
                     name="password"
                     isIconVisible
                     placeholder="Senha"
                     maxLength={6}
                     keyboardType="phone-pad"
                     isLogin
                  />
               </View>
            </View>
         </FormProvider>
         <TouchableOpacity>
            <Text
               className="text-green-800 font-heading_md ml-1"
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
