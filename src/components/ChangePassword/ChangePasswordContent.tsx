import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FormProvider } from 'react-hook-form';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Gradient } from '@components/Gradient';
import { ButtonBack } from '@components/ButtonBack';
import { Button } from '@components/Button';
import { useChangePassword } from '@hooks/components';
import { useFontsize } from '@hooks/shared';
import ChangePasswordIlus from '@assets/ilustrations/change-password.svg';

import { ChangePasswordForm } from './ChangePasswordForm';
import { ChangePasswordSuccess } from './ChangePasswordSuccess';

interface ChangePasswordContentProps {
   onClose: () => void;
}

export function ChangePasswordContent({ onClose }: ChangePasswordContentProps) {
   const {
      createChangePasswordForm,
      handleChangePassword,
      isValid,
      isLoading,
      isChangePasswordSuccess
   } = useChangePassword();
   const { getFontsize } = useFontsize();

   if (isChangePasswordSuccess)
      return <ChangePasswordSuccess onClose={onClose} />;

   function handleChangeConfirm() {
      Keyboard.dismiss();
      handleChangePassword();
   }

   return (
      <>
         <Gradient />
         <Animated.ScrollView
            entering={FadeIn.delay(150)}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
         >
            <ButtonBack onPress={onClose} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View
                  className="flex-1 justify-between"
                  style={{ marginBottom: RFPercentage(40) }}
               >
                  <View className="w-full">
                     <View className="self-center">
                        <ChangePasswordIlus
                           width={RFValue(180)}
                           height={RFValue(180)}
                        />
                     </View>
                     <Text
                        className="mb-6 mt-4 text-gray-100"
                        style={{ fontSize: getFontsize(12) }}
                     >
                        Sua nova senha deve conter 6 caracteres e ser diferentes
                        das senhas anteriores.
                     </Text>

                     <FormProvider {...createChangePasswordForm}>
                        <ChangePasswordForm />
                     </FormProvider>
                  </View>
               </View>
            </TouchableWithoutFeedback>
         </Animated.ScrollView>
         <Button.Root
            disabled={!isValid}
            isLoading={isLoading}
            onPress={handleChangeConfirm}
         >
            <Button.Text>Alterar senha</Button.Text>
         </Button.Root>
      </>
   );
}
