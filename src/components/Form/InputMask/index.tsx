import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { VariantProps, cva } from 'class-variance-authority';

import { cnMerge } from '@utils';
import { useFontsize } from '@hooks/shared';
import { theme } from '../../../theme';

const InputVariants = cva(
   'rounded-full border-[0.5px] base:px-5 md:px-6 font-reading text-gray-100 base:h-11 sm:h-[52px] lg:h-14',
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
   const { getFontsize } = useFontsize();

   return (
      <MaskInput
         className={cnMerge(
            InputVariants({
               className,
               variant: error ? 'invalid' : variant
            }),
            { 'bg-blue_dark-600': !editable }
         )}
         style={{ fontSize: getFontsize(12) }}
         editable={editable}
         placeholderTextColor={theme.colors.gray[200]}
         {...rest}
      />
   );
}
