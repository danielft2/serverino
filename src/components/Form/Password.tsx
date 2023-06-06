import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
   TextInput,
   TextInputProps,
   TouchableOpacity,
   View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { inputStyle } from '@styles/inputs';

import { theme } from '../../theme';

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
      <View className="relative w-full">
         <TextInput
            className={`${inputStyle.default} ${inputStyle.dinamic(
               error,
               editable,
               isLogin
            )}`}
            style={{ fontSize: RFValue(12) }}
            placeholderTextColor={theme.colors.gray[400]}
            secureTextEntry={!show}
            keyboardType="decimal-pad"
            editable={editable}
            {...rest}
         />
         {isIconVisible && (
            <TouchableOpacity
               className="absolute right-0 top-[30%] mr-5 -translate-y-1/2"
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
