import { FormProvider } from 'react-hook-form';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import { ProgessBar } from '@components/ProgressBar';
import { useRegisterSteps, useRegisterForm } from '@hooks/screens';
import { STEPS_ENUM } from '@hooks/screens/useRegisterSteps';
import { useLazy } from '@hooks/shared';

export function Register() {
   const { render } = useLazy();
   const { goBack } = useNavigation();

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

   function handleChange(step: STEPS_ENUM) {
      if (step === STEPS_ENUM.DADOS_ENDERECO) {
         setValue('endereco_step', true);
         setError('endereco', { message: '' });
      } else if (step === STEPS_ENUM.DADOS_BASICOS) {
         setValue('endereco_step', false, { shouldValidate: true });
      }

      handleChangeStep(step);
   }

   if (!render) return <Loading.Background loading={true} />;

   return (
      <SafeAreaView
         className="relative flex-1 space-y-6 bg-blue_dark-900 pb-4"
         style={{ paddingTop: getStatusBarHeight() + 10 }}
      >
         <View className="mb-4 px-4">
            <Header
               onHandleClickButton={
                  step_index === 0 ? goBack : () => handleChange(step_index - 1)
               }
            >
               <Text
                  className="-mb-1 text-center font-heading_md text-gray-200"
                  style={{ fontSize: 13 }}
               >
                  {`Etapa ${step_index + 1}/2`}
               </Text>
               <Text className="text-center font-heading_md text-white">
                  {current_step_name}
               </Text>
            </Header>
         </View>
         <ProgessBar totalItems={2} totalItemsCompleted={step_index + 1} />

         <ScrollView>
            <View className="px-4 pb-48">
               <FormProvider {...createRegisterForm}>
                  {current_step}
               </FormProvider>
            </View>
         </ScrollView>

         <View className="px-4">
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
                  {isLastStep ? 'Confirmar' : 'Continuar'}
               </Button.Text>
            </Button.Root>
         </View>
         <Loading.Background loading={loading} />
      </SafeAreaView>
   );
}
