import { useEffect } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FormProvider } from 'react-hook-form';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Form } from '@components/Form';
import { InputControlled } from '@components/FormControlled';
import { Button } from '@components/Button';
import { useUpdateInformations } from '@hooks/screens';
import UpdateIlustatrion from '@assets/ilustrations/update-data.svg';

interface UpdateInformationsFormProps {
   onUpdateSucess: () => void;
}

export function UpdateInformationsForm({
   onUpdateSucess
}: UpdateInformationsFormProps) {
   const {
      createUpdateInformationsForm,
      isValid,
      handleUpdate,
      isLoading,
      isUpdateSuccess
   } = useUpdateInformations();

   useEffect(() => {
      if (isUpdateSuccess) onUpdateSucess();
   }, [onUpdateSucess, isUpdateSuccess]);

   return (
      <Animated.ScrollView
         entering={FadeIn.delay(100)}
         exiting={FadeOut.delay(100)}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{ flex: 1 }}
      >
         <View className="items-center">
            <UpdateIlustatrion width={RFValue(200)} height={RFValue(140)} />
         </View>
         <View className="flex-1 justify-between">
            <FormProvider {...createUpdateInformationsForm}>
               <View className="space-y-3">
                  <View>
                     <Form.Label>Nome completo</Form.Label>
                     <InputControlled.Text name="nome" editable={!isLoading} />
                  </View>
                  <View>
                     <Form.Label>Email</Form.Label>
                     <InputControlled.Text name="email" editable={!isLoading} />
                  </View>
                  <View>
                     <InputControlled.Location name="endereco" />
                  </View>
               </View>
            </FormProvider>
            <Button.Root
               disabled={!isValid}
               onPress={() => handleUpdate()}
               isLoading={isLoading}
            >
               <Button.Text>Confirmar Alterações</Button.Text>
            </Button.Root>
         </View>
      </Animated.ScrollView>
   );
}
