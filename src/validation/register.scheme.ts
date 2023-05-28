import { z } from 'zod';

import { PhoneRegex } from '@utils';
import { MESSAGES_SCHEMES } from '@constants';

export const RegisterScheme = z
   .object({
      nome: z.string().nonempty(MESSAGES_SCHEMES.FIELD_REQUIRED),
      telefone: z
         .string()
         .nonempty(MESSAGES_SCHEMES.FIELD_REQUIRED)
         .regex(PhoneRegex, MESSAGES_SCHEMES.PHONE_INVALID),
      email: z.string().optional(),
      password: z
         .string()
         .nonempty(MESSAGES_SCHEMES.FIELD_REQUIRED)
         .min(6, MESSAGES_SCHEMES.PASSWORD_MIN_LENGTH),
      passwordConfirm: z.string(),
      endereco_step: z.boolean().default(false).optional(),
      endereco: z.object({
         cep: z.string(),
         cidade: z.string(),
         cidade_id: z.string(),
         uf: z.string()
      })
   })
   .refine((value) => value.password === value.passwordConfirm, {
      path: ['passwordConfirm'],
      message: MESSAGES_SCHEMES.PASSWORD_DONT_MATCH
   })
   .superRefine((value, ctx) => {
      if (value.endereco_step && !value.endereco?.cep) {
         ctx.addIssue({
            path: ['endereco.cep', 'endereco.cep_id'],
            code: 'custom',
            message: 'Campo é obrigatório.'
         });
      }
   });
