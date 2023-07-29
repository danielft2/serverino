import { useEffect } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FormProvider } from 'react-hook-form';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Form } from '@components/Form';
import { InputControlled } from '@components/FormControlled';
import { Button } from '@components/Button';
import { ButtonBack } from '@components/ButtonBack';
import { useUpdateInformations } from '@hooks/screens';
import UpdateIlustatrion from '@assets/ilustrations/update-data.svg';

interface UpdateInformationsFormProps {
   onUpdate: (status: boolean) => void;
}

export function UpdateInformationsForm({
   onUpdate
}: UpdateInformationsFormProps) {
   const {
      createUpdateInformationsForm,
      isValid,
      handleUpdate,
      isLoading,
      isUpdateSuccess
   } = useUpdateInformations();

   useEffect(() => {
      if (isUpdateSuccess) onUpdate(true);
   }, [onUpdate, isUpdateSuccess]);

   return (
      <View className="flex-1 space-y-4">
         <Animated.ScrollView
            entering={FadeIn.delay(100)}
            exiting={FadeOut.delay(100)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
         >
            <ButtonBack onPress={() => onUpdate(false)} />
            <View className="items-center">
               <UpdateIlustatrion width={RFValue(200)} height={RFValue(140)} />
            </View>
            <View className="mb-32 flex-1 justify-between">
               <FormProvider {...createUpdateInformationsForm}>
                  <View className="space-y-3">
                     <View>
                        <Form.Label>Nome completo</Form.Label>
                        <InputControlled.Text
                           name="nome"
                           editable={!isLoading}
                        />
                     </View>
                     <View>
                        <Form.Label>Email</Form.Label>
                        <InputControlled.Text
                           name="email"
                           editable={!isLoading}
                        />
                     </View>
                     <View>
                        <InputControlled.Adress
                           cep="cep"
                           uf="uf"
                           cidade="cidade"
                           cidade_id="cidade_id"
                        />
                     </View>
                  </View>
               </FormProvider>
            </View>
         </Animated.ScrollView>
         <Button.Root
            disabled={!isValid}
            onPress={() => handleUpdate()}
            isLoading={isLoading}
         >
            <Button.Text>Confirmar Alterações</Button.Text>
         </Button.Root>
      </View>
   );
}
