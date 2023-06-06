import { SinginScheme } from '@validation';

import { z } from 'zod';

export type SigninDTO = z.infer<typeof SinginScheme>;
