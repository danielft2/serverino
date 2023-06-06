import { useState } from 'react';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { inputStyle } from '@styles/inputs';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../tailwind.config';

interface InputTextMaskRootProps extends MaskInputProps {
   error?: boolean;
   isLogin?: boolean;
}

export function InputTextMaskRoot({
   error,
   isLogin = false,
   editable = true,
   ...rest
}: InputTextMaskRootProps) {
   const [value, setValue] = useState('');

   return (
      <MaskInput
         className={`${inputStyle.default} ${inputStyle.dinamic(
            error,
            editable,
            isLogin
         )}`}
         style={{ fontSize: RFValue(12) }}
         value={value}
         onChangeText={setValue}
         editable={editable}
         placeholderTextColor={theme.extend.colors.gray[400]}
         {...rest}
      />
   );
}
