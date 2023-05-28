import { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useErrorMessageForm } from '@hooks';
import { LocationInput } from '@components/Form/Location';
import { UserAdressModel } from '@domain/models/user-adress.model';

interface UserLocation {
   data: UserAdressModel;
   error: string;
}

interface UncontrolledLocationProps {
   name: string;
}

export function UncontrolledLocation({ name }: UncontrolledLocationProps) {
   const { control, setValue, setError } = useFormContext();
   const { get } = useErrorMessageForm();

   const handleSetValues = useCallback(
      ({ data, error }: UserLocation) => {
         if (!error) {
            setValue(
               'endereco',
               {
                  cep: data.cep,
                  cidade: data.cidade,
                  cidade_id: data.cidade_id,
                  uf: data.uf
               },
               { shouldValidate: true }
            );
         } else {
            setError('endereco.cep', { message: error });
            setValue(
               'endereco',
               { cep: '', cidade: '', cidade_id: '', uf: '' },
               { shouldValidate: false }
            );
         }
      },
      [setValue, setError]
   );

   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { value } }) => (
            <LocationInput.root
               onSearchCompleted={handleSetValues}
               values={value}
               error={get('endereco.cep')}
            />
         )}
      />
   );
}
