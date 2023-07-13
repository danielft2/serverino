import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Loading } from '@components/Loading';
import { UserAdressModel } from '@domain/models/user-adress.model';
import { useAdress, useErrorMessageForm } from '@hooks/shared';

import { InputErrorMessage } from '../ErrorMessage';
import { InputLabel } from '../Label';
import { Input } from '../InputText';

interface InputLocationProps {
   onSearchCompleted: (data: UserLocation) => void;
   values: UserAdressModel;
   error: string;
}

interface UserLocation {
   data: UserAdressModel;
   error: string;
}

export function InputLocation({
   onSearchCompleted,
   values
}: InputLocationProps) {
   const [cep, setCep] = useState('');
   const { get } = useErrorMessageForm();
   const { searchAdressByCEP, loading } = useAdress({ onSearchCompleted });

   useEffect(() => {
      if (cep.length === 8) searchAdressByCEP(cep);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [cep]);

   return (
      <View className="space-y-3">
         <View>
            <InputLabel required>CEP</InputLabel>
            <Input.Root
               onChangeText={setCep}
               value={cep}
               maxLength={8}
               editable={!loading}
            >
               {loading && (
                  <Input.IconRoot>
                     <Loading.default />
                  </Input.IconRoot>
               )}
            </Input.Root>
            {cep.length === 8 && (
               <InputErrorMessage message={get('endereco.cep')} />
            )}
         </View>
         <View>
            <InputLabel required>UF</InputLabel>
            <Input.Root
               value={
                  values?.uf && cep.length === 8 && !loading ? values.uf : ''
               }
               editable={false}
            />
         </View>
         <View>
            <InputLabel required>Cidade</InputLabel>
            <Input.Root
               value={
                  values?.cidade && cep.length === 8 && !loading
                     ? values.cidade
                     : ''
               }
               editable={false}
            />
         </View>
      </View>
   );
}
