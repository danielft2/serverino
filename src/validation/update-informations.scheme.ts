import { MESSAGES_SCHEMES } from '@constants';
import { z } from 'zod';

export const UpdateInformationsScheme = z.object({
   nome: z.string().nonempty(MESSAGES_SCHEMES.FIELD_REQUIRED),
   email: z.string().optional(),
   endereco: z
      .object({
         cep: z.string().nonempty(MESSAGES_SCHEMES.FIELD_REQUIRED),
         cidade: z.string(),
         cidade_id: z.string(),
         uf: z.string()
      })
      .superRefine((value, ctx) => {
         if (!value.cidade_id) {
            ctx.addIssue({
               path: ['endereco.cep'],
               code: 'custom',
               message: 'Campo é obrigatório.'
            });
         }
      })
});
