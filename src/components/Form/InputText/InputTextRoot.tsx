import { TextInput, TextInputProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { VariantProps } from 'class-variance-authority';

import { cnMerge } from '@utils';
import { theme } from '../../../theme';
import { InputVariants } from '../InputVariants';

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
   error,
   editable = true,
   ...rest
}: InputTextRootProps) {
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
            style={{ fontSize: RFValue(12) }}
            placeholderTextColor={theme.colors.gray[200]}
            editable={editable}
            {...rest}
         />
         {children}
      </View>
   );
}
