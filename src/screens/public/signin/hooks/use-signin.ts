import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { SinginScheme } from '@screens/public/signin/schemes/scheme';
import { useAuth, useToast } from '@hooks';

export type SinginScheme = z.infer<typeof SinginScheme>;

export function useSignin() {
  const createSigninForm = useForm<SinginScheme>({
    resolver: zodResolver(SinginScheme)
  });

  const {
    getValues,
    formState: { isValid }
  } = createSigninForm;

  const [isLoading, setIsLoading] = useState(false);
  const { showErrorMessage } = useToast();

  const { signin } = useAuth();
  async function handleSignin(data: SinginScheme) {
    setIsLoading(true);
    try {
      await signin({
        telefone: data.telefone.replace(/\D/g, ''),
        password: data.password
      });
    } catch (error) {
      showErrorMessage(error.message);
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
