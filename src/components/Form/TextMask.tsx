import { useState } from 'react';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import clsx from 'clsx';

import { theme } from '../../../tailwind.config';

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
         className={clsx(
            'base:h-11 sm:h-[52px] bg-blue_dark-300 lg:h-14 opacity-100 rounded-full px-6 font-reading border-[0.5px] text-gray-100',
            {
               'bg-inputs_state-invalidate border-red-800 focus:bg-red-900 focus:border-red-800':
                  error,
               'border-gray-700 focus:bg-inputs_state-validate focus:border-green-800':
                  !error,
               'bg-blue_dark-600': !editable
               
            }
         )}
         style={{ fontSize: RFValue(12) }}
         value={value}
         onChangeText={setValue}
         editable={editable}
         placeholderTextColor={theme.extend.colors.gray[200]}
         {...rest}
      />
   );
}
