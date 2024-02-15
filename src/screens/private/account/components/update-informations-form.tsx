import { useEffect } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FormProvider } from 'react-hook-form';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Button } from '@components/ui/button';
import { ButtonBack } from '@components/ui/button-back';
import { InputLabel } from '@components/ui/Input/input-label';
import { InputControlled } from '@components/input-controlled';

import UpdateIlustatrion from '@assets/ilustrations/update-data.svg';
import { useUpdateAccount } from '../hooks/use-update-account';

interface UpdateInformationsFormProps {
  onUpdateResult: (result: boolean) => void;
}

export function UpdateInformationsForm({
  onUpdateResult
}: UpdateInformationsFormProps) {
  const {
    createUpdateInformationsForm,
    isValid,
    handleUpdate,
    isLoading,
    isUpdateSuccess
  } = useUpdateAccount();

  useEffect(() => {
    if (isUpdateSuccess) onUpdateResult(true);
  }, [onUpdateResult, isUpdateSuccess]);

  return (
    <View className="flex-1">
      <Animated.ScrollView
        entering={FadeIn.delay(100)}
        exiting={FadeOut.delay(100)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ButtonBack onPress={() => onUpdateResult(false)} />
        <View className="items-center">
          <UpdateIlustatrion width={RFValue(200)} height={RFValue(140)} />
        </View>
        <View className="mb-28 flex-1 justify-between">
          <FormProvider {...createUpdateInformationsForm}>
            <View className="space-y-3">
              <View>
                <InputLabel>Nome completo</InputLabel>
                <InputControlled.Text name="nome" editable={!isLoading} />
              </View>
              <View>
                <InputLabel>Email</InputLabel>
                <InputControlled.Text name="email" editable={!isLoading} />
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
      <View className="pt-4">
        <Button.Root
          disabled={!isValid}
          onPress={() => handleUpdate()}
          isLoading={isLoading}
        >
          <Button.Text>Confirmar Alterações</Button.Text>
        </Button.Root>
      </View>
    </View>
  );
}
