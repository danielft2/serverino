import { TouchableOpacity, View, Text, Keyboard } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@components/Button';

import { SinginScheme } from '@validation';
import { SigninDTO } from '@domain/dtos/signin.dto';

import { useSignin } from '../hooks/useSignin';
import { ControlledText } from '@components/FormControlled/ControlledText';
import { ControlledPassword } from '@components/FormControlled/ControlledPassword';

export function Form() {
   const createSigninForm = useForm<SigninDTO>({
      resolver: zodResolver(SinginScheme)
   });
   const {
      getValues,
      formState: { isValid }
   } = createSigninForm;
   const { handleSignin, isLoading } = useSignin();

   return (
      <View className="w-full space-y-3  mt-12">
         <FormProvider {...createSigninForm}>
            <View className="space-y-3">
               <View>
                  <ControlledText
                     name="telefone"
                     placeholder="Telefone"
                     maxLength={11}
                     keyboardType="phone-pad"
                     isLogin
                  />
               </View>
               <View>
                  <ControlledPassword
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
