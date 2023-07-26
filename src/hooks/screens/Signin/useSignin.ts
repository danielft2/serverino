import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { SigninDTO } from '@domain/dtos';
import { useAuth, useToast } from '@hooks/shared';
import { AppError } from '@utils';
import { SinginScheme } from '@validation';

export function useSignin() {
   const createSigninForm = useForm<SigninDTO>({
      resolver: zodResolver(SinginScheme)
   });

   const {
      getValues,
      formState: { isValid }
   } = createSigninForm;

   const [isLoading, setIsLoading] = useState(false);
   const { showErrorMessage } = useToast();

   const { signin } = useAuth();
   async function handleSignin(data: SigninDTO) {
      setIsLoading(true);
      try {
         await signin({
            telefone: data.telefone.replace(/\D/g, ''),
            password: data.password
         });
      } catch (error) {
         if (error instanceof AppError) {
            showErrorMessage(error.message);
         }
      } finally {
         setIsLoading(false);
      }
   }

   return {
      handleSignin,
      isLoading,
      getValues,
      isValid,
      createSigninForm
   };
}
