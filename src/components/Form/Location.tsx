import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { InputText } from './Text';
import { UserAdressModel } from '@domain/models/user-adress.model';
import { useAdress, useErrorMessageForm } from '@hooks';
import { Loading } from '@components/Loading';
import { InputLabel } from './Label';
import { InputErrorMessage } from './ErrorMessage';

interface LocationInputProps {
   onSearchCompleted: (data: UserLocation) => void;
   values: UserAdressModel;
   error: string;
}

interface UserLocation {
   data: UserAdressModel;
   error: string;
}

function LocationRoot({ onSearchCompleted, values }: LocationInputProps) {
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
            <InputLabel>CEP</InputLabel>
            <InputText.Root
               onChangeText={setCep}
               value={cep}
               maxLength={8}
               editable={!loading}
            >
               {loading && (
                  <InputText.Icon>
                     <Loading.default />
                  </InputText.Icon>
               )}
            </InputText.Root>
            {cep.length === 8 && (
               <InputErrorMessage message={get('endereco.cep')} />
            )}
         </View>
         <View>
            <InputLabel>UF</InputLabel>
            <InputText.Root
               value={
                  values?.uf && cep.length === 8 && !loading ? values.uf : ''
               }
               editable={false}
            />
         </View>
         <View>
            <InputLabel>Cidade</InputLabel>
            <InputText.Root
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

export const LocationInput = {
   root: LocationRoot
};
