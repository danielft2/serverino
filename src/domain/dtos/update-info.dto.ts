import { z } from 'zod';
import { UpdateInformationsScheme } from '@validation';

export type UpdateInforDTO = z.infer<typeof UpdateInformationsScheme>;
