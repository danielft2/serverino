import { FormProvider } from 'react-hook-form';
import { SafeAreaView, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import { ProgessBar } from '@components/ProgressBar';

import { useRegisterForm } from './hooks/useRegisterForm';
import { STEPS_ENUM, useRegisterSteps } from './hooks/useRegisterSteps';

export function Register() {
   const {
      createRegisterForm,
      handleConfirmRegister,
      handleSubmit,
      setError,
      setValue,
      isValid,
      loading
   } = useRegisterForm();

   const {
      current_step,
      current_step_name,
      step_index,
      isLastStep,
      handleChangeStep
   } = useRegisterSteps();

   const { goBack } = useNavigation();

   function handleChange(step: STEPS_ENUM) {
      if (step === STEPS_ENUM.DADOS_ENDERECO) {
         setValue('endereco_step', true);
         setError('endereco', { message: '' });
      } else if (step === STEPS_ENUM.DADOS_BASICOS) {
         setValue('endereco_step', false, { shouldValidate: true });
      }

      handleChangeStep(step);
   }

   return (
      <SafeAreaView
         className="flex-1 space-y-6 pb-4 bg-blue_dark-900 relative"
         style={{ paddingTop: getStatusBarHeight() + 10 }}
      >
         <View className="mb-4 px-4">
            <Header
               onHandleClickButton={
                  step_index === 0 ? goBack : () => handleChange(step_index - 1)
               }
            >
               <Text
                  className="-mb-1 text-center font-heading_md text-gray-400"
                  style={{ fontSize: 12 }}
               >
                  {`Etapa ${step_index + 1}/2`}
               </Text>
               <Text className="text-center font-heading_md text-white">
                  {current_step_name}
               </Text>
            </Header>
         </View>
         <ProgessBar totalItems={2} totalItemsCompleted={step_index + 1} />

         <View className="flex-1 justify-between px-4">
            <FormProvider {...createRegisterForm}>{current_step}</FormProvider>

            <Button.Root
               variant="primary"
               onPress={
                  isLastStep
                     ? handleSubmit(handleConfirmRegister)
                     : () => handleChange(step_index + 1)
               }
               disabled={!isValid}
            >
               <Button.Text>
                  {isLastStep ? 'Confirmar' : 'Continunar'}
               </Button.Text>
            </Button.Root>
         </View>

         <Loading.background loading={loading} />
      </SafeAreaView>
   );
}
