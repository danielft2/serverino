import { Input } from '@components/Form/InputText';
import { InputTextRootProps } from '@components/Form/InputText/InputTextRoot';
import { Controller, useFormContext } from 'react-hook-form';

interface InputTextControllProps extends InputTextRootProps {
   name: string;
}

export function InputTextControll({ name, ...rest }: InputTextControllProps) {
   const { control } = useFormContext();

   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { onChange, value } }) => (
            <Input.Root onChangeText={onChange} value={value} {...rest} />
         )}
      />
   );
}
