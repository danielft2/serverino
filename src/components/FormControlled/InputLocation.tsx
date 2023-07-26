import { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { InputLocation } from '@components/Form/InputLocation';
import { useErrorMessageForm } from '@hooks/shared';
import { LocationDTO } from '@domain/dtos';

interface InputLocationControllProps {
   name: string;
}

export function InputLocationControll({ name }: InputLocationControllProps) {
   const { control, setValue, setError } = useFormContext();
   const { get } = useErrorMessageForm();

   const handleSetValues = useCallback(
      ({ data, error }: LocationDTO) => {
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
            <InputLocation
               onSearchCompleted={handleSetValues}
               values={value}
               error={get('endereco.cep')}
            />
         )}
      />
   );
}
