import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { VariantProps } from 'class-variance-authority';

import { cnMerge } from '@utils';
import { InputVariants } from '../InputVariants';
import { theme } from '../../../../tailwind.config';

interface InputTextMaskProps
   extends MaskInputProps,
      VariantProps<typeof InputVariants> {
   error?: boolean;
}

export function InputTextMask({
   className,
   variant,
   error,
   editable = true,
   ...rest
}: InputTextMaskProps) {
   return (
      <MaskInput
         className={cnMerge(
            InputVariants({
               className,
               variant: error ? 'invalid' : variant
            }),
            { 'bg-blue_dark-600': !editable }
         )}
         style={{ fontSize: RFValue(12) }}
         editable={editable}
         placeholderTextColor={theme.extend.colors.gray[200]}
         {...rest}
      />
   );
}
