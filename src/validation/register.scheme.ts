import { APP_MESSAGES_ERROR } from '@constants';
import { PhoneRegex } from '@utils';

import { z } from 'zod';

export const RegisterScheme = z
   .object({
      nome: z.string().nonempty(APP_MESSAGES_ERROR.FIELD_REQUIRED),
      telefone: z
         .string()
         .nonempty(APP_MESSAGES_ERROR.FIELD_REQUIRED)
         .regex(PhoneRegex, APP_MESSAGES_ERROR.PHONE_INVALID),
      email: z.string().optional(),
      password: z
         .string()
         .nonempty(APP_MESSAGES_ERROR.FIELD_REQUIRED)
         .min(6, APP_MESSAGES_ERROR.PASSWORD_MIN_LENGTH),
      password_confirmation: z.string(),
      endereco_step: z.boolean().default(false).optional(),
      endereco: z.object({
         cep: z.string(),
         cidade: z.string(),
         cidade_id: z.string(),
         uf: z.string()
      })
   })
   .refine((value) => value.password === value.password_confirmation, {
      path: ['passwordConfirm'],
      message: APP_MESSAGES_ERROR.PASSWORD_DONT_MATCH
   })
   .superRefine((value, ctx) => {
      if (value.endereco_step && !value.endereco?.cidade_id) {
         ctx.addIssue({
            path: ['endereco.cep'],
            code: 'custom',
            message: 'Insira um CEP.'
         });
      }
   });
