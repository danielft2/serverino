import { Text } from 'react-native';

interface ErrroMessageProps {
   message: string;
}

export function InputErrorMessage({ message }: ErrroMessageProps) {
   return (
      <>
         {message && (
            <Text className="text-red-400 mt-1 ml-1" style={{ fontSize: 12 }}>
               {message}
            </Text>
         )}
      </>
   );
}
