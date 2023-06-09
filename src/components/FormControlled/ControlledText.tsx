import { Controller, useFormContext } from 'react-hook-form';

import { InputText, InputTextProps } from '@components/Form/Text';

interface ControlledTextProps extends InputTextProps {
   name: string;
}

export function ControlledText({ name, ...rest }: ControlledTextProps) {
   const { control } = useFormContext();

   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { onChange, value } }) => (
            <InputText.Root {...rest} onChangeText={onChange} value={value} />
         )}
      />
   );
}
