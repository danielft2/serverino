import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BaseToastProps } from 'react-native-toast-message';

import { theme } from '../../theme';

import clsx from 'clsx';
import { AlertCircle } from 'lucide-react-native';

interface ToastMessageProps {
   msg: string;
   type: 'sucess' | 'error' | 'base';
}

export function ToastMessage({ msg, type }: ToastMessageProps) {
   return (
      <View
         className={clsx(
            'h-10 w-auto flex-row items-center justify-center space-x-1 rounded-md px-4',
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
