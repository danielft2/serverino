import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { inputStyle } from '@styles/inputs';
import { useState } from 'react';

interface InputTextMaskRootProps extends MaskInputProps {
   error?: boolean;
}

export function InputTextMaskRoot({
   error,
   editable = true,
   ...rest
}: InputTextMaskRootProps) {
   const [value, setValue] = useState('');

   return (
      <MaskInput
         className={`${inputStyle.default} ${inputStyle.dinamic(
            error,
            editable
         )}`}
         value={value}
         onChangeText={setValue}
         editable={editable}
         {...rest}
      />
   );
}
