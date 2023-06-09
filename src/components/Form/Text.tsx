import { TextInput, TextInputProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';
import clsx from 'clsx';

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
   ...rest
}: InputTextProps) {
   return (
      <View className="w-full relative">
         <TextInput
            className={clsx(
               'base:h-11 sm:h-[52px] bg-zinc-900 lg:h-14 rounded-full px-6 font-reading border-[0.5px] text-gray-100',
               {
                  'bg-inputs_state-invalidate border-red-800 focus:bg-red-900 focus:border-red-800':
                     error,
                  'border-gray-700 focus:bg-inputs_state-validate focus:border-green-800':
                     !error,
                  'opacity-50': !editable
               }
            )}
            style={{ fontSize: RFValue(12) }}
            placeholderTextColor={theme.colors.gray[200]}
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
