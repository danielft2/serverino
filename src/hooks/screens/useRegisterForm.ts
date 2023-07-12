import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterDTO } from '@domain/dtos/register.dto';
import { useAuth, useToast } from '@hooks/shared';
import { AppError } from '@utils';
import { RegisterScheme, RegisterDefaultScheme } from '@validation';

export function useRegisterForm() {
   const [loading, setLoading] = useState(false);

   const createRegisterForm = useForm<RegisterDTO>({
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

   async function handleConfirmRegister(data: RegisterDTO) {
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
         if (error instanceof AppError) {
            showErrorMessage(error.message);
         }
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
