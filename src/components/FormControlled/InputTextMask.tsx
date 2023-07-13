import { InputTextMask } from '@components/Form/InputMask';
import { Controller, useFormContext } from 'react-hook-form';
import { MaskInputProps } from 'react-native-mask-input';

interface InputTextMaskControllProps extends MaskInputProps {
   name: string;
   isLogin?: boolean;
}

export function InputTextMaskControll({
   name,
   ...rest
}: InputTextMaskControllProps) {
   const { control } = useFormContext();
   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { onChange, value } }) => (
            <InputTextMask onChangeText={onChange} value={value} {...rest} />
         )}
      />
   );
}
