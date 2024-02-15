import { z } from 'zod';
import { ChangePasswordScheme } from '@validation';

export type UserUpdatePasswordDto = z.infer<typeof ChangePasswordScheme>;
