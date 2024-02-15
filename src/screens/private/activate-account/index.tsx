import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Gradient } from '@components/ui/gradient';
import { Header } from '@components/header';
import { Loading } from '@components/ui/loading';
import { useAuth, useFontsize, useSession } from '@hooks';
import { hidePhone } from '@utils/helpers';

import Logo from '@assets/logo.svg';
import OtpMessage from '@assets/ilustrations/otp-message.svg';

import { OtpInputs } from './components/otp-inputs';
import { useActivateAccount } from './hooks/use-activate-account';

export function ActivateAccount() {
  const { user } = useSession();
  const { signOut } = useAuth();
  const { getFontsize } = useFontsize();
  const { handleValidateCodeOtp, isLoading } = useActivateAccount();

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View
          className="relative flex-1 px-3"
          style={{ paddingTop: RFPercentage(5) }}
          entering={FadeIn.delay(200)}
        >
          <Gradient />
          <Header onHandleClickButton={signOut}>
            <Logo
              width={RFValue(110)}
              height={RFValue(40)}
              className="self-center"
            />
          </Header>
          <View className="mt-4 items-center">
            <OtpMessage width={RFValue(160)} height={RFValue(180)} />
            <View className="mb-4 mt-6 items-center">
              <Text
                className="font-heading_sm text-white"
                style={{ fontSize: getFontsize(15) }}
              >
                Ative sua conta antes de começar.
              </Text>
              <Text
                className="-mt-1 mb-3 text-center text-gray-100"
                style={{ fontSize: getFontsize(12) }}
              >
                Nós enviamos um código de 4 dígitos para o número informado no
                cadastro.{' '}
              </Text>
              <Text
                className="font-heading_md text-green-300"
                style={{ fontSize: getFontsize(12) }}
              >
                {hidePhone(user.telefone)}
              </Text>
            </View>
            <OtpInputs onOtpFilled={handleValidateCodeOtp} />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Loading.Background loading={isLoading} />
    </>
  );
}
