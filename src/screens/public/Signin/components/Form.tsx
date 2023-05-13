import { TouchableOpacity, View, Text, Keyboard } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@components/Button';

import { SinginScheme } from '@validation';
import { SigninDTO } from '@domain/dtos/signin.dto';

import { useSignin } from '../hooks/useSignin';
import { UnocontrolledText } from '@components/FormUncontrolled/UncontrolledText';
import { UnocontrolledPassword } from '@components/FormUncontrolled/UncontrolledPassword';

export function Form() {
   const createSigninForm = useForm<SigninDTO>({
      resolver: yupResolver(SinginScheme)
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
               <UnocontrolledText
                  name="telefone"
                  placeholder="Telefone"
                  maxLength={11}
                  keyboardType="phone-pad"
               />
               <UnocontrolledPassword
                  name="password"
                  isIconVisible
                  placeholder="Telefone"
                  maxLength={11}
                  keyboardType="phone-pad"
               />
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
