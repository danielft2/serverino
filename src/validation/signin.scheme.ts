import { z } from 'zod';
import { PhoneRegex } from '@utils';

export const SinginScheme = z
   .object({
      telefone: z
         .string()
         .nonempty('Campo obrigatório.')
         .regex(PhoneRegex, 'O telefone precisa ser válido.'),
      password: z
         .string()
         .nonempty('Campo obrigatório.')
         .min(6, 'A senha deve ser de 6 caracteres')
   })
   .transform((values) => ({
      telefone: values.telefone.replace(/\D/g, ''),
      password: values.password
   }));
