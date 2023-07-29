import { View } from 'react-native';

import { Form } from '@components/Form';
import { Input } from '@components/Form/InputText';
import { Loading } from '@components/Loading';
import { useAdress, useErrorMessageForm } from '@hooks/shared';

import { InputTextControll } from './InputText';

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
            <Form.Label required={required}>CEP</Form.Label>
            <InputTextControll
               name={cep ?? 'cep'}
               maxLength={8}
               keyboardType="number-pad"
               onBlur={() => searchAdressByCEP()}
            >
               {loading && (
                  <Input.IconRoot>
                     <Loading.Default />
                  </Input.IconRoot>
               )}
            </InputTextControll>
            <Form.ErrorMessage message={get(cep ?? 'cep')} />
         </View>
         <View>
            <Form.Label required={required}>UF</Form.Label>
            <InputTextControll name={uf ?? 'uf'} />
         </View>
         <View>
            <Form.Label required={required}>Cidade</Form.Label>
            <InputTextControll name={cidade ?? 'cidade'} />
         </View>
      </View>
   );
}
