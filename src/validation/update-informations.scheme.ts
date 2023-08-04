import { APP_MESSAGES_ERROR } from '@constants';
import { z } from 'zod';

export const UpdateInformationsScheme = z
   .object({
      nome: z.string().nonempty(APP_MESSAGES_ERROR.FIELD_REQUIRED),
      email: z.string().optional(),
      cep: z.string().nonempty(APP_MESSAGES_ERROR.FIELD_REQUIRED),
      cidade: z.string(),
      cidade_id: z.string(),
      uf: z.string()
   })
   .superRefine((value, ctx) => {
      if (!value.cidade_id) {
         ctx.addIssue({
            path: ['cep'],
            code: 'custom',
            message: 'Informe um válido.'
         });
      }
   });
