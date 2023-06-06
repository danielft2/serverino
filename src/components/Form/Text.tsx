import { TextInput, TextInputProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { inputStyle } from '@styles/inputs';

import { theme } from '../../theme';

export interface InputTextProps extends TextInputProps {
   children?: React.ReactNode;
   error?: boolean;
   isLogin?: boolean;
}

interface InputTextIconProps {
   children: React.ReactNode;
}

function InputTextRoot({
   children,
   error = false,
   editable = true,
   isLogin,
   ...rest
}: InputTextProps) {
   return (
      <View className="relative w-full">
         <TextInput
            className={`${inputStyle.default} ${inputStyle.dinamic(
               error,
               editable,
               isLogin
            )}`}
            style={{ fontSize: RFValue(12) }}
            placeholderTextColor={theme.colors.gray[400]}
            editable={editable}
            {...rest}
         />
         {children && children}
      </View>
   );
}

function InputTextIcon({ children }: InputTextIconProps) {
   return (
      <View className="absolute right-3 top-[35%] mr-2 -translate-y-1/2">
         {children}
      </View>
   );
}

export const InputText = {
   Root: InputTextRoot,
   Icon: InputTextIcon
};
