import { Text } from 'react-native';

interface ErrroMessageProps {
   message: string;
}

export function InputErrorMessage({ message }: ErrroMessageProps) {
   return (
      <>
         {message && (
            <Text className="ml-1 mt-1 text-red-400" style={{ fontSize: 12 }}>
               {message}
            </Text>
         )}
      </>
   );
}
