import { View } from 'react-native';

import { Input } from '@components/ui/Input/input-text';
import { InputLabel } from '@components/ui/Input/input-label';
import { InputErrorMessage } from '@components/ui/Input/input-error-message';
import { Loading } from '@components/ui/loading';

import { useAdress, useErrorMessageForm } from '@hooks';

import { InputTextControll } from './Input-text';

interface InputAdressControllProps {
  cep: string;
  uf: string;
  cidade: string;
  cidade_id: string;
  required?: boolean;
}

export function InputAdressControll({
  cep,
  uf,
  cidade,
  cidade_id,
  required = false
}: InputAdressControllProps) {
  const { searchAdressByCEP, loading } = useAdress({
    cep,
    uf,
    cidade,
    cidade_id
  });
  const { get } = useErrorMessageForm();

  return (
    <View className="space-y-3">
      <View>
        <InputLabel required={required}>CEP</InputLabel>
        <InputTextControll
          name={cep ?? 'cep'}
          maxLength={8}
          keyboardType="number-pad"
          onBlur={() => searchAdressByCEP()}
          editable={!loading}
        >
          {loading && (
            <Input.IconRoot>
              <Loading.Default />
            </Input.IconRoot>
          )}
        </InputTextControll>
        <InputErrorMessage message={get(cep ?? 'cep')} />
      </View>
      <View>
        <InputLabel required={required}>UF</InputLabel>
        <InputTextControll name={uf ?? 'uf'} editable={false} />
      </View>
      <View>
        <InputLabel required={required}>Cidade</InputLabel>
        <InputTextControll name={cidade ?? 'cidade'} editable={false} />
      </View>
    </View>
  );
}
