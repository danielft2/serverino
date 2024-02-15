import { View, Text } from 'react-native';
import { BaseToastProps, ToastProps } from 'react-native-toast-message';
import { AlertCircle } from 'lucide-react-native';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';

import { cnMerge } from '@utils/helpers';
import { useFontsize } from '@hooks';

export const toastMessageVariants = cva(
  'h-12 w-auto flex-row items-center justify-center space-x-1 rounded-md px-4',
  {
    variants: {
      variant: {
        basic: 'bg-blue_dark-300',
        error: 'bg-red-200'
      }
    },
    defaultVariants: {
      variant: 'basic'
    }
  }
);

interface ToastMessageProps
  extends ToastProps,
    VariantProps<typeof toastMessageVariants> {
  msg: string;
}

export const toastConfig = {
  error: ({ text2, ...rest }: BaseToastProps) => (
    <ToastMessage msg={text2} variant="error" {...rest} />
  ),

  basic: ({ text2, ...rest }: BaseToastProps) => (
    <ToastMessage msg={text2} variant="basic" {...rest} />
  )
};

export function ToastMessage({ msg, variant, ...rest }: ToastMessageProps) {
  const { getFontsize } = useFontsize();

  const style = clsx('text-gray-50', {
    'text-red-800': variant === 'error'
  });
  return (
    <View className={cnMerge(toastMessageVariants({ variant }), { ...rest })}>
      <AlertCircle size={getFontsize(14)} className={style} />
      <Text className={style} style={{ fontSize: getFontsize(12) }}>
        {msg}
      </Text>
    </View>
  );
}