import { Controller, useFormContext } from 'react-hook-form';
import { InputPassword, InputPasswordProps } from '@components/Form/Password';

interface UnocontrolledPasswordProps extends InputPasswordProps {
   name: string;
}

export function UnocontrolledPassword({
   name,
   ...rest
}: UnocontrolledPasswordProps) {
   const { control } = useFormContext();

   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { onChange, value } }) => (
            <InputPassword.Root
               {...rest}
               onChangeText={onChange}
               value={value}
            />
         )}
      />
   );
}
