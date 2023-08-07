import { TextInput, TextInputProps, View } from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';

import { useFontsize } from '@hooks/shared';
import { cnMerge } from '@utils';
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

export interface InputTextRootProps
   extends TextInputProps,
      VariantProps<typeof InputVariants> {
   children?: React.ReactNode;
   error?: boolean;
}

export function InputTextRoot({
   children,
   className,
   variant,
   error = false,
   editable = true,
   ...rest
}: InputTextRootProps) {
   const { getFontsize } = useFontsize();

   return (
      <View className="relative w-full">
         <TextInput
            className={cnMerge(
               InputVariants({
                  className,
                  variant: error ? 'invalid' : variant
               }),
               { 'bg-blue_dark-600': !editable }
            )}
            style={{ fontSize: getFontsize(11.8) }}
            placeholderTextColor={theme.colors.gray[200]}
            editable={editable}
            {...rest}
         />
         {children}
      </View>
   );
}
