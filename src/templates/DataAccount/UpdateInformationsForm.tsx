import { View } from 'react-native';
import { FormProvider } from 'react-hook-form';

import { Form } from '@components/Form';
import { InputControlled } from '@components/FormControlled';
import { useUpdateInformations } from '@hooks/screens';
import { Button } from '@components/Button';
import { useEffect } from 'react';

interface UpdateInformationsFormProps {
   onUpdateEnd: () => void;
}

export function UpdateInformationsForm({
   onUpdateEnd
}: UpdateInformationsFormProps) {
   const {
      createUpdateInformationsForm,
      isValid,
      isDirty,
      handleUpdate,
      isLoading,
      isSuccess
   } = useUpdateInformations();

   useEffect(() => {
      if (isSuccess) onUpdateEnd();
   }, [onUpdateEnd, isSuccess]);

   return (
      <View className="flex-1 justify-between">
         <FormProvider {...createUpdateInformationsForm}>
            <View className="space-y-3">
               <View>
                  <Form.Label>Nome completo</Form.Label>
                  <InputControlled.Text name="nome" />
               </View>
               <View>
                  <Form.Label>Email</Form.Label>
                  <InputControlled.Text name="email" />
               </View>
               <View>
                  <InputControlled.Location name="endereco" />
               </View>
            </View>
         </FormProvider>
         <Button.Root
            disabled={!isDirty || !isValid}
            onPress={() => handleUpdate()}
            isLoading={isLoading}
         >
            <Button.Text>Confirmar Alterações</Button.Text>
         </Button.Root>
      </View>
   );
}
