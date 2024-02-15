import { PhoneRegex } from '@utils/others';

import { z } from 'zod';

export const SinginScheme = z.object({
  telefone: z
    .string()
    .nonempty('Campo obrigatório.')
    .regex(PhoneRegex, 'O telefone precisa ser válido.'),
  password: z
    .string()
    .nonempty('Campo obrigatório.')
    .min(6, 'A senha deve ser de 6 caracteres')
});