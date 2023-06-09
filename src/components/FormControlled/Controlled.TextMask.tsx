import { Controller, useFormContext } from 'react-hook-form';
import { MaskInputProps } from 'react-native-mask-input';

import { InputTextMaskRoot } from '@components/Form/TextMask';

interface ControlledTextMaskProps extends MaskInputProps {
   name: string;
   isLogin?: boolean;
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
