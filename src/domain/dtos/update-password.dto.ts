import { z } from 'zod';
import { ChangePasswordScheme } from '@validation';

export type updatePasswordDTO = z.infer<typeof ChangePasswordScheme>;
