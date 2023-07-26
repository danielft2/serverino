import { MESSAGES_SCHEMES } from '@constants';
import { z } from 'zod';

export const UpdateInformationsScheme = z.object({
   nome: z.string().nonempty(MESSAGES_SCHEMES.FIELD_REQUIRED),
   email: z.string().optional(),
   endereco: z.object({
      cep: z.string(),
      cidade: z.string(),
      cidade_id: z.string(),
      uf: z.string()
   })
});
