import { View, Text } from 'react-native';

import { AlertCircle } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BaseToastProps } from 'react-native-toast-message';
import clsx from 'clsx';

import { theme } from '../../theme';

interface ToastMessageProps {
   msg: string;
   type: 'sucess' | 'error' | 'base';
}

export function ToastMessage({ msg, type }: ToastMessageProps) {
   return (
      <View
         className={clsx(
            'flex-row space-x-1 justify-center items-center w-auto h-10 px-4 rounded-md',
            {
               'bg-red-200': type === 'error',
               'bg-gray-800': type === 'base'
            }
         )}
      >
         <AlertCircle size={RFValue(14)} color={theme.colors.red[700]} />
         <Text
            className={clsx('', {
               'text-red-800': type === 'error',
               'text-gray-300': type === 'base'
            })}
            style={{ fontSize: RFValue(12) }}
         >
            {msg}
         </Text>
      </View>
   );
}

export const toastConfig = {
   error: ({ text2 }: BaseToastProps) => (
      <ToastMessage msg={text2} type="error" />
   )
};
