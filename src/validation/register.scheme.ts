import { z } from 'zod';

import { MESSAGES_VALIDATIONS } from '@constants';
import { PhoneRegex } from '@utils';

export const RegisterScheme = z
   .object({
      nome: z.string().nonempty(MESSAGES_VALIDATIONS.FIELD_REQUIRED),
      telefone: z
         .string()
         .nonempty(MESSAGES_VALIDATIONS.FIELD_REQUIRED)
         .regex(PhoneRegex, MESSAGES_VALIDATIONS.PHONE_INVALID),
      email: z.string().optional(),
      password: z
         .string()
         .nonempty(MESSAGES_VALIDATIONS.FIELD_REQUIRED)
         .min(6, MESSAGES_VALIDATIONS.PASSWORD_MIN_LENGTH),
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
      message: MESSAGES_VALIDATIONS.PASSWORD_DONT_MATCH
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
