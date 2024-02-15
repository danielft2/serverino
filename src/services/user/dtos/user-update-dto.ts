import { z } from 'zod';
import { UpdateInformationsScheme } from '@validation';

export type UserUpdateDto = z.infer<typeof UpdateInformationsScheme>;
