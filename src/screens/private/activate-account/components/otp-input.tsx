import { Text, Pressable } from 'react-native';
import { styled } from 'nativewind';
import clsx from 'clsx';

import { useFontsize } from '@hooks';

interface OtpInputProps {
  number: string;
  isFocused?: boolean;
  onPress: () => void;
}

export function OtpInputStyled({
  number,
  isFocused = false,
  onPress,
  ...rest
}: OtpInputProps) {
  const { getFontsize } = useFontsize();
  return (
    <Pressable
      className={clsx(
        'h-16 w-16 items-center justify-center rounded-full bg-blue_dark-500',
        { 'border border-green-400 bg-blue_dark-200': isFocused }
      )}
      onPress={onPress}
      {...rest}
    >
      <Text
        className="mt-1 font-heading_sm text-white"
        style={{ fontSize: getFontsize(18) }}
      >
        {number}
      </Text>
    </Pressable>
  );
}

export const OtpInput = styled(OtpInputStyled);
