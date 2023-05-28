import { Controller, useFormContext } from 'react-hook-form';
import { InputText, InputTextProps } from '@components/Form/Text';

interface UnocontrolledTextProps extends InputTextProps {
   name: string;
}

export function UnocontrolledText({ name, ...rest }: UnocontrolledTextProps) {
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
