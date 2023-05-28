import { Text } from 'react-native';

interface ErrroMessageProps {
   message: string;
}

export function ErrorMessage({ message }: ErrroMessageProps) {
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
