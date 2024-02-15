import { Text } from 'react-native';
import { useFontsize } from '@hooks';

interface ErrroMessageProps {
  message: string;
}

export function InputErrorMessage({ message }: ErrroMessageProps) {
  const { getFontsize } = useFontsize();

  return (
    <>
      {message && (
        <Text
          className="ml-1 mt-1 text-red-400"
          style={{ fontSize: getFontsize(12) }}
        >
          {message}
        </Text>
      )}
    </>
  );
}
