import { useState } from 'react';
import {
   TextInput,
   TextInputProps,
   TouchableOpacity,
   View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../theme';
import clsx from 'clsx';

export interface InputPasswordProps extends TextInputProps {
   children?: React.ReactNode;
   error?: boolean;
   isIconVisible?: boolean;
   isLogin?: boolean;
}

function InputPasswordRoot({
   error = false,
   isIconVisible = false,
   editable = true,
   isLogin = false,
   ...rest
}: InputPasswordProps) {
   const [show, setShow] = useState(false);
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
                  'bg-zinc-800': isLogin,
                  'opacity-50': !editable
               }
            )}
            style={{ fontSize: RFValue(12) }}
            placeholderTextColor={theme.colors.gray[200]}
            secureTextEntry={!show}
            keyboardType="decimal-pad"
            editable={editable}
            {...rest}
         />
         {isIconVisible && (
            <TouchableOpacity
               className="absolute right-0 top-[30%] -translate-y-1/2 mr-5"
               hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
               onPress={() => setShow(!show)}
            >
               <MaterialCommunityIcons
                  name={show ? 'eye' : 'eye-off'}
                  size={RFValue(20)}
                  color={theme.colors.gray[400]}
               />
            </TouchableOpacity>
         )}
      </View>
   );
}

export const InputPassword = {
   Root: InputPasswordRoot
};
