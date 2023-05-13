import { TextInput, TextInputProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';

export interface InputTextProps extends TextInputProps {
   children?: React.ReactNode;
   error?: boolean;
}

interface InputTextIconProps {
   children: React.ReactNode;
}

function InputTextRoot({
   children,
   error = false,
   editable,
   ...rest
}: InputTextProps) {
   return (
      <View className="w-full relative">
         <TextInput
            className={`
               base:h-11 sm:h-[52px] lg:h-14 rounded-full px-6 font-reading border-[0.5px] text-gray-300
               ${
                  error
                     ? 'bg-red-900 border-red-800 focus:bg-red-900 focus:border-red-800'
                     : 'bg-zinc-800 border-gray-700 focus:bg-green-900 focus:border-green-800'
               }
               ${!editable ? 'opacity-100' : 'opacity-50'}

            `}
            placeholderTextColor={theme.colors.gray[400]}
            style={{ fontSize: RFValue(12) }}
            {...rest}
         />
         {children && children}
      </View>
   );
}

function InputTextIcon({ children }: InputTextIconProps) {
   return <View className="mr-2">{children}</View>;
}

export const InputText = {
   Root: InputTextRoot,
   Icon: InputTextIcon
};
