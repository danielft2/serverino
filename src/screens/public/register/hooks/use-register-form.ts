import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAuth, useToast } from '@hooks';
import { RegisterScheme, RegisterDefaultScheme } from '../schemes';

export type RegisterScheme = z.infer<typeof RegisterScheme>;

export function useRegisterForm() {
  const [loading, setLoading] = useState(false);

  const createRegisterForm = useForm<RegisterScheme>({
    resolver: zodResolver(RegisterScheme),
    defaultValues: RegisterDefaultScheme
  });
  const {
    handleSubmit,
    setValue,
    setError,
    formState: { isValid }
  } = createRegisterForm;

  const { register } = useAuth();
  const { showErrorMessage } = useToast();

  async function handleConfirmRegister(data: RegisterScheme) {
    const user = {
      tipo_id: 2,
      nome: data.nome,
      telefone: data.telefone.replace(/\D/g, ''),
      email: data.email,
      cep: data.endereco.cep,
      cidade_id: data.endereco.cidade_id,
      password: data.password,
      password_confirmation: data.password_confirmation
    };

    try {
      setLoading(true);
      await register(user);
    } catch (error) {
      showErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    createRegisterForm,
    handleSubmit,
    setValue,
    setError,
    isValid,
    handleConfirmRegister,
    loading
  };
}
