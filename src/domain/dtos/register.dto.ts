import { RegisterScheme } from '@validation';

import { z } from 'zod';

export type RegisterDTO = z.infer<typeof RegisterScheme>;
