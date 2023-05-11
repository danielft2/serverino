import { Button } from '@components/Button';
import { InputPassword } from '@components/Form/Password';
import { InputText } from '@components/Form/Text';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { TouchableOpacity, View, Text } from 'react-native';
import { SingInScheme } from '../validations/scheme';
import { SigninDTO } from '@domain/dtos/signin.dto';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSignin } from '../hooks/useSignin';

export function Form() {
   const createSigninForm = useForm<SigninDTO>({
      resolver: yupResolver(SingInScheme)
   });
   const {
      control,
      getValues,
      formState: { isValid }
   } = createSigninForm;
   const { handleSignin, isLoading } = useSignin();

   return (
      <View className="w-full space-y-3 mt-12">
         <View>
            <Controller
               name="telefone"
               control={control}
               render={({ field: { onChange, value } }) => (
                  <InputText.Root
                     placeholder="Telefone"
                     maxLength={11}
                     keyboardType="phone-pad"
                     onChangeText={onChange}
                     value={value}
                  />
               )}
            />
         </View>
         <View>
            <Controller
               control={control}
               name="password"
               render={({ field: { onChange, value } }) => (
                  <InputPassword.Root
                     placeholder="Senha"
                     isIconVisible
                     maxLength={6}
                     onChangeText={onChange}
                     value={value}
                  />
               )}
            />
         </View>
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
               onPress={() => handleSignin(getValues())}
            >
               <Button.Text>Entrar</Button.Text>
            </Button.Root>
         </View>
      </View>
   );
}
