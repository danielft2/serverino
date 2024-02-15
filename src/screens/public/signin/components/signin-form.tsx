import { TouchableOpacity, View, Text, Keyboard } from 'react-native';
import { FormProvider } from 'react-hook-form';
import { Masks } from 'react-native-mask-input';

import { Button } from '@components/ui/button';
import { InputControlled } from '@components/input-controlled';
import { useFontsize } from '@hooks';

import { useSignin } from '../hooks/use-signin';

export function SigninForm() {
  const { getFontsize } = useFontsize();

  const { createSigninForm, getValues, isValid, handleSignin, isLoading } =
    useSignin();

  return (
    <View className="mt-12 w-full space-y-2 sm:space-y-3">
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
            <InputControlled.Password name="password" placeholder="Senha" />
          </View>
        </View>
      </FormProvider>
      <TouchableOpacity>
        <Text
          className="ml-1 font-heading_md text-green-500"
          style={{ fontSize: getFontsize(11) }}
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
