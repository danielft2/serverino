import { z } from 'zod';
import { RegisterScheme } from '@validation';

export type RegisterDTO = z.infer<typeof RegisterScheme>;
