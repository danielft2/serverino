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

export interface InputPasswordProps extends TextInputProps {
   children?: React.ReactNode;
   error?: boolean;
   isIconVisible: boolean;
}

function InputPasswordRoot({
   error = false,
   isIconVisible,
   ...rest
}: InputPasswordProps) {
   const [show, setShow] = useState(false);
   return (
      <View className="w-full relative">
         <TextInput
            className={`
               base:h-11 sm:h-[52px] lg:h-14 rounded-full px-6 border-[0.5px] text-gray-300
               ${
                  error
                     ? 'bg-red-900 border-red-800 focus:bg-red-900 focus:border-red-800'
                     : 'bg-zinc-800 border-gray-700 focus:bg-green-900 focus:border-green-800'
               }
            `}
            style={{ fontSize: RFValue(12) }}
            secureTextEntry={!show}
            keyboardType="decimal-pad"
            placeholderTextColor={theme.colors.gray[400]}
            {...rest}
         />
         {isIconVisible && (
            <TouchableOpacity
               className="absolute right-0 top-[30%] mr-5"
               hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
               onPress={() => setShow(!show)}
            >
               <MaterialCommunityIcons
                  name={show ? 'eye' : 'eye-off'}
                  size={RFValue(18)}
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
