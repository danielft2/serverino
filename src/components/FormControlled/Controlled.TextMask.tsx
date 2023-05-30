import { InputTextMaskRoot } from '@components/Form/TextMask';
import { Controller, useFormContext } from 'react-hook-form';
import { MaskInputProps } from 'react-native-mask-input';

interface ControlledTextMaskProps extends MaskInputProps {
   name: string;
}

export function ControlledTextMask({ name, ...rest }: ControlledTextMaskProps) {
   const { control } = useFormContext();
   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { onChange, value } }) => (
            <InputTextMaskRoot
               onChangeText={onChange}
               value={value}
               {...rest}
            />
         )}
      />
   );
}
