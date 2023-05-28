import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { InputText } from './Text';
import { Label } from './Label';
import { UserAdressModel } from '@domain/models/user-adress.model';
import { useAdress, useErrorMessageForm } from '@hooks';
import { ErrorMessage } from './ErrorMessage';
import { Loading } from '@components/Loading';

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
            <Label>CEP</Label>
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
            {cep.length === 8 && <ErrorMessage message={get('endereco.cep')} />}
         </View>
         <View>
            <Label>UF</Label>
            <InputText.Root
               value={
                  values?.uf && cep.length === 8 && !loading ? values.uf : ''
               }
               editable={!loading}
            />
         </View>
         <View>
            <Label>Cidade</Label>
            <InputText.Root
               value={
                  values?.cidade && cep.length === 8 && !loading
                     ? values.cidade
                     : ''
               }
               editable={!loading}
            />
         </View>
      </View>
   );
}

export const LocationInput = {
   root: LocationRoot
};
