import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { VariantProps, cva } from 'class-variance-authority';

import { cnMerge } from '@utils';
import { theme } from '../../../../tailwind.config';

const InputVariants = cva(
   'rounded-full border-[0.5px] px-6 font-reading text-gray-100 base:h-11 sm:h-[52px] lg:h-14',
   {
      variants: {
         variant: {
            valid: 'bg-blue_dark-300 border-gray-700 focus:border-green-800 focus:bg-inputs_state-validate',
            invalid:
               'border-red-800 bg-inputs_state-invalidate focus:border-red-800'
         }
      },
      defaultVariants: {
         variant: 'valid'
      }
   }
);

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
