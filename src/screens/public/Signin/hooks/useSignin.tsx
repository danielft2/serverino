import { SigninDTO } from '@domain/dtos/signin.dto';
import { useAuth } from '@hooks';
import { useState } from 'react';
import { Alert } from 'react-native';

export function useSignin() {
   const [isLoading, setIsLoading] = useState(false);

   const { signin } = useAuth();
   async function handleSignin(data: SigninDTO) {
      setIsLoading(true);
      try {
         await signin(data);
      } catch (error) {
         Alert.alert(error.message);
      } finally {
         setIsLoading(false);
      }
   }

   return {
      handleSignin,
      isLoading
   };
}
