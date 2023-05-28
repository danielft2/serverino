import { useState } from 'react';

import { AppError } from '@utils';
import { useAuth, useToast } from '@hooks';
import { SigninDTO } from '@domain/dtos';

export function useSignin() {
   const [isLoading, setIsLoading] = useState(false);
   const { onErrorMessage } = useToast();

   const { signin } = useAuth();
   async function handleSignin(data: SigninDTO) {
      setIsLoading(true);
      try {
         await signin(data);
      } catch (error) {
         if (error instanceof AppError) {
            onErrorMessage(error.message());
         }
      } finally {
         setIsLoading(false);
      }
   }

   return {
      handleSignin,
      isLoading
   };
}
