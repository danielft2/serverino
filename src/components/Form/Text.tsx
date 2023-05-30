import { TextInput, TextInputProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';
import { inputStyle } from '@styles/inputs';

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
      <View className="w-full relative">
         <TextInput
            className={`${inputStyle.default} ${inputStyle.dinamic(
               error,
               editable,
               isLogin
            )}`}
            placeholderTextColor={theme.colors.gray[400]}
            style={{ fontSize: RFValue(12) }}
            editable={editable}
            {...rest}
         />
         {children && children}
      </View>
   );
}

function InputTextIcon({ children }: InputTextIconProps) {
   return (
      <View className="mr-2 absolute right-3 top-[35%] -translate-y-1/2">
         {children}
      </View>
   );
}

export const InputText = {
   Root: InputTextRoot,
   Icon: InputTextIcon
};
